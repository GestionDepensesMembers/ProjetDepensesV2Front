import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function AjouterDepense() {
    const [montant, setMontant] = useState('');
    const [datedepaiement, setDateDepaiement] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [message, setMessage] = useState('');

    const handleAddExpense = () => {
        const newExpense = {
            montant: parseFloat(montant), 
            datedepaiement,
            description,
            type,
        };

        fetch('http://localhost:7180/depense/add', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newExpense),
        })
        .then(response => {
            if (response.ok) {
                console.log('Dépense enregistrée avec succès.');
                setMessage('Dépense enregistrée avec succès.');
            } else {
                console.error('Erreur lors de l\'enregistrement de la dépense.');
                setMessage('Erreur lors de l\'enregistrement de la dépense.');
            }
        })
        .catch(error => {
            console.error('Erreur lors de l\'enregistrement de la dépense:', error);
            setMessage('Erreur lors de l\'enregistrement de la dépense:' + error);
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
                    Ajouter une dépense
                </Typography>
                <TextField
                    id="montant"
                    label="Montant"
                    variant="outlined"
                    fullWidth
                    sx={{ marginBottom: '16px' }}
                    value={montant}
                    onChange={(e) => setMontant(e.target.value)}
                />
                <TextField
                    id="datedepaiement"
                    label="Date de paiement"
                    variant="outlined"
                    fullWidth
                    sx={{ marginBottom: '16px' }}
                    value={datedepaiement}
                    onChange={(e) => setDateDepaiement(e.target.value)}
                />
                <TextField
                    id="description"
                    label="Description"
                    variant="outlined"
                    fullWidth
                    sx={{ marginBottom: '16px' }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <TextField
                    id="type"
                    label="Type"
                    variant="outlined"
                    fullWidth
                    sx={{ marginBottom: '16px' }}
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleAddExpense} sx={{ marginBottom: '16px' }}>
                    Ajouter
                </Button>
                {message && <Typography sx={{ marginBottom: '16px' }}>{message}</Typography>}
            </Box>
        </Box>
    );
}
