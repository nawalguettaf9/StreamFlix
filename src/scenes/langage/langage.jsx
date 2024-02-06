import React from "react";
import { Box, Button, TextField, Typography, InputAdornment } from "@mui/material";
import { Formik } from "formik";
import LanguageIcon from '@mui/icons-material/Language';
import Header from "../../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const Navigate = useNavigate();
  const initialValues = {
    nomLangue: "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const confirmation = window.confirm("Êtes-vous sûr de vouloir ajouter cette langue ?");

      if (confirmation) {
        setSubmitting(true);

        const response = await axios.post("http://localhost:8084/api/admin/AjouterLangue", {
          nom_langue: values.nomLangue
        });

        if (response.status === 200) {
          console.log("Langue ajoutée avec succès");
          // Optionally, you may want to redirect the user or perform other actions on success
        } else {
          console.error("Erreur lors de l'ajout de la langue");
        }

        setSubmitting(false);
        // Redirect the user to '/contacts' on successful addition
        Navigate('/contacts');
      } else {
        setSubmitting(false);
      }
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la langue', error);
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
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box style={{ textAlign: "center" }}>
                <Header title="Ajouter langue" style={{ color: '#E50914' }} />
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
                        <LanguageIcon />
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
                  Ajouter
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
