import {FC, useContext} from 'react';
import {Box, Button, Card, Stack, TextField, useTheme} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {AuthContext} from "../../contexts/AuthContext";

interface LoginFormInput {
    email: string;
    password: string;
}

const LoginForm: FC = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const authContext = useContext(AuthContext);

    const {register, handleSubmit} = useForm<LoginFormInput>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (data: LoginFormInput) => {
        console.log(data);
        authContext?.setIsLoggedIn(true);
        navigate('/dashboard'); // Redirection après soumission
    };

    const redirectToDashboard = () => {
        authContext?.setIsLoggedIn(true); // Mettre l'utilisateur comme connecté
        navigate('/dashboard'); // Redirection immédiate
    };

    return (
        <Card
            sx={{
                bgcolor: theme.palette.background.paper,
                p: 2,
                width: 300,
            }}
        >
            <Box
                component="form"
                sx={{
                    '& > :not(style)': {m: 1, width: '25ch'},
                }}
                onSubmit={handleSubmit(onSubmit)}
            >
                <Stack spacing={2}>
                    <TextField
                        label="Email"
                        variant="outlined"
                        {...register("email")}
                    />
                    <TextField
                        label="Mot de passe"
                        variant="outlined"
                        type="password"
                        {...register("password")}
                    />
                    <Button
                        variant="contained"
                        type="button" // Important : Ne pas valider le formulaire
                        onClick={redirectToDashboard} // Redirige même sans validation
                    >
                        Connexion
                    </Button>
                </Stack>
            </Box>
        </Card>
    );
};

export default LoginForm;
