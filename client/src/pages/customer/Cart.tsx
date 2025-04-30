import React from "react";
import { useLocation } from "react-router-dom";
import ResponsiveAppBar from "@app_common/Post-Login/Navbar";
import { CssBaseline } from "@mui/material";
import { CartItemsContent } from "@app_components/customer/CartItemsContent";

export const CartScreen: React.FC = () => {
  const location = useLocation();
  console.log("Cart page location state:", location.state);
  
  // Extract state with defaults to avoid undefined errors
  const { menuItemId, menuItemName, menuItemPrice, restaurantId, restaurantName } = (location.state || {}) as {
    menuItemId?: string;
    menuItemName?: string;
    menuItemPrice?: number;
    restaurantId?: number;
    restaurantName?: string;
  };

  console.log("Cart page extracted props:", {
    restaurantId,
    restaurantName,
    menuItemId,
    menuItemName,
    menuItemPrice
  });

  if (!restaurantId) {
    return <div>Error: No restaurant ID provided</div>;
  }

  return (
    <div>
      <CssBaseline />
      <ResponsiveAppBar />
      <CartItemsContent 
        restaurantId={restaurantId}
        restaurantName={restaurantName}
        menuItemId={menuItemId} 
        menuItemName={menuItemName}
        menuItemPrice={menuItemPrice}
      />
    </div>
  );
};