/*
  W4Y AUTH GATE  (v2 — adds mandatory admin-approval gate)
  ==============
  Drop this script into any learn-*.html page (right before the closing </body>,
  after your existing Firebase imports) OR link it as an external file:
  <script type="module" src="auth-gate.js"></script>

  What it does:
  1. Blocks guest access — if nobody is logged in, redirects to login.html immediately.
  2. Fetches the student's Firestore doc (students/{uid}) and exposes it as window.w4yStudent.
  3. NEW — Blocks ALL content (even free Phase 1) until an admin has approved the account
     in the W4Y Console. Signup no longer means instant access; approvalStatus must be
     "Approved" first. Shows a friendly "pending approval" screen instead of the page content.
  4. Exposes window.w4yHasAccess(trackSlug, phaseNumber) — call this before rendering
     any phase/lesson content to decide whether to show it or show a locked state.

  ACCESS RULES (matches your existing 4-tier pricing model):
  - Not logged in                       -> redirected to login.html (no exceptions)
  - Logged in, approvalStatus !== "Approved" -> full-page "pending approval" screen, nothing else loads
  - Approved, no payment                -> Phase 1 only (Free Preview) on every track
  - Approved + paymentStatus === "Paid" + plan === "starter"    -> Phases 1-2
  - Approved + paymentStatus === "Paid" + plan === "diploma"     -> Phases 1-4
  - Approved + paymentStatus === "Paid" + plan === "masterclass" -> Phases 1-6 (all)

  HOW TO LOCK CONTENT ON A PAGE:
  Wrap any phase-locked content in a container with a data attribute, e.g.:
    <div class="phase-content" data-phase="2">... phase 2 lesson content ...</div>
  Then after w4yStudent loads, call:
    document.querySelectorAll('.phase-content').forEach(el => {
      const phase = parseInt(el.dataset.phase, 10);
      if (!window.w4yHasAccess('video-editing', phase)) {
        el.innerHTML = w4yLockedHTML(phase); // shows an "Enroll Now" locked card instead
      }
    });
  (Swap 'video-editing' for the correct track slug on each page.)
*/

import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDiT99vqJkMZ2Td81YVDTYT5W9HWz2M54o",
  authDomain: "waves4youth-4f239.firebaseapp.com",
  projectId: "waves4youth-4f239",
  storageBucket: "waves4youth-4f239.firebasestorage.app",
  messagingSenderId: "828101805925",
  appId: "1:828101805925:web:f4cd245254aed07ec9438c"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Plan -> highest phase number unlocked
const PLAN_PHASE_LIMIT = {
  "": 1,              // no plan yet, just Free Preview
  "starter": 2,
  "diploma": 4,
  "masterclass": 6
};

window.w4yStudent = null;
window.w4yApproved = false;
window.w4yReady = new Promise((resolve) => { window._w4yResolveReady = resolve; });

window.w4yHasAccess = function (trackSlug, phaseNumber) {
  // Hard rule: unapproved accounts get nothing, not even Phase 1.
  if (!window.w4yApproved) return false;
  const s = window.w4yStudent;
  if (!s) return false;
  const paid = s.paymentStatus === "Paid";
  const plan = paid ? (s.plan || "") : "";
  const limit = PLAN_PHASE_LIMIT[plan] !== undefined ? PLAN_PHASE_LIMIT[plan] : 1;
  return phaseNumber <= limit;
};

window.w4yLockedHTML = function (phaseNumber) {
  return `
    <div style="border:2px dashed #F0E0D0;border-radius:16px;padding:28px 20px;text-align:center;background:#FDF3E7;">
      <div style="font-size:32px;margin-bottom:8px;">🔒</div>
      <h4 style="margin:0 0 6px;font:700 1rem Poppins,sans-serif;">Phase ${phaseNumber} is locked</h4>
      <p style="color:#6B5A72;font-size:.85rem;margin:0 0 16px;">Enroll in this program to unlock this phase and continue your journey.</p>
      <a href="#pricing" class="btn btn-primary btn-sm">Enroll Now →</a>
    </div>`;
};

function showPendingApprovalScreen(studentName) {
  // Replaces the entire visible page with a calm, honest waiting screen.
  // Deliberately does NOT touch <head> so page title/meta stay intact.
  document.body.innerHTML = `
    <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;
      font-family:'Inter',sans-serif;background:linear-gradient(160deg,#2E0F2A,#4A1942 55%,#611D45 100%);
      padding:24px;">
      <div style="max-width:400px;width:100%;background:rgba(255,255,255,.06);border:1px solid rgba(255,246,236,.15);
        border-radius:20px;padding:32px 26px;text-align:center;color:#FFF6EC;">
        <div style="font-size:40px;margin-bottom:14px;">⏳</div>
        <h2 style="font:800 1.3rem Poppins,'Inter',sans-serif;margin-bottom:10px;">
          ${studentName ? "Hi " + studentName + "! " : ""}Your account is pending approval
        </h2>
        <p style="color:#C7BCC9;font-size:.9rem;line-height:1.55;margin-bottom:18px;">
          Thanks for signing up! A W4Y team member reviews every new account before content unlocks —
          this usually takes up to 24 hours. We'll notify you by email as soon as you're approved.
        </p>
        <a href="index.html" style="display:inline-block;padding:12px 22px;border-radius:999px;
          background:linear-gradient(90deg,#FF6B6B,#FFB347);color:#1A0B2E;font-weight:700;
          text-decoration:none;font-size:.9rem;">← Back to Home</a>
      </div>
    </div>`;
}

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    // HARD BLOCK: no guest mode. Send them to login, remember where they were headed.
    const redirectTo = encodeURIComponent(window.location.pathname + window.location.search);
    window.location.href = "login.html?next=" + redirectTo;
    return;
  }

  try {
    const snap = await getDoc(doc(db, "students", user.uid));
    window.w4yStudent = snap.exists() ? snap.data() : { approvalStatus: "Pending", paymentStatus: "Pending", plan: "" };
  } catch (e) {
    console.error("w4y auth-gate: could not load student doc", e);
    window.w4yStudent = { approvalStatus: "Pending", paymentStatus: "Pending", plan: "" };
  }

  const approved = window.w4yStudent.approvalStatus === "Approved";
  window.w4yApproved = approved;

  if (!approved) {
    // Stop here — don't let the page's own content ever render.
    showPendingApprovalScreen(window.w4yStudent.name);
    window._w4yResolveReady(window.w4yStudent);
    document.dispatchEvent(new CustomEvent("w4yStudentReady", { detail: window.w4yStudent }));
    return;
  }

  window._w4yResolveReady(window.w4yStudent);
  document.dispatchEvent(new CustomEvent("w4yStudentReady", { detail: window.w4yStudent }));
});
