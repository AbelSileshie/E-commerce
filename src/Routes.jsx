import React from "react";
import App from "./App";
import VerifyEmail from "./layouts/Shared/Signup/VerifyEmail";
import Login from "./layouts/Shared/Login/Login";
import { Route, Routes } from "react-router-dom";
import Signup from "./layouts/Shared/Signup/Signup";

const routes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/verifyEmail" element={<VerifyEmail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
};

export default routes;
