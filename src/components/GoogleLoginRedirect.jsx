import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "./Loader";

const GoogleLoginHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("token", token);
      console.log(token);

      axios
        .get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then(() => {
          navigate("/home");
        })
        .catch((error) => {
          console.error("Error resetting email list:", error);
          navigate("/");
        });
    } else {
      console.error("No token found in URL");
      navigate("/");
    }
  }, [navigate]);

  return <Loader />;
};

export default GoogleLoginHandler;
