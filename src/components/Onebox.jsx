import React from "react";
import Sidebar from "./Sidebar";
import RightSideContent from "./RightSideContent";

const Onebox = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <RightSideContent />
    </div>
  );
};

export default Onebox;
