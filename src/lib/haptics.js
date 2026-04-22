// Subtle haptic micro-feedback. Silent on desktop (no-op when vibrate
// is absent). Durations are intentionally small — 6–20ms — so the
// feedback is felt rather than heard.
export const haptic = (ms = 8) => {
  if (typeof navigator !== 'undefined' && navigator.vibrate) {
    try { navigator.vibrate(ms); } catch {}
  }
};
