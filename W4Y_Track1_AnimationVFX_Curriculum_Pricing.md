# W4Y Track 1: Animation & VFX — Full Curriculum, Pricing & Asha Mentor Prompts

Assumption: pricing below is per-track (Animation & VFX). Same 4-tier model can be replicated for the other 5 tracks. A cross-track bundle can be layered in later once 2-3 tracks are live.

## 1. Pricing Tiers

| Tier | Name | Price | Phases Included | Positioning |
|---|---|---|---|---|
| 0 | Free Preview | ₹0 | Phase 1 (Foundation) fully unlocked | Lead magnet — no card needed, gets student hooked and into the Firebase funnel |
| 1 | Starter | ₹999 | Phase 1 + Phase 2 | "Try the craft" — storytelling + storyboarding, no software needed yet |
| 2 | Builder | ₹4,999 | Phase 1–4 | "Build real skills" — adds tool mastery + first real animated project (walk cycle) |
| 3 | Complete (Pro) | ₹14,999 | Phase 1–6 (full track) | "Career-ready" — adds specialization, portfolio, mock interview, verified certificate |

Notes:
- Price the bundle so Tier 3 looks like a clear saving vs buying phases separately (e.g. if sold standalone Phase 5+6 alone might be priced ₹6,999+₹4,999 = ₹11,998 — bundling all 6 phases at ₹14,999 vs a theoretical ₹17,997 standalone total creates a natural "upgrade to Complete" nudge).
- Tier 1→2→3 should be an in-app upgrade prompt, not a separate purchase flow — triggered automatically when a student finishes the last module of their current tier ("You've completed Starter! Unlock Builder for ₹4,999 to keep going with Asha").
- Consider a founding-batch discount (e.g. first 500 students get Tier 3 at ₹9,999) since you're pre-revenue — easy lever for early traction without changing the actual tier architecture.
- Certificate (real value driver) is gated to Tier 3 only — this is your single strongest upgrade lever, more than any content gating.

## 2. Full Module Breakdown

### Phase 1 — Foundation & Orientation (Free Preview)
| Module | Micro-lessons | Task | Career roles unlocked |
|---|---|---|---|
| 1.1 Welcome to Animation & VFX | Industry overview video; career map; meet Asha | Reflection: "which career role excites you most?" | — |
| 1.2 The 12 Principles of Animation | Squash & stretch, timing, anticipation, etc. with GIF examples | Quiz (auto-graded) | — |
| 1.3 Storytelling Basics | 3-act structure; character arcs; visual storytelling | Short written concept (1 paragraph) | Story Artist |
| 1.4 Tools Landscape | Blender (free) vs Maya/3ds Max (industry); which path fits your device | Choose your tool path (Free / Pro) | — |
| 1.5 Your First Creation | Flipbook or simple bouncing-ball animation, any tool including paper+phone camera | Upload short clip | — |

### Phase 2 — Core Technique (Starter, ₹999)
| Module | Micro-lessons | Task | Career roles unlocked |
|---|---|---|---|
| 2.1 Storyboarding Fundamentals | Panel composition; visual flow; thumbnailing | Upload 4-panel storyboard | Storyboard Artist |
| 2.2 Timing & Spacing | Frame spacing, ease-in/out, weight | Quiz + short animated example review | — |
| 2.3 Character Posing & Silhouette | Line of action, readable silhouettes | Upload 3 poses | — |
| 2.4 Camera Angles & Shot Composition | Rule of thirds, framing for emotion | Annotate a sample shot | — |
| 2.5 Critique Workshop | — | Submit full storyboard sequence | AI-graded-critique (Asha rubric) |

### Phase 3 — Tool Mastery (Builder, ₹4,999)
| Module | Micro-lessons | Task | Career roles unlocked |
|---|---|---|---|
| 3.1 Blender Interface & Navigation | UI tour, viewport, basic controls | Guided checklist | — |
| 3.2 Basic 3D Modeling | Primitives → simple prop/character | Upload .blend/render | Modeling Artist |
| 3.3 Texturing & Materials | UV basics, simple material setup | Upload textured render | Texturing Artist |
| 3.4 Intro to Maya/3ds Max (Pro path) | Parallel track for students with lab/pro tool access | Optional — same outcomes via pro tool | — |
| 3.5 Rigging Basics | Simple bone/armature setup | Upload rigged model | Rigging Artist |

### Phase 4 — Applied Production (Builder, ₹4,999)
| Module | Micro-lessons | Task | Career roles unlocked |
|---|---|---|---|
| 4.1 Rig a Simple Character | Full armature + weight painting | Upload rig | Rigging Artist |
| 4.2 Walk Cycle Animation | Keyframing a 10-second walk cycle | Upload animation | Animator |
| 4.3 Basic Lighting Setup | 3-point lighting, mood lighting | Upload lit scene | Lighting Artist |
| 4.4 Rendering Basics | Render settings, output formats | Upload rendered clip | — |
| 4.5 Production Checkpoint | — | Full mini-project submission | AI-graded-critique (full rubric) |

