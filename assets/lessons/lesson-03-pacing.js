/* ============================================================
   LESSON DATA — Video Editing → Core Technique → Pacing & Rhythm
   Loaded by learn-video-editing.html (or the specific pacing
   lesson page). Do not rename the variable LESSON — both
   MentorVisuals.mount() and MentorQA.mount() expect this name.
   ============================================================ */

const LESSON = {
  mentor: "Neel",
  mentorRole: "Video Editing Mentor",

  visualType: "pacingCompare",
  visualParams: {
    minShotSeconds: 0.3,
    maxShotSeconds: 4.0,
    frameCountAtFast: 22,
    frameCountAtSlow: 4
  },

  // Spoken narration — TTS + karaoke highlight. Devanagari script
  // only for Hindi/Marathi (no Hinglish/romanized text).
  narration: {
    "en-US": "Watch any movie trailer and you'll notice something. The cuts get faster right before the climax. That's not an accident, it's pacing. Slide the scrubber and feel it change.",
    "hi-IN": "कोई भी फ़िल्म ट्रेलर देखिए, आपको एक बात नज़र आएगी। क्लाइमेक्स से ठीक पहले कट्स तेज़ हो जाते हैं। यह इत्तेफ़ाक़ नहीं, यह पेसिंग है। स्लाइडर खिसकाइए और इसे महसूस कीजिए।",
    "mr-IN": "कोणताही चित्रपट ट्रेलर पहा, तुम्हाला एक गोष्ट लक्षात येईल. क्लायमॅक्सच्या आधी कट्स वेगवान होतात. हा योगायोग नाही, ही पेसिंग आहे. स्लायडर हलवा आणि ते अनुभवा."
  },

  // Scopes the post-lesson Q&A — Neel answers only from this text,
  // and redirects back to topic if asked something unrelated.
  qaContext: "This lesson teaches Pacing (how fast/slow shots change) and Rhythm (the pattern pacing creates over time). Slow pacing = 3-5 second shots, feels calm/deliberate. Fast pacing = under 1 second shots, feels urgent/intense. Editors vary pacing to build and release tension, like verses and chorus in a song. Includes a worked example on cutting on the beat of music."
};
