import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
  color: {
    background: "#E8EEF7",
    navy: "#173B5D",
    primary: "#4CC3E0",
    primaryHover: "#2FB1D2",
    white: "#FFFFFF",
    black: "#000000",
  },
  space: {
    xs: "0.4rem",
    sm: "0.8rem",
    md: "1.2rem",
    lg: "1.6rem",
    xl: "2.4rem",
  },
  radius: {
    sm: "4px",
    md: "8px",
  },
});
