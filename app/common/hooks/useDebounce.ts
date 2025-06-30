import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number) {
  const [debaunced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debaunced;
}
