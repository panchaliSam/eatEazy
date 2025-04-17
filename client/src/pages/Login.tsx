import React from "react";
import ResponsiveAppBar from "../common/Pre-Login/Navbar";
import { CssBaseline } from "@mui/material";
import LoginSection from "../components/LoginSection";

const Login: React.FC = () => {
  return (
    <div>
      <CssBaseline />
      <ResponsiveAppBar />
      <LoginSection />
    </div>
  );
};

export default Login;
