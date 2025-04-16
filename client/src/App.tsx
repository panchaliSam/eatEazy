import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AdminDashboard } from "./pages/admin/Dashboard";
import { RestaurantDashboard } from "./pages/restaurant/Dashboard";
import { CustomerDashboard } from "./pages/customer/Dashboard";
import { DeliveryPersonDashboard } from "./pages/deliveryPerson/Dashboard";
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
                element={<AdminDashboard />}
                allowedRoles={["Admin"]}
              />
            }
          />
          <Route
            path="/restaurant"
            element={
              <ProtectedRoute
                element={<RestaurantDashboard />}
                allowedRoles={["Restaurant"]}
              />
            }
          />
          <Route
            path="/customer"
            element={
              <ProtectedRoute
                element={<CustomerDashboard />}
                allowedRoles={["Customer"]}
              />
            }
          />
          <Route
            path="/delivery"
            element={
              <ProtectedRoute
                element={<DeliveryPersonDashboard />}
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
