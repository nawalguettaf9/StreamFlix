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
  const [genres, setGenres] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    const allGenres = async () => {
      try {
        const response = await axios.get('http://localhost:8084/api/admin/AllGenre');
        setGenres(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des genres', error);
      }
    }

    // Appeler la fonction allGenres lors du montage du composant (une seule fois)
    allGenres();
  }, []);

  const handleEditClick = (rowId) => {
    const selectgenre = genres.find(genre => genre.id_genre===rowId);
    localStorage.setItem('selectgenre',JSON.stringify(selectgenre));
    navigate(`/Editgenre`);
  };

  const handleDeleteClick = async (rowId) => {
    const genreConfirmedDelete = window.confirm("Êtes-vous sûr de vouloir supprimer ce genre de film ?");

    if (genreConfirmedDelete) {
      try {
        const response = await axios.delete(`http://localhost:8084/api/admin/SupprimerGenre/${rowId}`);

        if (response.status === 200) {
          console.log('Genre supprimé avec succès.');
          // Mettez à jour l'état des genres après la suppression
          setGenres(genres.filter(genre => genre.id_genre !== rowId));
        } else {
          console.error('Erreur lors de la suppression du genre.');
        }
      } catch (error) {
        console.error('Erreur lors de la suppression du genre', error);
      }
    }
  };

  const handleAddGenre = () => {
   
    navigate("/genre");
    console.log("Ajouter un genre");
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
            Liste des genres
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
          <Button type="submit" color="error" variant="contained" onClick={() => handleAddGenre()}>
            Ajouter genre
          </Button>
        </Box>
        <br />
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
              {genres
              .filter((genre) => genre.nom_genre.toLowerCase().includes(searchInput.toLowerCase()))
              .map((genre) => (
                <TableRow
                  key={genre.id_genre}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" style={{ fontSize: '14px' }} >
                    {genre.id_genre}
                  </TableCell>
                  <TableCell align="right" style={{ fontSize: '14px' }}>{genre.nom_genre}</TableCell>

                  <TableCell align="center" style={{ fontSize: '14px' }}>
                    <IconButton color="error" onClick={() => handleEditClick(genre.id_genre)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDeleteClick(genre.id_genre)}>
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
