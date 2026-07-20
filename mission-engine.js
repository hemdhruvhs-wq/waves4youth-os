// mission-engine.js
// Shared across every W4Y mission track (Space, Doctor, and future ones).
// Handles: grade capture, grade lock, month lock, and submission bookkeeping.
// Track-specific pages call MissionEngine.init(config) and get callbacks back.

import { getFirestore, doc, getDoc, updateDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export const MissionEngine = (function(){

  let db, uid, trackSlug, gradeOrder, onReady;
  let studentGrade = null;
  let missionSubmissions = {};

  // gradeOrder example: ['std7','std8','std9','std10','std11','std12']

  async function init(opts){
    db = opts.db;
    uid = opts.uid;
    trackSlug = opts.trackSlug;
    gradeOrder = opts.gradeOrder || null; // omit for gradeless tracks (e.g. lightweight Future Studio professions)
    onReady = opts.onReady || function(){};

    const snap = await getDoc(doc(db, 'students', uid));
    const data = snap.exists() ? snap.data() : {};
    studentGrade = data.grade || null;
    missionSubmissions = (data.missionSubmissions && data.missionSubmissions[trackSlug]) || {};

    if (!gradeOrder){
      // gradeless track: no class prompt, no grade lock, straight to ready
      onReady({ studentGrade, missionSubmissions });
      return;
    }

    if (!studentGrade){
      promptForGrade(opts.gradeLabels || gradeOrder);
      return; // onReady fires after grade is captured, via setGrade()
    }
    onReady({ studentGrade, missionSubmissions });
  }

  function promptForGrade(gradeLabels){
    // Track pages provide a small modal; MissionEngine just exposes this hook.
    // Track page calls MissionEngine.setGrade(gradeId) when the student picks one.
    if (typeof window.__missionEngineShowGradePrompt === 'function'){
      window.__missionEngineShowGradePrompt(gradeLabels);
    } else {
      console.warn('MissionEngine: no grade prompt UI registered (window.__missionEngineShowGradePrompt)');
    }
  }

  async function setGrade(gradeId){
    studentGrade = gradeId;
    await updateDoc(doc(db, 'students', uid), { grade: gradeId }).catch(async (e) => {
      // doc might not have the field path yet on very old records — fallback to setDoc merge
      await setDoc(doc(db, 'students', uid), { grade: gradeId }, { merge: true });
    });
    onReady({ studentGrade, missionSubmissions });
  }

  // A class tab is unlocked if it matches the student's own grade,
  // OR it's an earlier grade than the student's current one (review access).
  function isGradeUnlocked(gradeId){
    if (!gradeOrder) return true; // gradeless track — no lock applies
    if (!studentGrade) return false;
    const studentIdx = gradeOrder.indexOf(studentGrade);
    const gradeIdx = gradeOrder.indexOf(gradeId);
    if (studentIdx === -1 || gradeIdx === -1) return false;
    return gradeIdx <= studentIdx;
  }

  // Month 0 always unlocked. Month N+1 needs all of month N's task ids
  // present in missionSubmissions with status 'passed'.
  function isMonthUnlocked(gradeId, monthIndex, monthTaskIdsFn){
    if (monthIndex === 0) return true;
    const prevIds = monthTaskIdsFn(monthIndex - 1);
    return prevIds.every(id => missionSubmissions[id] && missionSubmissions[id].status === 'passed');
  }

  function getSubmission(taskId){
    return missionSubmissions[taskId] || null;
  }

  function recordSubmissionLocally(taskId, record){
    // Used right after a successful grade-mission call, so the UI updates
    // instantly without waiting for a fresh Firestore read.
    missionSubmissions[taskId] = record;
  }

  return { init, setGrade, isGradeUnlocked, isMonthUnlocked, getSubmission, recordSubmissionLocally };
})();
