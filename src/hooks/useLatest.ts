import { useEffect, useRef } from "react";

/**
 * Access latest value in side effects of the same component,
 * * not available in render phase
 * @param value
 */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useLatest<T>(value: T) {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value;
  });
  return ref;
}
