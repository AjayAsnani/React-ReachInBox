import React, { useState } from "react";
import { MdOutlineMarkunreadMailbox } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import { IoPersonRemoveSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useTheme } from "./ThemeContext";

const Dropdown = ({ onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode } = useTheme();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div
        className={`flex items-center justify-center gap-2 p-2 rounded-lg cursor-pointer ${
          isDarkMode ? "bg-[#343a40]" : "bg-[#f0f0f0] text-black"
        }`}
        onClick={toggleDropdown}
      >
        <p className={isDarkMode ? "text-white" : "text-black"}>Move</p>
        <img
          src={isDarkMode ? "/arrow_back_ios.png" : "/Path 7372.png"}
          alt="Arrow icon"
        />
      </div>

      {isOpen && (
        <div
          className={`absolute right-0 mt-2 w-56 rounded-md shadow-lg ${
            isDarkMode ? "bg-[#343a40] text-white" : "bg-white text-black"
          } ring-1 ring-black ring-opacity-5 focus:outline-none z-10`}
        >
          <div className="py-1">
            <a
              href="#"
              className={`flex items-center px-4 py-2 text-sm ${
                isDarkMode ? "hover:bg-[#4e4e4e]" : "hover:bg-gray-200"
              }`}
            >
              <MdOutlineMarkunreadMailbox
                className={`mr-3 ${isDarkMode ? "text-white" : "text-black"}`}
              />
              Mark as unread
            </a>
            <a
              href="#"
              className={`flex items-center px-4 py-2 text-sm ${
                isDarkMode ? "hover:bg-[#4e4e4e]" : "hover:bg-gray-200"
              }`}
            >
              <HiPencil
                className={`mr-3 ${isDarkMode ? "text-white" : "text-black"}`}
              />
              Edit lead
            </a>
            <a
              href="#"
              className={`flex items-center px-4 py-2 text-sm ${
                isDarkMode ? "hover:bg-[#4e4e4e]" : "hover:bg-gray-200"
              }`}
            >
              <IoPersonRemoveSharp
                className={`mr-2 ${isDarkMode ? "text-white" : "text-black"}`}
              />
              Remove lead
            </a>
            <a
              href="#"
              className={`flex items-center px-4 py-2 text-sm ${
                isDarkMode ? "hover:bg-[#4e4e4e]" : "hover:bg-gray-200"
              }`}
            >
              <FaRegClock
                className={`mr-2 ${isDarkMode ? "text-white" : "text-black"}`}
              />
              Set Reminder
            </a>
            <a
              href="#"
              className={`flex items-center px-4 py-2 text-sm ${
                isDarkMode ? "hover:bg-[#4e4e4e]" : "hover:bg-gray-200"
              }`}
              onClick={onDelete}
            >
              <MdOutlineDeleteOutline
                className={`mr-2 ${isDarkMode ? "text-white" : "text-black"}`}
              />
              Delete
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
