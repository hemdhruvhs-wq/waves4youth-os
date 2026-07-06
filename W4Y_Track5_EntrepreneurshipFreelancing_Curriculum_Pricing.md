# W4Y Track 5: Entrepreneurship & Freelancing — Curriculum, Pricing & Mentor (Diya)

New mentor persona: **Diya** — practical, no-nonsense, business-savvy but approachable, speaks in "first client" language rather than MBA jargon.

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
| 1.1 Welcome to Entrepreneurship & Freelancing | Mindset shift, career map (freelancer/founder/consultant); meet Diya | Explainer video + career-path infographic | Reflection |
| 1.2 Why Most First Businesses Fail (and How to Avoid It) | Common mistakes, realistic expectations | Short case-study clips | Quiz |
| 1.3 Finding Your Problem/Niche | Skills → problems people pay to solve | Example case studies | Write your niche statement |
| 1.4 Tools Landscape | Free tools: Canva, Google Forms, WhatsApp Business; platforms: Fiverr/Upwork basics | Screen-recording tour | Choose your path (freelance vs micro-business) |
| 1.5 Your First Creation | One-page business/offer canvas | Template PDF | Upload your canvas |

### Phase 2 — Core Technique (Starter, ₹999)
| Module | Micro-lessons | Visual/Video Asset | Task |
|---|---|---|---|
| 2.1 Market Research Basics | Talking to potential customers, simple surveys | Example survey template | Run 1 mini research conversation |
| 2.2 Pricing Your Work | Value-based vs hourly pricing, common India-market benchmarks | Comparison chart | Price your first offer |
| 2.3 Pitching Basics | Elevator pitch structure | Example good/bad pitch clips | Write your pitch |
| 2.4 Building Trust & Credibility | Testimonials, samples, professionalism | Example profile screenshots | Draft a credibility statement |
| 2.5 Critique Workshop | — | — | Submit pitch + pricing (AI-graded) |

### Phase 3 — Tool Mastery (Builder, ₹4,999)
| Module | Micro-lessons | Visual/Video Asset | Task |
|---|---|---|---|
| 3.1 Portfolio/Profile Building | Fiverr/Upwork or simple portfolio site setup | Screen-recording walkthrough | Guided checklist |
| 3.2 Invoicing & Payments | UPI, simple invoice templates, getting paid safely | Screen-recording | Create one invoice |
| 3.3 Basic Contracts & Scope | Avoiding scope creep, simple agreement templates | Template PDF | Draft a scope note |
| 3.4 Communication with Clients | Setting expectations, handling difficult conversations | Example message templates | Draft 2 client messages |
| 3.5 Time & Task Management | Simple systems for freelancers (no-code tools) | Screen-recording of a simple tracker | Set up your own tracker |

### Phase 4 — Applied Production (Builder, ₹4,999)
| Module | Micro-lessons | Visual/Video Asset | Task |
|---|---|---|---|
| 4.1 Create a Real Offer/Gig Listing | Full gig description, packaging | Example listing screenshots | Publish or draft your gig |
| 4.2 Simulate a Client Project | End-to-end mock project with Diya as "client" | — | Deliver mock project |
| 4.3 Handle Feedback & Revisions | Managing revision requests professionally | Example scenarios | Respond to a mock revision request |
| 4.4 Close & Get Paid | Wrapping up, invoicing, requesting testimonial | Screen-recording | Complete mock invoice + testimonial ask |
| 4.5 Production Checkpoint | — | — | Full simulated project submission (AI-graded) |

### Phase 5 — Portfolio & Specialization (Complete, ₹14,999)
| Module | Micro-lessons | Visual/Video Asset | Task |
|---|---|---|---|
| 5.1 Choose Your Lane | Freelancer vs Micro-entrepreneur/Founder vs Consultant | Diya-guided quiz | Selection |
| 5.2 Specialization Deep-Dive | Lane-specific content (e.g. founder: basic business plan; freelancer: multi-client scaling) | Lane-specific examples | Lane exercises |
| 5.3 Building Your Case Study | Business plan OR flagship client project case study | Template | Upload case study |
| 5.4 Peer/AI Review Loop | — | — | Submit + iterate once |

### Phase 6 — Career Readiness (Complete, ₹14,999)
| Module | Micro-lessons | Visual/Video Asset | Task |
|---|---|---|---|
| 6.1 Portfolio/Case Study Assembly | Polished case study or founder profile | Template | Upload final version |
| 6.2 Resume/Founder Bio | Positioning yourself professionally | Template screenshots | Draft bio |
| 6.3 Mock Client-Pitch Interview with Diya | — | — | Live chat pitch simulation |
| 6.4 Certificate & Parent Future Letter | — | — | Auto-generated |
| 6.5 Scaling & Next Steps Kit | Where to find more clients, basic growth ideas | Curated resource links | Reflection |

## Diya Mentor Prompts

### Base Persona
```
You are Diya, an AI mentor for Waves4Youth's Entrepreneurship & Freelancing track, for Indian
youth. Tone: practical, direct, encouraging — focused on getting the first real client/rupee,
not theory. Always respond in {{studentLanguage}}. Keep responses short on mobile.
Student name: {{studentName}}, current module: {{currentModule}}.
```

### Example — Critique grading (2.5)
```
Task: Grade the submitted pitch + pricing.
Rubric (1-5 each): (1) pitch clarity, (2) pricing realism/justification, (3) niche focus,
(4) confidence/professionalism of tone.
Output strictly as JSON: {"scores":{...},"overallScore":n,"feedback":"specific, encouraging",
"passed": true/false (>=3.0), "nextAction":"retry"|"continue"}
```

### Example — Mock client pitch (6.3)
```
Context: Play a small-business client considering hiring the student. Ask about their offer,
pricing, past examples, and turnaround time across 4-5 exchanges, push back once realistically
(e.g. negotiate price), then give a readiness summary + one concrete improvement tip. Respond in
{{studentLanguage}}.
```
