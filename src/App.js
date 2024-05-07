import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appbar from './Components/Appbar';
import Utilisateurs from './Components/Utilisateurs';
import LoginPage from './Components/LoginPage';
import DashboardPage from './Components/DashboardPage';
import AjouterDepense from './Components/AjouterDepense';
import GererDepenses from './Components/GererDepenses';
import SupprimerDepense from './Components/SupprimerDepense';
import AfficherDepenses from './Components/AfficherDepenses';
import ModifierDepense from './Components/ModifierDepense';

function App() {
    return (
        <Router>
            <div className="App">
                <Appbar />
                <br />
                <br />
                <Routes>
                    <Route path="/" element={<Utilisateurs />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/add-expense" element={<AjouterDepense />} />
                    <Route path="/manage-expenses" element={<GererDepenses />} />
                    <Route path="/delete-expense" element={<SupprimerDepense />} />
                    <Route path="/edit-expense" element={<ModifierDepense />} /> {/* Ajout de la route pour ModifierDepense */}
                    <Route path="/afficher-depenses" element={<AfficherDepenses />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
