"use client";

import { createContext, ReactNode } from "react";

type Theme = {
  color: {
    primary: string;
    secondary: string;
  };
};

const defaultTheme: Theme = {
  color: {
    primary: "#007bff",
    secondary: "#6c757d",
  },
};

export const ThemeContext = createContext<Theme>(defaultTheme);

export default function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
}
