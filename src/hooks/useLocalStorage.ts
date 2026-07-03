import { useEffect, useState } from "react";

type SetStateAction<T> = T | ((prevState: T) => T);

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: SetStateAction<T>) => void] {
  const [state, setState] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = localStorage.getItem(key);
      return item !== null ? (JSON.parse(item) as T) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: SetStateAction<T>) => {
    setState((prev) => {
      const newValue =
        value instanceof Function ? value(prev) : value;

      try {
        localStorage.setItem(key, JSON.stringify(newValue));
      } catch {
        // Optional: Fehler behandeln
      }

      return newValue;
    });
  };

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch {
      // Optional: Fehler behandeln
    }
  }, [key]);

  return [state, setValue];
}