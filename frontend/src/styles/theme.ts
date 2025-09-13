export type ThemeType = {
  name: "light" | "dark";
  colors: {
    primary: string;
    background: string;
    surface: string;
    text: string;
    muted: string;
  };
  spacing: (factor: number) => string;
  borderRadius: string;
};

export const lightTheme: ThemeType = {
  name: "light",
  colors: {
    primary: "#3B82F6",
    background: "#F9FAFB",
    surface: "#FFFFFF",
    text: "#111827",
    muted: "#6B7280",
  },
  spacing: (factor) => `${factor * 8}px`,
  borderRadius: "12px",
};

export const darkTheme: ThemeType = {
  name: "dark",
  colors: {
    primary: "#3B82F6",
    background: "#111827",
    surface: "#1F2937",
    text: "#F9FAFB",
    muted: "#9CA3AF",
  },
  spacing: (factor) => `${factor * 8}px`,
  borderRadius: "12px",
};
