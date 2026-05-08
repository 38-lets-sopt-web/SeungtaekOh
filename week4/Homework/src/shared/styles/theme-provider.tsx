import type { PropsWithChildren } from "react";

import "./theme.css";
import "./global.css";

export function ThemeProvider({ children }: PropsWithChildren) {
  return <>{children}</>;
}
