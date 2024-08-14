import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const GoogleLoginHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      console.log("Token found:", token);

      localStorage.setItem("token", token);
      console.log("Stored token:", localStorage.getItem("token"));

      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } else {
      console.error("No token found in URL", window.location.href);
      console.error("URL Parameters:", Array.from(urlParams.entries()));
      navigate("/");
    }
  }, [navigate]);

  return <Loader />;
};

export default GoogleLoginHandler;
