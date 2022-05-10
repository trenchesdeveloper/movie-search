import React from "react";
// Routing
import { BrowserRouter as Router, Routes } from "react-router-dom";
// Components

// Styles
import { GlobalStyle } from "./GlobalStyle";

const App: React.FC = () => (
  <Router>
    <Routes></Routes>
    <GlobalStyle />
  </Router>
);

export default App;
