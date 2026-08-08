/* ============================================================
   W4Y MENTOR VISUALS — shared engine
   Include this ONE file (plus mentor-visuals.css) on every lesson
   page, across every track/profession. Do not copy this code
   into individual lessons — lessons only supply a LESSON object
   (see lesson-template.json / lesson-example-pacing.js) and call:

     MentorVisuals.mount('#lessonMount', LESSON);

   That's the entire integration per lesson.
   ============================================================ */

const MentorVisuals = (function () {

  /* --------------------------------------------------------
     1. STANDARD MENTOR FACES
     Two character designs only — boy and girl. Every mentor
     across every track points to one of these two image paths.
     Replace these paths with the real hosted asset URLs once
     uploaded (e.g. /assets/mentors/boy-face.png).
     -------------------------------------------------------- */
  const MENTOR_FACES = {
    boy: "/assets/mentors/boy-face.png",
    girl: "/assets/mentors/girl-face.png"
  };

  /* Optional: map mentor name -> gender, so lesson JSON only
     needs to state the mentor's name and this engine looks up
     the right face automatically. Extend this list as new
     mentor personas are added. Lesson JSON can still override
     with an explicit mentorGender field if needed. */
  const MENTOR_GENDER = {
    neel: "boy", vikram: "boy", aarav: "boy",
    rey: "boy", arjun: "boy", prithvi: "boy",
    asha: "girl", meera: "girl", diya: "girl",
    tara: "girl", ira: "girl", zara: "girl"
  };

  function faceFor(lesson) {
    const gender = lesson.mentorGender ||
      MENTOR_GENDER[(lesson.mentor || "").toLowerCase()] || "boy";
    return MENTOR_FACES[gender] || MENTOR_FACES.boy;
  }

  /* --------------------------------------------------------
     2. MARKUP SHELL
     Builds the standard card: avatar, controls, visual mount
     point, narration block. Every lesson gets this same shell;
     only the inner visual (step 3) changes per visualType.
     -------------------------------------------------------- */
  function buildShell(root, lesson) {
    const languages = Object.keys(lesson.narration || { "en-US": "" });
    const langOptions = languages.map(code =>
      `<option value="${code}">${LANG_LABELS[code] || code}</option>`
    ).join("");

    root.innerHTML = `
      <div class="mv-card">
        <div class="mv-mentor-row">
          <div class="mv-avatar-wrap" data-mv="avatarWrap">
            <div class="mv-avatar-ring"></div>
            <div class="mv-avatar"><img data-mv="avatarImg" src="${faceFor(lesson)}" alt="${lesson.mentor}"></div>
          </div>
          <div class="mv-mentor-meta">
            <div class="mv-mentor-name">${lesson.mentor}</div>
            <div class="mv-mentor-role"><span class="mv-dot"></span>${lesson.mentorRole || ""}</div>
          </div>
        </div>

        <div class="mv-controls">
          <select data-mv="langSelect">${langOptions}</select>
          <button class="mv-play" data-mv="playBtn">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            Play narration
          </button>
        </div>

        <div class="mv-visual" data-mv="visualMount"></div>

        <div class="mv-narration" data-mv="narration"></div>
      </div>
    `;
  }

  const LANG_LABELS = {
    "en-US": "English", "hi-IN": "हिन्दी", "mr-IN": "मराठी",
    "ta-IN": "தமிழ்", "te-IN": "తెలుగు", "bn-IN": "বাংলা",
    "gu-IN": "ગુજરાતી", "kn-IN": "ಕನ್ನಡ"
  };

  /* --------------------------------------------------------
     3. VISUAL RENDERERS — one function per visualType.
     Add a new visualType by adding a new case here; every
     lesson page automatically supports it via lesson.visualType.
     -------------------------------------------------------- */
  const VISUAL_RENDERERS = {

    pacingCompare(mount, lesson) {
      const p = lesson.visualParams || {};
      const min = p.minShotSeconds ?? 0.3;
      const max = p.maxShotSeconds ?? 4.0;
      const fMin = p.frameCountAtSlow ?? 4;
      const fMax = p.frameCountAtFast ?? 22;

      mount.innerHTML = `
        <div class="mv-visual-label"><span>SHOT STRIP</span><span data-mv="cutCount"></span></div>
        <div class="mv-strip" data-mv="strip"></div>
        <div class="mv-scrubber">
          <input type="range" data-mv="paceSlider" min="0" max="100" value="20">
          <div class="mv-scrubber-labels"><span>Slow — ${max}s/shot</span><span>Fast — ${min}s/shot</span></div>
        </div>
        <div class="mv-readout">
          <div class="mv-stat"><div class="mv-n" data-mv="shotLen"></div><div class="mv-l">Avg. shot length</div></div>
          <div class="mv-stat"><div class="mv-n" data-mv="cutsPerMin"></div><div class="mv-l">Cuts / minute</div></div>
          <div class="mv-stat"><div class="mv-mood" data-mv="moodWord">Calm</div><div class="mv-l">Feels</div></div>
        </div>
      `;
      const strip = mount.querySelector('[data-mv="strip"]');
      const slider = mount.querySelector('[data-mv="paceSlider"]');
      const shotLenEl = mount.querySelector('[data-mv="shotLen"]');
      const cutsPerMinEl = mount.querySelector('[data-mv="cutsPerMin"]');
      const moodWordEl = mount.querySelector('[data-mv="moodWord"]');
      const cutCountEl = mount.querySelector('[data-mv="cutCount"]');

      function frameCount(t){ return Math.round(fMin + (fMax - fMin) * t); }
      function shotLen(t){ return max - (max - min) * t; }
      function renderStrip(t){
        const n = frameCount(t);
        strip.innerHTML = '';
        for (let i = 0; i < n; i++) {
          const f = document.createElement('div');
          f.className = 'mv-frame';
          strip.appendChild(f);
        }
        cutCountEl.textContent = n + ' cuts';
      }
      function update(){
        const t = slider.value / 100;
        const len = shotLen(t);
        shotLenEl.textContent = len.toFixed(1) + 's';
        cutsPerMinEl.textContent = Math.round(60 / len);
        moodWordEl.textContent = t < 0.5 ? 'Calm' : 'Urgent';
        moodWordEl.className = 'mv-mood ' + (t < 0.5 ? 'calm' : 'urgent');
        renderStrip(t);
      }
      slider.addEventListener('input', update);
      update();

      let hitIndex = 0;
      const pulse = setInterval(() => {
        const frames = strip.querySelectorAll('.mv-frame');
        if (!frames.length) return;
        frames.forEach(f => f.classList.remove('hit'));
        hitIndex = (hitIndex + 1) % frames.length;
        frames[hitIndex].classList.add('hit');
      }, 260);
      return () => clearInterval(pulse); // cleanup fn
    },

    /* Generic sequence/steps visual — e.g. "5-step editing workflow",
       "3 acts of a story". visualParams.steps = ["Step 1", "Step 2", ...] */
    timeline(mount, lesson) {
      const steps = (lesson.visualParams && lesson.visualParams.steps) || [];
      mount.innerHTML = `
        <div class="mv-visual-label"><span>TIMELINE</span></div>
        <div class="mv-timeline" data-mv="tl"></div>
      `;
      const tl = mount.querySelector('[data-mv="tl"]');
      steps.forEach((label, i) => {
        if (i > 0) {
          const track = document.createElement('div');
          track.className = 'mv-tl-track';
          tl.appendChild(track);
        }
        const wrap = document.createElement('div');
        const dot = document.createElement('div');
        dot.className = 'mv-tl-dot';
        wrap.appendChild(dot);
        tl.appendChild(wrap);
      });
      const labelRow = document.createElement('div');
      labelRow.style.display = 'flex';
      labelRow.style.justifyContent = 'space-between';
      labelRow.style.marginTop = '4px';
      steps.forEach(label => {
        const l = document.createElement('div');
        l.className = 'mv-tl-label';
        l.textContent = label;
        l.style.flex = '1';
        labelRow.appendChild(l);
      });
      mount.appendChild(labelRow);
    },

    /* Generic comparison visual — e.g. "raw footage vs. graded footage",
       "before feedback vs. after feedback". visualParams.before / .after
       each take {title, value}. */
    beforeAfter(mount, lesson) {
      const p = lesson.visualParams || {};
      const before = p.before || { title: "Before", value: "" };
      const after = p.after || { title: "After", value: "" };
      mount.innerHTML = `
        <div class="mv-visual-label"><span>BEFORE / AFTER</span></div>
        <div class="mv-before-after">
          <div class="mv-ba-pane before">
            <div class="mv-ba-title">${before.title}</div>
            <div class="mv-ba-value">${before.value}</div>
          </div>
          <div class="mv-ba-pane after">
            <div class="mv-ba-title">${after.title}</div>
            <div class="mv-ba-value">${after.value}</div>
          </div>
        </div>
      `;
    },

    /* Generic stacking/growth visual — e.g. "audience grows over 6 posts",
       "tension builds over a scene". visualParams.values = [numbers]. */
    buildUp(mount, lesson) {
      const values = (lesson.visualParams && lesson.visualParams.values) || [20, 35, 50, 70, 100];
      const max = Math.max(...values);
      mount.innerHTML = `
        <div class="mv-visual-label"><span>BUILD-UP</span></div>
        <div class="mv-buildup" data-mv="bars"></div>
      `;
      const bars = mount.querySelector('[data-mv="bars"]');
      values.forEach(v => {
        const bar = document.createElement('div');
        bar.className = 'mv-bu-bar';
        bar.style.height = Math.round((v / max) * 100) + '%';
        bars.appendChild(bar);
      });
    }
  };

  /* --------------------------------------------------------
     4. NARRATION — TTS + karaoke highlight + avatar speaking ring.
     Shared across every visualType and every language.
     -------------------------------------------------------- */
  function wireNarration(root, lesson) {
    const narrationEl = root.querySelector('[data-mv="narration"]');
    const langSelect = root.querySelector('[data-mv="langSelect"]');
    const playBtn = root.querySelector('[data-mv="playBtn"]');
    const avatarWrap = root.querySelector('[data-mv="avatarWrap"]');

    function buildWordSpans(text) {
      narrationEl.innerHTML = '';
      text.split(/(\s+)/).forEach(w => {
        const span = document.createElement('span');
        span.className = 'mv-word';
        span.textContent = w;
        narrationEl.appendChild(span);
      });
    }
    buildWordSpans(lesson.narration[langSelect.value]);
    langSelect.addEventListener('change', () => {
      buildWordSpans(lesson.narration[langSelect.value]);
    });

    playBtn.addEventListener('click', () => {
      if (!('speechSynthesis' in window)) {
        alert('Speech synthesis not supported in this browser.');
        return;
      }
      speechSynthesis.cancel();
      const text = lesson.narration[langSelect.value];
      buildWordSpans(text);
      const spans = narrationEl.querySelectorAll('.mv-word');
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = langSelect.value;
      utter.rate = lesson.narrationRate || 0.95;

      utter.onstart = () => avatarWrap.classList.add('speaking');
      utter.onboundary = (e) => {
        if (e.name !== 'word' && e.charIndex === undefined) return;
        let count = 0, target = -1;
        for (let i = 0; i < spans.length; i++) {
          count += spans[i].textContent.length;
          if (count > e.charIndex) { target = i; break; }
        }
        spans.forEach(s => s.classList.remove('active'));
        if (target >= 0) spans[target].classList.add('active');
      };
      utter.onend = () => {
        spans.forEach(s => s.classList.remove('active'));
        avatarWrap.classList.remove('speaking');
      };
      speechSynthesis.speak(utter);
    });
  }

  /* --------------------------------------------------------
     5. PUBLIC API
     -------------------------------------------------------- */
  function mount(selector, lesson) {
    const root = typeof selector === 'string' ? document.querySelector(selector) : selector;
    if (!root) { console.error('MentorVisuals.mount: container not found', selector); return; }
    if (!lesson || !lesson.visualType || !VISUAL_RENDERERS[lesson.visualType]) {
      console.error('MentorVisuals.mount: unknown or missing visualType', lesson && lesson.visualType);
      return;
    }
    buildShell(root, lesson);
    const visualMount = root.querySelector('[data-mv="visualMount"]');
    VISUAL_RENDERERS[lesson.visualType](visualMount, lesson);
    wireNarration(root, lesson);
  }

  return { mount, MENTOR_FACES, MENTOR_GENDER, VISUAL_RENDERERS };
})();
