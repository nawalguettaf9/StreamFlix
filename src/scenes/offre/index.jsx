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
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete"; // Importez les icônes d'édition et de suppression
import InputBase from "@mui/material/InputBase";
import { tokens } from "../../theme";
import { useState,useEffect } from 'react';
import axios from 'axios';
// Importez Link de react-router-dom pour la navigation déclarative
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function BasicTable() {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [offres,setOffres]=useState([]);
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };
  useEffect(() =>{
    const Alloffre = async()=>{
      try {
        const rep =await axios.get('http://localhost:8084/api/admin/AllOffre');
        setOffres(rep.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des offre', error); 
      }
    }
    Alloffre();
  },[]);
  const handleEditClick = (rowId) => {
    const selectoffre = offres.find(offre => offre.id_offre===rowId);
    localStorage.setItem('selectoffre',JSON.stringify(selectoffre));
    navigate(`/Editoffre`);
  };


  const handleDeleteClick = async (rowId) => {
    // Affiche une boîte de dialogue de confirmation
    const offreConfirmedDelete = window.confirm("Êtes-vous sûr de vouloir supprimer cette offre ?");
    // Si l'utilisateur confirme la suppression
    if (offreConfirmedDelete) {
      try {
        const response = await axios.delete(`http://localhost:8084/api/admin/SupprimerOffre/${rowId}`);
        
        if (response.status === 200) {
          console.log('Utilisateur supprimé avec succès.');
          // Mettez à jour l'état des utilisateurs après la suppression
          setOffres(offres.filter(offre => offre.id_offre !== rowId));

        } else {
          console.error('Erreur lors de la suppression de l\'offre.');
        }
      } catch (error) {
        console.error('Erreur lors de la suppression offre', error);
      }
    }
  };

  const handleAddOffre = () => {
    // Logique pour ajouter une offre
    navigate('/form');
    console.log("Ajouter une offre");
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
          Liste des offres
        </Typography>
      }
    />


    <Box m="20px">
    <Box display="flex" justifyContent="space-between" alignItems="center" mt="30px">
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
      <Button type="submit" color="error" variant="contained" onClick={handleAddOffre}>
        Ajouter Offre
      </Button>
    </Box>
    <br/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1000 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: '#E50914' }}>
            <TableRow>
              <TableCell style={{ fontSize: '14px' }}> id</TableCell>
              <TableCell align="right" style={{ fontSize: '14px' }}>description</TableCell>
              <TableCell align="right" style={{ fontSize: '14px' }}>Resolution</TableCell>
              <TableCell align="right" style={{ fontSize: '14px' }}>Qualite</TableCell>
              <TableCell align="right" style={{ fontSize: '14px' }}>prix</TableCell>
              <TableCell align="right" style={{ fontSize: '14px' }}>type</TableCell>
              <TableCell align="center" style={{ fontSize: '14px' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {offres
  .filter((offre) =>
    offre.description.toLowerCase().includes(searchInput.toLowerCase()) ||
    (offre.prix && offre.prix.toString().toLowerCase().includes(searchInput.toLowerCase()))
  )

            .map((offre) => (
              <TableRow
                key={offre.id_offre}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" style={{ fontSize: '14px' }} >
                  {offre.id_offre}
                </TableCell>
                <TableCell align="right" style={{ fontSize: '14px' }}>{offre.description}</TableCell>
                <TableCell align="right" style={{ fontSize: '14px' }}>{offre.resolution}</TableCell>
                <TableCell align="right" style={{ fontSize: '14px' }}>{offre.qualite}</TableCell>
                <TableCell align="right" style={{ fontSize: '14px' }}>{offre.prix}</TableCell>
                <TableCell align="right" style={{ fontSize: '14px' }}>{offre.type}</TableCell>
                <TableCell align="center" style={{ fontSize: '14px' }}>
                  <IconButton color="error" onClick={() => handleEditClick(offre.id_offre)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => handleDeleteClick(offre.id_offre)}>
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
