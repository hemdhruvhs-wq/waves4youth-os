/**
 * Waves4Youth — Seed phaseContent collection for Video Editing track
 *
 * HOW TO RUN:
 * This is a one-time admin script. Easiest way: paste this whole block into
 * your browser console while logged into Firebase Console on any page of your
 * project (or run via Node with firebase-admin if you prefer). It writes
 * directly to Firestore using the Firebase client SDK — swap in your app's
 * existing `db` reference if running inside the site.
 *
 * Run this ONCE. Re-running is safe (it just overwrites with the same data).
 */

import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
const db = getFirestore(); // assumes firebase app already initialized on the page you run this from

const TRACK_ID = "video-editing";

const CONTENT = {
  "2.1": { desc:"Cutting to music/beat, J-cuts/L-cuts basics with before/after examples.", task:"Re-cut a given clip for rhythm." },
  "2.2": { desc:"Hard cuts, dissolves, match cuts — when to use what, shown through an example transition reel.", task:"Apply 2 transition types to your project." },
  "2.3": { desc:"Dialogue levels, music balance, sound effects — before/after audio mix comparison.", task:"Balance a sample audio track." },
  "2.4": { desc:"Match cuts and the 180-degree rule, from an editor's point of view.", task:"Spot continuity errors in a sample clip." },
  "2.5": { desc:"Submit your re-cut clip for AI-graded feedback from Neel against a rubric (pacing, transitions, audio, flow).", task:"Submit re-cut clip for grading." },

  "3.1": { desc:"Timeline, tracks, and panels — full screen-recording walkthrough.", task:"Guided checklist." },
  "3.2": { desc:"Exposure, white balance, and basic grading with before/after examples.", task:"Grade one clip." },
  "3.3": { desc:"Levels, EQ basics, and ducking music under dialogue.", task:"Mix a sample scene." },
  "3.4": { desc:"Lower thirds, captions, and simple motion text.", task:"Add titles to your edit." },
  "3.5": { desc:"Resolution, format, and platform-specific export presets.", task:"Export one clip correctly." },

  "4.1": { desc:"From raw footage to a full sequence.", task:"Upload rough cut." },
  "4.2": { desc:"Tighten pacing and refine transitions on your rough cut.", task:"Upload fine cut." },
  "4.3": { desc:"Full grading pass on your project, with a before/after full-scene comparison.", task:"Upload graded version." },
  "4.4": { desc:"Final audio mix and correct export settings.", task:"Upload final export." },
  "4.5": { desc:"Full short-film/vlog edit submission — Neel grades against the complete rubric.", task:"Submit full project for grading." },

  "5.1": { desc:"Neel-guided quiz recommends: Narrative/Film Editor vs Social Media Editor vs Colorist, based on your Phase 1-4 performance.", task:"Make your selection." },
  "5.2": { desc:"Lane-specific content and screen-recordings matched to your chosen path.", task:"Complete lane-specific exercises." },
  "5.3": { desc:"A flagship edited piece in your chosen lane — your portfolio centerpiece.", task:"Upload hero project." },
  "5.4": { desc:"Submit your hero edit and iterate once based on Neel's feedback.", task:"Submit + iterate once." },

  "6.1": { desc:"Assemble your best-of showreel from everything you've built.", task:"Upload reel." },
  "6.2": { desc:"Portfolio site / LinkedIn basics for editors.", task:"Draft your profile." },
  "6.3": { desc:"A live simulated interview for an entry-level editor role matching your specialization.", task:"Complete the live chat interview." },
  "6.4": { desc:"Your verified digital certificate and Future Letter are generated automatically.", task:"Auto-generated on completion." },
  "6.5": { desc:"Finding editing gigs, pricing your work, and client handoff basics.", task:"Reflection task." },
};

for (const [moduleId, content] of Object.entries(CONTENT)) {
  await setDoc(doc(db, "phaseContent", `${TRACK_ID}_${moduleId}`), content);
  console.log("Seeded", moduleId);
}
console.log("Done seeding video-editing phaseContent.");
