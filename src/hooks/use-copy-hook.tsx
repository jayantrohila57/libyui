import { useCallback, useEffect, useRef, useState } from "react";

export function useCopyButton(
  copyFn: () => Promise<void>,
  {
    timeout = 2000,
  }: {
    timeout?: number;
  } = {},
): [boolean, () => void] {
  const [checked, setChecked] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClick = useCallback(async () => {
    try {
      await copyFn();

      setChecked(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setChecked(false);
      }, timeout);
    } catch (err) {
      console.error("Copy failed:", err);
      setChecked(false);
    }
  }, [copyFn, timeout]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return [checked, handleClick];
}
