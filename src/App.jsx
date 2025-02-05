// App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "./layouts/Shared/Signup/Signup";
import VerifyEmail from "./layouts/Shared/Signup/VerifyEmail";
import Login from "./layouts/Shared/Login/Login";
import { Typography } from "@material-tailwind/react";

function App() {
  return (
    <>
      <header>
        <nav>
          <Typography>Thois is the Header Section</Typography>
        </nav>
      </header>
      <main>
        <Typography>The Main Section</Typography>
      </main>
      <section>
        <Typography>The other Sections</Typography>
      </section>
      <footer>
        <Typography>The Footer Scertion</Typography>
      </footer>
    </>
  );
}

export default App;
