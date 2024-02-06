package com.example.films.Service;

import com.example.films.DTO.*;
import com.example.films.Entities.*;
import com.example.films.Repository.*;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AdminServImpl  implements AdminService{
    @Autowired
    private OffreRepo offreRepo;
    @Autowired
    private UtilisateurRepo utilisateurRepo;
    @Autowired
    private LangueRepo langueRepo;
    @Autowired
    private GenreRepo genreRepo;
    @Autowired
    private FilmRepo filmRepo;
    @Autowired
    private Genre_film_Repo genreFilmRepo;
    @Autowired
    private Langue_film_Repo langueFilmRepo;
    @Autowired
    private PaimentRepo paimentRepo;
    @Autowired
    private ProfilsRepo profilsRepo;
    @Override
    public String ModifierUtilisateur(UtilisateurDTO u) {
        Utilisateur existingUser = utilisateurRepo.getUserById(u.getId_utilisateur());

        if (existingUser != null) {
            // User with the specified ID exists, update their information
            int g = 0;
            existingUser.setEmail(u.getEmail());
            existingUser.setNom(u.getNom());
            existingUser.setPrenom(u.getPrenom());
            existingUser.setDate_naissance(u.getDate_naissance());
            existingUser.setMot_de_pass(u.getMot_de_pass());
            if (u.getRoleE().equals("ADMIN")){
                g=0;
            }
            if (u.getRoleE().equals("ADHERENT")){
                g=1;
            }

            //existingUser.setRole(u.getRole());

            // Assuming you have a method to update the user in your repository
            utilisateurRepo.updateUser(existingUser.getId_utilisateur(),existingUser.getEmail(),existingUser.getNom(),existingUser.getPrenom(),existingUser.getDate_naissance(),existingUser.getMot_de_pass(),g);

            return "Utilisateur mis à jour avec succès";
        } else {
            return "Utilisateur introuvable";
        }
    }

    @Override
    public String SupprimerUtilisateur(Integer id) {
        Utilisateur utilisateur = utilisateurRepo.getUserById(id);
        if (utilisateur != null) {
            profilsRepo.deleteProfilsByIdd(id);
            paimentRepo.deletePaimentById(id);
            utilisateurRepo.deleteUserById(id);
            return "Utilisateur supprimé avec succès";
        } else {
            return "Utilisateur introuvable";
        }
    }

    @Override
    public List<Utilisateur> ChercherUtilisateurEmailOrId(String n) {

        List<Utilisateur> y = utilisateurRepo.getUserByEmailOrId(n);
        if(y!=null){
            return y;
        }
        else{
            return null;
        }

    }

    @Override
    public List<Utilisateur> AllUtilisateur() {
        List<Utilisateur> utilisateurs = utilisateurRepo.getAll(); // Remplacez par la méthode réelle de récupération des utilisateurs.

        if (utilisateurs.isEmpty()) {
            // La liste des utilisateurs est vide, vous pouvez renvoyer null ou une liste vide, selon vos besoins.
            return null; // Ou vous pouvez renvoyer une liste vide en utilisant "return new ArrayList<>();" au lieu de "return null;".
        } else {
            // La liste des utilisateurs n'est pas vide, vous pouvez la renvoyer telle quelle.
            return utilisateurs;
        }
    }

    @Override
    public String AjouterOffre(OffreDTO offreDTO) {
        if(offreRepo.getOffreByType(offreDTO.getType())!= null){
            return "exite deja";
        }
        else {

            offreRepo.insertOffre(offreDTO.getDescription(),offreDTO.getResolution(),offreDTO.getPrix(),offreDTO.getQualite(),offreDTO.getType());
            //hhRepoo.insertHh(u.getEmail(),u.getNom());

            return "fait";
        }
    }

    @Override
    public String SupprimerOffre(Integer id) {
        Offre offre = offreRepo.getOffreById(id);
        if (offre != null) {
            offreRepo.deleteOffre(id);
            return "Offre supprimé avec succès";
        } else {
            return "Offre introuvable";
        }
    }

    @Override
    public String ModifierOffre(OffreDTO u) {
        Offre existingUser = offreRepo.getOffreById(u.getId_offre());

        if (existingUser != null) {
            // User with the specified ID exists, update their information
            existingUser.setDescription(u.getDescription());
            existingUser.setPrix(u.getPrix());
            existingUser.setQualite(u.getQualite());
            existingUser.setType(u.getType());
            existingUser.setResolution(u.getResolution());

            // Assuming you have a method to update the user in your repository
            offreRepo.updateOffre(existingUser.getId_offre(),existingUser.getDescription(),existingUser.getResolution(),existingUser.getPrix(),existingUser.getQualite(),existingUser.getType());

            return "Offre mis à jour avec succès";
        } else {
            return "Offre introuvable";
        }
    }

    @Override
    public List<Offre> ChercherOffre(String t) {

        List<Offre> y = offreRepo.getOffre(t);
        if(y!=null){
            return y;
        }
        else{
            return null;
        }

    }

    @Override
    public List<Offre> AllOffre() {
        List<Offre> offres = offreRepo.getAllOffre(); // Remplacez par la méthode réelle de récupération des utilisateurs.

        if (offres.isEmpty()) {
            // La liste des utilisateurs est vide, vous pouvez renvoyer null ou une liste vide, selon vos besoins.
            return null; // Ou vous pouvez renvoyer une liste vide en utilisant "return new ArrayList<>();" au lieu de "return null;".
        } else {
            // La liste des utilisateurs n'est pas vide, vous pouvez la renvoyer telle quelle.
            return offres;
        }
    }

    @Override
    public String AjouterLangue(LangueDTO langueDTO) {
        if(langueRepo.getLangueByNom(langueDTO.getNom_langue())!= null){
            return "exite deja";
        }
        else {

            langueRepo.insertLangue(langueDTO.getNom_langue());
            //hhRepoo.insertHh(u.getEmail(),u.getNom());

            return "fait";
        }
    }

    @Override
    public String SupprimerLangue(Integer id) {
        Langue langue = langueRepo.getLangueById(id);
        if (langue != null) {
            langueRepo.deleteLangueById(id);
            return "Langue supprimé avec succès";
        } else {
            return "Langue introuvable";
        }

    }

    @Override
    public String ModifierLangue(LangueDTO langueDTO) {
        Langue l = langueRepo.getLangueById(langueDTO.getId_langue());
        System.out.println(l);
        if (l != null) {
            // User with the specified ID exists, update their information
            l.setNom_langue(langueDTO.getNom_langue());


            // Assuming you have a method to update the user in your repository
            langueRepo.updateLangue(l.getId_langue(),l.getNom_langue());

            return "Langue mis à jour avec succès";
        } else {
            return "Langue introuvable";
        }
    }

    @Override
    public List <Langue> ChercherLangue(String n) {
        List<Langue> y = langueRepo.getLangueByNomOrId(n);
        if(y!=null){
            return y;
        }
        else{
            return null;
        }
    }

    @Override
    public List<Langue> AllLangue() {
        List<Langue> langues = langueRepo.getAll(); // Remplacez par la méthode réelle de récupération des utilisateurs.

        if (langues.isEmpty()) {
            // La liste des utilisateurs est vide, vous pouvez renvoyer null ou une liste vide, selon vos besoins.
            return null; // Ou vous pouvez renvoyer une liste vide en utilisant "return new ArrayList<>();" au lieu de "return null;".
        } else {
            // La liste des utilisateurs n'est pas vide, vous pouvez la renvoyer telle quelle.
            return langues;
        }

    }

    @Override
    public String AjouterGenre(GenreDTO genreDTO) {
        if(genreRepo.getGenreByNom(genreDTO.getNom_genre())!= null){
            return "exite deja";
        }
        else {

            genreRepo.insertGenre(genreDTO.getNom_genre());
            //hhRepoo.insertHh(u.getEmail(),u.getNom());

            return "fait";
        }
    }

    @Override
    public String SupprimerGenre(Integer id) {
        Genre genre = genreRepo.getGenreById(id);
        if (genre != null) {
            genreRepo.deleteGenreById(id);
            return "Genre supprimé avec succès";
        } else {
            return "Genre introuvable";
        }


    }

    @Override
    public String ModifierGenre(GenreDTO genreDTO) {
        Genre l = genreRepo.getGenreById(genreDTO.getId_genre());
        System.out.println(l);
        if (l != null) {
            // User with the specified ID exists, update their information
            l.setNom_genre(genreDTO.getNom_genre());


            // Assuming you have a method to update the user in your repository
            genreRepo.updateGenre(l.getId_genre(),l.getNom_genre());

            return "Genre mis à jour avec succès";
        } else {
            return "Genre introuvable";
        }
    }

    @Override
    public List <Genre> ChercherGenre(String n) {
        List<Genre> y = genreRepo.getGenreByNomOrId(n);
        if(y!=null){
            return y;
        }
        else{
            return null;
        }
    }

    @Override
    public List<Genre> AllGenre() {
        List<Genre> genres = genreRepo.getAll(); // Remplacez par la méthode réelle de récupération des utilisateurs.

        if (genres.isEmpty()) {
            // La liste des utilisateurs est vide, vous pouvez renvoyer null ou une liste vide, selon vos besoins.
            return null; // Ou vous pouvez renvoyer une liste vide en utilisant "return new ArrayList<>();" au lieu de "return null;".
        } else {
            // La liste des utilisateurs n'est pas vide, vous pouvez la renvoyer telle quelle.
            return genres;
        }
    }

    @Override
    public List<Genre_film> AllFilm() {
        List<Genre_film> films = genreFilmRepo.AlllFilm(); // Remplacez par la méthode réelle de récupération des utilisateurs.

        if (films.isEmpty()) {
            // La liste des utilisateurs est vide, vous pouvez renvoyer null ou une liste vide, selon vos besoins.
            return null; // Ou vous pouvez renvoyer une liste vide en utilisant "return new ArrayList<>();" au lieu de "return null;".
        } else {
            // La liste des utilisateurs n'est pas vide, vous pouvez la renvoyer telle quelle.
            return films;
        }
    }

    @Override
    public List<Genre_film> Filmgenre(String id) {
        List<Genre_film> films = genreFilmRepo.FindGenreFilm(id); // Remplacez par la méthode réelle de récupération des utilisateurs.

        if (films.isEmpty()) {
            // La liste des utilisateurs est vide, vous pouvez renvoyer null ou une liste vide, selon vos besoins.
            return null; // Ou vous pouvez renvoyer une liste vide en utilisant "return new ArrayList<>();" au lieu de "return null;".
        } else {
            // La liste des utilisateurs n'est pas vide, vous pouvez la renvoyer telle quelle.
            return films;
        }
    }

    @Override
    public String AjouterFilm(FilmDTO filmDTO) {
        if(filmRepo.getFilm(filmDTO.getTitle())!= null){
            return "exite deja";
        }
        else {

            filmRepo.insertFilm(filmDTO.getUri(),filmDTO.getSource(),filmDTO.getTitle(), filmDTO.getAge(),filmDTO.getYear_of_release(), filmDTO.getDescription());
            Fillm f =  filmRepo.getFilm(filmDTO.getTitle());
            Integer k = f.getId_film();

            //hhRepoo.insertHh(u.getEmail(),u.getNom());
            genreFilmRepo.insertGenre_Film(k,filmDTO.getGenre());
            langueFilmRepo.insertLangue_Film(k,filmDTO.getLangue());

            return "fait";
        }
    }

    @Override
    public String ModifierFilm(FilmDTO filmDTO) {
        List<Fillm> l = filmRepo.getfilmByOr(filmDTO.getTitle());
        System.out.println(l);
        if (l.get(0) != null) {
            // User with the specified ID exists, update their information
            l.get(0).setAge(filmDTO.getAge());
            l.get(0).setUri(filmDTO.getUri());
            l.get(0).setTitle(filmDTO.getTitle());
            l.get(0).setSource(filmDTO.getSource());
            l.get(0).setYear_of_release(filmDTO.getYear_of_release());
            l.get(0).setDescription(filmDTO.getDescription());

            // Assuming you have a method to update the user in your repository
            filmRepo.updateFilm(l.get(0).getId_film(),l.get(0).getUri(),l.get(0).getSource(),l.get(0).getTitle(), l.get(0).getAge(),l.get(0).getYear_of_release(),l.get(0).getDescription());
            System.out.println(l.get(0).getId_film());
            System.out.println(filmDTO.getGenre());
            genreFilmRepo.updateGenreFilm(l.get(0).getId_film(),filmDTO.getGenre());
            langueFilmRepo.updateLangueFilm(l.get(0).getId_film(), filmDTO.getLangue());
            return "film mis à jour avec succès";
        } else {
            return "film introuvable";
        }
    }

    @Override
    public List<Fillm> ChercherFilm(String n) {
        List<Fillm> y = filmRepo.getfilmByOr(n);
        if(y!=null){
            return y;
        }
        else{
            return null;
        }
    }
    @Override
    public List<Genre_film> ChercherFilmG(String n) {
        List<Genre_film> y = genreFilmRepo.FindGenreFilm(n);
        if(y!=null){
            return y;
        }
        else{
            return null;
        }
    }
    @Override
    public List<Fillm> Cher(String n) {
        List<Fillm> y = filmRepo.getFilmById3(n);
        if(y!=null){
            return y;
        }
        else{
            return null;
        }
    }

    @Override
    public List<Integer> statistiques() {
        List<Integer> listeUtilisateurs = new ArrayList<>();
        Integer n = utilisateurRepo.Stat();
        Integer n1 = filmRepo.Stat1();
        Integer n2 = genreRepo.Stat2();
        Integer n3 = langueRepo.Stat3();
        listeUtilisateurs.add(n);
        listeUtilisateurs.add(n1);
        listeUtilisateurs.add(n2);
        listeUtilisateurs.add(n3);

        return listeUtilisateurs;

    }

    @Override
    public String SupprimerFilm(Integer id) {
        List<Fillm> fillm = filmRepo.getFilmById2(id);
        if (fillm.get(0) != null) {

            genreFilmRepo.deleteGenreFilm(id);
            langueFilmRepo.deleteLangueFilm(id);
            filmRepo.deleteFilm(id);
            return "film supprimé avec succès";
        } else {
            return "film introuvable";
        }

    }

  /*  public String AjouterUtilisateur(UtilisateurDTO u) {
        if(utilisateurRepo.getUserByEmail(u.getEmail())!= null){
            return "exite deja";
        }
        else {

            utilisateurRepo.insertUser(u.getEmail(),u.getNom(),u.getPrenom(),u.getDate_naissance(),u.getMot_de_pass(), 1,"ADHERENT");
            //hhRepoo.insertHh(u.getEmail(),u.getNom());

            return "fait";
        }
    }*/
}