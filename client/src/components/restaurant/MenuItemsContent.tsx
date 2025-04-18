import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
  CardActions,
  Button,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import RestaurantApi from "../../utils/api/RestaurantApi";
import Image1 from "@app_assets/restaurants/Restaurant1.jpg";
import Image2 from "@app_assets/restaurants/Restaurant2.jpg";
import Image3 from "@app_assets/restaurants/Restaurant3.jpg";
import Image4 from "@app_assets/restaurants/Restaurant4.jpg";
import Image5 from "@app_assets/restaurants/Restaurant5.jpg";
import Image6 from "@app_assets/restaurants/Restaurant6.jpg";

const imageList = [
  { src: Image1, alt: "Menu Item 1" },
  { src: Image2, alt: "Menu Item 2" },
  { src: Image3, alt: "Menu Item 3" },
  { src: Image4, alt: "Menu Item 4" },
  { src: Image5, alt: "Menu Item 5" },
  { src: Image6, alt: "Menu Item 6" },
];

interface MenuItemsContentProps {
  restaurantId: string;
}

export const MenuItemsContent: React.FC<MenuItemsContentProps> = ({
  restaurantId,
}) => {
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<any>(null);

  const [editData, setEditData] = useState({
    Name: "",
    Price: "",
    Description: "",
    IsAvailable: false,
  });

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const data =
          await RestaurantApi.getMenuItemsByRestaurantId(restaurantId);
        const menuItemsWithImages = data.map((menuItem: any) => ({
          ...menuItem,
          randomImage: imageList[Math.floor(Math.random() * imageList.length)],
        }));
        setMenuItems(menuItemsWithImages);
      } catch (err: any) {
        setError(err.message || "Failed to fetch menu items.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, [restaurantId]);

  const handleEditClick = (menuItem: any) => {
    setSelectedMenuItem(menuItem);
    setEditData({
      Name: menuItem.Name,
      Price: menuItem.Price,
      Description: menuItem.Description,
      IsAvailable: menuItem.IsAvailable,
    });
    setOpenEdit(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    // Save changes logic here (e.g., API call to update the menu item)
    const updatedMenuItems = menuItems.map((item) =>
      item.MenuItemID === selectedMenuItem.MenuItemID
        ? { ...item, ...editData }
        : item
    );
    setMenuItems(updatedMenuItems);
    setOpenEdit(false);
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" textAlign="center">
        {error}
      </Typography>
    );
  }

  return (
    <Box
      sx={{
        py: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        ml: 6,
        mr: 6,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
        }}
      >
        {menuItems.map((menuItem) => (
          <Card
            key={menuItem.MenuItemID}
            sx={{
              maxWidth: 345,
              transition: "border-color 0.3s",
              border: "1px solid transparent",
              "&:hover": {
                borderColor: "orange",
              },
            }}
          >
            <CardHeader
              title={menuItem.Name}
              subheader={`Price: Rs.${menuItem.Price}`}
            />
            <CardMedia
              component="img"
              height="194"
              sx={{
                width: 300,
                height: 200,
                objectFit: "cover",
              }}
              image={menuItem.randomImage.src}
              alt={menuItem.Name}
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {menuItem.Description || "No description available"}
              </Typography>
            </CardContent>
            <CardActions
              disableSpacing
              sx={{ justifyContent: "space-between" }}
            >
              <Chip
                label={menuItem.IsAvailable ? "Available" : "Not Available"}
                sx={{
                  backgroundColor: menuItem.IsAvailable ? "#4CAF50" : "#F44336",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 12,
                  padding: "0 8px",
                }}
              />
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "#EA7300",
                  color: "white",
                  border: "none",
                  outline: "none",
                  "&:focus": {
                    outline: "none",
                  },
                }}
                startIcon={<EditIcon />}
                onClick={() => handleEditClick(menuItem)}
              >
                Edit
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>

      <Dialog open={openEdit} onClose={() => setOpenEdit(false)} fullWidth>
        <DialogTitle>Edit Menu Item</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Name"
            name="Name"
            onChange={handleInputChange}
            fullWidth
            value={editData.Name}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "orange",
                },
              },
              "& .MuiInputLabel-root": {
                "&.Mui-focused": {
                  color: "orange",
                },
              },
            }}
          />
          <TextField
            margin="dense"
            label="Price"
            name="Price"
            onChange={handleInputChange}
            fullWidth
            value={editData.Price}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "orange",
                },
              },
              "& .MuiInputLabel-root": {
                "&.Mui-focused": {
                  color: "orange",
                },
              },
            }}
          />
          <TextField
            margin="dense"
            label="Description"
            name="Description"
            onChange={handleInputChange}
            fullWidth
            value={editData.Description}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "orange",
                },
              },
              "& .MuiInputLabel-root": {
                "&.Mui-focused": {
                  color: "orange",
                },
              },
            }}
          />
          <FormControl
            fullWidth
            margin="dense"
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "orange",
                },
              },
              "& .MuiInputLabel-root": {
                "&.Mui-focused": {
                  color: "orange",
                },
              },
            }}
          >
            <InputLabel id="availability-label">Availability</InputLabel>
            <Select
              labelId="availability-label"
              name="IsAvailable"
              value={editData.IsAvailable ? "Available" : "Not Available"}
              onChange={(e) =>
                setEditData((prev) => ({
                  ...prev,
                  IsAvailable: e.target.value === "Available",
                }))
              }
            >
              <MenuItem value="Available">Available</MenuItem>
              <MenuItem value="Not Available">Not Available</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenEdit(false)} sx={{ color: "orange" }}>
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleSaveChanges}
            sx={{ backgroundColor: "orange" }}
          >
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
