// Waves4Youth — shared site behaviour
document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('mobile-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Generic pill/tab filter groups: [data-filter-group] wraps [data-filter] pills
  // and controls visibility of [data-filter-item] elements with matching data-category.
  document.querySelectorAll('[data-filter-group]').forEach(function (group) {
    var pills = group.querySelectorAll('[data-filter]');
    var scope = document.querySelector(group.getAttribute('data-filter-group'));
    if (!scope) return;
    var items = scope.querySelectorAll('[data-filter-item]');
    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        pills.forEach(function (p) { p.classList.remove('is-active'); });
        pill.classList.add('is-active');
        var val = pill.getAttribute('data-filter');
        items.forEach(function (item) {
          var cat = item.getAttribute('data-filter-item');
          item.style.display = (val === 'all' || cat === val) ? '' : 'none';
        });
      });
    });
  });

  // FAQ accordions: [data-faq] toggles sibling [data-faq-answer]
  document.querySelectorAll('[data-faq]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.faq-item');
      if (!item) return;
      var wasOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item.open').forEach(function (el) {
        el.classList.remove('open');
      });
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
