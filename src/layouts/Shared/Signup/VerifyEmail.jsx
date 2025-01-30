"use client";
import { Button, Typography } from "@material-tailwind/react";
import { MailOpenSolid, MailOpen } from "iconoir-react";
import React, { useEffect, useState } from "react";

export default function VerifyEmail() {
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  // Function to check for access token in URL parameters
  function checkForAccessToken() {
    try {
      const url = new URL(window.location.href);
      const accessToken = url.hash
        ? new URLSearchParams(url.hash.substring(1)).get("access_token")
        : null;

      console.log(url.hash, "URL Hash");
      console.log(accessToken, "Access Token");

      if (accessToken) {
        // Optionally, you can add an API call here to verify the token on your backend
        setVerified(true);
      } else {
        setVerified(false);
      }
    } catch (error) {
      console.error("Error parsing URL:", error);
      setVerified(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    checkForAccessToken();
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="min-h-screen grid place-items-center">
      {loading ? (
        <Typography>Loading...</Typography>
      ) : verified ? (
        <section className="container mx-auto text-center">
          <MailOpenSolid className="text-4xl mx-auto m-2 w-60 h-60" />
          <Typography
            as="h2"
            variant="h5"
            className="my-6 max-w-xl mx-auto [text-wrap:_balance]"
          >
            Your email has been verified!
          </Typography>
          <Typography
            variant="lead"
            className="text-foreground max-w-xl mx-auto [text-wrap:_balance]"
          >
            Thank you for verifying your email. You can now proceed with using
            our services.
          </Typography>
        </section>
      ) : (
        <section className="container mx-auto text-center">
          <MailOpenSolid className="text-4xl mx-auto m-2 w-60 h-60" />
          <Typography
            as="h2"
            variant="h5"
            className="my-6 max-w-xl mx-auto [text-wrap:_balance]"
          >
            We've sent you a confirmation email. Please confirm your account.
          </Typography>
          <Typography
            variant="lead"
            className="text-foreground max-w-xl mx-auto [text-wrap:_balance]"
          >
            Please bear with us while we send you the confirmation email. We'll
            be back shortly. Thank you for your patience!
          </Typography>
          <div className="flex w-full mx-auto text-center items-center justify-center mt-4">
            <Button
              className="flex bg-transparent text-black gap-1 hover:bg-black hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={() => (window.location.href = "https://mail.google.com")}
            >
              <MailOpen className="w-5 h-5" />
              <Typography>Go to your Mail</Typography>
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}
