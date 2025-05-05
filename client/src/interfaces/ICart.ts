export interface ICart {
    CartID?: number;
    UserID: number;
    RestaurantID: number;
    Status?: "ACTIVE" | "COMPLETED";
    CreatedAt?: string;
    UpdatedAt?: string;
    cartitems?: ICartItem[];
  }

  export interface ICartItem {
    CartItemsID?: number;
    CartID: number;
    MenuItemID: number;
    Quantity?: number;
    Price: number;
  }
 
  
  