"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from "react";

type ThemeTransitionContextValue = {
  triggerTransition: (x: number, y: number) => void;
  x: number;
  y: number;
  isAnimating: boolean;
};

const ThemeTransitionContext = createContext<ThemeTransitionContextValue | null>(
  null
);

export function ThemeTransitionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const value = useMemo(
    () => ({
      x,
      y,
      isAnimating,
      triggerTransition: (nextX: number, nextY: number) => {
        setX(nextX);
        setY(nextY);
        setIsAnimating(true);

        window.setTimeout(() => {
          setIsAnimating(false);
        }, 700);
      },
    }),
    [x, y, isAnimating]
  );

  return (
    <ThemeTransitionContext.Provider value={value}>
      {children}
    </ThemeTransitionContext.Provider>
  );
}

export function useThemeTransition() {
  const context = useContext(ThemeTransitionContext);

  if (!context) {
    throw new Error(
      "useThemeTransition must be used inside ThemeTransitionProvider"
    );
  }

  return context;
}