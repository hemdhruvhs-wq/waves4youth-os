# Waves4Youth — Full Curriculum Design (All 6 Tracks)

This folder contains the complete self-learning curriculum design for Waves4Youth, benchmarked against MAAC India, with AI-mentor integration, pricing, and visual/video asset planning for all 6 tracks.

## Suggested repo structure
```
/curriculum
  README.md (this file)
  W4Y_Curriculum_Design_MAAC_Benchmark.md          <- master framework, MAAC research, integration architecture
  W4Y_Visual_Video_Asset_Strategy.md               <- how to produce visuals/videos for every module
  /tracks
    W4Y_Track1_AnimationVFX_Curriculum_Pricing.md
    W4Y_Track2_GameDesign_Curriculum_Pricing.md
    W4Y_Track3_DigitalContentCreation_Curriculum_Pricing.md
    W4Y_Track4_AICreativeTech_Curriculum_Pricing.md
    W4Y_Track5_EntrepreneurshipFreelancing_Curriculum_Pricing.md
    W4Y_Track6_VideoEditing_Curriculum_Pricing.md
```

## Track & Mentor Map
| Track | Mentor | Pricing |
|---|---|---|
| Animation & VFX | Asha (existing) | ₹0 / ₹999 / ₹4,999 / ₹14,999 |
| Game Design | Vikram (new) | ₹0 / ₹999 / ₹4,999 / ₹14,999 |
| Digital Content Creation | Meera (existing) | ₹0 / ₹999 / ₹4,999 / ₹14,999 |
| AI & Creative Technology | Aarav (new) | ₹0 / ₹999 / ₹4,999 / ₹14,999 |
| Entrepreneurship & Freelancing | Diya (new) | ₹0 / ₹999 / ₹4,999 / ₹14,999 |
| Video Editing | Neel (new) | ₹0 / ₹999 / ₹4,999 / ₹14,999 |
| Career Readiness (cross-track) | Kiran (existing) — powers Phase 6 mock interviews across all tracks | included in Complete tier |

Every track follows the same 6-Phase skeleton (Foundation → Core Technique → Tool Mastery → Applied Production → Portfolio & Specialization → Career Readiness), so the Firestore schema, mentor-prompt assembly logic, and payment-gating code are identical across tracks — only content and mentor persona change.

## What's Not Yet Built (next steps)
1. Razorpay + Firebase Function payment-gating code (referenced in Track 1 doc, Section 4)
2. Actual visual/video assets (plan is in `W4Y_Visual_Video_Asset_Strategy.md` — Track 1 Phase 1 recommended first)
3. New mentor persona setup (Vikram, Aarav, Diya, Neel) in your Deno proxy/system-prompt config, alongside existing Asha/Meera/Kiran
4. Admin dashboard funnel view (per-track Phase 1→6 drop-off) to guide asset production priority
