package com.example.films.Service;

import com.example.films.DTO.*;
import com.example.films.Entities.*;

import java.util.List;

public interface AdminService {
    String ModifierUtilisateur(UtilisateurDTO u);
    String SupprimerUtilisateur(Integer id);
    List<Utilisateur> ChercherUtilisateurEmailOrId(String n);
    List <Utilisateur> AllUtilisateur();

    String AjouterOffre(OffreDTO offreDTO);
    String SupprimerOffre(Integer id);
    String ModifierOffre(OffreDTO offreDTO);
    List<Offre> ChercherOffre(String type);
    List <Offre> AllOffre();

    String AjouterLangue(LangueDTO langueDTO);
    String SupprimerLangue(Integer id);
    String ModifierLangue(LangueDTO langueDTO);
    List <Langue> ChercherLangue(String n);
    List <Langue> AllLangue();


    String AjouterGenre(GenreDTO genreDTO);
    String SupprimerGenre(Integer id);
    String ModifierGenre(GenreDTO genreDTO);
    List <Genre> ChercherGenre(String n);
    List <Genre> AllGenre();



    List <Genre_film> AllFilm();
        List<Genre_film> Filmgenre(String id);
    String AjouterFilm(FilmDTO filmDTO);
    String ModifierFilm(FilmDTO filmDTO);
    List <Fillm> ChercherFilm(String n);
    List <Genre_film> ChercherFilmG(String n);
    String SupprimerFilm(Integer id);
    List<Fillm> Cher(String n);

    List<Integer> statistiques();

}
