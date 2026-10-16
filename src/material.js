// Entry point for the vendored Material Web bundle (built to assets/material.js).
// Import only the components the page uses, never @material/web/all.js.
import '@material/web/button/filled-button.js';
import '@material/web/button/outlined-button.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/icon/icon.js';
import '@material/web/chips/chip-set.js';
import '@material/web/chips/assist-chip.js';
import '@material/web/list/list.js';
import '@material/web/list/list-item.js';
import '@material/web/divider/divider.js';
import '@material/web/elevation/elevation.js';
import '@material/web/ripple/ripple.js';
import '@material/web/focus/md-focus-ring.js';

// Theme toggle: system -> light -> dark -> system. Without JS the page follows
// prefers-color-scheme through assets/theme.css.
const KEY = 'theme';
const ORDER = ['system', 'light', 'dark'];
const ICON = { system: 'brightness_auto', light: 'light_mode', dark: 'dark_mode' };
const NEXT_LABEL = {
  system: 'Theme: system. Switch to light theme',
  light: 'Theme: light. Switch to dark theme',
  dark: 'Theme: dark. Switch to system theme',
};

function read() {
  try {
    const v = localStorage.getItem(KEY);
    return ORDER.includes(v) ? v : 'system';
  } catch {
    return 'system';
  }
}

function apply(mode) {
  const root = document.documentElement;
  if (mode === 'system') root.removeAttribute('data-theme');
  else root.setAttribute('data-theme', mode);
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.setAttribute('aria-label', NEXT_LABEL[mode]);
    btn.title = NEXT_LABEL[mode];
    const icon = btn.querySelector('md-icon');
    if (icon) icon.textContent = ICON[mode];
  }
  // Keep the browser UI color in step with the top app bar.
  const bar = getComputedStyle(root).getPropertyValue('--md-sys-color-surface-container').trim();
  document.querySelectorAll('meta[name="theme-color"]').forEach((m) => {
    if (mode === 'system') m.content = m.dataset.default || m.content;
    else {
      m.dataset.default ||= m.content;
      m.content = bar;
    }
  });
}

let mode = read();
apply(mode);

document.getElementById('theme-toggle')?.addEventListener('click', () => {
  mode = ORDER[(ORDER.indexOf(mode) + 1) % ORDER.length];
  try {
    if (mode === 'system') localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, mode);
  } catch {
    /* storage unavailable: the choice lasts for this page view only */
  }
  apply(mode);
});

// M3 top app bar: switch to the surface-container color once content scrolls under it.
const bar = document.querySelector('.top-app-bar');
if (bar) {
  const onScroll = () => bar.classList.toggle('is-scrolled', window.scrollY > 4);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}
