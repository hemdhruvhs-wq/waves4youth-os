/**
 * Waves4Youth — Shared AI Mentor Chat Widget
 * Used by all learn-*.html track pages.
 *
 * ⚠️ CARRIED OVER FROM THE PREVIOUS VERSION — STILL TRUE, PLEASE READ:
 * fetchMentorReply() below matches the request/response shape used elsewhere in this
 * codebase (the Phase Checkpoint feature in learn-video-editing.html posts to the same
 * MENTOR_PROXY_URL with the same {system, messages, max_tokens} body), which is a good
 * sign it's correct — but it has not been confirmed working live against a real reply.
 * Test one real message end-to-end before relying on this across all tracks.
 *
 * WHAT'S NEW IN THIS VERSION:
 * The mentor avatar is no longer a static 36px thumbnail. It's now a larger, animated
 * character portrait that:
 *   - idles with a slow, subtle breathing motion (so it reads as "alive", not a photo)
 *   - lights up with a glowing ring + gentle talking bounce + animated sound-wave bars
 *     whenever the mentor's voice is actually speaking (synced to real speech start/end,
 *     not a decorative loop)
 *   - respects prefers-reduced-motion — every animation degrades to a static state
 * This uses the same free browser Web Speech API voice that was already wired up here.
 * It is NOT a photorealistic lip-synced video avatar — that would require a paid
 * third-party avatar API (e.g. D-ID, HeyGen) with its own cost and integration work.
 * This is the strongest version of "animated talking mentor" buildable with free,
 * already-available browser tech.
 */

const MENTOR_PROXY_URL = "https://solar-armadillo-4814.waves4youth.deno.net";
// Confirmed request/response contract from the actual Deno proxy source:
//   POST body: { system: string, messages: [{role, content}], max_tokens?: number }
//   Response:  raw Anthropic Messages API response — reply text is in data.content[0].text

const LANGUAGES = [
  "English", "Hindi", "Marathi", "Tamil", "Telugu", "Bengali",
  "Gujarati", "Kannada", "Malayalam", "Punjabi", "Urdu"
];

// Maps our language names to browser speech-synthesis locale codes.
// Note: actual voice availability depends on the user's device/browser —
// not all languages have a built-in voice on every device, especially on
// older Android phones. Falls back to the browser's default voice if a
// specific language voice isn't installed.
const SPEECH_LOCALES = {
  "English": "en-IN", "Hindi": "hi-IN", "Marathi": "mr-IN", "Tamil": "ta-IN",
  "Telugu": "te-IN", "Bengali": "bn-IN", "Gujarati": "gu-IN", "Kannada": "kn-IN",
  "Malayalam": "ml-IN", "Punjabi": "pa-IN", "Urdu": "ur-IN"
};

// Consistent gender per mentor character, so switching languages doesn't
// flip Neel from a male-sounding voice to a female one or vice versa.
const MENTOR_GENDER = {
  Neel: "male", Vikram: "male", Aarav: "male", Rohan: "male", Arjun: "male",
  Sudhanshu: "male", Prithvi: "male", Rey: "male",
  Asha: "female", Meera: "female", Diya: "female", Kiran: "female", Zara: "female", Ira: "female",
  Devika: "female"
};

