import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { IoEyeOutline } from "react-icons/io5";
import { LuSave } from "react-icons/lu";
import { useTheme } from "./ThemeContext";

const ReplyDialog = ({ isOpen, onClose, onSendReply, onSave }) => {
  const [replyText, setReplyText] = useState("");
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [showVariablesDropdown, setShowVariablesDropdown] = useState(false);
  const { isDarkMode } = useTheme();

  if (!isOpen) return null;

  const handleSendReply = () => {
    if (replyText.trim() && to.trim() && from.trim() && subject.trim()) {
      onSendReply({ to, from, subject, message: replyText });
      setReplyText("");
      setTo("");
      setFrom("");
      setSubject("");
    }
  };

  const handleVariableInsert = (variable) => {
    setReplyText((prevText) => prevText + `{{${variable}}}`);
    setShowVariablesDropdown(false);
  };

  const handleSave = () => {
    const savedData = {
      to,
      from,
      subject,
      replyText,
    };
    onSave(savedData);
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-20 ${
        isDarkMode ? "bg-black bg-opacity-50" : "bg-gray-100 bg-opacity-75"
      }`}
    >
      <div
        className={`bg-[#141517] text-white rounded-2xl shadow-lg w-full max-w-3xl ${
          isDarkMode ? "bg-[#141517]" : "bg-white text-black"
        }`}
      >
        <div
          className={`px-6 py-1 rounded-t-2xl flex items-center justify-between ${
            isDarkMode ? "bg-[#23272c]" : "bg-[#f0f0f0]"
          }`}
        >
          <h3
            className={`text-2xl font-bold mb-4  ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Reply
          </h3>
          <p
            className={`font-bold text-xl cursor-pointer1 cursor-pointer ${
              isDarkMode ? "text-white" : "text-black"
            }`}
            onClick={onClose}
          >
            X
          </p>
        </div>
        <div className="mb-4 px-6">
          <div className="flex items-center mb-2 border-b">
            <label
              className={`w-24 text-sm font-semibold ml-2  ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              To:
            </label>
            <input
              type="text"
              className={`flex-1 p-2 outline-none ${
                isDarkMode ? "bg-[#141517] text-white" : "bg-white text-black"
              }`}
              value={to}
              onChange={(e) => setTo(e.target.value)}
              placeholder="Recipient's email"
            />
          </div>
          <div className="flex items-center mb-2 border-b">
            <label
              className={`w-24 text-sm font-semibold ml-2  ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              From:
            </label>
            <input
              type="text"
              className={`flex-1 p-2 outline-none ${
                isDarkMode ? "bg-[#141517] text-white" : "bg-white text-black"
              }`}
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              placeholder="Your email"
            />
          </div>
          <div className="flex items-center mb-4 border-b">
            <label
              className={`w-24 text-sm font-semibold ml-2  ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              Subject:
            </label>
            <input
              type="text"
              className={`flex-1 p-2 outline-none ${
                isDarkMode ? "bg-[#141517] text-white" : "bg-white text-black"
              }`}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
            />
          </div>
          <textarea
            className={`flex-1 p-2 w-full outline-none ${
              isDarkMode ? "bg-[#141517] text-white" : "bg-white text-black"
            }`}
            rows="6"
            placeholder="Type your message here..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
        </div>
        <div className="flex justify-start gap-4 p-6 items-center">
          <button
            className={`px-8 py-2 flex items-center rounded-lg ${
              isDarkMode
                ? "bg-custom-gradient text-white"
                : "bg-blue-500 text-white"
            }`}
            onClick={handleSendReply}
          >
            Send
            <IoMdArrowDropdown />
          </button>
          <div className="relative flex items-center gap-2">
            <BsFillLightningChargeFill
              className={`  ${isDarkMode ? "text-white" : "text-black"}`}
            />
            <p
              className={`cursor-pointer ${
                isDarkMode ? "text-white" : "text-black"
              }`}
              onClick={() => setShowVariablesDropdown(!showVariablesDropdown)}
            >
              Variables
            </p>
            {showVariablesDropdown && (
              <div
                className={`absolute top-10 left-0 rounded-lg shadow-lg p-2 w-40 ${
                  isDarkMode ? "bg-[#343a40] text-white" : "bg-white text-black"
                }`}
              >
                <p
                  className={`cursor-pointer p-2 ${
                    isDarkMode ? "hover:bg-[#444]" : "hover:bg-gray-200"
                  }`}
                  onClick={() => handleVariableInsert("firstname")}
                >
                  First Name
                </p>
                <p
                  className={`cursor-pointer p-2 ${
                    isDarkMode ? "hover:bg-[#444]" : "hover:bg-gray-200"
                  }`}
                  onClick={() => handleVariableInsert("lastname")}
                >
                  Last Name
                </p>
                <p
                  className={`cursor-pointer p-2 ${
                    isDarkMode ? "hover:bg-[#444]" : "hover:bg-gray-200"
                  }`}
                  onClick={() => handleVariableInsert("email")}
                >
                  Email
                </p>
              </div>
            )}
          </div>
          <div
            onClick={handleSave}
            className={`flex items-center gap-2 cursor-pointer ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <LuSave />
            <p>Save</p>
          </div>
          <div
            className={`flex items-center gap-2 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <IoEyeOutline />
            <p>Preview Email</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/Frame 1.png" alt="Attachment" />
            <img src="/link.png" alt="Link" />
            <img src="/image.png" alt="Image" />
            <img src="/sentiment_satisfied.png" alt="Sentiment" />
            <img src="/person_remove.png" alt="Remove" />
            <img src="/unfold_more.png" alt="More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReplyDialog;
