import React, { useState } from "react";
import EmailList from "./EmailList";
import SelectedEmail from "./SelectedEmail";
import EmailDetails from "./EmailDetails";
import Header from "./Header"; // Import Header
import { useTheme } from "./ThemeContext";

const RightSideContent = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [emails, setEmails] = useState([]);

  const handleEmailDeleted = (deletedEmailId) => {
    setEmails(emails.filter((email) => email.id !== deletedEmailId));
    setSelectedEmail(null);
  };

  return (
    <div
      className={`flex-1 ${isDarkMode ? "bg-gray-900" : "bg-gray-100"} text-${
        isDarkMode ? "white" : "black"
      }`}
    >
      <Header onThemeToggle={toggleTheme} />
      <div className="flex h-[calc(100vh-64px)]">
        {" "}
        {/* Adjust height based on header */}
        <EmailList onSelectEmail={setSelectedEmail} />
        <SelectedEmail
          selectedEmail={selectedEmail}
          onEmailDeleted={handleEmailDeleted}
        />
        <EmailDetails selectedEmail={selectedEmail} />
      </div>
    </div>
  );
};

export default RightSideContent;
