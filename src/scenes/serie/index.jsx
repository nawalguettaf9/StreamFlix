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
import DeleteIcon from "@mui/icons-material/Delete";
import InputBase from "@mui/material/InputBase";
import { tokens } from "../../theme";

function createData(
  id, Titre, AnneeSortie, Realisateur, Acteur, Image, notePos, noteNeg, PaysOrigine, Duree
) {
  return { id, Titre, AnneeSortie, Realisateur, Acteur, Image, notePos, noteNeg, PaysOrigine, Duree };
}

const rows = [
  createData(1, 'Nom du Serie', '2022', 'Réalisateur', 'Acteur', 'image_url', 4.5, 2.0, 'Pays', '120 min'),
  // Ajoutez d'autres lignes de données ici
];

export default function BasicTable() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleEditClick = (rowId) => {
    // Logique pour l'édition
    console.log(`Éditer la ligne avec l'ID : ${rowId}`);
  };

  const handleDeleteClick = (rowId) => {
    // Logique pour la suppression
    console.log(`Supprimer la ligne avec l'ID : ${rowId}`);
  };

  const handleAddFilm = () => {
    // Logique pour ajouter un film
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
            Liste des Serie
          </Typography>
        }
      />

      <Box display="flex" justifyContent="space-between" alignItems="center" mt="30px">
        <Box display="flex" alignItems="center" backgroundColor={colors.primary[400]} borderRadius="6px">
          <InputBase
            sx={{ ml: 2, flex: 1 }}
            placeholder="Rechercher"
          />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchIcon />
          </IconButton>
        </Box>
        <Button type="submit" color="error" variant="contained" onClick={handleAddFilm}>
          Ajouter Serie
        </Button>
      </Box>
      <Box m="20px">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 1000 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: '#E50914' }}>
              <TableRow>
                <TableCell style={{ fontSize: '14px' }}>ID</TableCell>
                <TableCell align="right" style={{ fontSize: '14px' }}>Titre</TableCell>
                <TableCell align="right" style={{ fontSize: '14px' }}>Année de sortie</TableCell>
                <TableCell align="right" style={{ fontSize: '14px' }}>Réalisateur</TableCell>
                <TableCell align="right" style={{ fontSize: '14px' }}>Acteur</TableCell>
                <TableCell align="right" style={{ fontSize: '14px' }}>Image</TableCell>
                <TableCell align="right" style={{ fontSize: '14px' }}>Note positive</TableCell>
                <TableCell align="right" style={{ fontSize: '14px' }}>Note négative</TableCell>
                <TableCell align="right" style={{ fontSize: '14px' }}>Pays d'origine</TableCell>
                <TableCell align="right" style={{ fontSize: '14px' }}>Durée</TableCell>
                <TableCell align="right" style={{ fontSize: '14px' }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" style={{ fontSize: '14px' }}>
                    {row.id}
                  </TableCell>
                  <TableCell align="right" style={{ fontSize: '14px' }}>{row.Titre}</TableCell>
                  <TableCell align="right" style={{ fontSize: '14px' }}>{row.AnneeSortie}</TableCell>
                  <TableCell align="right" style={{ fontSize: '14px' }}>{row.Realisateur}</TableCell>
                  <TableCell align="right" style={{ fontSize: '14px' }}>{row.Acteur}</TableCell>
                  <TableCell align="right" style={{ fontSize: '14px' }}>{row.Image}</TableCell>
                  <TableCell align="right" style={{ fontSize: '14px' }}>{row.notePos}</TableCell>
                  <TableCell align="right" style={{ fontSize: '14px' }}>{row.noteNeg}</TableCell>
                  <TableCell align="right" style={{ fontSize: '14px' }}>{row.PaysOrigine}</TableCell>
                  <TableCell align="right" style={{ fontSize: '14px' }}>{row.Duree}</TableCell>
                  <TableCell align="right" style={{ fontSize: '14px' }}>
                    <IconButton color="error" onClick={() => handleEditClick(row.id)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDeleteClick(row.id)}>
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
