"use client";

import { useEffect, useState } from "react";

const breakpoints = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
};

export function useBreakpoint() {
  const [matches, setMatches] = useState({
    sm: false,
    md: false,
    lg: false,
    xl: false,
    "2xl": false,
  });

  useEffect(() => {
    const mediaQueries = Object.entries(breakpoints).map(([key, query]) => {
      const mql = window.matchMedia(query);
      return [key, mql] as const;
    });

    const update = () => {
      setMatches(
        Object.fromEntries(
          mediaQueries.map(([key, mql]) => [key, mql.matches])
        ) as typeof matches
      );
    };

    update(); // 初次同步

    mediaQueries.forEach(([_, mql]) => mql.addEventListener("change", update));

    return () => {
      mediaQueries.forEach(([_, mql]) =>
        mql.removeEventListener("change", update)
      );
    };
  }, []);

  return matches;
}
