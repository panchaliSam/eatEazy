import React from "react";
import { useLocation } from "react-router-dom";
import ResponsiveAppBar from "@app_common/Post-Login/Navbar";
import { CssBaseline } from "@mui/material";
import { MenuItemsContent } from "@app_components/customer/MenuItemsContent";

export const MenuScreen: React.FC = () => {
  const location = useLocation();
  const { restaurantId, restaurantName } = location.state as {
    restaurantId: string;
    restaurantName: string;
  };

  if (!restaurantId) {
    return <div>Error: No restaurant ID provided</div>;
  } else {
    console.log("Restaurant ID:", restaurantId);
    console.log("Restaurant Name:", restaurantName);
  }
  return (
    <div>
      <CssBaseline />
      <ResponsiveAppBar />
      <MenuItemsContent
        restaurantId={restaurantId}
        restaurantName={restaurantName}
      />
    </div>
  );
};
