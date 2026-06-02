import { style } from "@vanilla-extract/css";

import { vars } from "../../../shared/styles/theme.css";

export const page = style({
  minHeight: "100vh",
  backgroundColor: vars.color.background,
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "64px",
  width: "100%",
  padding: "96px 0",
});

export const title = style({
  margin: 0,
  color: vars.color.navy,
  fontSize: "36px",
  fontWeight: vars.fontWeight.bold,
});

export const detailSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "48px",
  width: "720px",
});

export const backButton = style({
  alignSelf: "flex-start",
  padding: 0,
  border: "none",
  backgroundColor: "transparent",
  color: vars.color.gray,
  fontSize: "26px",
  fontWeight: vars.fontWeight.bold,
  cursor: "pointer",
});

export const cardWrapper = style({
  width: "100%",
});
