import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import axios from "axios"; // Make sure to import axios
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();
  const handleListClient = () => {
    // Redirect to the /invoices page
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

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const genreConfirmedUpdate = window.confirm("Êtes-vous sûr de vouloir ajouter cette offre ?");
      if (genreConfirmedUpdate) {
        setSubmitting(true);
        const response = await axios.post("http://localhost:8084/api/admin/AjouterOffre", {
          description: values.description,
          resolution: values.resolution,
          prix: values.prix,
          qualite: values.qualite,
          type: values.type,
        });

        if (response.status === 200) {
          console.log('Offre ajoutée avec succès.');

        } else {
          console.error('Erreur lors de l\'ajout de l\'offre.', response.data);
        }
        setSubmitting(false);
        navigate("/offre");
      } else {
        setSubmitting(true);
      }
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'offre', error);
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
          <Header title="Ajouter Offre" style={{ color: '#E50914' }} />
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
                  id="filled-textarea-description"
                  label="Description"
                  placeholder="Nouvelle description"
                  multiline
                  variant="filled"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  name="description"
                />
                <TextField
                  id="filled-textarea-resolution"
                  label="Résolution"
                  placeholder="Nouvelle résolution"
                  multiline
                  variant="filled"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.resolution}
                  name="resolution"
                />
                <TextField
                  id="filled-textarea-qualite"
                  label="Qualité"
                  placeholder="Nouvelle qualité"
                  multiline
                  variant="filled"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.qualite}
                  name="qualite"
                />
                <TextField
                  id="filled-textarea-prix"
                  label="Prix"
                  placeholder="Nouveau prix"
                  multiline
                  variant="filled"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.prix}
                  name="prix"
                />
                <TextField
                  id="filled-textarea-type"
                  label="Type"
                  placeholder="Nouveau type"
                  multiline
                  variant="filled"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.type}
                  name="type"
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
