import React from "react";
import ResponsiveAppBar from "../common/Pre-Login/Navbar";
import { CssBaseline } from "@mui/material";
import HeroSection from "@app_components/HeroSection";

const Home: React.FC = () => {
  return (
    <div>
      <CssBaseline />
      <ResponsiveAppBar />
      <HeroSection />
    </div>
  );
};

export default Home;
