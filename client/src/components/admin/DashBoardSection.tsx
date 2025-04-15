import { useNavigate } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import PeopleIcon from "@mui/icons-material/People";
import PaymentIcon from "@mui/icons-material/Payment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import { AppProvider, Navigation } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useDemoRouter } from "@toolpad/core/internal";
import logo from "@app_assets/logo/png/logo-transparent.png";
import { orange } from "@mui/material/colors";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import UserApi from "../../utils/api/UserApi.ts";

const theme = createTheme({
  palette: {
    primary: orange,
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            backgroundColor: "rgba(255, 152, 0, 0.16)",
            color: "primary.main",
            "&:hover": {
              backgroundColor: "rgba(255, 152, 0, 0.24)",
              color: "primary.main",
            },
          },
        },
      },
    },
  },
});

const demoTheme = createTheme(theme, {
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

const DemoPageContent = () => (
  <Box
    sx={{
      py: 4,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      ml: 2,
      mr: 2,
    }}
  >
    <Typography
      sx={{
        alignSelf: "flex-start",
        fontSize: 24,
      }}
    >
      Profile
    </Typography>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        border: "1px solid",
        borderColor: "rgba(128, 128, 128, 0.5)",
        width: "100%",
        mt: 4,
        borderRadius: 2,
        padding: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          borderColor: "rgba(128, 128, 128, 0.5)",
          width: "100%",
          borderRadius: 2,
          padding: "1rem",
        }}
      >
        <Typography
          sx={{
            alignSelf: "flex-start",
            fontSize: 20,
          }}
        >
          Account Details
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            mt: 4,
            padding: "1rem",
          }}
        >
          {/* Row 1: First Name and Last Name */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              width: "100%",
              mb: 2,
            }}
          >
            <TextField label="First Name" name="firstName" fullWidth />
            <TextField label="Last Name" name="lastName" fullWidth />
          </Box>

          {/* Row 2: Email and Phone */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              width: "100%",
              mb: 2,
            }}
          >
            <TextField label="Email" name="email" fullWidth />
            <TextField label="Phone" name="phone" fullWidth />
          </Box>

          {/* Save Changes Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#EA7300",
                color: "#fff",
                padding: "1rem",
                borderRadius: "30px",
                textTransform: "none",
                width: "200px",
                mt: 2,
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#D66A00",
                },
              }}
            >
              Save Changes
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
);

interface DemoProps {
  window?: () => Window;
}

export default function DashboardLayoutBasic(props: DemoProps) {
  const { window } = props;
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      console.log("Logging out...");
      await UserApi.logout();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const NAVIGATION: Navigation = [
    {
      kind: "header",
      title: "Main items",
    },
    {
      segment: "dashboard",
      title: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      segment: "orders",
      title: "Orders",
      icon: <ShoppingCartIcon />,
    },
    {
      segment: "restaurants",
      title: "Restaurants",
      icon: <RestaurantMenuIcon />,
    },
    {
      segment: "people",
      title: "People",
      icon: <PeopleIcon />,
    },
    {
      segment: "payments",
      title: "Payments",
      icon: <PaymentIcon />,
    },
    {
      segment: "notifications",
      title: "Notifications",
      icon: <NotificationsIcon />,
    },
    {
      kind: "divider",
    },
    {
      kind: "header",
      title: "Analytics",
    },
    {
      segment: "reports",
      title: "Reports",
      icon: <BarChartIcon />,
      children: [
        {
          segment: "sales",
          title: "Sales",
          icon: <DescriptionIcon />,
        },
        {
          segment: "traffic",
          title: "Traffic",
          icon: <DescriptionIcon />,
        },
      ],
    },
    {
      segment: "integrations",
      title: "Integrations",
      icon: <LayersIcon />,
    },
    {
      kind: "divider",
    },
    {
      kind: "header",
      title: "Profile",
    },
    {
      segment: "logout",
      title: "Log Out",
      icon: <LogoutIcon />,
    },
  ];

  const router = useDemoRouter("/dashboard");
  const demoWindow = window !== undefined ? window() : undefined;

  const renderContent = () => {
    switch (router.pathname) {
      case "/dashboard":
        return <DemoPageContent />;
      case "/people":
        return <DashboardLayoutBasic />;
      default:
        return <Typography>Page Not Found</Typography>;
    }
  };

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src={logo} alt="Brand Logo" style={{ height: 100 }} />,
        title: "",
        homeUrl: "/toolpad/core/introduction",
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      {/* Logout Logic */}
      {router.pathname == "/logout" && (
        <>
          {handleLogout()}
          {null}
        </>
      )}

      <DashboardLayout>
        <Suspense fallback={<Typography>Loading...</Typography>}>
          {renderContent()}
        </Suspense>
      </DashboardLayout>
    </AppProvider>
  );
}
