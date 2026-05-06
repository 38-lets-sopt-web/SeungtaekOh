import { style } from "@vanilla-extract/css";

import { vars } from "../../styles/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "6px",
  width: "100%",
});

export const inputWrapper = style({
  display: "flex",
  justifyContent: "center",
  border: "1px solid #C9D4E2",
  borderRadius: vars.radius.sm,
});

export const input = style({
  border: "none",
  borderRadius: `${vars.radius.sm} 0 0 ${vars.radius.sm}`,
  outline: "none",
});

export const passwordButton = style({
  backgroundColor: "white",
  borderRadius: `0 ${vars.radius.sm} ${vars.radius.sm} 0`,
  border: "none",
  color: "gray",
});

export const errorMessage = style({
  color: vars.color.danger,
});
