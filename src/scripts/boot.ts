/* ============================================================
   BOOT SEQUENCE
   - Fires on first visit per session
   - Skips automatically if sessionStorage flag set
   - Respects prefers-reduced-motion (short version)
   ============================================================ */

const SESSION_KEY = 'rifki:booted';

type BootLine = {
  label: string;
  value: string;
  status?: 'OK';
};

const LINES: BootLine[] = [
  { label: 'CURIOUSITY', value: '............', status: 'OK' },
  { label: 'PATIENCE', value: '.........', status: 'OK' },
  { label: 'COFFEE', value: '........', status: 'OK' },
  { label: 'SLEEP', value: '........', status: 'LOW' },
];

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

function prefersReducedMotion(): boolean {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

export async function initBoot(): Promise<void> {
  const overlay = document.getElementById('boot');
  if (!overlay) return;

  // Already booted this session?
  let alreadyBooted = false;
  try {
    alreadyBooted = sessionStorage.getItem(SESSION_KEY) === '1';
  } catch {
    alreadyBooted = false;
  }

  if (alreadyBooted || document.documentElement.dataset.booted === '1') {
    overlay.setAttribute('hidden', '');
    return;
  }

  const linesEl = overlay.querySelector<HTMLElement>('[data-boot-lines]');
  const barEl = overlay.querySelector<HTMLElement>('[data-boot-bar]');
  const readyEl = overlay.querySelector<HTMLElement>('[data-boot-ready]');
  const enterEl = overlay.querySelector<HTMLButtonElement>('[data-boot-enter]');
  const skipEl = overlay.querySelector<HTMLButtonElement>('[data-boot-skip]');

  const reduced = prefersReducedMotion();

  const dismiss = () => {
    try {
      sessionStorage.setItem(SESSION_KEY, '1');
    } catch {}
    overlay.classList.add('is-leaving');
    document.body.classList.remove('is-booting');
    window.setTimeout(() => {
      overlay.setAttribute('hidden', '');
    }, 650);
  };

  // Reduced-motion: skip animation, show everything instantly
  if (reduced) {
    if (linesEl) {
      linesEl.innerHTML = LINES.map(
        (l) =>
          `<span class="boot__line" style="opacity:1">${l.label.padEnd(9, ' ')} ${l.value} <span class="ok">${l.status}</span></span>`
      ).join('');
    }
    if (barEl) barEl.textContent = 'INITIALIZING PORTFOLIO... ████████████████████ 100%';
    if (readyEl) readyEl.textContent = 'SYSTEM READY';
    if (enterEl) enterEl.removeAttribute('hidden');
    if (skipEl) skipEl.removeAttribute('hidden');
    enterEl?.addEventListener('click', dismiss);
    skipEl?.addEventListener('click', dismiss);
    return;
  }

  // Normal animation path
  document.body.classList.add('is-booting');

  // Skip button is available immediately
  skipEl?.removeAttribute('hidden');
  skipEl?.addEventListener('click', dismiss);

  // Print hardware check lines
  for (const line of LINES) {
    const el = document.createElement('span');
    el.className = 'boot__line';
    el.innerHTML = `${line.label.padEnd(9, ' ')} ${line.value} <span class="ok">${line.status}</span>`;
    linesEl?.appendChild(el);
    await wait(140);
  }

  await wait(120);

  // Progress bar
  if (barEl) {
    const label = 'INITIALIZING PORTFOLIO...';
    const total = 20;
    for (let i = 0; i <= total; i++) {
      const filled = '█'.repeat(i);
      const empty = '░'.repeat(total - i);
      barEl.textContent = `${label} ${filled}${empty} ${Math.round((i / total) * 100)}%`;
      await wait(45);
    }
  }

  await wait(150);

  // Ready
  if (readyEl) {
    readyEl.textContent = 'SYSTEM READY';
    readyEl.style.opacity = '1';
  }

  await wait(180);

  if (enterEl) {
    enterEl.removeAttribute('hidden');
    enterEl.focus({ preventScroll: true });
    enterEl.addEventListener('click', dismiss);
  }

  // Auto-dismiss after a short grace period if user does nothing
  window.setTimeout(() => {
    if (!overlay.hasAttribute('hidden')) dismiss();
  }, 2200);
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      void initBoot();
    });
  } else {
    void initBoot();
  }
}
