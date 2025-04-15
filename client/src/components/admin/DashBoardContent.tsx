import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

export const DashboardContent = () => (
  <Box
    sx={{
      py: 4,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      ml: 2,
      mr: 2,
    }}
  >
    <Typography
      sx={{
        alignSelf: "flex-start",
        fontSize: 24,
      }}
    >
      Profile
    </Typography>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        border: "1px solid",
        borderColor: "rgba(128, 128, 128, 0.5)",
        width: "100%",
        mt: 4,
        borderRadius: 2,
        padding: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          borderColor: "rgba(128, 128, 128, 0.5)",
          width: "100%",
          borderRadius: 2,
          padding: "1rem",
        }}
      >
        <Typography
          sx={{
            alignSelf: "flex-start",
            fontSize: 20,
          }}
        >
          Account Details
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            mt: 4,
            padding: "1rem",
          }}
        >
          {/* Row 1: First Name and Last Name */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              width: "100%",
              mb: 2,
            }}
          >
            <TextField label="First Name" name="firstName" fullWidth />
            <TextField label="Last Name" name="lastName" fullWidth />
          </Box>

          {/* Row 2: Email and Phone */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              width: "100%",
              mb: 2,
            }}
          >
            <TextField label="Email" name="email" fullWidth />
            <TextField label="Phone" name="phone" fullWidth />
          </Box>

          {/* Save Changes Button */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#EA7300",
                color: "#fff",
                padding: "1rem",
                borderRadius: "30px",
                textTransform: "none",
                width: "200px",
                mt: 2,
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#D66A00",
                },
              }}
            >
              Save Changes
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
);
