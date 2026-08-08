/* ============================================================
   FILLED EXAMPLES — one per visualType, for reference when
   writing a new lesson. Each of these is a complete, working
   LESSON object you could paste straight into a page.
   ============================================================ */

// 1. pacingCompare — Video Editing / Pacing & Rhythm (Neel)
const LESSON_PACING = {
  mentor: "Neel",
  mentorRole: "Video Editing Mentor",
  visualType: "pacingCompare",
  visualParams: {
    minShotSeconds: 0.3, maxShotSeconds: 4.0,
    frameCountAtFast: 22, frameCountAtSlow: 4
  },
  narration: {
    "en-US": "Watch any movie trailer and you'll notice something. The cuts get faster right before the climax. That's not an accident, it's pacing. Slide the scrubber and feel it change.",
    "hi-IN": "कोई भी फ़िल्म ट्रेलर देखिए, आपको एक बात नज़र आएगी। क्लाइमेक्स से ठीक पहले कट्स तेज़ हो जाते हैं। यह इत्तेफ़ाक़ नहीं, यह पेसिंग है। स्लाइडर खिसकाइए और इसे महसूस कीजिए।",
    "mr-IN": "कोणताही चित्रपट ट्रेलर पहा, तुम्हाला एक गोष्ट लक्षात येईल. क्लायमॅक्सच्या आधी कट्स वेगवान होतात. हा योगायोग नाही, ही पेसिंग आहे. स्लायडर हलवा आणि ते अनुभवा."
  },
  qaContext: "This lesson teaches Pacing (how fast/slow shots change) and Rhythm (the pattern pacing creates over time). Slow pacing = 3-5 second shots, feels calm/deliberate. Fast pacing = under 1 second shots, feels urgent/intense. Editors vary pacing to build and release tension, like verses and chorus in a song. Includes a worked example on cutting on the beat of music."
};

// 2. timeline — Entrepreneurship / "5 steps to your first sale" (Diya)
const LESSON_TIMELINE = {
  mentor: "Diya",
  mentorRole: "Entrepreneurship Mentor",
  visualType: "timeline",
  visualParams: {
    steps: ["Find the problem", "Sketch a fix", "Show 5 people", "Take feedback", "First sale"]
  },
  narration: {
    "en-US": "Every business starts the same way. Find a real problem, sketch a simple fix, and show it to five people before you build anything big.",
    "hi-IN": "हर बिज़नेस की शुरुआत एक जैसी होती है। एक असली समस्या ढूँढिए, एक आसान समाधान बनाइए, और कुछ बड़ा बनाने से पहले पाँच लोगों को दिखाइए।",
    "mr-IN": "प्रत्येक व्यवसाय अशाच प्रकारे सुरू होतो. खरी समस्या शोधा, सोपा उपाय तयार करा आणि मोठं काहीतरी बनवण्याआधी पाच लोकांना दाखवा."
  },
  qaContext: "This lesson covers the 5-step lean approach to a first sale: 1) Find the problem, 2) Sketch a fix, 3) Show 5 people, 4) Take feedback, 5) First sale. Emphasis on validating before building anything big, and treating rejection at step 3-4 as useful data, not failure."
};

// 3. beforeAfter — AI & Creative Tech / prompt refinement (Aarav)
const LESSON_BEFORE_AFTER = {
  mentor: "Aarav",
  mentorRole: "AI & Creative Tech Mentor",
  visualType: "beforeAfter",
  visualParams: {
    before: { title: "Vague prompt", value: "\"make it better\"" },
    after: { title: "Specific prompt", value: "\"add warmer light, softer shadows\"" }
  },
  narration: {
    "en-US": "A vague prompt gives a vague result. The more specific you are about what should change, the closer the AI gets to what's in your head.",
    "hi-IN": "एक अस्पष्ट प्रॉम्प्ट अस्पष्ट परिणाम देता है। आप जितना स्पष्ट रूप से बताएँगे कि क्या बदलना है, AI उतना ही आपके सोच के करीब पहुँचेगा।",
    "mr-IN": "अस्पष्ट प्रॉम्प्टमुळे अस्पष्ट निकाल मिळतो. काय बदलायचं आहे हे जितकं स्पष्टपणे सांगाल, तितकं AI तुमच्या विचाराच्या जवळ पोहोचेल."
  },
  qaContext: "This lesson teaches prompt specificity: vague prompts like 'make it better' give vague results, while specific prompts naming exact changes (lighting, shadows, color) get closer to the desired outcome. Core idea: the AI can't read your mind, only your words."
};

// 4. buildUp — Digital Content Creation / audience growth (Meera)
const LESSON_BUILDUP = {
  mentor: "Meera",
  mentorRole: "Digital Content Creation Mentor",
  visualType: "buildUp",
  visualParams: {
    values: [15, 30, 42, 68, 100]
  },
  narration: {
    "en-US": "Growth is rarely one big jump. It's five small, consistent posts, each one reaching a little further than the last.",
    "hi-IN": "ग्रोथ शायद ही कभी एक बड़ी छलांग होती है। यह पाँच छोटी, लगातार पोस्ट्स होती हैं, हर एक पिछली से थोड़ा आगे पहुँचती है।",
    "mr-IN": "वाढ क्वचितच एका मोठ्या उडीने होते. ती पाच छोट्या, सातत्यपूर्ण पोस्ट्समुळे होते, प्रत्येक आधीच्या पेक्षा थोडी पुढे पोहोचते."
  },
  qaContext: "This lesson covers consistent posting as the driver of audience growth, shown as 5 posts growing from 15 to 100 (indexed reach). Core idea: steady, repeated small posts compound over time rather than one viral post doing all the work."
};
