import { useCallback, useEffect, useRef, useState } from "react";
// import { useLatest } from "./useLatest";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useDebounce<T>(value: T, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  if (delay === 0) return value;
  return debouncedValue;
}

/**
 *
 * @param delay shouldn't change
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useDebouncedAction(delay = 2000) {
  const fnRef = useRef<null | (() => void)>(null);
  const timeoutRef = useRef<any>(null);
  const schedule = useCallback(function schedule(fn: () => void) {
    clearTimeout(timeoutRef.current);
    fnRef.current = fn;
    timeoutRef.current = setTimeout(() => {
      fnRef.current = null;
      fn();
    }, delay);
  }, []);
  /**
   * execute latest fn, if available
   */
  function flush() {
    clearTimeout(timeoutRef.current);
    // eslint-disable-next-line no-unused-expressions
    fnRef.current?.();
    fnRef.current = null;
  }
  function reschedule(rescheduleDelay = 5000) {
    const fn = fnRef.current;
    if (!fn) return;
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      fnRef.current = null;
      fn();
    }, rescheduleDelay);
  }
  function clear() {
    clearTimeout(timeoutRef.current);
    fnRef.current = null;
  }
  return { schedule, flush, reschedule, clear };
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useDebouncedSync(
  key: string,
  syncFn: () => void,
  delay = 5000
) {
  const { schedule, clear } = useDebouncedAction(delay);
  useEffect(() => {
    schedule(syncFn);
  }, [key]);
  return { cancelSync: clear };
}
