import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate =useNavigate();
  const handleListClient = () => {
    // Rediriger vers la page /invoices
    navigate("/invoices");
  };

  const validationSchema = yup.object({
    description: yup.string().required("La description est requise."),
    resolution: yup.string().required("La résolution est requise."),
    qualite: yup.string().required("La qualité est requise."),
    prix: yup.string().required("Le prix est requis."),
    type: yup.string().required("Le type est requis."),
  });

  const initialValues = {
    description: "",
    resolution: "",
    qualite: "",
    prix: "",
    type: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Logique de soumission ici
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh" // Set height to 100vh for full viewport height
    >
      <Box
        width="70%"
        margin="auto"
        border="1px solid #ccc"
        borderRadius="10px"
        padding="22px"
      >
        <Box style={{ textAlign: "center" }}>
          <Header title="ajouter Langue" style={{ color: '#E50914' }} />
        </Box>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
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
                  label="Nom de Langue"
                  placeholder="Nouvelle Langue"
                  multiline
                  variant="filled"
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
