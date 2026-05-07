import { style } from "@vanilla-extract/css";

import { vars } from "../../styles/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "100%",
  padding: "24px",
  borderRadius: vars.radius.md,
  backgroundColor: vars.color.white,
});

export const row = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const label = style({
  color: vars.color.navy,
  fontSize: "18px",
  fontWeight: vars.fontWeight.bold,
});

export const value = style({
  color: vars.color.gray,
  fontSize: "18px",
  fontWeight: vars.fontWeight.medium,
});
