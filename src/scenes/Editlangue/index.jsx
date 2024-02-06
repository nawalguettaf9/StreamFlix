import React from "react";
import { Box, Button, TextField, Typography, InputAdornment } from "@mui/material";
import { Formik } from "formik";
import LanguageIcon from '@mui/icons-material/Language';
import Header from "../../components/Header";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const Form = () => {
const Navigate = useNavigate();
  // Récupérer les détails de l'utilisateur depuis le localStorage
  const storedlang = localStorage.getItem('selectlangue');

  // Utiliser JSON.parse pour convertir la chaîne JSON en objet JavaScript
  // Si aucun utilisateur n'est stocké, initialiser initialUser avec un objet vide
  const initialang = storedlang ? JSON.parse(storedlang) : {};

  // Définir les valeurs initiales après avoir récupéré les données du localStorage
   const initialValues = {
    idLangue: initialang.id_langue || "",
    nomLangue: initialang.nom_langue || "",
  };
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Afficher une boîte de dialogue de confirmation
      const langConfirmedUpdate = window.confirm("Êtes-vous sûr de vouloir modifier cette langue?");
  
      // Si l'utilisateur confirme la modification
      if (langConfirmedUpdate) {
        // Définir que la soumission est en cours
        setSubmitting(true);

        // Effectuer la requête HTTP pour mettre à jour le genre
        const response = await axios.put("http://localhost:8084/api/admin/ModifierLangue", {
          id_langue: values.idLangue, 
          nom_langue: values.nomLangue,
        });

        console.log("langue modifié avec succès", response.data);

        // Vous pouvez également mettre à jour l'état local ou effectuer d'autres actions nécessaires ici

        // Définir que la soumission est terminée
        setSubmitting(false);

        // Rediriger vers la page /invoices
        Navigate('/invoices');
      } else {
        // Si l'utilisateur annule la modification, définir que la soumission est terminée
        setSubmitting(false);
      }
    } catch (error) {
      // Gérer les erreurs spécifiques ici
      console.error("Erreur lors de la modification du langue :", error);

      // Définir que la soumission est terminée
      setSubmitting(false);
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      
      <Box
        width="70%"
        margin="auto"
        border="1px solid #ccc"
        borderRadius="10px"
        padding="22px"
      >
          
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box style={{ textAlign: "center" }}>
                <Header title="Modifier langue" style={{ color: '#E50914' }} />
              </Box>
              <Box display="grid" gap="20px">
                <TextField
                  id="nomLangue"
                  label="Nom de Langue"
                  placeholder="Nouvelle Langue"
                  variant="filled"
                  
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LanguageIcon  />
                      </InputAdornment>
                    ),
                 
                  }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nomLangue}
                  name="nomLangue"
                />
              </Box>
              <Box display="flex" justifyContent="center" mt="10px">
                <Button
                  type="submit"
                  color="error"
                  variant="contained"
                  style={{ marginRight: "8px" }}
                >
                  Modifier
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default Form;
