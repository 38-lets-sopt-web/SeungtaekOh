import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    background: "#E8EEF7",
    navy: "#173B5D",
    primary: "#4CC3E0",
    primaryHover: "#2FB1D2",
    danger: "#EF4444",
    gray: "#8A96A3",
    white: "#FFFFFF",
    black: "#000000",
  },
  fontWeight: {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  radius: {
    sm: "8px",
    md: "12px",
  },
});
