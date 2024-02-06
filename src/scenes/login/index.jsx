import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockRoundedIcon from '@mui/icons-material/LockRounded';

const backgroundStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundImage: 'url("../../assets/home.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
};
const overlayStyle = {
  content: '', // Contenu vide, nécessaire pour afficher l'overlay.
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Couleur noire semi-transparente.
}

const wrapperStyle = {
  width: '420px',
  background: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2)), transparent',
  border: '2px solid rgba(255, 255, 255, 0.2)',
  backdropFilter: 'blur(9px)',
  color: '#fff',
  borderRadius: '12px',
  padding: '30px 40px',
};

const h1Style = {
  fontSize: '36px',
  textAlign: 'center',
};

const inputBoxStyle = {
  position: 'relative',
  width: '100%',
  height: '50px',
  margin: '30px 0',
};

const inputStyle = {
  width: '100%',
  height: '100%',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  borderRadius: '40px',
  fontSize: '16px',
  color: '#fff',
  padding: '20px 45px 20px 20px',
  border: '2px solid rgba(255, 255, 255, 0.2)',
};

const iconStyle = {
  position: 'absolute',
  right: '20px',
  top: '30%',
  transform: 'translate(0%)',
  fontSize: '20px',
};

const buttonStyle = {
  width: '100%',
  height: '45px',
  background: '#E50914',
  border: 'none',
  outline: 'none',
  borderRadius: '40px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  fontSize: '16px',
  color: '#fff',
  fontWeight: '600',
};

const registerLinkStyle = {
  fontSize: '14.5px',
  textAlign: 'center',
  margin: '20px 0 15px',
};

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Nouvel état pour stocker le message d'erreur
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post('http://localhost:8084/api/utilisateur/Login', {
      email: email,
      mot_de_pass: password,
    })
      .then(response => {
        console.log(response);
        if (response.data && response.data.roleE === 'ADMIN') {
          // Stocker les informations de l'utilisateur dans le localStorage
          localStorage.setItem('userlogin', JSON.stringify(response.data));
          navigate('/Dashboard');
        } else {
          setError("L'utilisateur n'est pas un administrateur");
        }
      })
      .catch(error => {
        console.error('Échec de la connexion :', error.message);
        setError('Erreur lors de la connexion. Veuillez réessayer.'); // Mettre à jour le message d'erreur
      });
  };

  return (
    <div className="login-page" style={backgroundStyle}>
      <div className="overlay" style={overlayStyle}></div>
      <div className="wrapper" style={wrapperStyle}>
        <h1 style={h1Style}>S'identifier</h1>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <div className="input-box" style={inputBoxStyle}>
          <input
            type="email"
            placeholder="Adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />
          <EmailOutlinedIcon style={iconStyle} />
        </div>
        <div className="input-box" style={inputBoxStyle}>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />
          <LockRoundedIcon style={iconStyle} />
        </div>
        <button onClick={handleLogin} style={buttonStyle}>
          S'identifier
        </button>
        <div className="register-link" style={registerLinkStyle}></div>
      </div>
    </div>
  );
};

export default LoginPage;