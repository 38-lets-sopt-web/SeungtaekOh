import { globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  boxSizing: "border-box",
  borderRadius: "8px",
});

globalStyle("html, body, #root", {
  margin: 0,
  minHeight: "100%",
});

globalStyle("body", {
  fontFamily:
    "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
  backgroundColor: "#E8EEF7",
});

globalStyle("button, input, select, textarea", {
  font: "inherit",
});

globalStyle("button", {
  cursor: "pointer",
});
