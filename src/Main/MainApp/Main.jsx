import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainRoute from "../MainRoute/MainRoute";

function App() {
  return (
    <Router>
      <MainRoute />
    </Router>
  );
}

export default App;
