// Frontend Cart Item (what's stored in localStorage)
export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    restaurantId: string;
    restaurantName: string;
    image: string;
    CartItemsID?: number;
  }
  
  // Backend Cart Item (what's sent to/from the API)
  export interface ICartItem {
    MenuItemID: number;
    Quantity: number;
    CartItemsID?: number;
    Price?: number;
  }