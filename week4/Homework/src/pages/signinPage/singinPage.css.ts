import { style } from "@vanilla-extract/css";
import { vars } from "../../shared/styles/theme.css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",
  width: "500px",
  minHeight: "100vh",
  margin: "0 auto",
});

export const title = style({
  textAlign: "center",
  color: vars.color.navy,
  margin: 0,
});
