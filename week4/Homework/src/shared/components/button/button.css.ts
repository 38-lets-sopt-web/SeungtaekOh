import { style } from "@vanilla-extract/css";

import { vars } from "../../styles/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
});

export const button = style({
  color: vars.color.white,
  backgroundColor: vars.color.primary,
  border: "none",
  borderRadius: vars.radius.sm,
  width: "100%",
  padding: "10px",
  ":hover": {
    backgroundColor: vars.color.primaryHover,
  },
  ":disabled": {
    backgroundColor: vars.color.gray,
    cursor: "not-allowed",
  },
});

export const linkGuide = style({
  display: "flex",
  gap: "4px",
  color: vars.color.gray,
});

export const link = style({
  color: vars.color.primary,
  textDecoration: "none",
});
