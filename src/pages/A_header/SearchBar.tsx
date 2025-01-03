// src/components/SearchBar.tsx

import React from 'react';
import {styled, alpha} from '@mui/material/styles';
import {InputBase} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// Définition du conteneur de la recherche
const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: theme.spacing(2),
    width: 'auto',
}));

// Définition du conteneur de l'icône de recherche
const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none', // L'icône ne réagit pas aux interactions de l'utilisateur
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

// Définition du champ de saisie stylisé
const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0), // Padding en haut, droite, bas, gauche
        // Padding pour l'icône de recherche
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '12ch',
        '&:focus': {
            width: '20ch',
        },
    },
}));

interface SearchBarProps {
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({placeholder = "Search…", onChange}) => {
    return (
        <Search>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
                placeholder={placeholder}
                inputProps={{'aria-label': 'search'}}
                onChange={onChange}
            />
        </Search>
    );
};

export default SearchBar;
