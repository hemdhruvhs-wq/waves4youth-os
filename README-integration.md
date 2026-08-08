# Mentor Visuals — Integration Guide

Four files do all the work. Nothing in here changes per lesson.

- `mentor-visuals.css` — all styling (avatar, ring, strip, timeline, before/after, build-up, narration, Q&A chat thread)
- `mentor-visuals.js` — the visual engine (mentor faces, the 4 visual renderers, TTS + karaoke + speaking-ring wiring)
- `mentor-qa.js` — the post-lesson Q&A engine (scoped chat, voice input via mic, spoken + text answers)
- Two standard face images — `boy-face.png` / `girl-face.png` — upload once to `/assets/mentors/` and every mentor points to one of the two

## IMPORTANT: mentor placement on the page

The mentor avatar + language selector must sit **above** the lesson heading, not after the lesson content. Put `<div id="mentorVisual"></div>` right after the breadcrumb (e.g. "Video Editing → Core Technique") and before the `<h1>` lesson title. Students pick their language and see the mentor before reading, not after.

## Adding this to an existing lesson page

1. In the `<head>`, include:
   ```html
   <link rel="stylesheet" href="/assets/mentor-visuals.css">
   ```
2. Before `</body>`, include, in this order:
   ```html
   <script src="/assets/mentor-visuals.js"></script>
   <script src="/assets/mentor-qa.js"></script>
   <script src="/assets/lessons/lesson-03-pacing.js"></script>  <!-- this lesson's data -->
   <script>
     MentorVisuals.mount('#mentorVisual', LESSON);
     MentorQA.mount('#lessonQA', LESSON);
   </script>
   ```
3. Add two empty mount points:
   ```html
   <!-- above the lesson heading -->
   <div id="mentorVisual"></div>

   <!-- ...lesson content here... -->

   <!-- at the very bottom, after the lesson content -->
   <div id="lessonQA"></div>
   ```

That's the entire integration. The `LESSON` object (from that lesson's own small JS file) is the only thing that changes per lesson — it now needs one more field, `qaContext` (see below).

## Wiring MentorQA to your AI backend

`mentor-qa.js` currently points at:
```js
const MENTOR_API_ENDPOINT = "https://solar-armadillo-4814.waves4youth.deno.net/mentor-qa";
```
This assumes the same Deno Deploy proxy already used by `mentor-chat.js` (so the API key stays server-side, same security setup you already have). Your developer needs to either:
- add a `/mentor-qa` route on that same proxy that accepts `{system, question, mentor, lang}` and returns `{answer}`, or
- point `MENTOR_API_ENDPOINT` at whatever route already exists for mentor chat, if it can accept a custom system prompt per call

The system prompt sent is built automatically from `lesson.qaContext` — this is what keeps every answer scoped to that lesson's topic instead of turning into a general chatbot.

## Adding a new lesson

1. Copy `lesson-template.js`
2. Fill in `mentor`, `visualType`, `visualParams`, `narration` for each language, and **`qaContext`** — a short plain-text summary of the lesson, used only to scope the Q&A answers
3. Look at `lesson-examples.js` for four filled examples (each now includes a `qaContext`)
4. Save it under `/assets/lessons/`, load it on that lesson's page, call both `MentorVisuals.mount(...)` and `MentorQA.mount(...)`

## Adding a brand-new mentor name

If the mentor name isn't already in `MENTOR_GENDER` inside `mentor-visuals.js` (currently: Neel, Vikram, Aarav, Rey, Arjun, Prithvi = boy face; Asha, Meera, Diya, Tara, Ira, Zara = girl face), either:
- add the name to that list once, or
- set `mentorGender: "boy"` / `"girl"` directly in that lesson's `LESSON` object

## Adding a new visual type

If a lesson doesn't fit pacing/timeline/before-after/build-up, add a new function inside `VISUAL_RENDERERS` in `mentor-visuals.js` (follow the pattern of the existing four), give it a name, and any lesson can use it by setting `visualType: "yourNewName"`.

## Notes for QA before wide rollout

- Test TTS voice availability AND speech recognition (mic input) for Hindi/Marathi on real Android phones — browser support for both varies by device and OS version
- Confirm the avatar + visual + Q&A thread render correctly at narrow mobile widths
- Devanagari script only for Hindi/Marathi narration — no Hinglish/romanized text
- Test that off-topic questions in the Q&A actually get redirected back to the lesson topic, not answered generically

