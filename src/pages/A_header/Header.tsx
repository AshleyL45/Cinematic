// src/components/MyComponent.tsx

import React, {FC} from 'react';
import {useNavigate} from "react-router-dom"; // Correction de l'import
import {alpha, Avatar, Button, Menu, MenuItem, styled, Tooltip, Typography} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Logo from "../B_body/Assets/logo.png";

// Définition du menu
const menu = [
    {name: 'DashBoard', navigation: "dashboard"},
    {name: 'Error', navigation: "error"},
    {name: 'Favorite', navigation: "favorite"},
    {name: 'Home', navigation: "home"},
    {name: 'Movie Details', navigation: "movieDetails"},
    {name: 'People Details', navigation: "peopleDetails"},
    {name: 'Research', navigation: "research"},
    {name: 'Seen Movie', navigation: "seenMovie"},
    {name: 'Setting', navigation: "setting"}
];

// Définition des composants stylisés
const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const MyComponent: FC = () => {
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
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            backgroundColor: "#404546",
                        }}
                    >
                        {/* Section de gauche : Logo et Menu */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                            }}
                        >
                            <IconButton
                                size="large"
                                edge="start"
                                sx={{mr: 2}}
                                aria-label="menu"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="#"
                                sx={{
                                    display: {xs: 'none', sm: 'block'},
                                    fontFamily: 'octanis-slab',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: '#F4400D',
                                    textDecoration: 'none',
                                }}
                            >
                                CINEMATIC
                            </Typography>
                            {menu.map((component, index) => (
                                <Button
                                    key={index}
                                    sx={{color: "white"}}
                                    name={component.name}
                                    onClick={() => navigate(component.navigation)}
                                >
                                    {component.name}
                                </Button>
                            ))}
                        </Box>

                        {/* Section de droite : Barre de Recherche et Avatar */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon/>
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{"aria-label": "search"}}
                                />
                            </Search>
                            <Box sx={{ml: 2}}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                        <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg"/>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{mt: '45px'}}
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
                                    {/* Ajoutez des éléments de menu utilisateur ici */}
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">Profile</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">Logout</Typography>
                                    </MenuItem>
                                </Menu>
                            </Box>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

export default MyComponent;
