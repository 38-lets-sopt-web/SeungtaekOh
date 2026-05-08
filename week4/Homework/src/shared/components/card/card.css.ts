import { style } from "@vanilla-extract/css";

import { vars } from "../../styles/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: vars.color.white,
  textAlign: "center",
  flex: 1,
  padding: "15px",
  borderRadius: vars.radius.md,
  textDecoration: "none",
});
export const name = style({
  margin: 0,
  fontSize: "20px",
  color: vars.color.navy,
  fontWeight: vars.fontWeight.bold,
});
export const part = style({
  backgroundColor: vars.color.background,
  color: vars.color.black,
  padding: "3px 10px",
  borderRadius: vars.radius.md,
  fontWeight: vars.fontWeight.regular,
});
