import React from "react";
import { useLocation } from "react-router-dom";
import ResponsiveAppBar from "../../common/Post-Login/Navbar";
import { CssBaseline } from "@mui/material";
import { CartItemsContent } from "../../components/customer/CartItemsContent";

export const CartScreen: React.FC = () => {
  const location = useLocation();
  const { menuItemId } = location.state as { menuItemId: string };

  if (!menuItemId) {
    return <div>Error: No menu ID provided</div>;
  } else {
    console.log("Restaurant ID:", menuItemId);
  }
  return (
    <div>
      <CssBaseline />
      <ResponsiveAppBar />
      <CartItemsContent menuItemId={menuItemId} />
    </div>
  );
};
