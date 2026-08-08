# Mentor Visuals — Integration Guide

Three files do all the work. Nothing in here changes per lesson.

- `mentor-visuals.css` — all styling (avatar, ring, strip, timeline, before/after, build-up, narration)
- `mentor-visuals.js` — the engine (mentor faces, the 4 visual renderers, TTS + karaoke + speaking-ring wiring)
- Two standard face images — `boy-face.png` / `girl-face.png` — upload once to `/assets/mentors/` and every mentor points to one of the two

## Adding this to an existing lesson page

1. In the `<head>`, include:
   ```html
   <link rel="stylesheet" href="/assets/mentor-visuals.css">
   ```
2. Before `</body>`, include:
   ```html
   <script src="/assets/mentor-visuals.js"></script>
   <script src="/assets/lessons/lesson-03-pacing.js"></script>  <!-- this lesson's data -->
   <script>
     MentorVisuals.mount('#mentorVisual', LESSON);
   </script>
   ```
3. Somewhere in the lesson page body, add an empty mount point:
   ```html
   <div id="mentorVisual"></div>
   ```

That's the entire integration. The `LESSON` object (from that lesson's own small JS file) is the only thing that changes per lesson.

## Adding a new lesson

1. Copy `lesson-template.js`
2. Fill in `mentor`, `visualType`, `visualParams`, and `narration` for each language
3. Look at `lesson-examples.js` for a filled example matching whichever `visualType` you're using
4. Save it under `/assets/lessons/` with a clear filename, load it on that lesson's page, call `MentorVisuals.mount(...)`

## Adding a brand-new mentor name

If the mentor name isn't already in `MENTOR_GENDER` inside `mentor-visuals.js` (currently: Neel, Vikram, Aarav, Rey, Arjun, Prithvi = boy face; Asha, Meera, Diya, Tara, Ira, Zara = girl face), either:
- add the name to that list once, or
- set `mentorGender: "boy"` / `"girl"` directly in that lesson's `LESSON` object

## Adding a new visual type

If a lesson doesn't fit pacing/timeline/before-after/build-up, add a new function inside `VISUAL_RENDERERS` in `mentor-visuals.js` (follow the pattern of the existing four), give it a name, and any lesson can use it by setting `visualType: "yourNewName"`.

## Notes for QA before wide rollout

- Test TTS voice availability for Hindi/Marathi on real Android phones — browser voice support varies by device and OS version
- Confirm the avatar + visual render correctly at narrow mobile widths
- Devanagari script only for Hindi/Marathi narration — no Hinglish/romanized text
