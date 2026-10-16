// Progressive enhancement only: the page is complete without this file.
(function () {
  'use strict';

  /* ---- Nav: scroll state ---- */
  var nav = document.querySelector('.nav');
  function onScroll() { nav.classList.toggle('is-scrolled', window.scrollY > 40); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Mobile overlay menu ---- */
  var toggle = nav.querySelector('.nav__toggle');
  var menu = document.getElementById('site-menu');
  var mq = window.matchMedia('(max-width: 1024px)');

  function focusables() {
    return [toggle].concat(Array.prototype.slice.call(menu.querySelectorAll('a')));
  }

  function setOpen(open, restoreFocus) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    if (open) {
      var first = menu.querySelector('a');
      if (first) first.focus();
    } else if (restoreFocus) {
      toggle.focus();
    }
  }
  function isOpen() { return toggle.getAttribute('aria-expanded') === 'true'; }

  toggle.addEventListener('click', function () { setOpen(!isOpen(), true); });

  menu.addEventListener('click', function (e) {
    if (e.target.closest('a') && isOpen()) setOpen(false, false);
  });

  document.addEventListener('keydown', function (e) {
    if (!isOpen()) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      setOpen(false, true);
    } else if (e.key === 'Tab') {
      // Keep focus inside the overlay (toggle + links) while it is open
      var items = focusables();
      var i = items.indexOf(document.activeElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); items[items.length - 1].focus(); }
      else if (!e.shiftKey && i === items.length - 1) { e.preventDefault(); items[0].focus(); }
    }
  });

  function onMq() { if (!mq.matches && isOpen()) setOpen(false, false); }
  if (mq.addEventListener) mq.addEventListener('change', onMq); else mq.addListener(onMq);

  /* ---- Achievements filter tabs ---- */
  var tablist = document.querySelector('.filter[role="tablist"]');
  var panel = document.getElementById('ach-panel');
  if (!tablist || !panel) return;

  var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));
  var tiles = Array.prototype.slice.call(panel.querySelectorAll('.tile'));

  panel.setAttribute('role', 'tabpanel');
  panel.setAttribute('aria-labelledby', 'tab-all');
  panel.tabIndex = 0; // the tiles hold no focusable content
  tablist.hidden = false;

  function select(tab, moveFocus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
    });
    var filter = tab.getAttribute('data-filter');
    tiles.forEach(function (tile) {
      tile.hidden = filter !== 'all' && tile.getAttribute('data-cat') !== filter;
    });
    panel.setAttribute('aria-labelledby', tab.id);
    if (moveFocus) tab.focus();
  }

  tablist.addEventListener('click', function (e) {
    var tab = e.target.closest('[role="tab"]');
    if (tab) select(tab, false);
  });

  tablist.addEventListener('keydown', function (e) {
    var i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    var next = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = tabs[(i + 1) % tabs.length];
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = tabs[(i - 1 + tabs.length) % tabs.length];
    else if (e.key === 'Home') next = tabs[0];
    else if (e.key === 'End') next = tabs[tabs.length - 1];
    if (next) { e.preventDefault(); select(next, true); }
  });
})();
