import React from 'react';
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { Box, IconButton, Menu, MenuItem, useTheme, ThemeProvider } from '@mui/material';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { useNavigate } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

const MENU_OPTIONS = [
  {
    label: 'Accueil',
    icon: <HomeIcon />,
  },
  {
    label: 'Profil',
    icon: <PersonIcon />,
  },
  {
    label: 'Modifier profil',
    icon: <SettingsIcon />,
  },
];

const Topbar = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (label) => {
    if (label === 'Accueil') {
      navigate('/Dashboard');
    } else if (label === 'Profil') {
      navigate('/profil');
    } else if (label === 'Modifier profil') {
      navigate('/Editprofil');
    }

    handleMenuClose();
  };

  const handleLogout = () => {
    // Ajoutez la logique de déconnexion ici si nécessaire

    // Redirige vers la page d'accueil
    navigate('/');
  };

  const toggleColorMode = () => {
    theme.toggleTheme();
  };

  const customTheme = createTheme(theme);

  return (
    <ThemeProvider theme={customTheme}>
      <Box display="flex" justifyContent="flex-end" p={2} alignItems="center">
        {/* ICONS */}
        <Box display="flex">
          <IconButton onClick={handleMenuClick}>
            <PersonOutlinedIcon />
          </IconButton>

          {/* Menu déroulant */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            {MENU_OPTIONS.map((option) => (
              <MenuItem key={option.label} onClick={() => handleMenuItemClick(option.label)}>
                {option.label}
              </MenuItem>
            ))}
          </Menu>

         
          <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
          <IconButton onClick={handleLogout}>
            <PowerSettingsNewIcon />
          </IconButton>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Topbar;
