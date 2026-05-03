import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { LanguageProvider } from "./i18n";
import { ThemeProvider } from "./contexts/ThemeContext";
import CursorProvider from "./contexts/CursorProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <CursorProvider>
          <App />
        </CursorProvider>
      </ThemeProvider>
    </LanguageProvider>
  </StrictMode>
);
