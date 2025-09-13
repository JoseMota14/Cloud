import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, ThemeType } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";
import Navbar from "./components/Navbar";
import UploadPage from "./pages/UploadPage";
import GalleryPage from "./pages/GalleryPage";

export default function App() {
  const [theme, setTheme] = useState<ThemeType>(lightTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev.name === "light" ? darkTheme : lightTheme));
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar onToggleTheme={toggleTheme} currentTheme={theme.name} />
        <Routes>
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="*" element={<Navigate to="/upload" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
