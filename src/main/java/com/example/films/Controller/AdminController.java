package com.example.films.Controller;

import com.example.films.DTO.*;
import com.example.films.Entities.*;
import com.example.films.Service.AdminService;
import com.example.films.Service.UtlisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController/*Un composant qui joue le role d’un controleur dans une architecture MVC pour une application Web ou une API Web*/
@CrossOrigin("*") //
@RequestMapping("api/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;
    @Autowired
    private UtlisateurService utlisateurService;
    //fait
    @GetMapping(path= "/AllUtilisateur")//annotation utilisée pour lire un enregistrement.
    public List<Utilisateur> getAll(){
        List<Utilisateur> User = adminService.AllUtilisateur();
        return User;
    }
    @GetMapping(path= "/AllLangue")//annotation utilisée pour lire un enregistrement.
    public List<Langue> getAll1(){
        List<Langue> langues = adminService.AllLangue();
        return langues;
    }
    @GetMapping(path= "/AllGenre")//annotation utilisée pour lire un enregistrement.
    public List<Genre> getAll2(){
        List<Genre> genres = adminService.AllGenre();
        return genres;
    }
        @GetMapping(path= "/AllOffre")//annotation utilisée pour lire un enregistrement.
    public List<Offre> getAll3(){
        List<Offre> offres = adminService.AllOffre();
        return offres;
    }
    @GetMapping(path= "/AllFilm")//annotation utilisée pour lire un enregistrement.
    public List<Genre_film> getAll4(){
        List<Genre_film> fillms = adminService.AllFilm();
        return fillms;
    }
    @GetMapping(path= "/AllFilmGenre/{id}")//annotation utilisée pour lire un enregistrement.
    public List<Genre_film> getAll5(@PathVariable(value = "id") String id){
        List<Genre_film> fillms = adminService.Filmgenre(id);
        return fillms;
    }

    @GetMapping(path= "/Film/{id}")//annotation utilisée pour lire un enregistrement.
    public List<Genre_film> getAll6(@PathVariable(value = "id") String id){
        List<Genre_film> fillms = adminService.ChercherFilmG(id);
        return fillms;
    }

    @PutMapping(path="/ModifierUtilisateur")//annotation utilisée pour créer un nouvel enregistrement
    public String updateUser(@RequestBody UtilisateurDTO utilisateurDTO){
        String i = adminService.ModifierUtilisateur(utilisateurDTO);
        return i;
    }
    @PutMapping(path="/ModifierGenre")//annotation utilisée pour créer un nouvel enregistrement
    public String updateGenre(@RequestBody GenreDTO genreDTO){
        String i = adminService.ModifierGenre(genreDTO);
        return i;
    }
    @PutMapping(path="/ModifierLangue")//annotation utilisée pour créer un nouvel enregistrement
    public String updateLangue(@RequestBody LangueDTO langueDTO){
        String i = adminService.ModifierLangue(langueDTO);
        return i;
    }
    @PutMapping(path="/ModifierOffre")//annotation utilisée pour créer un nouvel enregistrement
    public String updateOffre(@RequestBody OffreDTO offreDTO){
        String i = adminService.ModifierOffre(offreDTO);
        return i;
    }

    @PutMapping(path="/ModifierFilm")//annotation utilisée pour créer un nouvel enregistrement
    public String updateFilm(@RequestBody FilmDTO filmDTO){
        String i = adminService.ModifierFilm(filmDTO);
        return i;
    }





    @PostMapping(path="/AjouterLangue")//annotation utilisée pour créer un nouvel enregistrement
    public String ajouterLangue(@RequestBody LangueDTO langueDTO){
        String i = adminService.AjouterLangue(langueDTO);
        return i;
    }
    @PostMapping(path="/AjouterGenre")//annotation utilisée pour créer un nouvel enregistrement
    public String ajouterGenre(@RequestBody GenreDTO genreDTO){
        String i = adminService.AjouterGenre(genreDTO);
        return i;
    }
    @PostMapping(path="/AjouterOffre")//annotation utilisée pour créer un nouvel enregistrement
    public String ajouterOffre(@RequestBody OffreDTO offreDTO){
        String i = adminService.AjouterOffre(offreDTO);
        return i;
    }
    //bien
    @PostMapping(path="/AjouterFilm")//annotation utilisée pour créer un nouvel enregistrement
    public String ajouterFilm(@RequestBody FilmDTO filmDTO){
        String i = adminService.AjouterFilm(filmDTO);
        return i;
    }


    @DeleteMapping(path="/SupprimerUtilisateur/{id}")//annotation permettant de supprimer l’enregistrement
    public String getsupp(@PathVariable(value = "id") int id)
    {
        String deleteuser = adminService.SupprimerUtilisateur(id);
        return deleteuser;
    }
    @DeleteMapping(path="/SupprimerLangue/{id}")//annotation permettant de supprimer l’enregistrement
    public String getsupp1(@PathVariable(value = "id") int id)
    {
        String deleteLangue = adminService.SupprimerLangue(id);
        return deleteLangue;
    }
    @DeleteMapping(path="/SupprimerGenre/{id}")//annotation permettant de supprimer l’enregistrement
    public String getsupp2(@PathVariable(value = "id") int id)
    {
        String deleteGenre = adminService.SupprimerGenre(id);
        return deleteGenre;
    }
    @DeleteMapping(path="/SupprimerOffre/{id}")//annotation permettant de supprimer l’enregistrement
    public String getsupp3(@PathVariable(value = "id") int id)
    {
        String deleteOffre = adminService.SupprimerOffre(id);
        return deleteOffre;
    }
    //bien
    @DeleteMapping(path="/SupprimerFilm/{id}")//annotation permettant de supprimer l’enregistrement
    public String getsupp4(@PathVariable(value = "id") int id)
    {
        String deleteFilm= adminService.SupprimerFilm(id);
        return deleteFilm;
    }

    @PostMapping(path= "/ChercherUtilisateur/{i}")//annotation utilisée pour lire un enregistrement.
    public List<Utilisateur> getUtili(@PathVariable(value = "i") String i){
        List<Utilisateur> User = adminService.ChercherUtilisateurEmailOrId(i);
        return User;
    }
    @PostMapping(path= "/ChercherLangue/{i}")//annotation utilisée pour lire un enregistrement.
    public List<Langue> getLan(@PathVariable(value = "i") String i){
        List<Langue> langues = adminService.ChercherLangue(i);
        return langues;
    }
    @PostMapping(path= "/ChercherGenre/{i}")//annotation utilisée pour lire un enregistrement.
    public List<Genre> getGen(@PathVariable(value = "i") String i){
        List<Genre> genres = adminService.ChercherGenre(i);
        return genres;
    }
    @PostMapping(path= "/ChercherOffre/{i}")//annotation utilisée pour lire un enregistrement.
    public List<Offre> getOff(@PathVariable(value = "i") String i){
        List<Offre> offres = adminService.ChercherOffre(i);
        return offres;
    }
    //bien
    @PostMapping(path= "/ChercherFilm/{i}")//annotation utilisée pour lire un enregistrement.
    public List<Genre_film> getFilm(@PathVariable(value = "i") String i){
        List<Genre_film> fillms = adminService.ChercherFilmG(i);
        return fillms;
    }

    @GetMapping(path= "/Statistiques")//annotation utilisée pour lire un enregistrement.
    public List<Integer> getAll6(){
        List<Integer> nombres = adminService.statistiques();
        return nombres;
    }



}
