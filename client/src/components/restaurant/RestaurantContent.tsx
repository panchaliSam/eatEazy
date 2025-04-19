import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import RamenDiningIcon from "@mui/icons-material/RamenDining";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import RestaurantApi from "@app_utils/api/RestaurantApi";
import { getAccessToken } from "@app_utils/helper/TokenHelper";
import Image1 from "@app_assets/restaurants/Restaurant1.jpg";
import Image2 from "@app_assets/restaurants/Restaurant2.jpg";
import Image3 from "@app_assets/restaurants/Restaurant3.jpg";
import Image4 from "@app_assets/restaurants/Restaurant4.jpg";
import Image5 from "@app_assets/restaurants/Restaurant5.jpg";
import Image6 from "@app_assets/restaurants/Restaurant6.jpg";

const imageList = [
  { src: Image1, alt: "Restaurant 1" },
  { src: Image2, alt: "Restaurant 2" },
  { src: Image3, alt: "Restaurant 3" },
  { src: Image4, alt: "Restaurant 4" },
  { src: Image5, alt: "Restaurant 5" },
  { src: Image6, alt: "Restaurant 6" },
];

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export const RestaurantView = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [menuIndex, setMenuIndex] = useState<number | null>(null);

  const navigate = useNavigate();

  const handleMenuSubmit = (restaurantId: string) => {
    navigate("/menuItems", { state: { restaurantId } });
  };

  const handleMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setAnchorEl(event.currentTarget);
    setMenuIndex(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setMenuIndex(null);
  };

  const handleEdit = (restaurant: any) => {
    console.log("Edit:", restaurant);
    handleMenuClose();
  };

  const handleDelete = (restaurant: any) => {
    console.log("Delete:", restaurant);
    handleMenuClose();
  };

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const token = getAccessToken();
        if (!token) {
          throw new Error("No access token found.");
        }

        const userId = JSON.parse(atob(token.split(".")[1])).id;

        const data = await RestaurantApi.getAllRestaurants();

        const filteredRestaurants = data.filter(
          (restaurant: any) => restaurant.OwnerID === userId
        );

        const restaurantsWithImages = filteredRestaurants.map(
          (restaurant: any) => ({
            ...restaurant,
            randomImage:
              imageList[Math.floor(Math.random() * imageList.length)],
          })
        );

        setRestaurants(restaurantsWithImages);
        console.log("Fetched restaurants:", restaurantsWithImages);
      } catch (err: any) {
        setError(err.message || "Failed to fetch restaurants");
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  const handleExpandClick = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "felx-start",
        textAlign: "center",
        ml: 2,
        mr: 2,
      }}
    >
      <Typography sx={{ alignSelf: "flex-start", fontSize: 24 }}>
        Restaurants
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          gap: 2,
          mt: 4,
        }}
      >
        {restaurants.map((restaurant, index) => (
          <Card key={restaurant.RestaurantID} sx={{ maxWidth: 345 }}>
            <CardHeader
              action={
                <>
                  <IconButton
                    aria-label="settings"
                    onClick={(event) => handleMenuOpen(event, index)}
                  >
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl) && menuIndex === index}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={() => handleEdit(restaurant)}>
                      <EditIcon sx={{ mr: 1 }} /> Edit
                    </MenuItem>
                    <MenuItem onClick={() => handleDelete(restaurant)}>
                      <DeleteIcon sx={{ mr: 1 }} /> Delete
                    </MenuItem>
                  </Menu>
                </>
              }
              title={restaurant.RestaurantName}
              subheader={restaurant.Address || "No address provided"}
            />
            <CardMedia
              component="img"
              height="194"
              sx={{
                width: 300,
                height: 200,
                objectFit: "cover",
              }}
              image={restaurant.randomImage.src}
              alt={restaurant.RestaurantName}
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {restaurant.Availability ||
                  "No availability information provided"}{" "}
              </Typography>
            </CardContent>
            <CardActions
              disableSpacing
              sx={{ justifyContent: "space-between" }}
            >
              <Button
                variant="outlined"
                onClick={() => handleExpandClick(index)}
                sx={{
                  backgroundColor: "#EA7300",
                  color: "white",
                  border: "none",
                  outline: "none",
                  "&:focus": {
                    outline: "none",
                  },
                }}
                startIcon={<VisibilityIcon />}
              >
                View
              </Button>
              <Button
                variant="outlined"
                onClick={() => handleMenuSubmit(restaurant.RestaurantID)}
                sx={{
                  backgroundColor: "#EA7300",
                  color: "white",
                  border: "none",
                  outline: "none",
                  "&:focus": {
                    outline: "none",
                  },
                }}
                startIcon={<RamenDiningIcon />}
              >
                View Menu
              </Button>
            </CardActions>
            <Collapse in={expanded === index} timeout="auto" unmountOnExit>
              <CardContent>
                <Box display="flex" alignItems="center" gap={1} mb={1}>
                  <PhoneIcon sx={{ color: "orange" }} />
                  <Typography variant="body1">
                    {restaurant.Phone || "No phone number provided"}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1} mb={1}>
                  <EmailIcon sx={{ color: "orange" }} />
                  <Typography variant="body1">
                    {restaurant.Email || "No email provided"}
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={1}>
                  <PersonIcon sx={{ color: "orange" }} />
                  <Typography variant="body1">
                    {restaurant.OwnerName || "No owner provided"}
                  </Typography>
                </Box>
              </CardContent>
            </Collapse>
          </Card>
        ))}
      </Box>
    </Box>
  );
};
