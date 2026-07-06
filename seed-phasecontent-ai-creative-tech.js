/**
 * Waves4Youth — Seed phaseContent for AI & Creative Technology (ai-creative-tech)
 * Run once in the browser console on a logged-in Firebase session (same pattern as the
 * Video Editing seed script). Safe to re-run.
 */
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
const db = getFirestore();
const TRACK_ID = "ai-creative-tech";

const CONTENT = {
  "2.1": { desc:"Specificity, iteration, and giving examples in your prompt.", task:"Write and refine 3 prompts." },
  "2.2": { desc:"Hallucination awareness and verification habits.", task:"Fact-check a sample AI answer." },
  "2.3": { desc:"e.g. script (text AI) → visuals (image AI) → voice (audio AI).", task:"Map out a 3-tool workflow." },
  "2.4": { desc:"Keeping a consistent character/style across generations.", task:"Generate 2 consistent images." },
  "2.5": { desc:"Submit your workflow and outputs for Aarav's AI-graded feedback.", task:"Submit workflow + outputs." },
  "3.1": { desc:"Canva AI and Ideogram basics.", task:"Guided checklist." },
  "3.2": { desc:"Text-to-video and AI editing assist basics.", task:"Generate one short AI video clip." },
  "3.3": { desc:"Voice generation and background music AI.", task:"Generate one voice/audio clip." },
  "3.4": { desc:"Simple no-code chaining — templates and batch prompts.", task:"Build one repeatable mini-workflow." },
  "3.5": { desc:"Using Claude or a similar assistant for iterative creative work.", task:"Complete one guided project brief." },
  "4.1": { desc:"Brief, style guide, and tool selection.", task:"Write your project brief." },
  "4.2": { desc:"Images, video, and audio for your project.", task:"Upload your generated assets." },
  "4.3": { desc:"Combine everything into one story, video, or campaign.", task:"Upload your assembled draft." },
  "4.4": { desc:"A final review for quality and accuracy.", task:"Submit your polish notes." },
  "4.5": { desc:"Submit your full project for Aarav's AI-graded feedback.", task:"Submit full project." },
  "5.1": { desc:"Aarav-guided quiz: AI Content Creator vs Prompt/AI Product Designer vs AI-Assisted Filmmaker.", task:"Make your selection." },
  "5.2": { desc:"Lane-specific content and exercises.", task:"Complete lane-specific exercises." },
  "5.3": { desc:"A flagship AI-assisted creative piece.", task:"Upload your hero project." },
  "5.4": { desc:"Submit for review and iterate once.", task:"Submit + iterate once." },
  "6.1": { desc:"Show your process and output, including the prompts you used.", task:"Upload your portfolio." },
  "6.2": { desc:"Positioning yourself as an \"AI-native creative\".", task:"Draft your profile." },
  "6.3": { desc:"A live simulated interview for an entry-level AI-assisted creative role.", task:"Complete the live chat interview." },
  "6.4": { desc:"Your verified digital certificate and Future Letter are generated automatically.", task:"Auto-generated on completion." },
  "6.5": { desc:"Where these skills are in demand, and gig ideas.", task:"Reflection task." }
};

for (const [moduleId, content] of Object.entries(CONTENT)) {
  await setDoc(doc(db, "phaseContent", `${TRACK_ID}_${moduleId}`), content);
  console.log("Seeded", moduleId);
}
console.log("Done seeding ai-creative-tech phaseContent.");
