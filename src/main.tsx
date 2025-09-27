import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
// Removed ThemeProvider as dark mode is no longer needed.

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* ThemeProvider removed */}
    <App />
  </React.StrictMode>
);