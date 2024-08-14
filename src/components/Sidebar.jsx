import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "./ThemeContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const handleHomeClick = () => {
    navigate("/onebox");
  };

  const handleHomeClick2 = () => {
    navigate("/home");
  };

  return (
    <div
      className={`p-4 h-screen flex flex-col items-center border-r ${
        isDarkMode ? "bg-black border-[#343A40]" : "bg-white border-gray-300"
      }`}
    >
      <img
        src={isDarkMode ? "/Logo 12.png" : "/main2.png"}
        alt="Logo"
        className="mb-6"
      />

      <div className="mt-12 flex-grow flex flex-col items-center">
        <img
          src="/Home_fill.png"
          alt="Home"
          className="mb-6 h-8 w-8 cursor-pointer"
          onClick={handleHomeClick2}
          aria-label="Home"
        />

        <img
          src="/email (1).png"
          alt="Email"
          className="mb-6 h-8 w-8 cursor-pointer"
          aria-label="Email"
          onClick={handleHomeClick}
        />
        <img
          src="/Frame 23.png"
          alt="Frame"
          className="mb-6 h-8 w-8 cursor-pointer"
          aria-label="Frame"
        />
        <img
          src="/email (2).png"
          alt="Email"
          className="mb-6 h-8 w-8 cursor-pointer"
          aria-label="Email"
        />
        <img
          src={isDarkMode ? "/Frame 19.png" : "/side.png"}
          alt="Frame"
          className={`mb-6 ${
            isDarkMode ? "h-8 w-8" : "h-5 w-6"
          } cursor-pointer`}
          aria-label="Frame"
        />
        <img
          src="/bar_chart.png"
          alt="Chart"
          className="mb-6 h-8 w-8 cursor-pointer"
          aria-label="Chart"
        />
      </div>

      <img
        src="/LSQ_User.png"
        alt="User Profile"
        className="mb-6 h-12 w-12"
        aria-label="User Profile"
      />
    </div>
  );
};

export default Sidebar;
