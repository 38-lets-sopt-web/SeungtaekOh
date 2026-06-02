import { style } from "@vanilla-extract/css";

import { vars } from "../../styles/theme.css";

export const container = style({
  position: "sticky",
  display: "flex",
  top: 0,
  zIndex: 10,
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "100px",
  padding: "0 20px",
  backgroundColor: vars.color.navy,
});

export const brandArea = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
});

export const title = style({
  margin: 0,
  color: vars.color.white,
  fontSize: "24px",
  fontWeight: vars.fontWeight.bold,
  letterSpacing: 0,
});

export const greeting = style({
  margin: 0,
  color: vars.color.white,
  fontSize: "14px",
  fontWeight: vars.fontWeight.medium,
});

export const nav = style({
  display: "flex",
  alignItems: "center",
  gap: "24px",
});

export const navLink = style({
  color: vars.color.white,
  fontSize: "14px",
  fontWeight: vars.fontWeight.semibold,
  textDecoration: "none",
});

export const logoutButton = style({
  border: "none",
  padding: 0,
  backgroundColor: "transparent",
  color: vars.color.white,
  fontSize: "14px",
  fontWeight: vars.fontWeight.semibold,
});
