import React from "react";

interface MenuItemsContentProps {
  menuItemId: string;
}

export const CartItemsContent: React.FC<MenuItemsContentProps> = ({
  menuItemId,
}) => {
  return (
    <div>
      <p>Menu Item ID: {menuItemId}</p>
    </div>
  );
};
