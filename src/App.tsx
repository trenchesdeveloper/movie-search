import React from "react";
// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Components

import NotFound from "./pages/NotFound";
import Home from "./pages";
// Styles
import { GlobalStyle } from "./GlobalStyle";


const App: React.FC = () => (
  <Router>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;
