import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

const users = [
  {
    UserID: 1,
    Firstname: "Amal",
    Lastname: "Perera",
    Email: "amalPerera@example.com",
    Phone: "1234567890",
    Role: "Restaurant",
  },
  {
    UserID: 2,
    Firstname: "Kamal",
    Lastname: "Perera",
    Email: "kamalPerera@example.com",
    Phone: "1234567890",
    Role: "Admin",
  },
  {
    UserID: 3,
    Firstname: "Nimal",
    Lastname: "Perera",
    Email: "nimalPerera@example.com",
    Phone: "0119999999",
    Role: "Customer",
  },
];

export const PeopleContent = () => {
  return (
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
        Users
      </Typography>

      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table sx={{ minWidth: 600 }} aria-label="user table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.UserID}>
                <TableCell>{user.UserID}</TableCell>
                <TableCell>{user.Firstname}</TableCell>
                <TableCell>{user.Lastname}</TableCell>
                <TableCell>{user.Email}</TableCell>
                <TableCell>{user.Phone}</TableCell>
                <TableCell>{user.Role}</TableCell>
                <TableCell>
                  <IconButton sx={{ color: "orange" }} aria-label="edit">
                    <EditIcon />
                  </IconButton>
                  <IconButton sx={{ color: "red" }} aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                  <IconButton sx={{ color: "green" }} aria-label="view">
                    <VisibilityIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
