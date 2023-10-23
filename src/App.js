import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CounterPage from "./counterPage";
import NotFoundPage from "./NotFoundPage";
import ErrorBoundaryPage from "./ErrorBoundaryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CounterPage />} />
        <Route path="/Error" element={<ErrorBoundaryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;


