import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import {useNavigate} from 'react-router-dom';
import '../../App.css';



const menu = [
    {name: 'DashBoard', navigation: "dashboard"},
    {name: 'Error', navigation: "error"},
    {name: 'Favorite', navigation: "favorite"},
    {name: 'Home', navigation: "home"},
    {name: 'Movie Details', navigation: "movieDetails"},
    {name: 'People Details', navigation: "peopleDetails"},
    {name: 'Research', navigation: "research"},
    {name: 'Seen Movie', navigation: "seenMovie"},
    {name: 'Setting', navigation: "setting"},
];



const ResponsiveAppBar: React.FC = () => {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

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

    return (
        <>
            <AppBar
                position="static"
                sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Typography className="logo"
                                    variant="h6"
                                    noWrap
                                    component="a"
                                    href="#"
                                    sx={{
                                        mr: 2,
                                        display: {xs: 'none', md: 'flex'},
                                        fontFamily: 'octanis-slab',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: '#F4400D',
                                        textDecoration: 'none',
                                    }}
                        >
                            CINEMATIC
                        </Typography>

                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="open navigation menu"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon/>
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
                                sx={{display: {xs: 'block', md: 'none'}}}
                            >
                                {menu.map((item) => (
                                    <MenuItem key={item.name} onClick={() => navigate(item.navigation)}>
                                        <Typography sx={{textAlign: 'center'}}>{item.name}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <AdbIcon sx={{display: {xs: 'flex', md: 'none'}, mr: 1}}/>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#"
                            sx={{
                                mr: 2,
                                display: {xs: 'flex', md: 'none'},
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >

                        </Typography>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            {menu.map((component, index) => (
                                <Button
                                    key={index}
                                    sx={{my: 2, color: 'white', display: 'block'}}
                                    onClick={() => navigate(component.navigation)}
                                >
                                    {component.name}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{flexGrow: 0}}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                    <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg"/>
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
}


export default ResponsiveAppBar;