// Strips markdown/formatting symbols and emoji before speaking, so the
// voice doesn't literally read out "asterisk asterisk" or "hash".
function cleanForSpeech(text){
  return text
    .replace(/\*\*/g, "")
    .replace(/\*/g, "")
    .replace(/#/g, "")
    .replace(/_/g, "")
    .replace(/`/g, "")
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2190}-\u{21FF}]/gu, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function pickVoice(locale, genderPref){
  if (!('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  const langPrefix = locale.split("-")[0].toLowerCase();
  const localeVoices = voices.filter(v => v.lang && v.lang.toLowerCase().startsWith(langPrefix));
  const pool = localeVoices.length ? localeVoices : voices; // fall back to any voice if none match the locale
  if (genderPref) {
    const genderMatch = pool.find(v => v.name.toLowerCase().includes(genderPref));
    if (genderMatch) return genderMatch;
  }
  return pool[0] || null;
}

// Toggles the "speaking" animation state on every avatar currently on the page
// (in practice there's only ever one mentor chat panel open at a time).
function setAvatarSpeaking(isSpeaking){
  document.querySelectorAll(".mentor-avatar-wrap").forEach(el => {
    el.classList.toggle("is-speaking", isSpeaking);
  });
}

function speak(text, language, mentorName){
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel(); // stop any current speech first
  const locale = SPEECH_LOCALES[language] || "en-IN";
  const utter = new SpeechSynthesisUtterance(cleanForSpeech(text));
  utter.lang = locale;
  utter.rate = 0.95;
  const voice = pickVoice(locale, MENTOR_GENDER[mentorName]);
  if (voice) utter.voice = voice;
  utter.onstart = () => setAvatarSpeaking(true);
  utter.onend = () => setAvatarSpeaking(false);
  utter.onerror = () => setAvatarSpeaking(false);
  window.speechSynthesis.speak(utter);
}

function buildMentorChatHTML(mentorName, mentorImageUrl){
  const avatarInner = mentorImageUrl
    ? `<img class="mentor-avatar-img" src="${mentorImageUrl}" alt="${mentorName}">`
    : `<span class="mentor-avatar">💬</span>`;
  // The ring + wave bars are purely visual — they only animate while is-speaking is set.
  const avatarHtml = `
    <div class="mentor-avatar-wrap" aria-hidden="true">
      <span class="mentor-avatar-ring"></span>
      ${avatarInner}
      <span class="mentor-wave">
        <span></span><span></span><span></span><span></span>
      </span>
    </div>
  `;
  return `
    <div class="mentor-chat-panel">
      <div class="mentor-chat-head">
        ${avatarHtml}
        <div>
          <div class="mentor-name">${mentorName}</div>
          <div class="mentor-sub">Your AI mentor for this track</div>
        </div>
        <select class="mentor-lang-select" id="mentorLangSelect" title="Choose the language ${mentorName} replies in">
          ${LANGUAGES.map(l => `<option value="${l}">${l}</option>`).join("")}
        </select>
        <button class="mentor-speak-toggle" id="mentorSpeakToggle" title="Turn on speaking mode" aria-pressed="false">🔊</button>
      </div>
      <div class="mentor-chat-log" id="mentorChatLog"></div>
      <div class="mentor-chat-status" id="mentorChatStatus"></div>
      <div class="mentor-chat-input-row">
        <input type="text" id="mentorChatInput" placeholder="Ask ${mentorName} about this lesson…" />
        <button class="btn btn-primary" id="mentorChatSend">Send</button>
      </div>
    </div>
  `;
}

const MENTOR_CHAT_CSS = `
.mentor-chat-panel{border:1px solid var(--border);border-radius:16px;background:#fff;margin-top:20px;display:flex;flex-direction:column;overflow:hidden}
.mentor-chat-head{display:flex;align-items:center;gap:12px;padding:14px 16px;border-bottom:1px solid var(--border);flex-wrap:wrap}
@media(max-width:420px){
  .mentor-chat-head{gap:8px}
  .mentor-lang-select{margin-left:0;order:3;flex:1;min-width:120px}
  .mentor-speak-toggle{order:4}
}

/* --- Animated avatar --- */
.mentor-avatar-wrap{position:relative;width:60px;height:60px;flex-shrink:0;display:flex;align-items:center;justify-content:center}
.mentor-avatar{font-size:26px}
.mentor-avatar-img{width:56px;height:56px;border-radius:50%;object-fit:cover;flex-shrink:0;position:relative;z-index:2;
  border:2px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.12);
  animation:mentorIdle 4.5s ease-in-out infinite}
.mentor-avatar-ring{position:absolute;inset:-4px;border-radius:50%;z-index:1;
  background:conic-gradient(from 0deg,#FF6B6B,#D63AFF,#8A6BFF,#FF6B6B);
  opacity:0;transform:scale(.85);transition:opacity .3s ease,transform .3s ease}
.mentor-wave{position:absolute;bottom:-9px;left:50%;transform:translateX(-50%);display:flex;align-items:flex-end;gap:2px;
  height:10px;opacity:0;transition:opacity .2s ease;z-index:3}
.mentor-wave span{width:3px;border-radius:2px;background:linear-gradient(180deg,#D63AFF,#FF6B6B);height:3px}

/* Idle breathing motion — subtle, always on for a static photo to feel alive */
@keyframes mentorIdle{0%,100%{transform:scale(1)}50%{transform:scale(1.035)}}

/* Speaking state: ring glows + pulses, avatar gets a livelier bounce, wave bars animate */
.mentor-avatar-wrap.is-speaking .mentor-avatar-ring{opacity:1;transform:scale(1);animation:mentorRingPulse 1.1s ease-in-out infinite}
.mentor-avatar-wrap.is-speaking .mentor-avatar-img{animation:mentorTalk 0.5s ease-in-out infinite}
.mentor-avatar-wrap.is-speaking .mentor-wave{opacity:1}
.mentor-avatar-wrap.is-speaking .mentor-wave span{animation:mentorWave .9s ease-in-out infinite}
.mentor-avatar-wrap.is-speaking .mentor-wave span:nth-child(1){animation-delay:0s}
.mentor-avatar-wrap.is-speaking .mentor-wave span:nth-child(2){animation-delay:.15s}
.mentor-avatar-wrap.is-speaking .mentor-wave span:nth-child(3){animation-delay:.3s}
.mentor-avatar-wrap.is-speaking .mentor-wave span:nth-child(4){animation-delay:.45s}

@keyframes mentorRingPulse{0%,100%{box-shadow:0 0 0 0 rgba(214,58,255,.35)}50%{box-shadow:0 0 0 6px rgba(214,58,255,0)}}
@keyframes mentorTalk{0%,100%{transform:scale(1) translateY(0)}50%{transform:scale(1.06) translateY(-1px)}}
@keyframes mentorWave{0%,100%{height:3px}50%{height:10px}}

@media (prefers-reduced-motion: reduce){
  .mentor-avatar-img{animation:none}
  .mentor-avatar-wrap.is-speaking .mentor-avatar-ring{animation:none;opacity:1;transform:scale(1)}
  .mentor-avatar-wrap.is-speaking .mentor-avatar-img{animation:none}
  .mentor-avatar-wrap.is-speaking .mentor-wave span{animation:none;height:7px}
}

.mentor-name{font-weight:800;font-family:Poppins,sans-serif}
.mentor-sub{font-size:.75rem;color:var(--muted)}
.mentor-lang-select{margin-left:auto;font-size:.8rem;border-radius:8px;border:1px solid var(--border);padding:4px 8px}
.mentor-speak-toggle{font-size:1rem;border:1px solid var(--border);background:#fff;border-radius:8px;width:32px;height:32px;cursor:pointer;flex-shrink:0}
.mentor-speak-toggle[aria-pressed="true"]{background:var(--grad,linear-gradient(90deg,#FF6B6B,#D63AFF));color:#fff;border-color:transparent}
.mentor-msg-replay{background:none;border:0;cursor:pointer;font-size:.85rem;opacity:.6;margin-left:6px;vertical-align:middle}
.mentor-msg-replay:hover{opacity:1}
.mentor-chat-log{max-height:280px;min-height:80px;overflow-y:auto;padding:14px 16px;display:flex;flex-direction:column;gap:10px}
.mentor-msg{max-width:85%;padding:9px 13px;border-radius:14px;font-size:.88rem;line-height:1.4}
.mentor-msg.student{align-self:flex-end;background:var(--grad);color:#fff;border-bottom-right-radius:4px}
.mentor-msg.mentor{align-self:flex-start;background:var(--light);color:var(--ink);border-bottom-left-radius:4px}
.mentor-chat-status{padding:0 16px;font-size:.78rem;color:var(--muted);min-height:18px}
.mentor-chat-status.err{color:#c0392b}
.mentor-chat-input-row{display:flex;gap:8px;padding:12px 16px;border-top:1px solid var(--border)}
.mentor-chat-input-row input{flex:1;padding:10px 12px;border-radius:10px;border:1px solid var(--border);font-family:inherit;font-size:.88rem}
`;

/**
 * Initializes the mentor chat panel inside `containerEl`.
 * `getContext()` should return { mentorName, mentorBasePersona, currentModuleTitle, studentName }
 * — called fresh each time a message is sent, so it always reflects the current lesson.
 */
function initMentorChat(containerEl, getContext){
  if (!document.getElementById("mentor-chat-css")) {
    const style = document.createElement("style");
    style.id = "mentor-chat-css";
    style.textContent = MENTOR_CHAT_CSS;
    document.head.appendChild(style);
  }
  const ctx0 = getContext();
  containerEl.innerHTML = buildMentorChatHTML(ctx0.mentorName, ctx0.mentorImageUrl);

  const log = containerEl.querySelector("#mentorChatLog");
  const input = containerEl.querySelector("#mentorChatInput");
  const sendBtn = containerEl.querySelector("#mentorChatSend");
  const status = containerEl.querySelector("#mentorChatStatus");
  const langSelect = containerEl.querySelector("#mentorLangSelect");
  const speakToggle = containerEl.querySelector("#mentorSpeakToggle");
  let speakingModeOn = false;

  speakToggle.addEventListener("click", () => {
    speakingModeOn = !speakingModeOn;
    speakToggle.setAttribute("aria-pressed", String(speakingModeOn));
    speakToggle.title = speakingModeOn ? "Turn off speaking mode" : "Turn on speaking mode";
    if (!speakingModeOn && 'speechSynthesis' in window) { window.speechSynthesis.cancel(); setAvatarSpeaking(false); }
  });

  function appendMsg(role, text){
    const div = document.createElement("div");
    div.className = "mentor-msg " + role;
    div.textContent = text;
    if (role === "mentor") {
      const replay = document.createElement("button");
      replay.className = "mentor-msg-replay";
      replay.title = "Play this out loud";
      replay.textContent = "🔊";
      replay.onclick = () => speak(text, langSelect.value, getContext().mentorName);
      div.appendChild(replay);
    }
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
    if (role === "mentor" && speakingModeOn) speak(text, langSelect.value, getContext().mentorName);
  }

  async function fetchMentorReply(message, ctx, language){
    const systemPrompt = ctx.mentorBasePersona
      .replace(/{{studentLanguage}}/g, language)
      .replace(/{{studentName}}/g, ctx.studentName || "Student")
      .replace(/{{currentModule}}/g, ctx.currentModuleTitle || "");

    const resp = await fetch(MENTOR_PROXY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system: systemPrompt,
        messages: [{ role: "user", content: message }],
        max_tokens: 500
      })
    });
    const data = await resp.json();
    if (!resp.ok) throw new Error(data.error || ("Mentor proxy returned " + resp.status));
    // Anthropic Messages API shape: { content: [{ type: "text", text: "..." }], ... }
    const textBlock = (data.content || []).find(b => b.type === "text");
    return textBlock ? textBlock.text : null;
  }

  async function send(){
    const message = input.value.trim();
    if (!message) return;
    const ctx = getContext();
    const language = langSelect.value;

    appendMsg("student", message);
    input.value = "";
    sendBtn.disabled = true;
    status.textContent = ctx.mentorName + " is thinking…";
    status.className = "mentor-chat-status";

    try {
      const reply = await fetchMentorReply(message, ctx, language);
      appendMsg("mentor", reply || "Sorry, I didn't get a reply — please try again.");
      status.textContent = "";
    } catch (e) {
      console.error("Mentor chat error:", e);
      status.textContent = ctx.mentorName + " isn't responding right now — this usually means the mentor backend needs attention. Try again shortly.";
      status.className = "mentor-chat-status err";
    }
    sendBtn.disabled = false;
  }

  sendBtn.onclick = send;
  input.addEventListener("keydown", (e) => { if (e.key === "Enter") send(); });

  appendMsg("mentor", `Hi! I'm ${ctx0.mentorName}. Ask me anything about this lesson — pick your language above if you'd rather not chat in English.`);
}

window.W4Y_initMentorChat = initMentorChat;
