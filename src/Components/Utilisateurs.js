import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Utilisateurs() {
    const navigate = useNavigate();

    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [dtn, setDtn] = useState('');
    const [soldeac, setSoldeac] = useState('');
    const [motDepasse, setMotDepasse] = useState('');

    const isFormValid = () => {
        return nom && prenom && email && dtn && soldeac && motDepasse;
    };

    const handleClick = () => {
        if (isFormValid()) {
            const utilisateurs = { nom, prenom, email, dtn, soldeac, motDepasse };
            fetch("http://localhost:7180/utilisateurs/add", { // Modifiez le port ici
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(utilisateurs)
            })
            .then(() => {
                console.log("New Utilisateurs added");
                navigate('/login');
            })
            .catch(error => console.error('Error adding user:', error));
        } else {
            console.error("Form data is not valid");
        }
    };

    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '300px',
                margin: '0 auto',
                border: '2px solid #1976d2',
                borderRadius: '8px',
                padding: '16px',
                backgroundColor: '#f0f4f8',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                '& > *': {
                    marginBottom: '8px',
                    width: '100%',
                },
            }}
            noValidate
            autoComplete="off"
        >
            <Typography variant="h5" component="h2" sx={{ marginBottom: '16px' }}>
                Sign Up
            </Typography>

            <TextField
                id="nom"
                label="Nom"
                variant="outlined"
                fullWidth
                onChange={(e) => setNom(e.target.value)}
            />
            <br />
            <TextField
                id="prenom"
                label="Prénom"
                variant="outlined"
                fullWidth
                onChange={(e) => setPrenom(e.target.value)}
            />
            <br />
            <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <TextField
                id="dtn"
                label="Date de naissance"
                variant="outlined"
                fullWidth
                onChange={(e) => setDtn(e.target.value)}
            />
            <br />
            <TextField
                id="soldeac"
                label="Solde"
                variant="outlined"
                fullWidth
                onChange={(e) => setSoldeac(e.target.value)}
            />
            <br />
            <TextField
                id="motDepasse"
                label="Mot de passe"
                type="password"
                variant="outlined"
                fullWidth
                onChange={(e) => setMotDepasse(e.target.value)}
            />
            <br />

            <Button
                variant="contained"
                color="primary"
                onClick={handleClick}
                disabled={!isFormValid()}
            >
                Inscrire
            </Button>
        </Box>
    );
}
