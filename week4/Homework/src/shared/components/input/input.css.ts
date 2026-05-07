import { style } from "@vanilla-extract/css";

import { vars } from "../../styles/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  width: "100%",
});

export const inputWrapper = style({
  display: "flex",
  justifyContent: "center",
  border: `1px solid ${vars.color.gray}`,
  borderRadius: vars.radius.sm,
  overflow: "hidden",
});

export const input = style({
  flex: 1,
  border: "none",
  outline: "none",
  padding: "10px",
});

export const passwordButton = style({
  backgroundColor: "white",
  border: "none",
  color: vars.color.gray,
});

export const errorMessage = style({
  margin: 0,
  fontSize: "small",
  color: vars.color.danger,
});
