import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Typography,
    TextField,
    Button,
    InputAdornment,
    IconButton,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    SelectChangeEvent
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import logo from '../assets/LoginImage.png';

const RegisterSection: React.FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(true);
    const [role, setRole] = useState<string>('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword((prevState) => !prevState);
    };

  const handleRoleChange = (event: SelectChangeEvent<string>) => {
      setRole(event.target.value);
  }

    const handleLoginClick = () => {
        navigate('/login');
    };

    const ALLOWED_ROLES = ['Admin', 'Restaurant', 'Customer', 'DeliveryPerson'];

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
                background: 'linear-gradient(90deg, #FFEDD5 50%, #FFF)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
            }}
        >
            {/* Left Content (Registration Form) */}
            <Box
                sx={{
                    width: '40%',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, mt:20}}>
                    Register
                </Typography>

                <TextField
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    sx={{
                        mb: 2,
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#EA7300',
                            },
                            '&.Mui-focused': {
                                color: '#EA7300',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            '&.Mui-focused': {
                                color: '#EA7300',
                            },
                        },
                    }}
                />
                <TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    sx={{
                        mb: 2,
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#EA7300',
                            },
                            '&.Mui-focused': {
                                color: '#EA7300',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            '&.Mui-focused': {
                                color: '#EA7300',
                            },
                        },
                    }}
                />
                <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    sx={{
                        mb: 2,
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#EA7300',
                            },
                            '&.Mui-focused': {
                                color: '#EA7300',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            '&.Mui-focused': {
                                color: '#EA7300',
                            },
                        },
                    }}
                />
                <TextField
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    sx={{
                        mb: 2,
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#EA7300',
                            },
                            '&.Mui-focused': {
                                color: '#EA7300',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            '&.Mui-focused': {
                                color: '#EA7300',
                            },
                        },
                    }}
                />
                <TextField
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    variant="outlined"
                    fullWidth
                    sx={{
                        mb: 2,
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#EA7300',
                            },
                            '&.Mui-focused': {
                                color: '#EA7300',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            '&.Mui-focused': {
                                color: '#EA7300',
                            },
                        },
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={togglePasswordVisibility}
                                    edge="end"
                                    sx={{
                                        outline: 'none',
                                        '&:focus': {
                                            outline: 'none',
                                        },
                                    }}
                                >
                                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label="Confirm Password"
                    type={showPassword ? 'text' : 'password'}
                    variant="outlined"
                    fullWidth
                    sx={{
                        mb: 2,
                        '& .MuiOutlinedInput-root': {
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#EA7300',
                            },
                            '&.Mui-focused': {
                                color: '#EA7300',
                            },
                        },
                        '& .MuiInputLabel-root': {
                            '&.Mui-focused': {
                                color: '#EA7300',
                            },
                        },
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={togglePasswordVisibility}
                                    edge="end"
                                    sx={{
                                        outline: 'none',
                                        '&:focus': {
                                            outline: 'none',
                                        },
                                    }}
                                >
                                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <FormControl fullWidth sx={{
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: '#EA7300',
                            },
                            '&.Mui-focused': {
                                color: '#EA7300',
                             },
                        },
                        '& .MuiInputLabel-root': {
                            '&.Mui-focused': {
                                color: '#EA7300',
                            },
                        },
                    }}
                    >
                    <InputLabel>Role</InputLabel>
                    <Select
                        value={role}
                        onChange={handleRoleChange}
                        label="Role"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                    borderColor: '#EA7300',
                                },
                                '&.Mui-focused': {
                                    color: '#EA7300',
                                },
                            },
                            '& .MuiInputLabel-root': {
                                '&.Mui-focused': {
                                    color: '#EA7300',
                                },
                            },
                        }}
                    >
                        {ALLOWED_ROLES.map((role) => (
                            <MenuItem key={role} value={role}>
                                {role}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button
                    variant="contained"
                    sx={{
                        background: '#EA7300',
                        padding: '0.8rem',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        borderRadius: '30px',
                        textTransform: 'none',
                        outline: 'none',
                        '&:focus': {
                            outline: 'none',
                        },
                    }}
                >
                    Register
                </Button>
                <Typography variant="subtitle1" sx={{ color: 'gray', mt: 3, mb: 3 }}>
                    Already have an account?{' '}
                    <span
                        onClick={handleLoginClick}
                        style={{
                            color: '#EA7300',
                            cursor: 'pointer',
                            textDecoration: 'none',
                        }}
                    >
                        Click Here to Login
                    </span>
                </Typography>
            </Box>

            {/* Right Image */}
            <Box sx={{ position: 'relative' }}>
                <img
                    src={logo}
                    alt="Delicious Food"
                    style={{ borderRadius: '50%', width: '600px', height: '600px' }}
                />
            </Box>
        </Box>
    );
};

export default RegisterSection;
