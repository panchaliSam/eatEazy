import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import BakeryDiningIcon from "@mui/icons-material/BakeryDining";
import logo from "@app_assets/HeroSectionFood.jpg";
import { keyframes } from "@mui/system";

// Define animations
const bounce = keyframes`
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
`;

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const handleOrderNowClick = () => {
    navigate("/login");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        background: "linear-gradient(90deg, #FFEDD5 50%, #FFF)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        flexDirection: { xs: "column", md: "row" }, // Stack on small screens
      }}
    >
      {/* Left Content */}
      <Box
        sx={{
          position: "relative",
          textAlign: { xs: "center", md: "left" }, // Center text on small screens
          mb: { xs: 4, md: 0 }, // Add margin on small screens
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            mb: 2,
            fontSize: { xs: "1.8rem", md: "2.5rem" }, // Adjust font size
          }}
        >
          We Offer{" "}
          <Typography
            component="span"
            variant="h3"
            sx={{ color: "orange", fontSize: { xs: "1.8rem", md: "2.5rem" } }}
          >
            Delicious Food
          </Typography>{" "}
          <br /> And Quick Service
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "gray",
            mb: 3,
            fontSize: { xs: "0.9rem", md: "1rem" }, // Adjust font size
          }}
        >
          Imagine you don’t need a diet because we provide healthy and delicious
          food for you!
        </Typography>
        <Button
          variant="contained"
          onClick={handleOrderNowClick}
          sx={{
            background: "#EA7300",
            mb: 2,
            padding: { xs: "0.8rem", md: "1rem" }, // Adjust padding
            fontSize: { xs: "16px", md: "18px" }, // Adjust font size
            fontWeight: "lighter",
            borderRadius: "30px",
            textTransform: "none",
            width: { xs: "150px", md: "200px" }, // Adjust width
            outline: "none",
            "&:focus": {
              outline: "none",
            },
          }}
        >
          Order Now
        </Button>
      </Box>

      {/* Right Image */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          alt="Delicious Food"
          style={{
            borderRadius: "50%",
            width: "100%",
            maxWidth: "600px", // Limit max width
            height: "auto", // Maintain aspect ratio
          }}
        />

        {/* Icons with animations around the image */}
        <Box
          sx={{
            position: "absolute",
            top: "-5%",
            left: "10%",
            animation: `${bounce} 2s infinite`,
            display: { xs: "none", md: "block" }, // Hide on small screens
          }}
        >
          <LocalDiningIcon sx={{ fontSize: 40, color: "orange" }} />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: "30%",
            right: "-10%",
            animation: `${bounce} 3s infinite linear`,
            display: { xs: "none", md: "block" }, // Hide on small screens
          }}
        >
          <RamenDiningIcon sx={{ fontSize: 40, color: "orange" }} />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-5%",
            left: "15%",
            animation: `${bounce} 2.5s infinite`,
            display: { xs: "none", md: "block" }, // Hide on small screens
          }}
        >
          <LunchDiningIcon sx={{ fontSize: 40, color: "orange" }} />
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "-10%",
            right: "15%",
            animation: `${rotate} 4s infinite linear`,
            display: { xs: "none", md: "block" }, // Hide on small screens
          }}
        >
          <BakeryDiningIcon sx={{ fontSize: 40, color: "orange" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
