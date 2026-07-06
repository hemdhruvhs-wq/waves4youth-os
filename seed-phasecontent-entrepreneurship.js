/**
 * Waves4Youth — Seed phaseContent for Entrepreneurship & Freelancing (entrepreneurship)
 * Run once in the browser console on a logged-in Firebase session (same pattern as the
 * Video Editing seed script). Safe to re-run.
 */
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
const db = getFirestore();
const TRACK_ID = "entrepreneurship";

const CONTENT = {
  "2.1": { desc:"Talking to potential customers and running simple surveys.", task:"Run 1 mini research conversation." },
  "2.2": { desc:"Value-based vs hourly pricing and India-market benchmarks.", task:"Price your first offer." },
  "2.3": { desc:"Elevator pitch structure.", task:"Write your pitch." },
  "2.4": { desc:"Testimonials, samples, and professionalism.", task:"Draft a credibility statement." },
  "2.5": { desc:"Submit your pitch and pricing for Diya's AI-graded feedback.", task:"Submit pitch + pricing." },
  "3.1": { desc:"Fiverr/Upwork setup or a simple portfolio site.", task:"Guided checklist." },
  "3.2": { desc:"UPI, simple invoice templates, and getting paid safely.", task:"Create one invoice." },
  "3.3": { desc:"Avoiding scope creep with simple agreement templates.", task:"Draft a scope note." },
  "3.4": { desc:"Setting expectations and handling difficult conversations.", task:"Draft 2 client messages." },
  "3.5": { desc:"Simple no-code systems for freelancers.", task:"Set up your own tracker." },
  "4.1": { desc:"Full gig description and packaging.", task:"Publish or draft your gig." },
  "4.2": { desc:"An end-to-end mock project with Diya playing the client.", task:"Deliver your mock project." },
  "4.3": { desc:"Managing revision requests professionally.", task:"Respond to a mock revision request." },
  "4.4": { desc:"Wrapping up, invoicing, and requesting a testimonial.", task:"Complete a mock invoice + testimonial ask." },
  "4.5": { desc:"Submit your full simulated project for Diya's AI-graded feedback.", task:"Submit full simulated project." },
  "5.1": { desc:"Diya-guided quiz: Freelancer vs Micro-entrepreneur/Founder vs Consultant.", task:"Make your selection." },
  "5.2": { desc:"Lane-specific content, e.g. a basic business plan or multi-client scaling.", task:"Complete lane-specific exercises." },
  "5.3": { desc:"A business plan or a flagship client project case study.", task:"Upload your case study." },
  "5.4": { desc:"Submit for review and iterate once.", task:"Submit + iterate once." },
  "6.1": { desc:"A polished case study or founder profile.", task:"Upload your final version." },
  "6.2": { desc:"Positioning yourself professionally.", task:"Draft your bio." },
  "6.3": { desc:"A live simulated client pitch call, including a realistic price pushback.", task:"Complete the live chat pitch simulation." },
  "6.4": { desc:"Your verified digital certificate and Future Letter are generated automatically.", task:"Auto-generated on completion." },
  "6.5": { desc:"Where to find more clients and basic growth ideas.", task:"Reflection task." }
};

for (const [moduleId, content] of Object.entries(CONTENT)) {
  await setDoc(doc(db, "phaseContent", `${TRACK_ID}_${moduleId}`), content);
  console.log("Seeded", moduleId);
}
console.log("Done seeding entrepreneurship phaseContent.");
