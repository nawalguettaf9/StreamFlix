import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = () => {
const navigate = useNavigate();

// Récupérer les détails de l'utilisateur depuis le localStorage
const storedUser = localStorage.getItem('userlogin');

// Utiliser JSON.parse pour convertir la chaîne JSON en objet JavaScript
// Si aucun utilisateur n'est stocké, initialiser initialUser avec un objet vide
const initialUser = storedUser ? JSON.parse(storedUser) : {};


  const initialValues = {
    id: initialUser.id_utilisateur|| "",
    nom: initialUser.nom || "",
    prenom: initialUser.prenom || "",
    email: initialUser.email || "",
    date: initialUser.date_naissance || "",
    mot_de_pass: initialUser.mot_de_pass|| "",
    roleE: initialUser.roleE|| "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Afficher une boîte de dialogue de confirmation
      const userConfirmedUpdate = window.confirm("Êtes-vous sûr de vouloir modifier votre profil ?");
  
      // Si l'utilisateur confirme la modification
      if (userConfirmedUpdate) {
        // Définir que la soumission est en cours
        setSubmitting(true);
        console.log("Avant la requête Axios");
        // Effectuer la requête HTTP pour mettre à jour l'utilisateur
        const response = await axios.put("http://localhost:8084/api/admin/ModifierUtilisateur", {
          id_utilisateur: values.id, // Ajouter l'ID de l'utilisateur à mettre à jour
          nom: values.nom,
          prenom: values.prenom,
          email: values.email,
          date_naissance: values.date,
          mot_de_pass: values.mot_de_pass, // Ajouter le mot de passe
          roleE: values.roleE, // Ajouter le rôle
        });
        console.log("Apres la requête Axios");
        console.log("Utilisateur modifié avec succès", response.data);
  
        // Vous pouvez également mettre à jour l'état local ou effectuer d'autres actions nécessaires ici
  
        // Définir que la soumission est terminée
        setSubmitting(false);
        // Rediriger vers la page /team
        navigate('/Profil');
      } else {
        // Si l'utilisateur annule la modification, définir que la soumission est terminée
        setSubmitting(false);
      }
    } catch (error) {
      // En cas d'erreur, afficher dans la console et définir que la soumission est terminée
      console.error("Erreur lors de la modification de l'utilisateur :", error);
      setSubmitting(false);
    }
  };
  
  

  return (
    <Box m="10px">
      <Box
        width="70%"
        margin="auto"
        border="1px solid #ccc"
        borderRadius="10px"
        padding="22px"
      >
        <Box style={{ textAlign: "center" }}>
          <Header title="Modifier Admin" style={{ color: '#E50914' }} />
        </Box>

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
              <Box display="grid" gap="50px">
                <TextField
                  id="filled-textarea"
                  label="Nom"
                  placeholder="Nouveau nom"
                  multiline
                  variant="filled"
                  name="nom"
                  value={values.nom}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <TextField
                  id="filled-textarea"
                  label="Prénom"
                  placeholder="Nouveau prénom"
                  multiline
                  variant="filled"
                  name="prenom"
                  value={values.prenom}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <TextField
                  id="filled-textarea"
                  label="Email"
                  placeholder="Nouvel email"
                  multiline
                  variant="filled"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <TextField
                  id="filled-textarea"
                  label="Date de naissance"
                  type="date"
                  variant="filled"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="date"
                  value={values.date}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
