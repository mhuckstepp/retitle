import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "components/Login.component";
import Settings from "components/Settings.component";
import { MainAppStyle } from "components/styleComponents";

function App() {
  return (
    <MainAppStyle>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </MainAppStyle>
  );
}

export default App;
