import { useState, useEffect, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login.component";
import Settings from "./components/Settings.component";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
