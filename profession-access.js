// profession-access.js
// Implements the Future Studio pricing rule:
//   - ₹2,999/year base plan = student's choice of any 3 professions
//   - Each profession beyond 3 = ₹999/year, added individually
// Works the same trust model as the rest of the platform: admin grants
// access via the console after confirming payment (no self-service unlock).
//
// FREE PREVIEW: a logged-in student who hasn't enrolled/paid for a given
// profession can still attempt up to FREE_PREVIEW_TASKS tasks in it —
// login is required (so we capture real contact data for marketing/
// product updates), but payment isn't, until the preview runs out.

import { doc, getDoc, updateDoc, setDoc, increment } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export const ProfessionAccess = (function(){

  const BASE_PLAN_SLOTS = 3;
  const FREE_PREVIEW_TASKS = 5;

  // student.enrolledProfessions shape:
  // { [slug]: { enrolledAt: ISOString, paid: true|false, basePlanSlot: true|false } }
  //
  // - basePlanSlot true  -> one of the first 3, covered by the ₹2,999 base plan
  // - basePlanSlot false -> a 4th+ pick, needs its own ₹999/yr payment (paid: true once admin confirms)

  // isUnlocked = fully paid/enrolled access (unlimited tasks, no preview cap).
  function isUnlocked(student, slug){
    const entry = student.enrolledProfessions && student.enrolledProfessions[slug];
    if (!entry) return false;
    if (entry.basePlanSlot) return !!student.basePlanPaid; // base plan itself must be paid
    return !!entry.paid; // extra profession needs its own payment confirmed
  }

  // How many free-preview tasks this student has already used in this profession.
  function freeTasksUsed(student, slug){
    return (student.freeTasksByProfession && student.freeTasksByProfession[slug]) || 0;
  }

  function remainingFreeTasks(student, slug){
    return Math.max(0, FREE_PREVIEW_TASKS - freeTasksUsed(student, slug));
  }

  // Can this (logged-in) student attempt ONE MORE task in this profession right now?
  // True if fully unlocked/paid, OR still within their free-preview allowance.
  function canAttemptTask(student, slug){
    if (isUnlocked(student, slug)) return true;
    return freeTasksUsed(student, slug) < FREE_PREVIEW_TASKS;
  }

  // Call after a task passes, only when the student is NOT fully unlocked —
  // increments this profession's free-task counter by 1.
  async function recordFreeTaskUsed(db, uid, slug){
    await updateDoc(doc(db, 'students', uid), {
      [`freeTasksByProfession.${slug}`]: increment(1)
    }).catch(async () => {
      await setDoc(doc(db, 'students', uid), { freeTasksByProfession: { [slug]: 1 } }, { merge: true });
    });
  }

  function usedBaseSlots(student){
    const map = student.enrolledProfessions || {};
    return Object.values(map).filter(e => e.basePlanSlot).length;
  }

  function canAddAsBaseSlot(student){
    return usedBaseSlots(student) < BASE_PLAN_SLOTS;
  }

  // Call when a student picks a new profession from Future Studio.
  // Returns what UI to show: 'added-free' | 'needs-base-plan-payment' | 'needs-extra-payment'
  async function requestEnrollment(db, uid, student, slug){
    const existing = student.enrolledProfessions && student.enrolledProfessions[slug];
    if (existing) return existing.basePlanSlot ? (student.basePlanPaid ? 'already-unlocked' : 'needs-base-plan-payment')
                                                : (existing.paid ? 'already-unlocked' : 'needs-extra-payment');

    const asBaseSlot = canAddAsBaseSlot(student);
    const entry = {
      enrolledAt: new Date().toISOString(),
      basePlanSlot: asBaseSlot,
      paid: false
    };

    await updateDoc(doc(db, 'students', uid), {
      [`enrolledProfessions.${slug}`]: entry
    }).catch(async () => {
      await setDoc(doc(db, 'students', uid), { enrolledProfessions: { [slug]: entry } }, { merge: true });
    });

    return asBaseSlot ? (student.basePlanPaid ? 'added-free' : 'needs-base-plan-payment')
                       : 'needs-extra-payment';
  }

  return { isUnlocked, canAttemptTask, freeTasksUsed, remainingFreeTasks, recordFreeTaskUsed,
           usedBaseSlots, canAddAsBaseSlot, requestEnrollment, BASE_PLAN_SLOTS, FREE_PREVIEW_TASKS };
})();
