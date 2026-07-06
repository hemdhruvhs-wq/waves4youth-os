# Waves4Youth Curriculum Design — Benchmarked Against MAAC India

## 1. What MAAC Actually Does (research summary)

MAAC (Maya Academy of Advanced Cinematics) is India's largest classroom-based animation/VFX/gaming institute, 150+ centers. Key structural patterns:

- **Duration tiers**: Short-term skill courses (1–2 months, single software like Blender/Maya/Cinema 4D), mid-length career courses (6–12 months), and flagship long programs (12–36 months, e.g. AD3D EDGE Plus, or the IGNOU-affiliated BA in 3D Animation & VFX).
- **Pipeline-based structure**: Every course mirrors the real studio pipeline — Pre-production → Production → Post-production. E.g. Concept/Storyboard → Modeling → Texturing → Rigging → Animation → Lighting → Rendering → Compositing/Editing.
- **Software-anchored modules**: Each phase is taught through a specific tool (3ds Max, Maya, Mudbox, ZBrush, Nuke, Unity/Unreal). Modules are literally named after the software, not just the skill.
- **Modular/term structure**: Long programs are split into terms/semesters (e.g. Term 1 = 3ds Max + Mudbox, Term 2 = Maya), so students can exit with a certificate at multiple points.
- **Career-option tagging**: Every module lists the job roles it unlocks (Modeling Artist, Rigging Artist, Lighting Artist, Compositor, Game Asset Artist) — makes the "why" of each module concrete.
- **GenAI layer bolted on recently**: A new "GenAI for Digital Content Creators" short course — signal that even a legacy institute is retrofitting AI into a software-first curriculum, not designing AI-native from scratch. This is actually your biggest structural advantage over them.
- **Placement + portfolio spine**: Every track ends in a portfolio/demo reel and placement support — the entire course is oriented toward one deliverable, not knowledge for its own sake.

**What this means for W4Y**: MAAC's strength is job-role clarity and pipeline realism. Its weakness (for your audience) is that it's software-first, expensive, in-person, and not AI-mentored or vernacular. Your platform can borrow the pipeline logic and career-role tagging, but replace "learn Maya for 4 months in a lab" with "AI mentor walks you through the same pipeline stage-by-stage, tool-agnostic where possible, in your language, self-paced, free/low-cost."

## 2. W4Y Curriculum Philosophy (vs MAAC)

| Dimension | MAAC | Waves4Youth |
|---|---|---|
| Delivery | Classroom, instructor-led | Self-paced, AI-mentored |
| Structure | Software-anchored modules | Skill + pipeline-anchored, tool-agnostic where possible |
| Language | English (mostly) | 12+ Indian languages |
| Cost | ₹30K–₹2.5L | Freemium / low-cost |
| Mentor | Human faculty | AI mentor (Asha/Meera/Kiran) available 24/7 |
| Proof of learning | Certificate + portfolio | Portfolio + verifiable digital certificate + progress badges |
| Entry point | Post-12th career course | Any age/stage, exploratory-first |

Your differentiation pitch in one line: **"MAAC teaches you software in a classroom. W4Y teaches you a craft with an AI mentor beside you, in your language, at your pace."**

## 3. Master Curriculum Framework (applies to all 6 tracks)

Every W4Y track should follow the same skeleton so the platform, the AI mentors, and the progress-tracking logic can stay generic and reusable across Animation & VFX, Game Design, Digital Content Creation, AI & Creative Tech, Entrepreneurship & Freelancing, and Video Editing.

**Per track: 6 Phases → each Phase has 4–6 Modules → each Module has 3–5 Micro-lessons → each Micro-lesson ends in one AI-mentor-graded task.**

### Phase Template (pipeline-inspired, tool-agnostic labels)
1. **Foundation & Orientation** — what the craft is, career map, tools landscape, first small creation (confidence win in lesson 1, not week 6).
2. **Core Technique** — the fundamental skill of the discipline (e.g. storyboarding for animation, game loops for game design, hooks/scripting for content creation).
3. **Tool Mastery** — practical software/tool proficiency, but modularized so a student can swap tool paths (free tool track vs pro tool track) depending on device access.
4. **Applied Production** — building one real, complete mini-project end-to-end, mirroring the industry pipeline stage-by-stage.
5. **Portfolio & Specialization** — student picks a specialization lane (e.g. within Animation: character animation vs lighting vs compositing) and builds a portfolio piece.
6. **Career Readiness** — resume/portfolio packaging, freelancing/job-application basics, mock interview via AI mentor, certificate.