### Phase 5 — Portfolio & Specialization (Complete, ₹14,999)
| Module | Micro-lessons | Task | Career roles unlocked |
|---|---|---|---|
| 5.1 Choose Your Lane | Quiz + Asha recommendation based on Phase 1-4 performance | Selection: Character Animation / VFX Compositing / Lighting | — |
| 5.2 Specialization Deep-Dive | Branches per lane (e.g. compositing: layer basics, match-moving intro) | Lane-specific exercises | Compositor / Character Animator / Lighting Artist |
| 5.3 Building Your Hero Piece | Full project in chosen lane | Upload hero piece | — |
| 5.4 Peer/AI Review Loop | — | Submit for review, iterate once based on Asha feedback | — |

### Phase 6 — Career Readiness (Complete, ₹14,999)
| Module | Micro-lessons | Task | Career roles unlocked |
|---|---|---|---|
| 6.1 Portfolio Reel Assembly | Sequencing, music, export | Upload final reel | — |
| 6.2 Resume & Naukri/LinkedIn Basics | Resume template, profile optimization | Draft resume upload | — |
| 6.3 Mock Interview with Asha | — | Live chat-based mock interview | — |
| 6.4 Certificate & Parent Future Letter | — | Auto-generated on completion | — |
| 6.5 Freelance/Job Application Kit | Where to find gigs, pricing your first jobs | Reflection task | — |

## 3. Asha Mentor System Prompts

Keep these short and modular — assembled per-module at runtime by your Deno proxy, not one giant static persona doc. Structure: **Base Persona** (constant) + **Phase Context** (changes per phase) + **Module Task** (changes per module) + **Student Context** (injected dynamically: name, language, last progress).

### 3.1 Base Persona (constant, prepended to every call)
```
You are Asha, an AI mentor for Waves4Youth's Animation & VFX track, for Indian youth learners.
Tone: warm, encouraging, direct — like a favorite senior at a studio, not a lecturer.
Always respond in {{studentLanguage}}. Keep responses short on mobile (3-5 sentences unless grading a task).
Never discourage a beginner; frame mistakes as normal steps in the pipeline.
You know the student's name is {{studentName}} and they are on {{currentModule}}.
```

### 3.2 Example — Orientation module (1.1)
```
Context: Student just started Phase 1. Introduce yourself as Asha, briefly explain what the
Animation & VFX track covers (storytelling -> tools -> production -> specialization -> career),
and ask what excites them most about animation to personalize pacing. Keep it under 100 words.
```

### 3.3 Example — Critique grading (2.5, AI-graded-critique)
```
Task: Grade the submitted storyboard sequence.
Rubric (score 1-5 each): (1) visual flow between panels, (2) clarity of story beat,
(3) camera/shot variety, (4) readability of poses/silhouettes.
Output strictly as JSON: {"scores": {...}, "overallScore": n, "feedback": "2-3 sentences,
specific and encouraging", "passed": true/false (pass if overallScore >= 3.0), "nextAction": "retry" | "continue"}
Do not include any text outside the JSON.
```

### 3.4 Example — Production checkpoint grading (4.5)
```
Task: Grade the submitted walk-cycle + lighting + render mini-project.
Rubric (score 1-5 each): (1) weight & timing of walk cycle, (2) foot contact/sliding,
(3) lighting mood and setup correctness, (4) render quality/output correctness.
Output strictly as JSON: {"scores": {...}, "overallScore": n, "feedback": "specific,
cite exact frame/aspect issues if any", "passed": true/false (pass if overallScore >= 3.0),
"nextAction": "retry" | "continue"}
```

### 3.5 Example — Mock interview (6.3)
```
Context: Run a short simulated job interview for an entry-level role matching the student's
chosen specialization ({{specializationLane}}). Ask one question at a time, wait for their
reply, ask 4-5 questions total (mix of technical + portfolio walkthrough + one behavioral),
then give a short overall readiness summary and one concrete improvement tip. Respond in
{{studentLanguage}}.
```

## 4. Firestore Additions for Pricing/Access Control
Add to existing schema:
- `users/{uid}.trackAccess.animationVfx = { tier: 0|1|2|3, purchasedAt, expiresAt (if applicable) }`
- Gate module rendering in `learn-animation-vfx.html` by checking `tier` against the module's `requiredTier` field (add this field to each module doc from Section 2's table).
- On payment success (whatever gateway you use — Razorpay is the standard India choice for UPI/cards), a Firebase Function updates `trackAccess.tier` before redirecting back to `learn.html`.

## 5. Next Step
I can either (a) write the same tier + module breakdown for one more track next (suggest Digital Content Creation, since Meera already exists), or (b) go deeper on this track — e.g. draft the actual Razorpay + Firebase Function payment-gating code. Let me know which.
