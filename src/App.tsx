import React from "react";
import "./App.css";
import { Home } from "features/Home";
import { Route, Routes } from "react-router-dom";
import { Profile } from "features/Profile";
import { Skills } from "features/Skills";
import Hobby from "features/Hobby";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/hobby" element={<Hobby />} />
    </Routes>
  );
}

export default App;
