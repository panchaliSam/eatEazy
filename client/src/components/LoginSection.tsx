import React, { ChangeEvent } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import logo from "@app_assets/LoginImage.png";
import UserApi from "../utils/api/UserApi";
import { setTokens } from "../utils/helper/TokenHelper";

interface FormData {
  email: string;
  password: string;
}

const LoginSection: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    try {
      // Step 1: Login and get tokens
      const response = await UserApi.login({
        email: formData.email,
        password: formData.password,
      });
      const { accessToken, refreshToken } = response;

      setTokens(accessToken, refreshToken);

      const user = await UserApi.verifyToken();

      if (!user || !user.role) {
        throw new Error("Failed to fetch user details.");
      }

      switch (user.role) {
        case "Admin":
          navigate("/admin");
          break;
        case "Restaurant":
          navigate("/restaurant");
          break;
        case "Customer":
          navigate("/customer");
          break;
        case "DeliveryPerson":
          navigate("/delivery");
          break;
        default:
          navigate("/404");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || "Failed to login");
      } else {
        setError("Failed to login");
      }
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleRegisterClick = () => {
    navigate("/register");
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
      {/* Left Content (Login Form) */}
      <Box
        sx={{
          width: "40%",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 3 }}>
          Welcome Back
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "gray", mb: 3 }}>
          Please login to your account to continue.
        </Typography>

        {error && (
          <Typography color="error" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          variant="outlined"
          fullWidth
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#EA7300",
              },
              "&.Mui-focused": {
                color: "#EA7300",
              },
            },
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "#EA7300",
              },
            },
          }}
        />
        <TextField
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          type={showPassword ? "text" : "password"}
          variant="outlined"
          fullWidth
          sx={{
            mb: 2,
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#EA7300",
              },
              "&.Mui-focused": {
                color: "#EA7300",
              },
            },
            "& .MuiInputLabel-root": {
              "&.Mui-focused": {
                color: "#EA7300",
              },
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={togglePasswordVisibility}
                  edge="end"
                  sx={{
                    outline: "none",
                    "&:focus": {
                      outline: "none",
                    },
                  }}
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            background: "#EA7300",
            padding: "0.8rem",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "30px",
            textTransform: "none",
            outline: "none",
            "&:focus": {
              outline: "none",
            },
          }}
        >
          {loading ? "Login" : "Login"}
        </Button>

        <Typography variant="subtitle1" sx={{ color: "gray", mt: 6, mb: 3 }}>
          Don't have an account?{" "}
          <span
            onClick={handleRegisterClick}
            style={{
              color: "#EA7300",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            Click Here to Register
          </span>
        </Typography>
      </Box>

      {/* Right Image */}
      <Box sx={{ position: "relative" }}>
        <img
          src={logo}
          alt="Delicious Food"
          style={{ borderRadius: "50%", width: "600px", height: "600px" }}
        />
      </Box>
    </Box>
  );
};

export default LoginSection;
