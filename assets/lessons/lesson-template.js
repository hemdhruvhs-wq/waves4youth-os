/* ============================================================
   LESSON TEMPLATE — copy this file per lesson, fill in the
   blanks, save it as e.g. lesson-03-pacing.js, and load it on
   that lesson's HTML page before calling MentorVisuals.mount().
   No other code needs to change.
   ============================================================ */

const LESSON = {

  // Mentor for this track. Just the name — the engine looks up
  // the correct standard face (boy/girl) automatically from the
  // MENTOR_GENDER list in mentor-visuals.js. Only set mentorGender
  // explicitly if you're introducing a brand-new mentor name.
  mentor: "Neel",
  mentorRole: "Video Editing Mentor",
  // mentorGender: "boy",   // only needed for a new/unlisted mentor name

  // Which visual this lesson uses. Options currently available:
  //   "pacingCompare" — shot-length scrubber + film strip
  //   "timeline"       — sequence of labeled steps
  //   "beforeAfter"    — two-pane comparison
  //   "buildUp"        — growing bar chart
  visualType: "pacingCompare",

  // Parameters differ per visualType — see the four examples in
  // lesson-examples.js for the exact shape each one expects.
  visualParams: {
    minShotSeconds: 0.3,
    maxShotSeconds: 4.0,
    frameCountAtFast: 22,
    frameCountAtSlow: 4
  },

  // One entry per supported language. Keep sentences short and
  // conversational — this is read aloud by TTS. Devanagari script
  // only for Hindi/Marathi (no Hinglish/romanized text).
  narration: {
    "en-US": "",
    "hi-IN": "",
    "mr-IN": ""
  },

  // Plain-text summary of what THIS lesson covers, used only by
  // MentorQA to keep the post-lesson Q&A scoped to this topic —
  // the mentor is instructed to answer from this text only, and
  // redirect back to the topic if asked something unrelated.
  // A few sentences is enough; doesn't need to be the full lesson.
  qaContext: ""
};
