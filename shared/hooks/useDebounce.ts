import React from "react";

export function useDebounce<T>(value: T, delay: number) {
  const [debaunced, setDebounced] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debaunced;
}
