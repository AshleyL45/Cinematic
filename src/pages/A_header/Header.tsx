import { Button } from '@mui/material';
import './Header.css';
import {FC} from "react";



const menu = [
    {
        name: 'DashBoard',
        navigation: "dashboard",
    },
    {
        name: 'Error',
        navigation: "error",
    },
    {
        name: 'Favorite',
        navigation: "favorite",
    },
    {
        name: 'Home',
        navigation: "home",
    },
    {
        name: 'Movie Details',
        navigation: "movieDetails",
    },
    {
        name: 'People Details',
        navigation: "peopleDetails",
    },
    {
        name: 'Research',
        navigation: "research",
    },
    {
        name: 'Seen Movie',
        navigation: "seenMovie",
    },
    {
        name: 'Setting',
        navigation: "setting",
    }
]


const MyComponent: FC<{}> = ({}) => {
    const navigate = useNavigate();

    return (
        <>
            {menu.map((component, index) => (
                <Button
                    key={index}
                    sx={{color: "blue"}}
                    name={component.name}
                    onClick={() => navigate(component.navigation)}
                >
                    {component.name}
                </Button>
            ))}
        </>
)}

