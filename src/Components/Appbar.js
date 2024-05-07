import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import { Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#2a2a72', 
        },
        secondary: {
            main: '#f0f0f0', 
        },
    },
    typography: {
        h6: {
            fontWeight: 'bold',
        },
        body1: {
            fontSize: '1.1rem',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 'bold',
                },
            },
        },
    },
});

const useStyles = makeStyles({
    dialogContent: {
        padding: '16px',
        backgroundColor: theme.palette.secondary.main,
        color: '#333',
        textAlign: 'center',
        borderRadius: '8px',
    },
    dialogTitle: {
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
        padding: '16px',
        borderTopRightRadius: '8px',
        borderTopLeftRadius: '8px',
        textAlign: 'center',
    },
    dialogActions: {
        justifyContent: 'center',
        padding: '16px',
    },
    contactButton: {
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
        '&:hover': {
            backgroundColor: '#1d1d52',
        },
    },
});

export default function Appbar() {
    const [open, setOpen] = useState(false);
    const classes = useStyles();

    
    const handleClickOpen = () => {
        setOpen(true);
    };

    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="primary">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={handleClickOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            Gestion Dépenses
                        </Typography>
                        <Button color="inherit" component={Link} to="/login">
                            Login
                        </Button>
                    </Toolbar>
                </AppBar>

                
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle className={classes.dialogTitle}>À propos de notre site</DialogTitle>
                    <DialogContent className={classes.dialogContent}>
                        <Typography variant="body1" sx={{ mt: 2 }}>
                            Notre site de gestion de dépenses est conçu pour vous aider à suivre et gérer vos finances personnelles. Si vous avez des questions, n'hésitez pas à nous contacter à ces adresses e-mail :
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 1 }}>
                            - tahaouahdani011@gmail.com
                            <br />
                            - ilyassebensalk@gmail.com
                            <br />
                            - marouachegri@gmail.com
                        </Typography>
                    </DialogContent>
                    <DialogActions className={classes.dialogActions}>
                        <Button onClick={handleClose} className={classes.contactButton}>
                            Contacter nous
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </ThemeProvider>
    );
}
