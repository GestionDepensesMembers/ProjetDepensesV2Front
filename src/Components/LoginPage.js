// LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function LoginPage() {
    const navigate = useNavigate(); // Utilisation de useNavigate pour la redirection

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        fetch('http://localhost:7180/utilisateurs/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                motDepasse: password,
            }),
        })
        .then(response => {
            if (response.ok) {
                console.log('Connexion réussie');
                navigate('/dashboard'); // Rediriger vers DashboardPage après connexion réussie
            } else {
                setErrorMessage('Utilisateur introuvable');
                console.log('Utilisateur introuvable');
            }
        })
        .catch(err => {
            console.error('Erreur lors de la connexion:', err);
            setErrorMessage('Erreur lors de la connexion');
        });
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                width: '100%',
            }}
        >
            <Box
                sx={{
                    width: '300px',
                    padding: '16px',
                    border: '2px solid #1976d2',
                    borderRadius: '8px',
                    backgroundColor: '#f0f4f8',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h5" component="h1" sx={{ marginBottom: '16px' }}>
                    Login
                </Typography>
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    sx={{ marginBottom: '16px' }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    id="password"
                    label="Mot de passe"
                    type="password"
                    variant="outlined"
                    fullWidth
                    sx={{ marginBottom: '16px' }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errorMessage && (
                    <Typography color="error" sx={{ marginBottom: '16px' }}>
                        {errorMessage}
                    </Typography>
                )}
                <Button variant="contained" color="primary" onClick={handleLogin}>
                    Login
                </Button>
            </Box>
        </Box>
    );
}
