import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Langage from "./scenes/langage/langage";
import Genre from "./scenes/genre/genre";
import Offre from "./scenes/offre";
import Film from "./scenes/film";
import Serie from "./scenes/serie";
import Login from "./scenes/login";
import Edituser from "./scenes/Edituser"
import Editlangue from "./scenes/Editlangue";
import Editoffre from "./scenes/Editoffre";
import Editgenre from "./scenes/Editgenre";
import Editprofil from "./scenes/Editprofil";
import Profil from "./scenes/Profil";
import Addfilm from "./scenes/Addfilm";

function App() {
  const [theme, colorMode] = useMode();
  const location = useLocation();

  const isLoginPage = location.pathname === "/";

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {isLoginPage ? null : <Sidebar />}
         
          <main className="content">
          {isLoginPage ? null : <Topbar /> }
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/Addfilm" element={<Addfilm />} />
             <Route path="/Edituser" element={<Edituser />} />
             <Route path="/Editlangue" element={<Editlangue />} />
             <Route path="/Editprofil" element={<Editprofil />} />
             <Route path="/profil" element={<Profil />} />
             <Route path="/Editoffre" element={<Editoffre />} />
             <Route path="/Editgenre" element={<Editgenre />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/langage" element={<Langage />} />
              <Route path="/genre" element={<Genre />} />
              <Route path="/offre" element={<Offre />} />
              <Route path="/film" element={<Film />} />
              <Route path="/serie" element={<Serie />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
