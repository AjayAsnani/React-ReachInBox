import React from "react";
import { useTheme } from "./ThemeContext";

const DeleteDialog = ({ isOpen, onCancel, onConfirm }) => {
  const { isDarkMode } = useTheme();

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-20 ${
        isDarkMode ? "bg-black bg-opacity-50" : "bg-gray-100 bg-opacity-75"
      }`}
    >
      <div
        className={`p-6 rounded-lg shadow-lg ${
          isDarkMode ? "bg-[#1f1f1f] text-white" : "bg-white text-black"
        }`}
      >
        <h3 className="text-2xl font-bold mb-4 text-center">Are you sure?</h3>
        <p className="mb-4">Your selected email will be deleted</p>
        <div className="flex justify-center gap-4">
          <button
            className={`px-4 py-2 rounded ${
              isDarkMode
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-black hover:bg-gray-400"
            } text-white`}
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className={`px-4 py-2 rounded ${
              isDarkMode
                ? "bg-red-600 hover:bg-red-500"
                : "bg-red-500 hover:bg-red-600"
            } text-white`}
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
