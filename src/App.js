import { useState, useEffect, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login.component";
import Settings from "./components/Settings.component";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
