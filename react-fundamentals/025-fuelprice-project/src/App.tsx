import React from "react";
import "./App.css";
import { FuelPage } from "./pages/Fuel";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FuelPage />
    </ThemeProvider>
  );
}

export default App;
