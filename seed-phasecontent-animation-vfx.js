/**
 * Waves4Youth — Seed phaseContent for Animation & VFX (animation-vfx)
 * Run once in the browser console on a logged-in Firebase session (same pattern as the
 * Video Editing seed script). Safe to re-run.
 */
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
const db = getFirestore();
const TRACK_ID = "animation-vfx";

const CONTENT = {
  "2.1": { desc:"Panel composition, visual flow, and thumbnailing.", task:"Upload a 4-panel storyboard." },
  "2.2": { desc:"Frame spacing, ease-in/out, and weight.", task:"Quiz + short animated example review." },
  "2.3": { desc:"Line of action and readable silhouettes.", task:"Upload 3 poses." },
  "2.4": { desc:"Rule of thirds and framing for emotion.", task:"Annotate a sample shot." },
  "2.5": { desc:"Submit your full storyboard sequence for Asha's AI-graded rubric feedback.", task:"Submit full storyboard sequence." },
  "3.1": { desc:"UI tour, viewport, and basic controls.", task:"Guided checklist." },
  "3.2": { desc:"From primitives to a simple prop or character.", task:"Upload your .blend file or render." },
  "3.3": { desc:"UV basics and simple material setup.", task:"Upload a textured render." },
  "3.4": { desc:"A parallel track for students with lab or pro-tool access — same outcomes via the pro tool.", task:"Optional exercise." },
  "3.5": { desc:"Simple bone/armature setup.", task:"Upload your rigged model." },
  "4.1": { desc:"Full armature and weight painting.", task:"Upload your rig." },
  "4.2": { desc:"Keyframing a 10-second walk cycle.", task:"Upload your animation." },
  "4.3": { desc:"3-point lighting and mood lighting.", task:"Upload your lit scene." },
  "4.4": { desc:"Render settings and output formats.", task:"Upload your rendered clip." },
  "4.5": { desc:"Submit your full mini-project — Asha grades against the complete rubric.", task:"Submit full mini-project." },
  "5.1": { desc:"A quiz plus Asha's recommendation based on your Phase 1-4 performance.", task:"Select: Character Animation / VFX Compositing / Lighting." },
  "5.2": { desc:"Lane-specific content, e.g. compositing layer basics and match-moving intro.", task:"Complete lane-specific exercises." },
  "5.3": { desc:"A full project in your chosen lane.", task:"Upload your hero piece." },
  "5.4": { desc:"Submit for review and iterate once based on Asha's feedback.", task:"Submit + iterate once." },
  "6.1": { desc:"Sequencing, music, and export.", task:"Upload your final reel." },
  "6.2": { desc:"Resume template and profile optimization.", task:"Draft your resume upload." },
  "6.3": { desc:"A live simulated interview for an entry-level role matching your specialization.", task:"Complete the live chat interview." },
  "6.4": { desc:"Your verified digital certificate and Future Letter are generated automatically.", task:"Auto-generated on completion." },
  "6.5": { desc:"Where to find gigs and pricing your first jobs.", task:"Reflection task." }
};

for (const [moduleId, content] of Object.entries(CONTENT)) {
  await setDoc(doc(db, "phaseContent", `${TRACK_ID}_${moduleId}`), content);
  console.log("Seeded", moduleId);
}
console.log("Done seeding animation-vfx phaseContent.");
