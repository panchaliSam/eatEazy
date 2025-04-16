import React, { useState, useEffect } from "react";
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
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import UserApi from "../../utils/api/UserApi";
import { getAccessToken } from "../../utils/helper/TokenHelper";

export const PeopleContent = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>({});
  const [deleteUser, setDeleteUser] = useState<any>({});
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = getAccessToken();
        if (!token) {
          throw new Error("No access token found.");
        }
        const data = await UserApi.getAllUser();
        setUsers(data);
      } catch (err: any) {
        setError(err.message || "Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSaveChanges = async () => {
    setLoading(true);
    try {
      await UserApi.updateUserById({
        firstname: userData.firstName,
        lastname: userData.lastName,
        phone: userData.phone,
      });
      alert("User details updated successfully!");
    } catch (error) {
      console.error("Error updating user details:", error);
      alert("Failed to update user details. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditClick = (user: any) => {
    setSelectedUser(user);
    setUserData({
      firstName: user.Firstname,
      lastName: user.Lastname,
      email: user.Email,
      phone: user.Phone,
    });
    setOpenEdit(true);
  };

  const handleDeleteClick = (user: any) => {
    setDeleteUser(user);
    setOpenDelete(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
    setSelectedUser({});
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
    setDeleteUser({});
  };

  const confirmDelete = () => {
    console.log(`Deleted user: ${deleteUser.Firstname} ${deleteUser.Lastname}`);
    setOpenDelete(false);
    // Optionally: refresh the list or call delete API here
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

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
      <Typography sx={{ alignSelf: "flex-start", fontSize: 24 }}>
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
                  <IconButton
                    sx={{ color: "orange" }}
                    aria-label="edit"
                    onClick={() => handleEditClick(user)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    sx={{ color: "red" }}
                    aria-label="delete"
                    onClick={() => handleDeleteClick(user)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit Modal */}
      <Dialog open={openEdit} onClose={handleCloseEdit} fullWidth>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="First Name"
            name="firstName"
            onChange={handleInputChange}
            fullWidth
            value={userData.firstName}
          />
          <TextField
            margin="dense"
            label="Last Name"
            name="lastName"
            onChange={handleInputChange}
            fullWidth
            value={userData.lastName}
          />
          <TextField
            margin="dense"
            label="Email"
            name="email"
            onChange={handleInputChange}
            fullWidth
            value={selectedUser.Email || ""}
            disabled
          />
          <TextField
            margin="dense"
            label="Phone"
            name="phone"
            onChange={handleInputChange}
            fullWidth
            value={userData.phone}
          />
          <TextField
            margin="dense"
            label="Role"
            onChange={handleInputChange}
            fullWidth
            value={selectedUser.Role || ""}
            disabled
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit}>Cancel</Button>
          <Button variant="contained" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDelete} onClose={handleCloseDelete} fullWidth>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          Are you sure you want to delete the user{" "}
          <b>
            {deleteUser.Firstname} {deleteUser.Lastname}
          </b>
          ?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDelete}>Cancel</Button>
          <Button variant="contained" color="error" onClick={confirmDelete}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
