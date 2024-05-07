import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ModifierDepense() {
    const navigate = useNavigate();
    const [iddep, setIdDep] = useState('');
    const [montant, setMontant] = useState('');
    const [utilisateurId, setUtilisateurId] = useState('');
    const [datePaiement, setDatePaiement] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [error, setError] = useState('');

    const handleUpdate = async () => {
        try {
            const response = await fetch(`http://localhost:7180/depense/update/${iddep}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    montant,
                    utilisateur_id: utilisateurId,
                    datedepaiement: datePaiement,
                    description,
                    type
                })
            });
            if (response.ok) {
                console.log('Dépense modifiée avec succès.');
                navigate('/manage-expenses');
            } else {
                console.error('Erreur lors de la modification de la dépense.');
                setError('Erreur lors de la modification de la dépense.');
            }
        } catch (error) {
            console.error('Erreur lors de la modification de la dépense:', error);
            setError('Erreur lors de la modification de la dépense.');
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
                Modifier une dépense
            </Typography>
            <TextField
                label="ID de la dépense"
                variant="outlined"
                value={iddep}
                onChange={(e) => setIdDep(e.target.value)}
                sx={{ marginBottom: '16px' }}
            />
            <TextField
                label="Montant"
                variant="outlined"
                value={montant}
                onChange={(e) => setMontant(e.target.value)}
                sx={{ marginBottom: '16px' }}
            />
            <TextField
                label="ID de l'utilisateur"
                variant="outlined"
                value={utilisateurId}
                onChange={(e) => setUtilisateurId(e.target.value)}
                sx={{ marginBottom: '16px' }}
            />
            <TextField
                label="Date de paiement"
                variant="outlined"
                value={datePaiement}
                onChange={(e) => setDatePaiement(e.target.value)}
                sx={{ marginBottom: '16px' }}
            />
            <TextField
                label="Description"
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                sx={{ marginBottom: '16px' }}
            />
            <TextField
                label="Type"
                variant="outlined"
                value={type}
                onChange={(e) => setType(e.target.value)}
                sx={{ marginBottom: '16px' }}
            />
            {error && <Typography variant="body2" color="error" sx={{ marginBottom: '16px' }}>{error}</Typography>}
            <Button variant="contained" color="primary" onClick={handleUpdate} sx={{ marginBottom: '16px' }}>
                Valider
            </Button>
            <Button variant="contained" component={Link} to="/manage-expenses">
                Retour
            </Button>
        </Box>
    );
}
