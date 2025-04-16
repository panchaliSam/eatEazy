import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/admin/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoutes";

const theme = createTheme({
  palette: {
    background: {
      default: "#ffffff",
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute
                element={<Dashboard />}
                allowedRoles={["Admin"]}
              />
            }
          />
          <Route
            path="/restaurant"
            element={
              <ProtectedRoute
                element={<Dashboard />}
                allowedRoles={["Restaurant"]}
              />
            }
          />
          <Route
            path="/customer"
            element={
              <ProtectedRoute
                element={<Dashboard />}
                allowedRoles={["Customer"]}
              />
            }
          />
          <Route
            path="/delivery"
            element={
              <ProtectedRoute
                element={<Dashboard />}
                allowedRoles={["DeliveryPerson"]}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
