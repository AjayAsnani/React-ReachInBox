import React, { useState, useEffect } from "react";
import axios from "axios";
import { useTheme } from "./ThemeContext";

const EmailList = ({ onSelectEmail }) => {
  const [emails, setEmails] = useState([]);
  const [error, setError] = useState(null);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const fetchEmails = async () => {
      const token = localStorage.getItem("token");
      console.log("Retrieved Token:", token); // Debugging line

      if (!token) {
        console.error("No token found. Please log in.");
        setError("No token found. Please log in.");
        return;
      }

      try {
        await axios.get("https://hiring.reachinbox.xyz/api/v1/onebox/reset", {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        const response = await axios.get(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        setEmails(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching emails:", error);
        setError("Error fetching emails. Please try again later.");
      }
    };

    fetchEmails();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    }).format(date);
  };

  const getImageSrc = (index) => {
    switch (index) {
      case 0:
        return isDarkMode ? "/Group 2087325583.png" : "/green.png";
      case 1:
        return isDarkMode
          ? "/Group 2087325583-dark.png"
          : "/Group 2087325583 (1).png";
      default:
        return isDarkMode ? "/DefaultImage-dark.png" : "/DefaultImage.png";
    }
  };

  return (
    <div
      className={`w-1/4 ${isDarkMode ? "bg-black" : "bg-[#f9f9f9]"} border-r ${
        isDarkMode ? "border-[#343A40]" : "border-gray-300"
      } overflow-y-auto p-5`}
    >
      {error && <div className="text-red-500">{error}</div>}
      <div className="flex items-center justify-between ">
        <div className="flex items-center justify-center gap-2">
          <h2
            className={`text-xl font-bold ${
              isDarkMode ? "text-[#4285f4]" : "text-[#0056b3]"
            }`}
          >
            All Inbox(s)
          </h2>
          <img src="/blue.png" className="h-3" alt="Blue icon" />
        </div>
        <div>
          <img
            src={isDarkMode ? "/Default.png" : "/but.png"}
            alt="Default avatar"
          />
        </div>
      </div>
      <p
        className={`text-sm mt-1 font-bold ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        {emails.length}{" "}
        <span
          className={`text-[#7f7f7f] ${
            isDarkMode ? "text-gray-400" : "text-gray-700"
          }`}
        >
          {emails.length === 1 ? "Inbox" : "Inboxes"} selected
        </span>
      </p>
      <div
        className={`flex items-center justify-start gap-1 mt-6 ${
          isDarkMode ? "bg-[#343a40]" : "bg-gray-200"
        } p-2 rounded-lg`}
      >
        <img
          src={isDarkMode ? "/Search-s.png" : "/Search-s-dark.png"}
          alt="Search icon"
        />
        <input
          type="text"
          placeholder="Search"
          className={`bg-transparent outline-none ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        />
      </div>

      <div
        className={`mt-4 flex items-center pb-4 justify-between font-semibold border-b ${
          isDarkMode ? "border-[#343a40]" : "border-gray-300"
        }`}
      >
        <div
          className={`text-white ${isDarkMode ? "text-white" : "text-black"}`}
        >
          <p className={`text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
            <span
              className={`rounded-3xl ${
                isDarkMode
                  ? "text-[#5C7CFA] bg-[#343a40]"
                  : "text-blue-500 bg-gray-200"
              } px-3 py-1`}
            >
              {emails.length}
            </span>{" "}
            New Replies
          </p>
        </div>
        <div
          className={`flex items-center justify-around text-white gap-3 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          <p className={`text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
            Newest
          </p>
          <img
            src={isDarkMode ? "/arrow_back_ios.png" : "/Path 7372.png"}
            alt="Arrow icon"
          />
        </div>
      </div>

      <ul className={`text-white ${isDarkMode ? "text-white" : "text-black"}`}>
        {emails.length > 0 ? (
          emails.map((email, index) => (
            <li
              key={email.id}
              onClick={() => onSelectEmail(email)}
              className={`cursor-pointer p-4 hover:bg-gray-200 ${
                isDarkMode ? "dark:hover:bg-gray-600" : "hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3
                  className={`text-md font-semibold mb-1 ${
                    isDarkMode ? "text-gray-100" : "text-black"
                  }`}
                >
                  {email.fromEmail}
                </h3>
                <p
                  className={`text-xs opacity-40 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {formatDate(email.createdAt)}
                </p>
              </div>
              <p
                className={`text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-800"
                }`}
              >
                {email.subject}
              </p>
              <div className="flex items-center justify-start gap-3 mt-3">
                <div
                  className={`flex items-center gap-1 text-xs py-1 rounded-2xl px-2 ${
                    index === 0
                      ? isDarkMode
                        ? "text-[#57E0A6] bg-[#343a40]"
                        : "text-[#57E0A6] bg-gray-200"
                      : isDarkMode
                      ? "text-[#626FE6] bg-[#343a40]"
                      : "text-[#626FE6] bg-gray-200"
                  }`}
                >
                  <img src={getImageSrc(index)} alt="Status icon" />
                  <p>{index === 0 ? "Interested" : "Closed"}</p>
                </div>
                <div
                  className={`flex items-center text-xs gap-1 py-1 px-2 rounded-2xl ${
                    isDarkMode ? "bg-[#343a40]" : "bg-gray-200"
                  }`}
                >
                  <img
                    src={isDarkMode ? "/Frame 23.png" : "/Frame 23.png"}
                    className="h-5"
                  />
                  <p className={` ${isDarkMode ? "text-white" : "text-black"}`}>
                    Campaign Name
                  </p>
                </div>
              </div>
            </li>
          ))
        ) : (
          <li className={`text-sm ${isDarkMode ? "text-white" : "text-black"}`}>
            No emails found
          </li>
        )}
      </ul>
    </div>
  );
};

export default EmailList;
