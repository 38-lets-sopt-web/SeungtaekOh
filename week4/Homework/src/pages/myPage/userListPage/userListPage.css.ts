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
  gap: "80px",
  width: "100%",
  padding: "96px 0 64px",
});

export const searchSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  width: "600px",
});

export const title = style({
  margin: 0,
  color: vars.color.navy,
  fontSize: "28px",
  fontWeight: vars.fontWeight.bold,
  textAlign: "center",
});

export const sectionTitle = style({
  margin: 0,
  color: vars.color.navy,
  fontSize: "20px",
  fontWeight: vars.fontWeight.bold,
});

export const resultSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "18px",
});

export const listSection = style({
  display: "flex",
  flexDirection: "column",
  gap: "28px",
  width: "1000px",
});

export const cardGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
  gap: "24px",
});
