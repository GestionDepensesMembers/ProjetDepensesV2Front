import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SupprimerDepense() {
    const navigate = useNavigate();
    const [iddep, setIdDep] = useState('');
    const [error, setError] = useState('');
    
    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:7180/depense/delete/${iddep}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                console.log('Dépense supprimée avec succès.');
                navigate('/manage-expenses'); // Redirige vers la page de gestion des dépenses
            } else {
                console.error('Erreur lors de la suppression de la dépense.');
                setError('Erreur lors de la suppression de la dépense.');
            }
        } catch (error) {
            console.error('Erreur lors de la suppression de la dépense:', error);
            setError('Erreur lors de la suppression de la dépense.');
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}
        >
            <Typography variant="h5" component="h1" sx={{ marginBottom: '16px' }}>
                Supprimer une dépense
            </Typography>
            <TextField
                label="ID de la dépense"
                variant="outlined"
                value={iddep}
                onChange={(e) => setIdDep(e.target.value)}
                sx={{ marginBottom: '16px' }}
            />
            {error && <Typography variant="body2" color="error" sx={{ marginBottom: '16px' }}>{error}</Typography>}
            <Button variant="contained" color="secondary" onClick={handleDelete} sx={{ marginBottom: '16px' }}>
                Supprimer
            </Button>
            <Button variant="contained" component={Link} to="/manage-expenses">
                Retour
            </Button>
        </Box>
    );
}
