import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
};

const buttonStyle = {
    marginBottom: '16px',
};

export default function DashboardPage() {
    return (
        <div style={containerStyle}>
            <h1>Tableau de bord</h1>
            {/* Lien vers la page de gestion des dépenses */}
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/manage-expenses"
                style={buttonStyle}
            >
                Gérer dépenses
            </Button>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/add-expense"
                style={buttonStyle}
            >
                Ajouter dépense
            </Button>
            {/* Lien vers la page d'affichage des dépenses */}
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/afficher-depenses"
                style={buttonStyle}
            >
                Afficher dépenses
            </Button>
        </div>
    );
}
