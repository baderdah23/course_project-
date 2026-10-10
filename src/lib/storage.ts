const STORAGE_EVENT = "cp:storage";

export const progressKey = (slug: string) => `cp:progress:${slug}`;

export function readRaw(key: string): string {
  try {
    return localStorage.getItem(key) ?? "";
  } catch {
    return "";
  }
}

// تكتب نصا في ذاكرة المتصفح ثم تنبه الموقع بالتغيير
export function writeRaw(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
    window.dispatchEvent(new Event(STORAGE_EVENT));
  } catch {}
}

export function readCoursePercent(slug: string): number {
  const value = Number(readRaw(progressKey(slug)));
  return Number.isFinite(value)
    ? Math.min(100, Math.max(0, Math.round(value)))
    : 0;
}

export function saveCoursePercent(slug: string, percent: number): void {
  if (percent > readCoursePercent(slug)) {
    writeRaw(progressKey(slug), String(percent));
  }
}

export function subscribeToStorage(onChange: () => void): () => void {
  window.addEventListener("storage", onChange);
  window.addEventListener(STORAGE_EVENT, onChange);

  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(STORAGE_EVENT, onChange);
  };
}
