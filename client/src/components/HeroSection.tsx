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
      }}
    >
      {/* Left Content */}
      <Box sx={{ position: "relative" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
          We Offer{" "}
          <Typography component="span" variant="h3" sx={{ color: "orange" }}>
            Delicious Food
          </Typography>{" "}
          <br /> And Quick Service
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "gray", mb: 3 }}>
          Imagine you don’t need a diet because we provide healthy and delicious
          food for you!
        </Typography>
        <Button
          variant="contained"
          onClick={handleOrderNowClick}
          sx={{
            background: "#EA7300",
            mb: 2,
            padding: "1rem",
            fontSize: "18px",
            fontWeight: "lighter",
            borderRadius: "30px",
            textTransform: "none",
            width: "200px",
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
      <Box sx={{ position: "relative" }}>
        <img
          src={logo}
          alt="Delicious Food"
          style={{ borderRadius: "50%", width: "600px", height: "500px" }}
        />

        {/* Icons with animations around the image */}
        <Box
          sx={{
            position: "absolute",
            top: "-5%",
            left: "10%",
            animation: `${bounce} 2s infinite`,
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
          }}
        >
          <BakeryDiningIcon sx={{ fontSize: 40, color: "orange" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
