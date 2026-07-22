// mentor-widget.js
// One mentor chat+voice widget, reused across every track by passing a config.
// IMPORTANT: this calls your existing Deno proxy the same way your other
// mentors (Asha, Meera, Kiran) already do. I don't have mentor-chat.js's exact
// request shape in this session — I've matched the pattern described in our
// build notes (POST messages + system prompt to the proxy). If your proxy
// expects a different shape, tell me and I'll adjust this one function.

export function createMentorWidget(config){
  // config: { name, persona, voicePref, trackContext, proxyUrl, containerId }
  const {
    name,
    persona,
    voicePref = 'female',
    trackContext,
    proxyUrl = 'https://solar-armadillo-4814.waves4youth.deno.net',
    containerId
  } = config;

  const container = document.getElementById(containerId);
  if (!container){ console.warn('mentor-widget: container not found', containerId); return; }

  const LANG_NAMES = {
    en: 'English', mr: 'Marathi (मराठी)', hi: 'Hindi (हिंदी)', ta: 'Tamil (தமிழ்)',
    bn: 'Bengali (বাংলা)', kn: 'Kannada (ಕನ್ನಡ)', ml: 'Malayalam (മലയാളം)'
  };
  const LANG_VOICE_PREFIX = { en: 'en', mr: 'mr', hi: 'hi', ta: 'ta', bn: 'bn', kn: 'kn', ml: 'ml' };

  let history = [];
  let voice = null;
  let currentLang = 'en';

  function pickVoice(){
    const voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
    const prefix = LANG_VOICE_PREFIX[currentLang] || 'en';
    voice = voices.find(v => v.lang.toLowerCase().startsWith(prefix) && /female/i.test(v.name))
         || voices.find(v => v.lang.toLowerCase().startsWith(prefix))
         || voices.find(v => v.lang.startsWith('en'))
         || voices[0] || null;
  }
  if (window.speechSynthesis){
    window.speechSynthesis.onvoiceschanged = pickVoice;
    pickVoice();
  }

  function speak(text){
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(stripMarkdown(text));
    if (voice) utter.voice = voice;
    utter.rate = 1.0;
    window.speechSynthesis.speak(utter);
  }

  function stripMarkdown(t){
    return t.replace(/[*_#`]/g, '').replace(/\[(.*?)\]\(.*?\)/g, '$1');
  }

  function render(){
    container.innerHTML = `
      <div class="mw-header" style="display:flex;align-items:center;justify-content:space-between;gap:10px;">
        <span>✨ ${name}</span>
        <select id="${containerId}-lang" class="mw-lang-select" aria-label="Reply language">
          ${Object.entries(LANG_NAMES).map(([code,label]) => `<option value="${code}">${label}</option>`).join('')}
        </select>
      </div>
      <div class="mw-messages" id="${containerId}-msgs"></div>
      <div class="mw-input-row">
        <input id="${containerId}-input" type="text" placeholder="Ask ${name} anything..." />
        <button id="${containerId}-send">Send</button>
        <button id="${containerId}-mute" title="Toggle voice">🔊</button>
      </div>`;
    document.getElementById(containerId + '-send').onclick = handleSend;
    document.getElementById(containerId + '-input').addEventListener('keydown', e => {
      if (e.key === 'Enter') handleSend();
    });
    document.getElementById(containerId + '-lang').addEventListener('change', (e) => {
      currentLang = e.target.value;
      pickVoice();
    });
    let muted = false;
    document.getElementById(containerId + '-mute').onclick = () => {
      muted = !muted;
      document.getElementById(containerId + '-mute').textContent = muted ? '🔇' : '🔊';
      if (muted && window.speechSynthesis) window.speechSynthesis.cancel();
    };
    window['__' + containerId + '_muted'] = () => muted;
  }

  function appendMessage(role, text){
    const msgs = document.getElementById(containerId + '-msgs');
    const bubble = document.createElement('div');
    bubble.className = 'mw-bubble mw-' + role;
    bubble.textContent = text;
    msgs.appendChild(bubble);
    msgs.scrollTop = msgs.scrollHeight;
  }

  async function handleSend(){
    const input = document.getElementById(containerId + '-input');
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    appendMessage('user', text);
    history.push({ role: 'user', content: text });

    appendMessage('mentor', '...');
    const msgs = document.getElementById(containerId + '-msgs');
    const thinkingBubble = msgs.lastChild;

    try {
      const res = await fetch(proxyUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system: persona + `\n\nContext: student is currently in the ${trackContext} track. Keep answers encouraging, age-appropriate, and under 120 words unless asked for more detail. IMPORTANT: reply only in ${LANG_NAMES[currentLang]}, regardless of what language the student's message is written in.`,
          messages: history
        })
      });
      const data = await res.json();
      const reply = (data.content && data.content[0] && data.content[0].text) || "Sorry, I couldn't think of a reply just now — try again?";
      thinkingBubble.textContent = reply;
      history.push({ role: 'assistant', content: reply });
      const muted = window['__' + containerId + '_muted'] && window['__' + containerId + '_muted']();
      if (!muted) speak(reply);
    } catch (e) {
      thinkingBubble.textContent = "I'm having trouble connecting right now — please try again in a moment.";
      console.error('mentor-widget fetch failed', e);
    }
  }

  render();
  return { appendMessage };
}
