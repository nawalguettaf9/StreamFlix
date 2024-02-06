import React from "react";
import { Box, Button, TextField, InputAdornment } from "@mui/material";
import CategoryIcon from '@mui/icons-material/Category';
import { Formik } from "formik";
import Header from "../../components/Header";
import MovieIcon from '@mui/icons-material/Movie';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
  // Récupérer les détails de l'utilisateur depuis le localStorage
  const storedgenre = localStorage.getItem('userlogin');

  // Utiliser JSON.parse pour convertir la chaîne JSON en objet JavaScript
  // Si aucun utilisateur n'est stocké, initialiser initialUser avec un objet vide
  const initialgenre = storedgenre ? JSON.parse(storedgenre) : {};

  // Définir les valeurs initiales après avoir récupéré les données du localStorage
   const initialValues = {
    idGenre: initialgenre.id_genre || "",
    nomGenre: initialgenre.nom_genre || "",
  };



  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Afficher une boîte de dialogue de confirmation
      const userConfirmedUpdate = window.confirm("Êtes-vous sûr de vouloir modifier ce genre ?");
  
      // Si l'utilisateur confirme la modification
      if (userConfirmedUpdate) {
        // Définir que la soumission est en cours
        setSubmitting(true);

        // Effectuer la requête HTTP pour mettre à jour le genre
        const response = await axios.put("http://localhost:8084/api/admin/ModifierGenre", {
          id_genre: values.idGenre, 
          nom_genre: values.nomGenre,
        });

        console.log("Genre modifié avec succès", response.data);

        // Vous pouvez également mettre à jour l'état local ou effectuer d'autres actions nécessaires ici

        // Définir que la soumission est terminée
        setSubmitting(false);

        // Rediriger vers la page /invoices
        navigate ('/invoices');
      } else {
        // Si l'utilisateur annule la modification, définir que la soumission est terminée
        setSubmitting(false);
      }
    } catch (error) {
      // Gérer les erreurs spécifiques ici
      console.error("Erreur lors de la modification du genre :", error);

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
  <Header title="Modifier Genre" style={{ color: '#E50914' }} />
</Box>
              <Box display="grid" gap="20px">
                <TextField
                  id="nomGenre"
                  label="Nom de Genre"
                  placeholder="Nouveau Genre"
                  variant="filled"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <MovieIcon />
                      </InputAdornment>
                    ),
                 
                  }}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nomGenre}
                  name="nomGenre"
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
