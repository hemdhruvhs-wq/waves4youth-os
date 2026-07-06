# W4Y Track 4: AI & Creative Technology — Curriculum, Pricing & Mentor (Aarav)

New mentor persona: **Aarav** — curious, clear explainer, strong on ethics/responsible use, translates technical AI concepts into plain language.

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
| 1.1 Welcome to AI & Creative Tech | What generative AI is (text/image/video/audio); career map; meet Aarav | Explainer video + AI-tool-landscape infographic | Reflection |
| 1.2 How Generative AI Works (Simply) | Prompts → outputs, no jargon, analogy-based | Animated diagram | Quiz |
| 1.3 Responsible & Ethical AI Use | Bias, misinformation, attribution, when NOT to use AI | Short case-study video clips | Reflection: one ethical scenario |
| 1.4 Tools Landscape | Text (Claude/ChatGPT), image (Canva AI/Ideogram), video, audio tools overview | Screen-recording tour of 3-4 tools | Choose your interest area |
| 1.5 Your First Creation | Generate one AI image or short AI-assisted story | Example outputs gallery | Upload your first AI creation |

### Phase 2 — Core Technique (Starter, ₹999)
| Module | Micro-lessons | Visual/Video Asset | Task |
|---|---|---|---|
| 2.1 Prompt Engineering Basics | Specificity, iteration, examples-in-prompt | Before/after prompt examples | Write + refine 3 prompts |
| 2.2 Fact-Checking AI Output | Hallucination awareness, verification habits | Example of AI mistake + correction | Fact-check a sample AI answer |
| 2.3 Combining Tools into a Workflow | e.g. script (text AI) → visuals (image AI) → voice (audio AI) | Workflow diagram | Map out a 3-tool workflow |
| 2.4 Style & Consistency in AI Output | Keeping a consistent character/style across generations | Example consistent-character image set | Generate 2 consistent images |
| 2.5 Critique Workshop | — | — | Submit workflow + outputs (AI-graded) |

### Phase 3 — Tool Mastery (Builder, ₹4,999)
| Module | Micro-lessons | Visual/Video Asset | Task |
|---|---|---|---|
| 3.1 Image Generation Tools | Canva AI / Ideogram basics | Screen-recording walkthrough | Guided checklist |
| 3.2 AI Video Tools | Text-to-video / AI editing assist basics | Screen-recording | Generate one short AI video clip |
| 3.3 AI Audio/Voice Tools | Voice generation, background music AI | Before/after audio samples | Generate one voice/audio clip |
| 3.4 Basic Workflow Automation | Simple no-code chaining (e.g. templates, batch prompts) | Screen-recording | Build one repeatable mini-workflow |
| 3.5 Building with an AI Chat Assistant | Using Claude/similar for iterative creative work | Screen-recording of a real session | Complete one guided project brief |

### Phase 4 — Applied Production (Builder, ₹4,999)
| Module | Micro-lessons | Visual/Video Asset | Task |
|---|---|---|---|
| 4.1 Plan an AI-Assisted Creative Project | Brief, style guide, tool selection | Template PDF | Write project brief |
| 4.2 Generate Core Assets | Images/video/audio for the project | — | Upload generated assets |
| 4.3 Assemble the Final Piece | Combine into one story/video/campaign | Screen-recording of assembly | Upload assembled draft |
| 4.4 Polish & Fact-Check Pass | Final review for quality + accuracy | Checklist | Submit polish notes |
| 4.5 Production Checkpoint | — | — | Full project submission (AI-graded) |

### Phase 5 — Portfolio & Specialization (Complete, ₹14,999)
| Module | Micro-lessons | Visual/Video Asset | Task |
|---|---|---|---|
| 5.1 Choose Your Lane | AI Content Creator vs Prompt/AI Product Designer vs AI-Assisted Filmmaker | Aarav-guided quiz | Selection |
| 5.2 Specialization Deep-Dive | Lane-specific content | Lane-specific screen-recordings | Lane exercises |
| 5.3 Building Your Hero Project | Flagship AI-assisted creative piece | — | Upload hero project |
| 5.4 Peer/AI Review Loop | — | — | Submit + iterate once |

### Phase 6 — Career Readiness (Complete, ₹14,999)
| Module | Micro-lessons | Visual/Video Asset | Task |
|---|---|---|---|
| 6.1 Portfolio Assembly | Show process + output (prompts included) | Template | Upload portfolio |
| 6.2 Resume & Profile | Positioning "AI-native creative" skill set | Template screenshots | Draft profile |
| 6.3 Mock Interview with Aarav | — | — | Live chat interview |
| 6.4 Certificate & Parent Future Letter | — | — | Auto-generated |
| 6.5 Freelance/AI-Consulting Kit | Where these skills are in demand, gig ideas | Curated resource links | Reflection |

## Aarav Mentor Prompts

### Base Persona
```
You are Aarav, an AI mentor for Waves4Youth's AI & Creative Technology track, for Indian youth.
Tone: curious, clear, honest about AI's limits — always model responsible use.
Always respond in {{studentLanguage}}. Keep responses short on mobile.
Student name: {{studentName}}, current module: {{currentModule}}.
```

### Example — Critique grading (2.5)
```
Task: Grade the submitted 3-tool workflow + outputs.
Rubric (1-5 each): (1) workflow logic/coherence, (2) prompt quality, (3) output-style
consistency, (4) evidence of fact-checking habit.
Output strictly as JSON: {"scores":{...},"overallScore":n,"feedback":"specific, encouraging",
"passed": true/false (>=3.0), "nextAction":"retry"|"continue"}
```

### Example — Mock interview (6.3)
```
Context: Run a short simulated interview for an entry-level AI-assisted creative role matching
{{specializationLane}}. Ask about their process (not just output), one ethics-judgment question,
and a portfolio walkthrough, across 4-5 exchanges, then a readiness summary + one improvement tip.
Respond in {{studentLanguage}}.
```
