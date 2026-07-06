/**
 * Waves4Youth — Shared AI Mentor Chat Widget
 * Used by all 6 learn-*.html track pages.
 *
 * ⚠️ IMPORTANT — READ BEFORE DEPLOYING:
 * The fetchMentorReply() function below is a PLACEHOLDER. I don't have the source
 * of your existing Deno proxy (solar-armadillo-4814.waves4youth.deno.net) or the
 * meera-mentor.html / asha-mentor.html pages that were working yesterday, so I can't
 * guarantee this matches your real endpoint contract (URL path, request/response shape).
 *
 * If mentors aren't responding after you wire this in, the fastest fix is to send me
 * either (a) your Deno proxy's source, or (b) one working mentor HTML page (e.g.
 * neel-mentor.html) so I can match the exact request format instead of guessing.
 *
 * SEPARATELY: if Meera/Asha specifically stopped working "yesterday" after being fine
 * before, the most likely causes are — in order of likelihood:
 *   1. The exposed Anthropic API key (noted as a pending fix) was rotated/revoked,
 *      and the Deno proxy is still using the old key.
 *   2. The proxy hit a rate limit or quota cap.
 *   3. A CORS or domain-allowlist change on the proxy blocked requests from these pages.
 * Check your Deno Deploy logs for the exact error — that will confirm which of these it is.
 */

const MENTOR_PROXY_URL = "https://solar-armadillo-4814.waves4youth.deno.net/chat"; // ADJUST to match your real proxy route

const LANGUAGES = [
  "English", "Hindi", "Marathi", "Tamil", "Telugu", "Bengali",
  "Gujarati", "Kannada", "Malayalam", "Punjabi", "Urdu"
];

function buildMentorChatHTML(mentorName){
  return `
    <div class="mentor-chat-panel">
      <div class="mentor-chat-head">
        <span class="mentor-avatar">💬</span>
        <div>
          <div class="mentor-name">${mentorName}</div>
          <div class="mentor-sub">Your AI mentor for this track</div>
        </div>
        <select class="mentor-lang-select" id="mentorLangSelect" title="Choose the language ${mentorName} replies in">
          ${LANGUAGES.map(l => `<option value="${l}">${l}</option>`).join("")}
        </select>
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
.mentor-chat-head{display:flex;align-items:center;gap:10px;padding:14px 16px;border-bottom:1px solid var(--border)}
.mentor-avatar{font-size:22px}
.mentor-name{font-weight:800;font-family:Poppins,sans-serif}
.mentor-sub{font-size:.75rem;color:var(--muted)}
.mentor-lang-select{margin-left:auto;font-size:.8rem;border-radius:8px;border:1px solid var(--border);padding:4px 8px}
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
  containerEl.innerHTML = buildMentorChatHTML(ctx0.mentorName);

  const log = containerEl.querySelector("#mentorChatLog");
  const input = containerEl.querySelector("#mentorChatInput");
  const sendBtn = containerEl.querySelector("#mentorChatSend");
  const status = containerEl.querySelector("#mentorChatStatus");
  const langSelect = containerEl.querySelector("#mentorLangSelect");

  function appendMsg(role, text){
    const div = document.createElement("div");
    div.className = "mentor-msg " + role;
    div.textContent = text;
    log.appendChild(div);
    log.scrollTop = log.scrollHeight;
  }

  async function fetchMentorReply(message, ctx, language){
    const systemPrompt = ctx.mentorBasePersona
      .replace(/{{studentLanguage}}/g, language)
      .replace(/{{studentName}}/g, ctx.studentName || "Student")
      .replace(/{{currentModule}}/g, ctx.currentModuleTitle || "");

    const resp = await fetch(MENTOR_PROXY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ systemPrompt, message, mentor: ctx.mentorName })
    });
    if (!resp.ok) throw new Error("Mentor proxy returned " + resp.status);
    const data = await resp.json();
    return data.reply || data.message || data.text; // tolerate a couple of likely response shapes
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
