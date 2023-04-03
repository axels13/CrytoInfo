import React, { useRef } from "react";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  const homeRef = useRef(null);
  const marketRef = useRef(null);
  const chooseRef = useRef(null);
  const joinRef = useRef(null);
  return (
    <div className="app">
      <Navbar
        homeRef={homeRef}
        marketRef={marketRef}
        chooseRef={chooseRef}
        joinRef={joinRef}
      />

      <Home
        homeRef={homeRef}
        marketRef={marketRef}
        chooseRef={chooseRef}
        joinRef={joinRef}
      />
    </div>
  );
};

export default App;
