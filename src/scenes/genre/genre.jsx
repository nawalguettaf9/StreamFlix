import React from "react";
import { Box, Button, TextField, InputAdornment } from "@mui/material";
import CategoryIcon from '@mui/icons-material/Category';
import { Formik } from "formik";
import Header from "../../components/Header";
import MovieIcon from '@mui/icons-material/Movie';
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const navigate = useNavigate();
  const initialValues = {
    nomGenre: "",
  };



  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const genreConfirmedUpdate = window.confirm("Êtes-vous sûr de vouloir ajouter ce genre ?");
      if(genreConfirmedUpdate){   
        setSubmitting(true);
       const response = await axios.post("http://localhost:8084/api/admin/AjouterGenre", {
        nom_genre: values.nomGenre,       
      });
  
      if (response.status === 200) {
        console.log('Genre ajouté avec succès.');
        // Handle success, such as redirecting to another page
      } else {
        console.error('Erreur lors de l\'ajout du genre.',error);
      }
      setSubmitting(false);
      navigate('/invoices');
    }
      else{
        setSubmitting(true);
      }

    } catch (error) {
      console.error('Erreur lors de l\'ajout du genre', error);
    }
  
    setSubmitting(false);
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
  <Header title="Ajouter Genre" style={{ color: '#E50914' }} />
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
