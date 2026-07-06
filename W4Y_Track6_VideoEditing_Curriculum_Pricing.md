# W4Y Track 6: Video Editing — Curriculum, Pricing & Mentor (Neel)

New mentor persona: **Neel** — precise, rhythm-focused, talks about editing like music ("cut on the beat").

## Pricing
| Tier | Price | Phases |
|---|---|---|
| Free Preview | ₹0 | Phase 1 |
| Starter | ₹999 | Phase 1–2 |
| Builder | ₹4,999 | Phase 1–4 |
| Complete | ₹14,999 | Phase 1–6 (+ certificate) |

## Module Breakdown

### Phase 1 — Foundation (Free)
| Module | Micro-lessons | Visual/Video Asset | Task |
|---|---|---|---|
| 1.1 Welcome to Video Editing | Industry overview (film/OTT/social); career map; meet Neel | Explainer video + career-map infographic | Reflection |
| 1.2 The Language of Cuts | Cut types, pacing, why editing is invisible storytelling | Side-by-side "same footage, different edit" example | Quiz |
| 1.3 Story Structure in Editing | 3-act structure applied to editing choices | Example scene breakdown | Outline a 3-shot mini-story |
| 1.4 Tools Landscape | CapCut (free, phone) vs DaVinci Resolve (free, pro) vs Premiere Pro | Screen-recording tool comparison | Choose your tool path |
| 1.5 Your First Creation | Cut together 3 phone clips into one 15-second edit | Example clip | Upload your first edit |

### Phase 2 — Core Technique (Starter, ₹999)
| Module | Micro-lessons | Visual/Video Asset | Task |
|---|---|---|---|
| 2.1 Pacing & Rhythm | Cutting to music/beat, J-cuts/L-cuts basics | Before/after pacing examples | Re-cut a given clip for rhythm |
| 2.2 Transitions | Hard cuts, dissolves, match cuts — when to use what | Example transition reel | Apply 2 transition types |
| 2.3 Sound Basics | Dialogue levels, music balance, sound effects | Before/after audio mix | Balance a sample audio track |
| 2.4 Visual Continuity | Match cuts, 180-degree rule awareness (as editor, not shooter) | Annotated example clips | Spot continuity errors in a sample |
| 2.5 Critique Workshop | — | — | Submit re-cut clip (AI-graded) |

### Phase 3 — Tool Mastery (Builder, ₹4,999)
| Module | Micro-lessons | Visual/Video Asset | Task |
|---|---|---|---|
| 3.1 DaVinci Resolve/Premiere Interface | Timeline, tracks, panels | Screen-recording walkthrough (5-7 min) | Guided checklist |
| 3.2 Color Correction Basics | Exposure, white balance, basic grading | Before/after color examples | Grade one clip |
| 3.3 Audio Mixing Basics | Levels, EQ basics, ducking music under dialogue | Before/after audio mix | Mix a sample scene |
| 3.4 Text & Graphics Basics | Lower thirds, captions, simple motion text | Screen-recording | Add titles to your edit |
| 3.5 Export Settings | Resolution, format, platform-specific export presets | Screen-recording | Export one clip correctly |

### Phase 4 — Applied Production (Builder, ₹4,999)
| Module | Micro-lessons | Visual/Video Asset | Task |
|---|---|---|---|
| 4.1 Assemble Rough Cut | From raw footage to a full sequence | Screen-recording | Upload rough cut |
| 4.2 Fine Cut & Pacing Pass | Tighten pacing, refine transitions | — | Upload fine cut |
| 4.3 Color Grade Pass | Full grading pass on the project | Before/after full-scene grade | Upload graded version |
| 4.4 Sound Mix & Export | Final audio mix + correct export | — | Upload final export |
| 4.5 Production Checkpoint | — | — | Full short-film/vlog edit submission (AI-graded) |

### Phase 5 — Portfolio & Specialization (Complete, ₹14,999)
| Module | Micro-lessons | Visual/Video Asset | Task |
|---|---|---|---|
| 5.1 Choose Your Lane | Narrative/Film Editor vs Social Media Editor vs Colorist | Neel-guided quiz | Selection |
| 5.2 Specialization Deep-Dive | Lane-specific content | Lane-specific screen-recordings | Lane exercises |
| 5.3 Building Your Hero Edit | Flagship edited piece in chosen lane | — | Upload hero project |
| 5.4 Peer/AI Review Loop | — | — | Submit + iterate once |

### Phase 6 — Career Readiness (Complete, ₹14,999)
| Module | Micro-lessons | Visual/Video Asset | Task |
|---|---|---|---|
| 6.1 Portfolio Reel Assembly | Best-of showreel | Screen-recording tutorial | Upload reel |
| 6.2 Resume & Editor Profile | Portfolio site/LinkedIn basics | Template screenshots | Draft profile |
| 6.3 Mock Interview with Neel | — | — | Live chat interview |
| 6.4 Certificate & Parent Future Letter | — | — | Auto-generated |
| 6.5 Freelance/Client Kit | Finding editing gigs, pricing, client handoff basics | Curated resource links | Reflection |

## Neel Mentor Prompts

### Base Persona
```
You are Neel, an AI mentor for Waves4Youth's Video Editing track, for Indian youth learners.
Tone: precise, rhythm-focused — talk about editing like music, "cut on the beat" style.
Always respond in {{studentLanguage}}. Keep responses short on mobile.
Student name: {{studentName}}, current module: {{currentModule}}.
```

### Example — Critique grading (2.5)
```
Task: Grade the submitted re-cut clip.
Rubric (1-5 each): (1) pacing/rhythm, (2) transition choice appropriateness, (3) audio balance,
(4) overall flow/continuity.
Output strictly as JSON: {"scores":{...},"overallScore":n,"feedback":"specific, cite exact
timestamp issues if possible","passed": true/false (>=3.0),"nextAction":"retry"|"continue"}
```

### Example — Mock interview (6.3)
```
Context: Run a short simulated interview for an entry-level editor role matching
{{specializationLane}}. Ask about editing choices in their portfolio piece, one technical
question (color/audio), and one behavioral question, across 4-5 exchanges, then a readiness
summary + one improvement tip. Respond in {{studentLanguage}}.
```
