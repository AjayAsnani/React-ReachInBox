import React from "react";
import { useTheme } from "./ThemeContext"; // Import useTheme

const Header = ({ onThemeToggle }) => {
  const { isDarkMode } = useTheme(); // Use theme context

  return (
    <div
      className={`p-4 flex items-center justify-between ${
        isDarkMode ? "bg-[#343a40]" : "bg-gray-200"
      }`}
    >
      <h2 className={`text-${isDarkMode ? "white" : "black"}`}>Onebox</h2>
      <div className="flex items-center justify-between gap-3">
        {onThemeToggle && (
          <div
            className={`flex items-center justify-around gap-2 border border-[#888686] p-1 rounded-full cursor-pointer ${
              isDarkMode ? "bg-gray-600" : "bg-gray-300"
            }`}
            onClick={onThemeToggle}
          >
            <div
              className={`h-4 w-4 rounded-full ${
                isDarkMode ? "bg-gray-300" : "bg-gray-600"
              }`}
            ></div>
            <img
              src={isDarkMode ? "/light_mode.png" : "/dark_mode.png"}
              alt="Mode Icon"
            />
          </div>
        )}
        <p className={`text-${isDarkMode ? "white" : "black"} text-sm`}>
          Tim's Workspace
        </p>
        <img
          src={isDarkMode ? "/arrow_back_ios.png" : "./Path 7372.png"}
          alt="Arrow icon"
        />
      </div>
    </div>
  );
};

export default Header;
