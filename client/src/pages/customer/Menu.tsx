import React from "react";
import { useLocation } from "react-router-dom";
import ResponsiveAppBar from "../../common/Post-Login/Navbar";
import { CssBaseline } from "@mui/material";
import { MenuItemsContent } from "../../components/customer/MenuItemsContent";

export const MenuScreen: React.FC = () => {
  const location = useLocation();
  const { restaurantId } = location.state as { restaurantId: string };

  if (!restaurantId) {
    return <div>Error: No restaurant ID provided</div>;
  } else {
    console.log("Restaurant ID:", restaurantId);
  }
  return (
    <div>
      <CssBaseline />
      <ResponsiveAppBar />
      <MenuItemsContent restaurantId={restaurantId} />
    </div>
  );
};
