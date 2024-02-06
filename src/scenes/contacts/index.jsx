import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography, Button, IconButton, useTheme } from "@mui/material";
import Header from "../../components/Header";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { tokens } from "../../theme";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function BasicTable() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [langues, setLangues] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };
  useEffect(() => {
    const allLangues = async () => {
      try {
        const response = await axios.get('http://localhost:8084/api/admin/AllLangue');
        setLangues(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des langues', error);
      }
    }

    // Appeler la fonction allLangues lors du montage du composant (une seule fois)
    allLangues();
  }, []);

  const handleEditClick = (rowId) => {
    const selectlangue = langues.find(lang => lang.id_langue===rowId);
    localStorage.setItem('selectlangue',JSON.stringify(selectlangue));
    navigate(`/Editlangue`);
  };

  const handleDeleteClick = async (rowId) => {
    const langConfirmedDelete = window.confirm("Êtes-vous sûr de vouloir supprimer cette langue ?");

    if (langConfirmedDelete) {
      try {
        const response = await axios.delete(`http://localhost:8084/api/admin/SupprimerLangue/${rowId}`);

        if (response.status === 200) {
          console.log('Langue supprimée avec succès.');
          // Mettez à jour l'état des langues après la suppression
          setLangues(langues.filter(langue => langue.id_langue !== rowId));
        } else {
          console.error('Erreur lors de la suppression de la langue.');
        }
      } catch (error) {
        console.error('Erreur lors de la suppression de la langue', error);
      }
    }
  };

  const handleAddLang = () => {
    navigate('/langage');
    console.log("Ajouter une langue");
  };

  return (
    <Box m="20px">
      <Header
        subtitle={
          <Typography
            style={{
              fontFamily: 'Nouvelle-Police',
              color: 'red',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px'
            }}
          >
            Liste des langues
          </Typography>
        }
      />

      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center" backgroundColor={colors.primary[400]} borderRadius="6px">
            <InputBase
              sx={{ ml: 2, flex: 1 }}
              placeholder="Rechercher"
              value={searchInput}
              onChange={handleSearchChange}
            />
            <IconButton type="button" sx={{ p: 1 }}>
              <SearchIcon />
            </IconButton>
          </Box>
          <Button type="submit" color="error" variant="contained" onClick={() => handleAddLang()}>
            Ajouter langue
          </Button>
        </Box>

        <br/>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 1000 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: '#E50914' }}>
              <TableRow>
                <TableCell style={{ fontSize: '14px' }}> id</TableCell>
                <TableCell align="right" style={{ fontSize: '14px' }}>Nom</TableCell>
                <TableCell align="center" style={{ fontSize: '14px' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {langues
               .filter((lang) => lang.nom_langue.toLowerCase().includes(searchInput.toLowerCase()))
              .map((lang) => (
                <TableRow
                  key={lang.id_langue}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" style={{ fontSize: '14px' }} >
                    {lang.id_langue}
                  </TableCell>
                  <TableCell align="right" style={{ fontSize: '14px' }}>{lang.nom_langue}</TableCell>

                  <TableCell align="center" style={{ fontSize: '14px' }}>
                    <IconButton color="error" onClick={() => handleEditClick(lang.id_langue)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDeleteClick(lang.id_langue)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
