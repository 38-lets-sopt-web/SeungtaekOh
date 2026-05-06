import { globalStyle } from "@vanilla-extract/css";

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("html, body, #root", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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
