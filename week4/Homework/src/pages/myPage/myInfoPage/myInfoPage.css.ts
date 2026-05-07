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
  gap: "28px",
  width: "100%",
  padding: "56px 0",
});

export const infoCardWrapper = style({
  width: "600px",
});

export const title = style({
  margin: 0,
  color: vars.color.navy,
  fontSize: "28px",
  fontWeight: vars.fontWeight.bold,
});

export const form = style({
  display: "flex",
  flexDirection: "column",
  gap: "22px",
  width: "600px",
});
