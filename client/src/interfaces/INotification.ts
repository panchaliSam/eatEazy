export interface INotification {
    NotificationID: number;
    UserID: number;
    Message: string;
    Channel: 'SMS' | 'Email' | 'InApp'; // Enum type for channels
    NotificationType: string | null; // Can be null if no type is provided
    NotificationDate: string; // Date should be a string in ISO format
    IsRead: boolean;
  }