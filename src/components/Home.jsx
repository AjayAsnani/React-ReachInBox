import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useTheme } from "./ThemeContext";

const Home = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <div className={`flex h-screen ${isDarkMode ? "bg-black" : "bg-gray-100"}`}>
      <div className={`w-1/8 ${isDarkMode ? "bg-gray-800" : "bg-white"}`}>
        <Sidebar />
      </div>
      <div className="flex flex-col w-full ">
        <Header onThemeToggle={toggleTheme} />
        <div className="flex flex-1 items-center justify-center flex-col ">
          <img src="/home (2).png" alt="Home" className="mb-6" />
          <h1
            className={`text-${
              isDarkMode ? "white" : "black"
            } text-2xl font-bold`}
          >
            It’s the beginning of a legendary sales pipeline
          </h1>
          <p
            className={`text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            } text-center mt-4`}
          >
            When you have inbound E-mails <br />
            you’ll see them here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
