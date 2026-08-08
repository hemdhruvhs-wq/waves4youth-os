/* ============================================================
   W4Y MENTOR Q&A — shared engine (4th shared file)
   Include on every lesson page, across every track/subject —
   same pattern as mentor-visuals.js. Mounts a "Ask [Mentor]
   about [Topic]" panel at the bottom of a lesson.

   Usage (same LESSON object already used for MentorVisuals):

     MentorQA.mount('#lessonQA', LESSON);

   Requires lesson.qaContext — a short, plain-text summary of
   what this specific lesson covers. This is what keeps every
   answer scoped to the lesson topic instead of turning into a
   general chatbot. See lesson-template.js for the field.
   ============================================================ */

const MentorQA = (function () {

  /* --------------------------------------------------------
     1. BACKEND CALL
     Wire this to your existing AI mentor backend — the same
     Deno Deploy proxy already used by mentor-chat.js, so the
     API key stays server-side and nothing changes about your
     security setup. Only the prompt changes: it's constrained
     to lesson.qaContext instead of open-ended chat.
     -------------------------------------------------------- */
  const MENTOR_API_ENDPOINT = "https://clear-oriole-3523.waves4youth.deno.net/mentor-qa";
  // ^ Replace with your actual endpoint if this differs from mentor-chat.js's.

  async function askMentor(lesson, question, langCode) {
    const systemContext =
      `You are ${lesson.mentor}, a mentor on Waves4Youth. Answer ONLY using ` +
      `the following lesson content — if the question is unrelated to this ` +
      `lesson, gently redirect the student back to the topic instead of ` +
      `answering. Keep answers short (2-4 sentences), spoken in a friendly, ` +
      `encouraging tone suitable for a student in grades 5-12. Respond in ` +
      `the language: ${langCode}.\n\nLesson content:\n${lesson.qaContext}`;

    try {
      const res = await fetch(MENTOR_API_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: systemContext,
          question: question,
          mentor: lesson.mentor,
          lang: langCode
        })
      });
      if (!res.ok) throw new Error("Mentor API error: " + res.status);
      const data = await res.json();
      return data.answer || data.text || "";
    } catch (err) {
      console.error("MentorQA: request failed", err);
      return null;
    }
  }

  /* --------------------------------------------------------
     2. SPEECH-TO-TEXT (mic input)
     Uses the Web Speech API's recognition side — the input
     counterpart to the speechSynthesis already used for
     narration in mentor-visuals.js.
     -------------------------------------------------------- */
  function getRecognizer(langCode) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) return null;
    const rec = new SR();
    rec.lang = langCode;
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    return rec;
  }

  /* --------------------------------------------------------
     3. MARKUP SHELL
     -------------------------------------------------------- */
  function buildShell(root, lesson) {
    root.innerHTML = `
      <div class="mv-card mq-card">
        <div class="mv-mentor-row">
          <div class="mv-avatar-wrap" data-mq="avatarWrap">
            <div class="mv-avatar-ring"></div>
            <div class="mv-avatar"><img data-mq="avatarImg" alt="${lesson.mentor}"></div>
          </div>
          <div class="mv-mentor-meta">
            <div class="mv-mentor-name">Ask ${lesson.mentor}</div>
            <div class="mv-mentor-role">about this lesson</div>
          </div>
        </div>

        <div class="mq-thread" data-mq="thread"></div>

        <div class="mq-input-row">
          <button class="mq-mic" data-mq="micBtn" title="Ask by voice">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.92V21h2v-3.08A7 7 0 0 0 19 11h-2z"/></svg>
          </button>
          <input type="text" data-mq="textInput" placeholder="Type a question about this lesson…">
          <button class="mq-send" data-mq="sendBtn">Ask</button>
        </div>
      </div>
    `;
  }

  /* --------------------------------------------------------
     4. THREAD RENDERING — student question + mentor answer,
     each answer also speakable via the avatar's TTS ring, same
     visual language as the narration block in mentor-visuals.js.
     -------------------------------------------------------- */
  function addBubble(thread, role, text) {
    const bubble = document.createElement('div');
    bubble.className = 'mq-bubble ' + role;
    bubble.textContent = text;
    thread.appendChild(bubble);
    thread.scrollTop = thread.scrollHeight;
    return bubble;
  }

  function addThinkingBubble(thread) {
    const bubble = document.createElement('div');
    bubble.className = 'mq-bubble mentor thinking';
    bubble.innerHTML = `<span></span><span></span><span></span>`;
    thread.appendChild(bubble);
    thread.scrollTop = thread.scrollHeight;
    return bubble;
  }

  function speak(text, langCode, avatarWrap) {
    if (!('speechSynthesis' in window)) return;
    speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = langCode;
    utter.rate = 0.95;
    utter.onstart = () => avatarWrap.classList.add('speaking');
    utter.onend = () => avatarWrap.classList.remove('speaking');
    speechSynthesis.speak(utter);
  }

  /* --------------------------------------------------------
     5. PUBLIC API
     -------------------------------------------------------- */
  function mount(selector, lesson) {
    const root = typeof selector === 'string' ? document.querySelector(selector) : selector;
    if (!root) { console.error('MentorQA.mount: container not found', selector); return; }
    if (!lesson.qaContext) {
      console.warn('MentorQA.mount: lesson.qaContext missing — answers will not be scoped to the lesson topic.');
    }

    buildShell(root, lesson);

    const thread = root.querySelector('[data-mq="thread"]');
    const micBtn = root.querySelector('[data-mq="micBtn"]');
    const textInput = root.querySelector('[data-mq="textInput"]');
    const sendBtn = root.querySelector('[data-mq="sendBtn"]');
    const avatarWrap = root.querySelector('[data-mq="avatarWrap"]');
    const avatarImg = root.querySelector('[data-mq="avatarImg"]');

    // Reuse the same face-lookup logic as MentorVisuals if it's loaded
    // on the page; otherwise fall back to a generic path.
    if (window.MentorVisuals && MentorVisuals.MENTOR_FACES) {
      const gender = lesson.mentorGender ||
        (MentorVisuals.MENTOR_GENDER && MentorVisuals.MENTOR_GENDER[lesson.mentor.toLowerCase()]) || "boy";
      avatarImg.src = MentorVisuals.MENTOR_FACES[gender];
    }

    // Default language: first key in the lesson's narration set, if present
    let currentLang = (lesson.narration && Object.keys(lesson.narration)[0]) || "en-US";

    async function handleAsk(questionText) {
      if (!questionText || !questionText.trim()) return;
      addBubble(thread, 'student', questionText);
      textInput.value = '';
      const thinking = addThinkingBubble(thread);

      const answer = await askMentor(lesson, questionText, currentLang);
      thinking.remove();

      if (answer) {
        addBubble(thread, 'mentor', answer);
        speak(answer, currentLang, avatarWrap);
      } else {
        addBubble(thread, 'mentor', "Sorry, I couldn't reach the mentor service just now — try again in a moment.");
      }
    }

    sendBtn.addEventListener('click', () => handleAsk(textInput.value));
    textInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleAsk(textInput.value);
    });

    micBtn.addEventListener('click', () => {
      const rec = getRecognizer(currentLang);
      if (!rec) {
        alert('Voice input is not supported in this browser.');
        return;
      }
      micBtn.classList.add('listening');
      rec.onresult = (e) => {
        const heard = e.results[0][0].transcript;
        handleAsk(heard);
      };
      rec.onerror = () => micBtn.classList.remove('listening');
      rec.onend = () => micBtn.classList.remove('listening');
      rec.start();
    });
  }

  return { mount, askMentor };
})();
