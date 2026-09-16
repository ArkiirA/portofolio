/* ============================================================
   TIME TRAVEL
   - Toggles between modern portfolio and retro mode
   - Plays a short era-decreasing sequence before switching
   - Updates a URL hash so the state is linkable
   ============================================================ */

const ERAS = [
  { year: '2026', label: 'CURRENT ERA' },
  { year: '2012', label: '' },
  { year: '2006', label: '' },
  { year: '1998', label: 'ARCHIVE FOUND' },
];

const REVERSE_ERAS = [
  { year: '1998', label: 'DEPARTING ARCHIVE' },
  { year: '2006', label: '' },
  { year: '2012', label: '' },
  { year: '2026', label: 'WELCOME BACK' },
];

const RETRO_CLASS = 'is-retro';
const HASH_RETRO = '#1998';
const HASH_MODERN = '#2026';

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getOverlay(): HTMLElement | null {
  return document.getElementById('timetravel-overlay');
}

function setEraVisible(step: HTMLElement, visible: boolean, final = false) {
  step.classList.toggle('is-visible', visible);
  if (final) step.classList.add('is-final');
}

async function playSequence(
  overlay: HTMLElement,
  eras: typeof ERAS
): Promise<void> {
  const inner = overlay.querySelector<HTMLElement>(
    '[data-timetravel-inner]'
  );
  if (!inner) return;

  inner.innerHTML = '';
  overlay.classList.add('is-active');

  const steps = eras.map((era) => {
    const el = document.createElement('div');
    el.className = 'timetravel-overlay__step';
    el.dataset.era = era.year;
    el.innerHTML = era.label
      ? `${era.label}<br />${era.year}<br />&darr;`
      : `${era.year}<br />&darr;`;
    inner.appendChild(el);
    return el;
  });

  for (let i = 0; i < steps.length; i++) {
    setEraVisible(steps[i], true, i === steps.length - 1);
    await wait(420);
  }

  await wait(360);
}

async function switchToRetro(): Promise<void> {
  const overlay = getOverlay();
  const body = document.body;

  if (overlay && !prefersReducedMotion()) {
    await playSequence(overlay, ERAS);
  }

  body.classList.add(RETRO_CLASS);
  document.documentElement.lang = 'en';
  window.location.hash = HASH_RETRO;

  if (overlay) overlay.classList.remove('is-active');

  // Focus the retro return link for accessibility
  window.setTimeout(() => {
    const ret = document.querySelector<HTMLAnchorElement>(
      '[data-return-present]'
    );
    ret?.focus({ preventScroll: true });
  }, 200);
}

async function switchToModern(): Promise<void> {
  const overlay = getOverlay();
  const body = document.body;

  if (overlay && !prefersReducedMotion()) {
    await playSequence(overlay, REVERSE_ERAS);
  }

  body.classList.remove(RETRO_CLASS);
  if (window.location.hash === HASH_RETRO) {
    window.location.hash = HASH_MODERN;
  } else {
    window.location.hash = HASH_MODERN;
  }

  if (overlay) overlay.classList.remove('is-active');

  window.setTimeout(() => {
    const t = document.querySelector<HTMLAnchorElement>('[data-time-travel]');
    t?.focus({ preventScroll: true });
  }, 200);
}

function initRetroCounter(): void {
  const el = document.querySelector<HTMLElement>('[data-retro-counter]');
  if (!el) return;

  const KEY = 'rifki:visits';
  let count = 1337;
  try {
    count = parseInt(sessionStorage.getItem(KEY) || '1337', 10);
    if (Number.isNaN(count)) count = 1337;
  } catch {}

  const pad = (n: number) => String(n).padStart(6, '0');
  el.textContent = pad(count);

  // bump once per session
  let bumped = false;
  try {
    bumped = sessionStorage.getItem('rifki:bumped') === '1';
  } catch {}

  if (!bumped) {
    count += 1;
    try {
      sessionStorage.setItem(KEY, String(count));
      sessionStorage.setItem('rifki:bumped', '1');
    } catch {}
    el.textContent = pad(count);
  }
}

function initRetroSoundToggle(): void {
  const btn = document.querySelector<HTMLButtonElement>('[data-retro-sound]');
  if (!btn) return;

  let on = false;
  try {
    on = sessionStorage.getItem('rifki:retro-sound') === '1';
  } catch {}

  const render = () => {
    btn.textContent = on ? 'Sound: ON' : 'Sound: OFF';
  };
  render();

  btn.addEventListener('click', () => {
    on = !on;
    try {
      sessionStorage.setItem('rifki:retro-sound', on ? '1' : '0');
    } catch {}
    render();
    if (on) {
      // short beep using WebAudio — no asset needed
      try {
        const Ctx =
          (window as any).AudioContext || (window as any).webkitAudioContext;
        if (!Ctx) return;
        const ctx = new Ctx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'square';
        osc.frequency.value = 660;
        gain.gain.value = 0.04;
        osc.connect(gain).connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.08);
      } catch {}
    }
  });
}

export function initTimeTravel(): void {
  // Wire triggers
  document.querySelectorAll<HTMLElement>('[data-time-travel]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      void switchToRetro();
    });
  });

  document
    .querySelectorAll<HTMLElement>('[data-return-present]')
    .forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        void switchToModern();
      });
    });

  // Restore state from hash on load
  const restore = () => {
    if (window.location.hash === HASH_RETRO) {
      document.body.classList.add(RETRO_CLASS);
    } else {
      document.body.classList.remove(RETRO_CLASS);
    }
  };
  restore();
  window.addEventListener('hashchange', restore);
  initRetroSoundToggle();
  initRetroCounter();}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTimeTravel);
  } else {
    initTimeTravel();
  }
}
