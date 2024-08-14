import React from "react";
import { MdOutlineMarkAsUnread } from "react-icons/md";
import { LuFolderEdit } from "react-icons/lu";
import { useTheme } from "./ThemeContext";

const EmailOptionsDropdown = ({ onMarkAsUnread, onEditLead }) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`absolute right-0 mt-2 w-48 rounded-lg shadow-lg z-10 ${
        isDarkMode ? "bg-[#343a40] text-white" : "bg-white text-black"
      }`}
    >
      <ul>
        <li
          onClick={onMarkAsUnread}
          className={`flex items-center px-4 py-2 cursor-pointer ${
            isDarkMode ? "hover:bg-[#4e4e4e]" : "hover:bg-gray-200"
          }`}
        >
          <MdOutlineMarkAsUnread
            className={`mr-3 ${isDarkMode ? "text-white" : "text-black"}`}
          />
          Mark as Unread
        </li>
        <li
          onClick={onEditLead}
          className={`flex items-center px-4 py-2 cursor-pointer ${
            isDarkMode ? "hover:bg-[#4e4e4e]" : "hover:bg-gray-200"
          }`}
        >
          <LuFolderEdit
            className={`mr-2 ${isDarkMode ? "text-white" : "text-black"}`}
          />
          Edit Lead
        </li>
      </ul>
    </div>
  );
};

export default EmailOptionsDropdown;
