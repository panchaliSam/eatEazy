export interface IOrder {
    OrderID?: number; 
    UserID: number;
    RestaurantID: number;
    CartID: number;
    TotalAmount: number;
    Status?: "PENDING" | "CONFIRMED" | "PREPARING" | "READY_FOR_PICKUP" | "CANCELLED";
    CreatedAt?: string; 
    UpdatedAt?: string;
    orderitems?: IOrderItem[];
  }
  
  export interface IOrderItem {
    OrderItemsID?: number;
    OrderID: number;
    MenuItemID: number;
    Quantity: number;
    Price: number;
  }
  