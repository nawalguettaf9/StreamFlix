import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();
  const handleListClient = () => {
    // Redirect to the /invoices page
    navigate("/invoices");
  };

  // Retrieve offer details from localStorage
  const storedOffre = localStorage.getItem('selectoffre');
  
  // Parse the JSON string to a JavaScript object, initialize with an empty object if no offer is stored
  const initialOffre = storedOffre ? JSON.parse(storedOffre) : {};

  const initialValues = {
    id_offre: initialOffre.id_offre || "",
    description: initialOffre.description || "",
    resolution: initialOffre.resolution || "",
    qualite: initialOffre.qualite || "",
    prix: initialOffre.prix || "",
    type: initialOffre.type || "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // Display a confirmation dialog
      const userConfirmedUpdate = window.confirm("Are you sure you want to modify this offer?");
      
      // If the user confirms the modification
      if (userConfirmedUpdate) {
        setSubmitting(true);
        
        // Perform the HTTP request to update the offer
        const response = await axios.put("http://localhost:8084/api/admin/ModifierOffre", {
          id_offre: values.id_offre,
          description: values.description,
          resolution: values.resolution,
          qualite: values.qualite,
          prix: values.prix,
          type: values.type,
        });

        console.log("Offer modified successfully", response.data);

        // Set local state or perform other necessary actions here

        setSubmitting(false);
        // Redirect to the /offre page
        navigate('/offre');
      } else {
        // If the user cancels the modification, set submitting to false
        setSubmitting(false);
      }
    } catch (error) {
      console.error("Error modifying the offer:", error);
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
          <Header title="Modifier Offer" style={{ color: '#E50914' }} />
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
                  label="Description"
                  placeholder="Nouvelle description"
                  multiline
                  variant="filled"
                  value={values.description}
                  name="description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <TextField
                  id="filled-textarea"
                  label="Resolution"
                  placeholder="Nouvelle résolution"
                  multiline
                  variant="filled"
                  name="resolution"
                  value={values.resolution}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <TextField
                  id="filled-textarea"
                  label="Qualité"
                  placeholder="Nouvelle qualité"
                  multiline
                  variant="filled"
                  name="qualite"
                  value={values.qualite}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <TextField
                  id="filled-textarea"
                  label="Prix"
                  placeholder="Nouveau prix"
                  multiline
                  variant="filled"
                  name="prix"
                  value={values.prix}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <TextField
                  id="filled-textarea"
                  label="Type"
                  placeholder="Nouveau type"
                  multiline
                  variant="filled"
                  name="type"
                  value={values.type}
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
