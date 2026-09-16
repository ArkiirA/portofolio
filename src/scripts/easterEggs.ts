/* ============================================================
   EASTER EGGS — optional, non-intrusive
   1. Click BIOS version 3× → console diagnostic
   2. Type "whoami" anywhere → console identity
   3. Konami code → developer mode toggle
   4. Hidden console banner on load
   ============================================================ */

const KONAMI = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

const DEVELOPER_KEY = 'rifki:devmode';

function banner(): void {
  const style = [
    'color:#8a3324',
    'font-family:ui-monospace,monospace',
    'font-size:12px',
    'letter-spacing:0.1em',
  ].join(';');
  // eslint-disable-next-line no-console
  console.log('%cRIFKI SYSTEMS — BIOS v2.026', style);
  // eslint-disable-next-line no-console
  console.log(
    '%cIf you are reading this, you probably understand how it works.',
    'color:#57514a;font-family:ui-monospace,monospace;font-size:11px'
  );
}

function triggerDiagnostic(): void {
  const style = 'color:#8a3324;font-family:ui-monospace,monospace;font-size:11px';
  // eslint-disable-next-line no-console
  console.log('%c--- SYSTEM DIAGNOSTIC ---', style);
  // eslint-disable-next-line no-console
  console.log('%cCPU ............ OK', style);
  // eslint-disable-next-line no-console
  console.log('%cMEMORY ......... OK', style);
  // eslint-disable-next-line no-console
  console.log('%cCURIOSITY ...... HIGH', style);
  // eslint-disable-next-line no-console
  console.log('%cSTATUS ......... BUILDING', style);
}

function toggleDeveloperMode(): void {
  const body = document.body;
  const on = body.classList.toggle('is-devmode');
  try {
    sessionStorage.setItem(DEVELOPER_KEY, on ? '1' : '0');
  } catch {}
  // eslint-disable-next-line no-console
  console.log(
    `%cDEVELOPER MODE ${on ? 'ENABLED' : 'DISABLED'}`,
    'color:#8a3324;font-family:ui-monospace,monospace;font-size:11px'
  );
}

export function initEasterEggs(): void {
  banner();

  // 1. BIOS version click ×3
  const versionEl = document.querySelector<HTMLElement>('[data-bios-version]');
  if (versionEl) {
    let clicks = 0;
    let resetTimer: number | undefined;
    versionEl.addEventListener('click', () => {
      clicks += 1;
      if (resetTimer) window.clearTimeout(resetTimer);
      resetTimer = window.setTimeout(() => (clicks = 0), 1500);
      if (clicks >= 3) {
        clicks = 0;
        triggerDiagnostic();
      }
    });
  }

  // 2. Konami code
  let buffer: string[] = [];
  window.addEventListener('keydown', (e) => {
    // ignore when typing in inputs
    const tag = (e.target as HTMLElement | null)?.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;

    buffer.push(e.key.length === 1 ? e.key.toLowerCase() : e.key);
    if (buffer.length > KONAMI.length) buffer.shift();
    if (
      buffer.length === KONAMI.length &&
      buffer.every((k, i) => k === KONAMI[i])
    ) {
      buffer = [];
      toggleDeveloperMode();
    }
  });

  // 3. "whoami" typed anywhere (outside inputs)
  let typed = '';
  window.addEventListener('keydown', (e) => {
    const tag = (e.target as HTMLElement | null)?.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;
    if (e.key.length !== 1) return;
    typed = (typed + e.key.toLowerCase()).slice(-6);
    if (typed === 'whoami') {
      typed = '';
      // eslint-disable-next-line no-console
      console.log(
        '%crifki — information systems student / software builder / systems enthusiast',
        'color:#8a3324;font-family:ui-monospace,monospace;font-size:11px'
      );
    }
  });

  // Restore dev mode flag
  try {
    if (sessionStorage.getItem(DEVELOPER_KEY) === '1') {
      document.body.classList.add('is-devmode');
    }
  } catch {}
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEasterEggs);
  } else {
    initEasterEggs();
  }
}
