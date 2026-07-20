// profession-access.js
// Implements the Future Studio pricing rule:
//   - ₹2,999/year base plan = student's choice of any 3 professions
//   - Each profession beyond 3 = ₹999/year, added individually
// Works the same trust model as the rest of the platform: admin grants
// access via the console after confirming payment (no self-service unlock).

import { doc, getDoc, updateDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export const ProfessionAccess = (function(){

  const BASE_PLAN_SLOTS = 3;

  // student.enrolledProfessions shape:
  // { [slug]: { enrolledAt: ISOString, paid: true|false, basePlanSlot: true|false } }
  //
  // - basePlanSlot true  -> one of the first 3, covered by the ₹2,999 base plan
  // - basePlanSlot false -> a 4th+ pick, needs its own ₹999/yr payment (paid: true once admin confirms)

  function isUnlocked(student, slug){
    const entry = student.enrolledProfessions && student.enrolledProfessions[slug];
    if (!entry) return false;
    if (entry.basePlanSlot) return !!student.basePlanPaid; // base plan itself must be paid
    return !!entry.paid; // extra profession needs its own payment confirmed
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

  return { isUnlocked, usedBaseSlots, canAddAsBaseSlot, requestEnrollment, BASE_PLAN_SLOTS };
})();
