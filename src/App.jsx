// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./layouts/Shared/Signup/Signup";
import VerifyEmail from "./layouts/Shared/Signup/VerifyEmail";
import Login from "./layouts/Shared/Login/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/verifyEmail" element={<VerifyEmail />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;
