import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import logo from '../assets/logo/png/logo-no-background.png';

const pages = ['Home', 'About Us', 'Services', 'Contact'];
const settings = ['SignIn', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [activePage, setActivePage] = React.useState<string>('Home');

    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleSetActivePage = (page: string) => {
        setActivePage(page);
        handleCloseNavMenu();
    };

    return (
        <>
            <AppBar position="fixed" sx={{ width: '100%', backgroundColor: 'white', color: 'black', boxShadow: 'none' }}>
                <Toolbar disableGutters>
                    {/* Logo */}
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ display: 'flex', height: '100px', marginRight: '30px', marginLeft: '30px' }}
                    />

                    {/* Mobile Menu Icon */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={() => handleSetActivePage(page)}>
                                    <Typography
                                        sx={{
                                            textAlign: 'center',
                                            color: activePage === page ? 'orange' : 'black',
                                        }}
                                    >
                                        {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Centered Navigation Items (Desktop View) */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => page === 'Home' ? handleHomeClick() : handleSetActivePage(page)}
                                sx={{
                                    my: 2,
                                    color: activePage === page ? 'orange' : 'black',
                                    textTransform: 'none',
                                    fontWeight: activePage === page ? 'bold' : 'normal',
                                    backgroundColor: 'transparent',
                                    mx: 2,
                                    outline: 'none',
                                    '&:focus': {
                                        outline: 'none',
                                    },
                                    '&:hover': {
                                        color: 'orange',
                                    },
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    {/* User Avatar and Settings */}
                    <Box sx={{ flexGrow: 0, marginRight: '50px', display: 'flex' }}>
                        <Tooltip title="Open settings">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{
                                    p: 0,
                                    outline: 'none',
                                    '&:focus': {
                                        outline: 'none',
                                    },
                                }}
                            >
                                <PersonOutlineIcon />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem
                                    key={setting}
                                    onClick={handleCloseUserMenu}
                                    sx={{
                                        textAlign: 'center',
                                        outline: 'none',
                                        '&:focus': {
                                            outline: 'none',
                                        },
                                    }}
                                >
                                    <Typography>{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Add space below the AppBar */}
            <Box sx={{ marginTop: '120px' }}>
                {/* Main content goes here */}
            </Box>
        </>
    );
}

export default ResponsiveAppBar;
