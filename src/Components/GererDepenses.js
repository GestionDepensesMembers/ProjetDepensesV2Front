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

export default function GererDepenses() {
    return (
        <div style={containerStyle}>
            <h1>Gérer les dépenses</h1>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                to="/edit-expense"
                style={buttonStyle}
            >
                Modifier
            </Button>
            <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/delete-expense"
                style={buttonStyle}
            >
                Supprimer
            </Button>
        </div>
    );
}
