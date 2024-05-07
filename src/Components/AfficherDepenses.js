import React, { useState, useEffect } from 'react';

export default function AfficherDepenses() {
    const [depenses, setDepenses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:7180/depense')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur HTTP ' + response.status);
                }
                return response.json();
            })
            .then(data => setDepenses(data))
            .catch(error => console.error('Erreur lors de la récupération des données:', error));
    }, []);

    const tableStyle = {
        borderCollapse: 'collapse',
        width: '100%',
        border: '1px solid #ddd',
    };

    const thStyle = {
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'left',
        backgroundColor: '#f2f2f2',
    };

    const tdStyle = {
        border: '1px solid #ddd',
        padding: '8px',
    };

    return (
        <div>
            <h1>Liste des Dépenses</h1>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>ID</th>
                        <th style={thStyle}>Type</th>
                        <th style={thStyle}>Description</th>
                        <th style={thStyle}>Montant</th>
                        <th style={thStyle}>Date de Paiement</th>
                    </tr>
                </thead>
                <tbody>
                    {depenses.map(depense => (
                        <tr key={depense.iddep}>
                            <td style={tdStyle}>{depense.iddep}</td>
                            <td style={tdStyle}>{depense.type}</td>
                            <td style={tdStyle}>{depense.description}</td>
                            <td style={tdStyle}>{depense.montant}</td>
                            <td style={tdStyle}>{depense.datedepaiement}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
