import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WatchList from "./pages/watch-list/watch-list";
import Details from "./pages/details/details";
import Home from "./pages/home/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/details/:movieId" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
