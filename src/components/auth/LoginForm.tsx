// src/components/LoginForm.tsx

import {FC, useContext} from 'react';
import {Box, Button, Card, Stack, TextField, useTheme} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {AuthContext} from "../../contexts/AuthContext";
import './loginForm.css'; // Assurez-vous que le fichier CSS est correctement importé

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
        <div className="login-container">
            <Card className="login-card">
                <Box
                    component="form"
                    className="login-form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Stack spacing={2} style={{height: '100%'}}>
                        <TextField
                            placeholder="Email"
                            variant="outlined"
                            {...register("email")}
                        />
                        <TextField
                            placeholder="Mot de passe"
                            variant="outlined"
                            type="password"
                            {...register("password")}
                        />
                        {/* Élément Spacer */}
                        <Box style={{flexGrow: 1}}></Box>
                        <Button
                            variant="contained"
                            type="submit"
                            className="login-button-submit"
                        >
                            Se Connecter
                        </Button>
                    </Stack>
                </Box>
            </Card>
        </div>
    );
};

export default LoginForm;
