// Waves4Youth — Learning Portal engine
// Expects a global PROGRAM object defined inline on each learn-*.html page:
// PROGRAM = { slug, name, weeks, tools, phases: [{name, weeks, topics:[...], mission}] }

(function () {
  if (typeof PROGRAM === 'undefined') return;

  var STORAGE_KEY = 'w4y_progress_' + PROGRAM.slug;

  function loadDone() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) { return []; }
  }
  function saveDone(arr) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(arr)); } catch (e) {}
  }
  function saveLast(id) {
    try { localStorage.setItem(STORAGE_KEY + '_last', id); } catch (e) {}
  }
  function loadLast() {
    try { return localStorage.getItem(STORAGE_KEY + '_last'); } catch (e) { return null; }
  }

  // Build a flat lesson list with unique ids: p{phaseIdx}-t{topicIdx} and p{phaseIdx}-mission
  var flat = [];
  PROGRAM.phases.forEach(function (phase, pi) {
    phase.topics.forEach(function (topic, ti) {
      flat.push({ id: 'p' + pi + '-t' + ti, phaseIdx: pi, kind: 'topic', title: topic, phase: phase });
    });
    flat.push({ id: 'p' + pi + '-mission', phaseIdx: pi, kind: 'mission', title: phase.mission, phase: phase });
  });

  var doneIds = loadDone();
  var currentId = loadLast() || flat[0].id;

  function isDone(id) { return doneIds.indexOf(id) !== -1; }
  function toggleDone(id) {
    var idx = doneIds.indexOf(id);
    if (idx === -1) doneIds.push(id); else doneIds.splice(idx, 1);
    saveDone(doneIds);
    renderProgress();
    renderSidebar();
    renderMain();
  }

  function renderProgress() {
    var pct = Math.round((doneIds.length / flat.length) * 100);
    var fill = document.getElementById('portalProgressFill');
    var label = document.getElementById('portalProgressLabel');
    if (fill) fill.style.width = pct + '%';
    if (label) label.textContent = doneIds.length + ' / ' + flat.length + ' lessons · ' + pct + '% complete';
  }

  function lessonObjectives(item) {
    if (item.kind === 'mission') {
      return [
        'Apply everything from this phase in one real, portfolio-ready project.',
        'Get AI Mentor feedback before you mark this mission complete.',
        'This project becomes part of your final Waves4Youth portfolio.'
      ];
    }
    return [
      'Understand the core concept behind "' + item.title.replace(/&amp;/g, '&') + '" through guided walkthroughs.',
      'Practice with hands-on exercises using industry-standard tools.',
      'Build toward your ' + item.phase.mission.replace(/&amp;/g, '&') + ' mission.'
    ];
  }

  function renderSidebar() {
    var root = document.getElementById('portalSidebarLessons');
    if (!root) return;
    root.innerHTML = '';
    PROGRAM.phases.forEach(function (phase, pi) {
      var phaseEl = document.createElement('div');
      phaseEl.className = 'portal-phase';
      var containsCurrent = flat.some(function (it) { return it.phaseIdx === pi && it.id === currentId; });
      if (containsCurrent) phaseEl.classList.add('open');

      var head = document.createElement('div');
      head.className = 'portal-phase-head';
      head.innerHTML = '<span><span class="portal-phase-num">' + (pi + 1) + '</span>' + phase.name + '</span>' +
        '<span style="display:flex;align-items:center;gap:8px"><span class="pweeks-mini">' + phase.weeks + '</span>' +
        '<svg class="portal-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg></span>';
      head.addEventListener('click', function () { phaseEl.classList.toggle('open'); });
      phaseEl.appendChild(head);

      var lessonsWrap = document.createElement('div');
      lessonsWrap.className = 'portal-lessons';

      flat.filter(function (it) { return it.phaseIdx === pi; }).forEach(function (item) {
        var row = document.createElement('div');
        row.className = 'portal-lesson' + (item.kind === 'mission' ? ' is-mission' : '') + (isDone(item.id) ? ' is-done' : '') + (item.id === currentId ? ' is-active' : '');
        row.innerHTML = '<span class="portal-check">' + (isDone(item.id) ? '✓' : '') + '</span>' +
          '<span class="portal-lesson-title">' + (item.kind === 'mission' ? '🏆 ' : '') + item.title + '</span>';
        row.addEventListener('click', function () {
          currentId = item.id;
          saveLast(currentId);
          renderSidebar();
          renderMain();
        });
        lessonsWrap.appendChild(row);
      });

      phaseEl.appendChild(lessonsWrap);
      root.appendChild(phaseEl);
    });
  }

  function findItem(id) {
    return flat.filter(function (it) { return it.id === id; })[0];
  }

  function renderMain() {
    var main = document.getElementById('portalMain');
    if (!main) return;
    var item = findItem(currentId);
    if (!item) { item = flat[0]; currentId = item.id; }

    if (doneIds.length === flat.length) {
      main.innerHTML = '<div class="portal-complete-banner">' +
        '<div class="big-check">🎓</div>' +
        '<h2>Program Complete!</h2>' +
        '<p class="muted">You\'ve finished every lesson and mission in ' + PROGRAM.name + '. Your certificate is ready.</p>' +
        '<a href="' + PROGRAM.coursePage + '#pricing" class="btn btn-primary" style="margin-top:16px">Claim Your Certificate →</a>' +
        '</div>';
      return;
    }

    var idx = flat.indexOf(item);
    var prev = flat[idx - 1];
    var next = flat[idx + 1];
    var toolsHtml = (PROGRAM.tools || []).slice(0, 4).map(function (t) { return '<span class="pill">' + t + '</span>'; }).join('');

    var bodyHtml = '';
    if (item.kind === 'mission') {
      bodyHtml = '<div class="portal-mission-block"><h5>Capstone Mission — Phase ' + (item.phaseIdx + 1) + '</h5>' +
        '<p>Put everything from "' + item.phase.name.replace(/&amp;/g, '&') + '" into practice with one real, shareable project. This is what goes into your final portfolio.</p></div>';
    }

    main.innerHTML =
      '<div class="portal-crumb">' + PROGRAM.short + ' → Phase ' + (item.phaseIdx + 1) + ': ' + item.phase.name + '</div>' +
      '<div class="portal-lesson-header"><div><h2>' + (item.kind === 'mission' ? '🏆 ' : '') + item.title + '</h2></div></div>' +
      '<div class="portal-meta-row"><span>⏱️ ~45–60 min</span><span>📍 ' + item.phase.weeks + '</span><span>' + (item.kind === 'mission' ? '🏆 Capstone Mission' : '📘 Lesson') + '</span></div>' +
      '<div class="portal-video-block"><div class="pv-play">▶</div><span class="portal-video-note">Lesson video — added as your cohort goes live</span></div>' +
      bodyHtml +
      '<div class="portal-body"><p>' + (item.kind === 'mission'
        ? 'Use everything you\'ve learned in this phase to complete this mission end-to-end. Submit it to your AI Mentor for feedback, then add it straight to your Waves4Youth portfolio.'
        : 'This lesson walks you through "' + item.title.replace(/&amp;/g, '&') + '", one of the core building blocks of the ' + item.phase.name.replace(/&amp;/g, '&') + ' phase. Follow along, practice with the provided exercise files, and check your work against the reference examples before moving on.') + '</p></div>' +
      '<div class="portal-objectives"><h5>What You\'ll Learn</h5><ul>' + lessonObjectives(item).map(function (o) { return '<li>' + o + '</li>'; }).join('') + '</ul></div>' +
      (toolsHtml ? '<div class="portal-tools-used">' + toolsHtml + '</div>' : '') +
      '<div class="portal-actions">' +
        '<button class="btn ' + (isDone(item.id) ? 'btn-primary portal-mark-btn is-done' : 'btn-outline portal-mark-btn') + '" id="portalMarkBtn">' +
          (isDone(item.id) ? '✓ Completed' : 'Mark as Complete') +
        '</button>' +
        '<div class="portal-nav-btns">' +
          (prev ? '<button class="btn btn-outline btn-sm" id="portalPrevBtn">← Previous</button>' : '') +
          (next ? '<button class="btn btn-primary btn-sm" id="portalNextBtn">Next →</button>' : '') +
        '</div>' +
      '</div>';

    var markBtn = document.getElementById('portalMarkBtn');
    if (markBtn) markBtn.addEventListener('click', function () { toggleDone(item.id); });
    var prevBtn = document.getElementById('portalPrevBtn');
    if (prevBtn) prevBtn.addEventListener('click', function () { currentId = prev.id; saveLast(currentId); renderSidebar(); renderMain(); window.scrollTo({top: document.getElementById('portalMain').offsetTop - 100, behavior:'smooth'}); });
    var nextBtn = document.getElementById('portalNextBtn');
    if (nextBtn) nextBtn.addEventListener('click', function () { currentId = next.id; saveLast(currentId); renderSidebar(); renderMain(); window.scrollTo({top: document.getElementById('portalMain').offsetTop - 100, behavior:'smooth'}); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    var headEl = document.getElementById('portalSidebarHead');
    if (headEl) headEl.innerHTML = '<h4>' + PROGRAM.name + '</h4><div class="portal-progress-bar"><div class="portal-progress-fill" id="portalProgressFill"></div></div><div class="portal-progress-label" id="portalProgressLabel"></div>';
    renderProgress();
    renderSidebar();
    renderMain();
  });
})();
