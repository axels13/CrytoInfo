import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <div className="app">
      <Navbar></Navbar>

      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
