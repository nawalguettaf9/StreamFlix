package com.example.films.Service;


import com.example.films.DTO.*;
import com.example.films.Entities.Profils;
import com.example.films.Entities.Utilisateur;
import com.example.films.Repository.UtilisateurRepo;

import java.io.File;
import java.util.List;


public interface UtlisateurService {
    Utilisateur Login(loginn log);
    String Inscrire(UtilisateurDTO u);
    String Paiment(PaimentDTO u);

    String AjouterProfil(ProfilsDTO profilsDTO);

    List<Profils> AllProfils();
    List<Profils> AllProfilsOne(Integer i);

    String SupprimerProfil(Integer id);

    String ModifierProfil(ProfilsDTO profilsDTO);


}