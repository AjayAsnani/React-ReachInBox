import React from "react";
import { useTheme } from "./ThemeContext";

const EmailDetails = ({ selectedEmail }) => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`w-1/4 ${isDarkMode ? "bg-black" : "bg-[#f9f9f9]"} border-l ${
        isDarkMode ? "border-[#343a40]" : "border-gray-300"
      } p-4 overflow-y-auto`}
    >
      {selectedEmail ? (
        <div>
          <div
            className={`bg-[#141217] px-3 py-1 rounded-lg ${
              isDarkMode ? "text-white" : "bg-[#eceff3] text-black"
            }`}
          >
            <h2 className="text-lg font-bold">Lead Details</h2>
          </div>
          <div
            className={`flex items-center justify-between mt-5 text-sm ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <p>Name</p>
            <p className="text-[#b9b9b9]">{selectedEmail.fromName}</p>
          </div>
          <div
            className={`flex items-center justify-between mt-5 text-sm ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <p>Contact no</p>
            <p className="text-[#b9b9b9]">+54-9062827869</p>
          </div>
          <div
            className={`flex items-center justify-between mt-5 text-sm ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <p>Email ID</p>
            <p className="text-[#b9b9b9]">{selectedEmail.fromEmail}</p>
          </div>
          <div
            className={`flex items-center justify-between mt-5 text-sm ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <p>Linkedin</p>
            <p className="text-[#b9b9b9]">linkedin.com/in/timvadde/</p>
          </div>
          <div
            className={`flex items-center justify-between mt-5 text-sm ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            <p>Company Name</p>
            <p className="text-[#b9b9b9] text-sm">Reachinbox</p>
          </div>
        </div>
      ) : (
        <p
          className={`text-gray-500 ${
            isDarkMode ? "text-gray-400" : "text-black"
          }`}
        >
          Select an email to view details.
        </p>
      )}
      <div
        className={`bg-[#141217] px-3 py-1 mt-6 rounded-lg ${
          isDarkMode ? "text-white" : "bg-[#eceff3] text-black"
        }`}
      >
        <h2 className="text-lg font-bold">Activities</h2>
      </div>
      <div
        className={`text-white p-3 mt-3 ${
          isDarkMode ? "text-white" : "text-black"
        }`}
      >
        <h2
          className={`text-white font-bold mb-2 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Campaign Name
        </h2>
        <p className={`mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>
          <span className="font-bold">3</span> Steps{" "}
          <span className="opacity-40">|</span>{" "}
          <span className="font-bold">5</span> Days in Sequence
        </p>
        <div className="flex items-center justify-start gap-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center flex-col">
              <div
                className={`bg-[#343a40] p-2 rounded-full ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-300"
                }`}
              >
                <img
                  src={isDarkMode ? "/em.png" : "/em2.png"}
                  alt="Logo 2"
                  className="h-5"
                />
              </div>
              <div
                className={`w-0.5 h-12 ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-300"
                } mx-2`}
              ></div>
              <div
                className={`bg-[#343a40] p-2 rounded-full ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-300"
                }`}
              >
                <img
                  src={isDarkMode ? "/em.png" : "/em2.png"}
                  alt="Logo 2"
                  className="h-5"
                />
              </div>
              <div
                className={`w-0.5 h-12 ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-300"
                } mx-2`}
              ></div>
              <div
                className={`bg-[#343a40] p-2 rounded-full ${
                  isDarkMode ? "bg-gray-700" : "bg-gray-300"
                }`}
              >
                <img
                  src={isDarkMode ? "/em.png" : "/em2.png"}
                  alt="Logo 2"
                  className="h-5"
                />
              </div>
            </div>
          </div>
          <div>
            <div className="mb-8">
              <h3
                className={`text-base font-semibold mb-1 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Step 1: Email
              </h3>
              <div
                className={`text-white flex items-center justify-start gap-2 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <img src="/Frame 23.png" className="h-5" />
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Sent <span> 3rd, Feb</span>
                </p>
              </div>
            </div>
            <div className="mb-8">
              <h3
                className={`text-base font-semibold mb-1 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Step 2: Email
              </h3>
              <div
                className={`text-white flex items-center justify-start gap-2 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <img src="/drafts.png" className="h-4" />
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Opened <span> 5th, Feb</span>
                </p>
              </div>
            </div>
            <div className="mb-4">
              <h3
                className={`text-base font-semibold ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Step 3: Email
              </h3>
              <div
                className={`text-white flex items-center justify-start gap-2 ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                <img src="/drafts.png" className="h-4" />
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                >
                  Opened <span> 5th, Feb</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailDetails;
