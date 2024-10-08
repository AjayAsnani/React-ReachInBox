import React from "react";

const Loader = () => (
  <div className="flex items-center justify-center h-screen">
    <div
      className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full border-current text-blue-500 border-t-transparent"
      role="status"
    ></div>
  </div>
);

export default Loader;
