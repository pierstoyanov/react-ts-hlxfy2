import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import LanguageSelector from '../../LanguageSelector';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { useState } from 'react';

const pages = [
    { name: 'Home', path: "/" },
    { name: 'Sign In', path: "login" },
    { name: 'About', path: "about" }
];

//  href == page reload, Link = spa
const settings = [
    {name: 'Profile', path: "/profile"},
    {name: 'My Invoices', path: "/myinv"},
    {name: 'Dashboard', path: "/dashboard"},
    {name: 'Logout', path: "/logout"}
];

const Navbar = (): JSX.Element => {
    const { currentUser } = useAuth();

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);    

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => { setAnchorElNav(null); };
    const handleCloseUserMenu = () => { setAnchorElUser(null); };

    return (
    <AppBar position="static">
        <Container maxWidth="xl">
        <Toolbar disableGutters>
            {currentUser != null && <>
            {/* User menu */}
            <Box sx={{ flexGrow: 1 }}>
                <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
                    <MenuItem key={setting.name} onClick={handleCloseUserMenu} 
                        component={Link} to={setting.path}>
                    <Typography textAlign="center">{setting.name}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            {/* User menu */}</>
            }


            {/* Expanded logo & Title */}
            {/* <Box> */}
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
                mr: 1,
                display: { xs: 'none', md: 'flex' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
            }}
            >
            LOGO
            </Typography>
            {/* </Box> */}
            {/* Expanded logo & Title */}

            {/* Logo & Title (contracted) */}
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
            }}
            >
            LOGO
            </Typography>
            {/* Logo & Title (contracted) */}

            {<LanguageSelector />}

            {/* NAV menu list (contracted) */}
            <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
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
                horizontal: 'center',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                display: { xs: 'block', md: 'none' },
                }}
            >
                {pages.map((p) => (
                <MenuItem key={p.name} component={Link} to={p.path} 
                    onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{p.name}</Typography>
                </MenuItem>
                ))}
            </Menu>
            </Box>
            {/* NAV menu list (contracted) */}

            {/* Navigation - expanded */}
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
                <Button
                key={page.name}
                component={Link} to={page.path}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                >
                {page.name}
                <Divider orientation="vertical" color="black" variant='middle' flexItem />
                </Button>
            ))}
            </Box>
            {/* Navigation - expanded */}

        </Toolbar>
        </Container>
    </AppBar>
);
};

export default Navbar;
