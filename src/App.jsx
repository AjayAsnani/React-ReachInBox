import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import GoogleLoginRedirect from "./components/GoogleLoginRedirect";
import Onebox from "./components/Onebox";
import Home from "./components/Home";
import { ThemeProvider } from "./components/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/google-login" element={<GoogleLoginRedirect />} />
          <Route path="/onebox" element={<Onebox />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
