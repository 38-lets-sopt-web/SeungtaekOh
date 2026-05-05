import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "pretendard/dist/web/static/pretendard.css";
import App from "./app/App";
import { ThemeProvider } from "./shared/styles/theme-provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
