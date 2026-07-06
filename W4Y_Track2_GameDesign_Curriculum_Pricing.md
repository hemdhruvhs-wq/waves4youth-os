# W4Y Track 2: Game Design — Curriculum, Pricing & Mentor (Vikram)

New mentor persona: **Vikram** — energetic, systems-thinker, talks in "player experience" language.

## Pricing (same 4-tier model, per-track)
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
| 1.1 Welcome to Game Design | Industry overview; genres; career map; meet Vikram | Explainer video (3-4 min) + career-map infographic | Reflection |
| 1.2 How Games Work | Core loops, player motivation, fun theory basics | Animated diagram of a "core loop" | Quiz |
| 1.3 Genres & Inspiration | Platformers, puzzle, RPG, hyper-casual — quick tour | Short montage video of gameplay clips (curated/licensed) | Pick a favorite genre + why |
| 1.4 Tools Landscape | Unity (free) vs Unreal; no-code options (GDevelop) for low-end devices | Screen-recording comparison of 3 tool UIs | Choose your tool path |
| 1.5 Your First Creation | Paper prototype of a simple game concept | Template PDF + example photos | Upload photo of paper prototype |

### Phase 2 — Core Technique (Starter, ₹999)
| Module | Micro-lessons | Visual/Video Asset | Task |
|---|---|---|---|
| 2.1 Game Mechanics & Rules | Verbs, rules, feedback loops | Diagram + short animated GIF example | Design one mechanic on paper |
| 2.2 Level Design Basics | Pacing, difficulty curve, teaching through level layout | Annotated level-map screenshots | Sketch a simple level layout |
| 2.3 World & Narrative Basics | Lightweight storytelling for games | Example screenshots from 2-3 games | Write a 1-paragraph game premise |
| 2.4 UI/UX for Games | Menus, HUD, player feedback | Screen-recording of good vs bad UI examples | Annotate a sample UI screenshot |
| 2.5 Critique Workshop | — | — | Submit level sketch + premise (AI-graded) |

### Phase 3 — Tool Mastery (Builder, ₹4,999)
| Module | Micro-lessons | Visual/Video Asset | Task |
|---|---|---|---|
| 3.1 Unity Interface & Navigation | Editor tour, scenes, GameObjects | Screen-recording walkthrough (5-7 min) | Guided checklist |
| 3.2 Basic Visual Scripting | Unity Visual Scripting / GDevelop event system (no-code friendly) | Screen-recording + annotated screenshots | Build one simple interaction |
| 3.3 Asset Import & Sprites | Importing free assets (itch.io/Kenney.nl asset packs) | Screen-recording of import process | Import + place 3 assets |
| 3.4 Simple 2D Game Build | Combine mechanics into a mini playable scene | Screen-recording demo | Upload playable build/video |
| 3.5 Basic Audio & Feedback | SFX, music hooks, juice/feedback | Before/after audio comparison clips | Add sound to your build |

### Phase 4 — Applied Production (Builder, ₹4,999)
| Module | Micro-lessons | Visual/Video Asset | Task |
|---|---|---|---|
| 4.1 Player Controls | Input handling, responsiveness | Screen-recording | Add controls to prototype |
| 4.2 Scoring & Win/Lose Logic | Game states, feedback on success/fail | Diagram of game state machine | Implement scoring |
| 4.3 Level Polish | Difficulty tuning, playtesting basics | Before/after gameplay clips | Playtest + adjust |
| 4.4 Publish & Share | Export/build for itch.io or web | Screen-recording of publish flow | Publish playable link |
| 4.5 Production Checkpoint | — | — | Full mini-game submission (AI-graded) |

### Phase 5 — Portfolio & Specialization (Complete, ₹14,999)
| Module | Micro-lessons | Visual/Video Asset | Task |
|---|---|---|---|
| 5.1 Choose Your Lane | Game Design vs Game Art vs Light Programming | Vikram-guided quiz | Selection |
| 5.2 Specialization Deep-Dive | Lane-specific content | Lane-specific screen-recordings | Lane exercises |
| 5.3 Building Your Hero Game | Full polished mini-game in chosen lane | — | Upload hero project |
| 5.4 Peer/AI Review Loop | — | — | Submit + iterate once |

### Phase 6 — Career Readiness (Complete, ₹14,999)
| Module | Micro-lessons | Visual/Video Asset | Task |
|---|---|---|---|
| 6.1 Gameplay Reel Assembly | Recording + editing gameplay footage | Screen-recording tutorial (uses skills from Video Editing track — good cross-link) | Upload reel |
| 6.2 Resume & itch.io/LinkedIn Profile | Portfolio page setup | Template screenshots | Draft profile |
| 6.3 Mock Interview with Vikram | — | — | Live chat interview |
| 6.4 Certificate & Parent Future Letter | — | — | Auto-generated |
| 6.5 Freelance/Indie Kit | Publishing on itch.io, game jams, indie monetization | Curated links to game jam platforms | Reflection |

## Vikram Mentor Prompts

### Base Persona
```
You are Vikram, an AI mentor for Waves4Youth's Game Design track, for Indian youth learners.
Tone: energetic, systems-thinker — explain everything in terms of "player experience".
Always respond in {{studentLanguage}}. Keep responses short on mobile (3-5 sentences unless grading).
Student name: {{studentName}}, current module: {{currentModule}}.
```

### Example — Production checkpoint grading (4.5)
```
Task: Grade the submitted mini-game.
Rubric (1-5 each): (1) core mechanic clarity, (2) level pacing/difficulty curve,
(3) player feedback/juice (sound, visual response), (4) polish/completeness.
Output strictly as JSON: {"scores":{...},"overallScore":n,"feedback":"specific and encouraging",
"passed": true/false (>=3.0), "nextAction":"retry"|"continue"}
```

### Example — Mock interview (6.3)
```
Context: Run a short simulated interview for an entry-level game design/QA role matching
{{specializationLane}}. Ask one question at a time (mechanics reasoning, portfolio walkthrough,
one behavioral), 4-5 questions total, then a readiness summary + one improvement tip.
Respond in {{studentLanguage}}.
```
