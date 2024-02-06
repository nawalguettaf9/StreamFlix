import React from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const UserDetails = () => {
  const navigate = useNavigate();
  const theme = useTheme(); // Utiliser le hook useTheme pour accéder au thème actuel

  // Récupérer les détails de l'utilisateur depuis le localStorage
  const storedUser = localStorage.getItem('userlogin');

  // Utiliser JSON.parse pour convertir la chaîne JSON en objet JavaScript
  // Si aucun utilisateur n'est stocké, initialUser sera un objet vide
  const initialUser = storedUser ? JSON.parse(storedUser) : {};

  const handleEdit = () => {
    navigate('/Editprofil'); // Rediriger vers la page de modification de profil
  };

  const handleLogout = async () => {
    // Effectuer la déconnexion ici (appel API, suppression de localStorage, etc.)
    // Rediriger vers la page d'accueil après la déconnexion
    navigate('/');
  };

  return (
    <Box
      m="10px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box
        width="70%"
        margin="auto"
        border="1px solid #ccc"
        borderRadius="10px"
        padding="22px"
        sx={{
          backgroundColor: theme.palette.background.default, // Utiliser la couleur de fond du thème
          boxShadow: theme.shadows[3], // Utiliser l'ombre du thème
          textAlign: "center",
        }}
      >
        <Box style={{ textAlign: "center" }}>
          <Header title="Profil de l'Admin" style={{ color: theme.palette.primary.main }} />
        </Box>

        <Box display="grid" gap="20px">
          <Typography variant="h6">
            <strong>Nom:</strong> {initialUser.nom}
          </Typography>
          <Typography variant="h6">
            <strong>Prénom:</strong> {initialUser.prenom}
          </Typography>
          <Typography variant="h6">
            <strong>Email:</strong> {initialUser.email}
          </Typography>
          <Typography variant="h6">
            <strong>Date de naissance:</strong> {initialUser.date_naissance}
          </Typography>
          {/* Ajoutez d'autres informations du profil selon vos besoins */}
        </Box>

        <Box display="flex" justifyContent="space-between" mt="20px">
          <Button
            variant="contained"
            color="primary"
            onClick={handleEdit}
            sx={{
              backgroundColor: theme.palette.success.main, // Utiliser la couleur de fond du bouton du thème
              fontWeight: "bold",
              color: theme.palette.common.white,
            }}
          >
            Modifier le profil
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleLogout}
            sx={{
              backgroundColor: theme.palette.error.main,
              fontWeight: "bold",
              color: theme.palette.common.white,
            }}
          >
            Se déconnecter
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UserDetails;