### Module-level data structure (for Firebase)
Each module should carry:
- `moduleId`, `phaseId`, `trackId`
- `title`, `description`, `estimatedMinutes`
- `careerRolesUnlocked: []` (borrow MAAC's job-tagging idea)
- `prerequisiteModuleIds: []`
- `mentorPromptId` (which AI mentor script/persona drives this module)
- `taskType`: quiz | upload | AI-graded-critique | reflection | live-project-checkpoint
- `completionCriteria`
- `badgeId` (optional)

This is the schema you'll want mirrored in Firestore under something like `tracks/{trackId}/phases/{phaseId}/modules/{moduleId}`.

## 4. Worked Example: Animation & VFX Track (mentor: Asha)

| Phase | Modules (sample) | Career roles unlocked | AI Mentor (Asha) role |
|---|---|---|---|
| 1. Foundation | What is animation & VFX; 12 principles of animation; career map; free tool intro (Blender basics) | — | Explains industry, assesses interest via quiz, sets a personalized track pace |
| 2. Core Technique | Storyboarding; timing & spacing; basic character posing; storytelling fundamentals | Storyboard Artist | Reviews uploaded storyboard sketches, gives critique |
| 3. Tool Mastery | Blender modeling basics; texturing intro; free vs pro tool paths (Blender vs Maya/3ds Max) | Modeling Artist, Texturing Artist | Walks through tool UI via guided prompts/video, answers "why is my mesh broken" style questions |
| 4. Applied Production | Rig a simple character; animate a 10-second walk cycle; basic lighting & render | Rigging Artist, Animator, Lighting Artist | Grades walk-cycle upload against a rubric, gives frame-by-frame feedback |
| 5. Portfolio & Specialization | Pick lane: Character Animation / VFX Compositing / Lighting; build one hero piece | Compositor, VFX Artist, Character Animator | Coaches specialization choice based on Phase 1–4 performance data |
| 6. Career Readiness | Portfolio reel assembly; resume; mock interview; certificate | — | Runs a simulated interview, generates a shareable digital certificate |

Repeat this same table structure for Game Design, Digital Content Creation (mentor Meera), AI & Creative Tech, Entrepreneurship & Freelancing, and Video Editing — I can build out the full module list for each track next; happy to do that as the next step rather than cram all six into one document.

## 5. AI Mentor Integration Architecture

### 5.1 Mentor-to-track mapping (current + proposed)
- **Asha** → Animation & VFX
- **Meera** → Digital Content Creation
- **Kiran** → Future/career guidance (cross-track, already positioned this way — extend Kiran to be the "Career Readiness" phase mentor across ALL tracks, not just its own)
- **New mentors needed**: Game Design and Video Editing and Entrepreneurship & AI/Creative Tech currently don't have a named mentor. Recommend either (a) 3 new personas, or (b) have Asha/Meera/Kiran flex across tracks with track-specific system prompts, which is cheaper to build and maintain initially.

### 5.2 Technical integration (fits your existing stack)
You already have: Deno proxy (`solar-armadillo-4814.waves4youth.deno.net`) → Anthropic API, Firebase (`waves4youth-4f239`) for auth/progress, `learn.html` + `learn-{slug}.html` pages.

Proposed flow per module:
1. Student opens `learn-{slug}.html`, lands on current module (read from Firestore `userProgress/{uid}/track/{trackId}`).
2. Page renders module content (video/text/task) + an embedded mentor chat panel.
3. Mentor chat panel calls your existing Deno proxy → Claude API, with a **system prompt assembled per-module** (not one giant static persona prompt) — pull `mentorPromptId` for that module, inject student's name, language preference, and last 2–3 progress events as context so the mentor "remembers" where the student is.
4. When student submits a task (upload/text/quiz), send it to the same proxy with a **grading system prompt** — Claude returns structured JSON (`{score, feedback, passed: true/false, nextAction}`).
5. On `passed: true`, write completion to Firestore, unlock next module, trigger badge/certificate logic if it's a phase-end task.
6. Admin dashboard (already built) pulls aggregate completion data — add a per-track funnel view (Phase 1→6 drop-off) so you can see where students stall.

### 5.3 Language layer
Since 12+ languages is core to your positioning: keep module content in a base language (English or Hindi) and have the mentor's *system prompt* instruct Claude to respond in the student's selected language, rather than pre-translating every lesson. This is far cheaper to maintain than translating 6 tracks × 6 phases × modules into 12 languages by hand, and Claude can do this live in the chat panel and even for feedback generation.

### 5.4 Assessment without a human grader
Borrow MAAC's rubric-and-portfolio logic but make it AI-native:
- Early phases: auto-gradable (quizzes, checklists).
- Mid phases: AI-graded-critique — mentor scores against a rubric you define per module (e.g. "walk cycle: weight, timing, arcs, foot contact — score each 1–5, cite what's wrong").
- Final phase: portfolio review + simulated interview transcript, scored holistically, feeding into the certificate.

## 6. Certification & Career-Readiness Layer
- Borrow MAAC's "career roles unlocked" tagging — surface this on every module so students see concrete job titles as they progress (motivates completion).
- Digital certificate on phase/track completion, verifiable via a public URL (`w4y.in/verify/{certId}`) — easy to add as a Firebase Function + Firestore doc, no extra infra needed.
- Kiran (or a shared "Career Readiness" mentor prompt) runs the mock interview and generates the Parent Future Letter tie-in you already built — nice existing synergy, make sure the Future Letter references actual track/phase progress data, not just generic text.

## 7. Suggested Build Sequence
1. Finalize the Firestore schema (Section 3) — this unblocks everything else.
2. Fully flesh out module lists for the remaining 5 tracks (I can do this next, one track at a time, so it stays manageable).
3. Write per-module mentor system prompts (short, structured, not one giant persona doc) — start with Animation & VFX as pilot.
4. Wire the module-completion + grading loop through the Deno proxy.
5. Add certificate + admin funnel view last, once content + mentor loop are proven with real students on Track 1.

---
*Next step recommendation: pick one track (suggest Animation & VFX since Asha already exists) and I'll write out the full module-by-module content outline + the actual mentor system prompts, ready to paste into Firestore/your codebase.*
