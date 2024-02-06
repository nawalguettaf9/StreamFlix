import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
import DeleteIcon from "@mui/icons-material/Delete";
import InputBase from "@mui/material/InputBase";
import { tokens } from "../../theme";
import { useNavigate } from "react-router-dom";

export default function BasicTable() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [filmSearchInput, setFilmSearchInput] = useState('');

  const handleFilmSearchChange = (event) => {
    setFilmSearchInput(event.target.value);
  };

  const navigate = useNavigate();

  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get('http://localhost:8084/api/admin/AllFilm');
        setFilms(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des films', error);
      }
    };
    fetchFilms();
  }, []);

  const handleEditClick = (idFilm) => {
    console.log(`Éditer la ligne avec l'ID : ${idFilm}`);
  };

  const handleDeleteClick = (idFilm) => {
    console.log(`Supprimer la ligne avec l'ID : ${idFilm}`);
  };

  const handleAddFilm = () => {
    navigate('/Addfilm');
    console.log("Ajouter un film");
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
              fontSize: '24px',
            }}
          >
            Liste des films
          </Typography>
        }
      />

      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box display="flex" alignItems="center" backgroundColor={colors.primary[400]} borderRadius="6px">
            <InputBase
              sx={{ ml: 2, flex: 1 }}
              placeholder="Rechercher"
              value={filmSearchInput}
              onChange={handleFilmSearchChange}
            />
            <IconButton type="button" sx={{ p: 1 }}>
              <SearchIcon />
            </IconButton>
          </Box>
          <Button type="submit" color="error" variant="contained" onClick={() => handleAddFilm()}>
            Ajouter film
          </Button>
        </Box>
        <br/>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 1000 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: '#E50914' }}>
              <TableRow>
                <TableCell style={{ fontSize: '14px' }}>ID</TableCell>
                <TableCell align="right" style={{ fontSize: '14px' }}>Image</TableCell>
                <TableCell align="right" style={{ fontSize: '14px' }}>Année de sortie</TableCell>
                <TableCell align="right" style={{ fontSize: '14px' }}>Âge</TableCell>
                <TableCell align="right" style={{ fontSize: '14px' }}>Titre</TableCell>
                <TableCell align="right" style={{ fontSize: '14px' }}>Description</TableCell>
                <TableCell align="right" style={{ fontSize: '14px' }}>Source</TableCell>
                <TableCell align="right" style={{ fontSize: '14px' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {films
                .filter((film) => film.id_film.title.toLowerCase().includes(filmSearchInput.toLowerCase()))
                .map((film) => (
                  <TableRow key={film.id_film.id_film}>
                    <TableCell component="th" scope="row" style={{ fontSize: '14px' }}>
                      {film.id_film.id_film}
                    </TableCell>
                    <TableCell align="right" style={{ fontSize: '14px' }}><img src={film.id_film.uri} alt={film.id_film.title} style={{width: '50px', height: 'auto'}}/></TableCell>
                    <TableCell align="right" style={{ fontSize: '14px' }}>{film.id_film.year_of_release}</TableCell>
                    <TableCell align="right" style={{ fontSize: '14px' }}>{film.id_film.age}</TableCell>
                    <TableCell align="right" style={{ fontSize: '14px' }}>{film.id_film.title}</TableCell>
                    <TableCell align="right" style={{ fontSize: '14px' }}>{film.id_film.description}</TableCell>
                    <TableCell align="right" style={{ fontSize: '14px' }}>{film.id_film.source}</TableCell>
                    <TableCell align="right" style={{ fontSize: '14px' }}>
                      <IconButton color="error" onClick={() => handleEditClick(film.id_film.id_film)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton color="error" onClick={() => handleDeleteClick(film.id_film.id_film)}>
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
