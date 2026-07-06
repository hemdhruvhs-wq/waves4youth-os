/**
 * Waves4Youth — Seed phaseContent for Game Design & Development (game-design)
 * Run once in the browser console on a logged-in Firebase session (same pattern as the
 * Video Editing seed script). Safe to re-run.
 */
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
const db = getFirestore();
const TRACK_ID = "game-design";

const CONTENT = {
  "2.1": { desc:"Verbs, rules, and feedback loops.", task:"Design one mechanic on paper." },
  "2.2": { desc:"Pacing, difficulty curve, and teaching through level layout.", task:"Sketch a simple level layout." },
  "2.3": { desc:"Lightweight storytelling for games.", task:"Write a 1-paragraph game premise." },
  "2.4": { desc:"Menus, HUD, and player feedback.", task:"Annotate a sample UI screenshot." },
  "2.5": { desc:"Submit your level sketch and premise for Vikram's AI-graded feedback.", task:"Submit level sketch + premise." },
  "3.1": { desc:"Editor tour, scenes, and GameObjects.", task:"Guided checklist." },
  "3.2": { desc:"Unity Visual Scripting or GDevelop's event system — no-code friendly.", task:"Build one simple interaction." },
  "3.3": { desc:"Importing free assets from itch.io/Kenney.nl asset packs.", task:"Import and place 3 assets." },
  "3.4": { desc:"Combine mechanics into a mini playable scene.", task:"Upload your playable build or a video of it." },
  "3.5": { desc:"SFX, music hooks, and juice/feedback.", task:"Add sound to your build." },
  "4.1": { desc:"Input handling and responsiveness.", task:"Add controls to your prototype." },
  "4.2": { desc:"Game states and feedback on success/fail.", task:"Implement scoring." },
  "4.3": { desc:"Difficulty tuning and playtesting basics.", task:"Playtest and adjust." },
  "4.4": { desc:"Exporting or building for itch.io or the web.", task:"Publish your playable link." },
  "4.5": { desc:"Submit your full mini-game for Vikram's AI-graded feedback.", task:"Submit full mini-game." },
  "5.1": { desc:"Vikram-guided quiz: Game Design vs Game Art vs Light Programming.", task:"Make your selection." },
  "5.2": { desc:"Lane-specific content and exercises.", task:"Complete lane-specific exercises." },
  "5.3": { desc:"A full, polished mini-game in your chosen lane.", task:"Upload your hero project." },
  "5.4": { desc:"Submit for review and iterate once.", task:"Submit + iterate once." },
  "6.1": { desc:"Recording and editing gameplay footage (uses skills from the Video Editing track).", task:"Upload your reel." },
  "6.2": { desc:"Portfolio page setup.", task:"Draft your profile." },
  "6.3": { desc:"A live simulated interview for an entry-level game design/QA role.", task:"Complete the live chat interview." },
  "6.4": { desc:"Your verified digital certificate and Future Letter are generated automatically.", task:"Auto-generated on completion." },
  "6.5": { desc:"Publishing on itch.io, game jams, and indie monetization.", task:"Reflection task." }
};

for (const [moduleId, content] of Object.entries(CONTENT)) {
  await setDoc(doc(db, "phaseContent", `${TRACK_ID}_${moduleId}`), content);
  console.log("Seeded", moduleId);
}
console.log("Done seeding game-design phaseContent.");
