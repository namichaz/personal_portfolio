import React from "react";
import "./App.css";
import { Home } from "features/Home";
import { Route, Routes } from "react-router-dom";
import { Profile } from "features/Profile";
import { Skills } from "features/Skills";
import Hobby from "features/Hobby";

function App() {
  const APP_NAME: String = "personal_portfolio";
  return (
    <Routes>
      {/* <Route path={APP_NAME + "/"} element={<Home />} />
      <Route path={APP_NAME + "/profile"} element={<Profile />} />
      <Route path={APP_NAME + "/skills"} element={<Skills />} />
      <Route path={APP_NAME + "/hobby"} element={<Hobby />} /> */}
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/hobby" element={<Hobby />} />
    </Routes>
  );
}

export default App;
