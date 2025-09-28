import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider.tsx"; // Re-import ThemeProvider

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme"> {/* Re-adding ThemeProvider */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);