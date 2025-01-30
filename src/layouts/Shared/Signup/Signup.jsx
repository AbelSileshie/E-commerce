"use client";

import * as React from "react";
import {
  Button,
  Input,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { GoogleCircle, Eye, EyeClosed } from "iconoir-react";
import { Signupurl } from "../../../utils/APIUrls";
import { Auth } from "../../../services/Authentication";
Signupurl;
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  const [inputType, setInputType] = React.useState("password");
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    Auth(formData.email, formData.password, Signupurl)
      .then((response) => {
        console.log("Signup successful:", response);
        navigate("/verify");
      })
      .catch((error) => {
        console.error("Signup error:", error);
      });
  };

  return (
    <div className="grid place-items-center min-h-screen px-4">
      <div className="w-full max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
        <Typography as="h2" type="h4" className="mb-2 text-center">
          Sign Up
        </Typography>
        <Typography type="lead" className="text-gray-600 text-center">
          Enter your email and password to sign in
        </Typography>
        <form onSubmit={handleSubmit} className="mt-8">
          <div className="mb-6 space-y-1.5">
            <Typography
              as="label"
              htmlFor="email"
              type="small"
              className="font-semibold"
            >
              Email
            </Typography>
            <Input
              size="lg"
              id="email"
              type="email"
              placeholder="someone@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6 space-y-1.5 relative">
            <Typography
              as="label"
              htmlFor="password"
              type="small"
              className="font-semibold"
            >
              Password
            </Typography>
            <div className="relative">
              <Input
                size="lg"
                id="password"
                type={inputType}
                placeholder="********"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <IconButton
                type="button"
                variant="text"
                className="absolute right-3 top-3"
                onClick={() =>
                  setInputType(inputType === "password" ? "text" : "password")
                }
              >
                {inputType === "password" ? (
                  <EyeClosed className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </IconButton>
            </div>
          </div>
          <div className="mb-6 text-right">
            <Typography as="a" href="#" color="blue" className="font-semibold">
              Forgot Password?
            </Typography>
          </div>
          <Button size="lg" isFullWidth type="submit" className=" w-full">
            Sign In
          </Button>
        </form>
        <div className="my-6">
          <Button
            size="lg"
            variant="outlined"
            color="blue"
            className="flex items-center justify-center w-full"
          >
            <GoogleCircle className="w-5 h-5 mr-2" /> Sign in with Google
          </Button>
        </div>
        <Typography className="flex items-center justify-center gap-1 text-gray-600">
          Not registered?
          <Typography as="a" href="#" color="blue" className="font-semibold">
            Create account
          </Typography>
        </Typography>
      </div>
    </div>
  );
}

export default Signup;
