// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./layouts/Shared/Signup/Signup";
import VerifyEmail from "./layouts/Shared/Signup/VerifyEmail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/verify/:access_token" element={<VerifyEmail />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;
