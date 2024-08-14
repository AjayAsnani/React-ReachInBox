import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropdown from "./Dropdown";
import DeleteDialog from "./DeleteDialog";
import ReplyDialog from "./ReplyDialog";
import EmailOptionsDropdown from "./EmailOptionsDropdown";
import { useTheme } from "./ThemeContext";

const SelectedEmail = ({ selectedEmail, onEmailDeleted }) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showReplyDialog, setShowReplyDialog] = useState(false);
  const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "d") {
        event.preventDefault();
        handleDeleteClick();
      } else if (event.ctrlKey && event.key === "r") {
        event.preventDefault();
        handleReplyClick();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedEmail]);

  const handleDeleteClick = () => {
    setShowDeleteDialog(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteDialog(false);
  };

  const handleConfirmDelete = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found. Please log in.");
      return;
    }

    const threadId = selectedEmail.threadId;

    if (!threadId) {
      console.error("No threadId found in selectedEmail.");
      return;
    }

    try {
      const deleteUrl = `https://hiring.reachinbox.xyz/api/v1/onebox/messages/${threadId}`;
      console.log("Delete URL:", deleteUrl);

      const response = await fetch(deleteUrl, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Email deleted successfully");
        onEmailDeleted(selectedEmail.id);
      } else {
        console.error("Failed to delete the email, Status:", response.status);
        console.error("Response Text:", await response.text());
      }
    } catch (error) {
      console.error("Error deleting the email:", error);
    } finally {
      setShowDeleteDialog(false);
    }
  };

  const handleReplyClick = () => {
    setShowReplyDialog(true);
  };

  const handleCloseReplyDialog = () => {
    setShowReplyDialog(false);
  };

  const handleSendReply = async (replyText) => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No token found. Please log in.");
      return;
    }

    const threadId = selectedEmail?.threadId;

    if (!threadId) {
      console.error("No threadId found in selectedEmail.");
      return;
    }

    const payload = {
      toName: selectedEmail.toName || "",
      to: selectedEmail.toEmail || "",
      from: selectedEmail.fromEmail || "",
      fromName: selectedEmail.fromName || "",
      subject: selectedEmail.subject || "",
      body: replyText,
      references: selectedEmail.references ? [selectedEmail.references] : [],
      inReplyTo: selectedEmail.inReplyTo || "",
    };

    try {
      const response = await axios.post(
        `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Reply sent successfully");
      } else {
        console.error("Failed to send reply, Status:", response.status);
        console.error("Response Text:", response.data);
      }
    } catch (error) {
    } finally {
      handleCloseReplyDialog();
    }
  };

  const toggleOptionsDropdown = () => {
    setShowOptionsDropdown(!showOptionsDropdown);
  };

  const optionsIconSrc = isDarkMode ? "/Frame 2087326035.png" : "/menu.png";

  return (
    <div
      className={`w-1/2 ${
        isDarkMode ? "bg-black" : "bg-white"
      } p-4 overflow-y-auto`}
    >
      <div
        className={`text-${
          isDarkMode ? "white" : "black"
        } p-2 flex items-center justify-between border-b ${
          isDarkMode ? "border-[#343a40]" : "border-gray-300"
        }`}
      >
        <div className="text-sm">
          <h2 className="font-bold">Orlando</h2>
          <p className="opacity-40">orlando@gmail.com</p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <div
            className={`flex items-center justify-center gap-2 ${
              isDarkMode ? "bg-[#343a40]" : "bg-[#f0f0f0]"
            } p-2 rounded-lg`}
          >
            <img src={isDarkMode ? "/Frame 2087325584.png" : "/meet.png"} />
            <p>Meeting completed</p>
            <img src="/arrow_back_ios.png" />
          </div>
          <div
            className={`flex items-center justify-center gap-2 ${
              isDarkMode ? "bg-[#343a40]" : "bg-[#f0f0f0]"
            } rounded-lg`}
          >
            <Dropdown onDelete={handleDeleteClick} />
          </div>

          <div
            onClick={toggleOptionsDropdown}
            className="relative cursor-pointer"
          >
            <img src={optionsIconSrc} alt="Additional icon" />
            {showOptionsDropdown && <EmailOptionsDropdown />}
          </div>
        </div>
      </div>
      <div className="relative">
        <hr
          className={`border-t ${
            isDarkMode ? "border-gray-600" : "border-gray-300"
          } my-8`}
        />
        <div
          className={`absolute top-[-0.75rem] left-1/2 transform -translate-x-1/2 ${
            isDarkMode ? "bg-[#171819] text-white" : "bg-[#f0f0f0] text-black"
          } px-4 py-1`}
        >
          Today
        </div>
      </div>

      {selectedEmail ? (
        <div
          className={`mt-4 p-6 rounded-xl ${
            isDarkMode ? "bg-[#141517]" : "bg-[#ECEFF3]"
          }`}
        >
          <div className="flex items-center justify-between">
            <h2
              className={`text-lg font-bold ${
                isDarkMode ? "text-white" : "text-black"
              }`}
            >
              {selectedEmail.subject}
            </h2>{" "}
            <p className={`${isDarkMode ? "text-[#7f7f7f]" : "text-gray-600"}`}>
              {selectedEmail.sentAt}
            </p>
          </div>
          <p
            className={`${
              isDarkMode ? "text-[#aeaeae]" : "text-gray-600"
            } mt-3`}
          >
            from : {selectedEmail.fromEmail}
          </p>
          <p
            className={`${
              isDarkMode ? "text-[#aeaeae]" : "text-gray-600"
            } mt-3`}
          >
            to : {selectedEmail.toEmail}
          </p>
          <p
            className={`${isDarkMode ? "text-gray-300" : "text-gray-800"} mt-8`}
          >
            {selectedEmail.body}
          </p>
        </div>
      ) : (
        <div className={`text-${isDarkMode ? "gray-400" : "gray-800"} mt-4`}>
          No email selected
        </div>
      )}

      <div className="relative">
        <hr
          className={`border-t ${
            isDarkMode ? "border-gray-600" : "border-gray-300"
          } my-8`}
        />
        <div
          className={`absolute top-[-0.75rem] left-1/2 transform -translate-x-1/2 ${
            isDarkMode ? "bg-[#171819] text-white" : "bg-[#f0f0f0] text-black"
          } px-4 py-1 flex items-center justify-center gap-2`}
        >
          <img src="/Vector.png" />
          View all <span className="text-[#5C7CFA]">4</span> replies
        </div>
      </div>
      <div
        className="flex items-center justify-start w-28 px-4 py-2 text-white rounded-lg gap-3 bg-custom-gradient cursor-pointer"
        onClick={handleReplyClick}
      >
        <img src="/arrow.png" />
        <p>Reply</p>
      </div>

      <DeleteDialog
        isOpen={showDeleteDialog}
        onCancel={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
      <ReplyDialog
        isOpen={showReplyDialog}
        onClose={handleCloseReplyDialog}
        onSendReply={handleSendReply}
      />
    </div>
  );
};

export default SelectedEmail;
