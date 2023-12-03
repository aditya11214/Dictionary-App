//App.js
import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Display from "./Components/Display";
import History from "./Components/History";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/pages/HomePage";
import HistoryPage from "./Components/pages/HistoryPage";
import WordDetailPage from "./Components/pages/WordDetailPage";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/history" element={<HistoryPage/>} />
          <Route path="/:word" element={<WordDetailPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;