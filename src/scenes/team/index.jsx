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
import { tokens } from "../../theme"; // Assurez-vous d'importer les tokens
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete"; // Importez les icônes d'édition et de suppression
import axios from 'axios';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function BasicTable() {
  const navigate = useNavigate();
  const theme = useTheme(); // Ajoutez cette ligne pour utiliser le thème
  const colors = tokens(theme.palette.mode); 
  const[users,setUsers]=useState([]);
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };
  //fonction pour affciher les utilisateur
  useEffect(() =>{
    //fonction pour recuperer liste des utilisateur
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8084/api/admin/AllUtilisateur');
        console.log('Réponse du serveur :', response); // Ajoutez cette ligne
        setUsers(response.data);
        console.log('Réponse du serveur :', response);

      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs', error);
      }
    };
    
  // Appeler la fonction fetchUsers lors du montage du composant (une seule fois)
  fetchUsers();
  },[]);



  const handleDeleteClick = async (rowId) => {
    // Affiche une boîte de dialogue de confirmation
    const userConfirmedDelete = window.confirm("Êtes-vous sûr de vouloir supprimer cet utilisateur ?");
  
    // Si l'utilisateur confirme la suppression
    if (userConfirmedDelete) {
      try {
        const response = await axios.delete(`http://localhost:8084/api/admin/SupprimerUtilisateur/${rowId}`);
        
        if (response.status === 200) {
          console.log('Utilisateur supprimé avec succès.');
          // Mettez à jour l'état des utilisateurs après la suppression
          setUsers(users.filter(user => user.id_utilisateur !== rowId));
        } else {
          console.error('Erreur lors de la suppression de l\'utilisateur.');
        }
      } catch (error) {
        console.error('Erreur lors de la suppression des utilisateurs', error);
      }
    }
  };
  
  const handleEditClick = (userId) => {
    const selectedUser = users.find(user => user.id_utilisateur === userId);
  
    // Stocker les détails de l'utilisateur dans l'état local (localStorage)
    localStorage.setItem('selectedUser', JSON.stringify(selectedUser));
  
    // Rediriger vers la page /Edituser
    navigate('/Edituser');
  };
  
  


// ... (imports et autres parties du code)

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
          Liste des adherents
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
      </Box>
      <br />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 1000 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: '#E50914' }}>
            <TableRow>
              <TableCell style={{ fontSize: '14px' }}> id</TableCell>
              <TableCell align="right" style={{ fontSize: '14px' }}>Nom</TableCell>
              <TableCell align="right" style={{ fontSize: '14px' }}>Prenom</TableCell>
              <TableCell align="right" style={{ fontSize: '14px' }}>Email</TableCell>
              <TableCell align="right" style={{ fontSize: '14px' }}>Date_naissance</TableCell>
              <TableCell align="center" style={{ fontSize: '14px' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
             {/* Mapping sur les utilisateurs filtrés */}
            {users
            /* . Cette partie filtre les utilisateurs en fonction de la valeur de recherche (searchInput). 
            Il vérifie si le nom ou le prénom de chaque utilisateur (en minuscules) contient(a l'aide de la fonction includes) la valeur de recherche.
             La recherche est insensible à la casse grâce à l'utilisation de toLowerCase().*/
              .filter((user) =>
                user.nom.toLowerCase().includes(searchInput.toLowerCase()) ||
                user.prenom.toLowerCase().includes(searchInput.toLowerCase())
              )
              /* Cette partie itère sur chaque utilisateur filtré et génère une ligne de tableau (TableRow) pour chaque utilisateur. 
              Pour chaque utilisateur, elle affiche les différentes colonnes du tableau, telles que l'ID, le nom, le prénom, 
              l'e-mail, la date de naissance et les boutons d'édition et de suppression.*/
              .map((user) => (
                <TableRow
                  key={user.id_utilisateur}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" style={{ fontSize: '14px' }}>
                    {user.id_utilisateur}
                  </TableCell>
                  <TableCell align="right" style={{ fontSize: '14px' }}>{user.nom}</TableCell>
                  <TableCell align="right" style={{ fontSize: '14px' }}>{user.prenom}</TableCell>
                  <TableCell align="right" style={{ fontSize: '14px' }}>{user.email}</TableCell>
                  <TableCell align="right" style={{ fontSize: '14px' }}>{user.date_naissance}</TableCell>
                  <TableCell align="center" style={{ fontSize: '14px' }}>
                    <IconButton color="error" onClick={() => handleEditClick(user.id_utilisateur)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDeleteClick(user.id_utilisateur)}>
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
