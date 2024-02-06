package com.example.films.Controller;

import com.example.films.DTO.PaimentDTO;
import com.example.films.DTO.ProfilsDTO;
import com.example.films.DTO.UtilisateurDTO;
import com.example.films.DTO.loginn;
import com.example.films.Entities.Profils;
import com.example.films.Entities.Utilisateur;
import com.example.films.Service.UtlisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController/*Un composant qui joue le role d’un controleur dans une architecture MVC pour une application Web ou une API Web*/
@CrossOrigin("*") //
@RequestMapping("api/utilisateur")
public class UtilisateurController {
    @Autowired
    private UtlisateurService utlisateurService;

    @PostMapping(path= "/Login")//annotation utilisée pour lire un enregistrement.
    public Utilisateur getLogin(@RequestBody loginn login){
        Utilisateur User = utlisateurService.Login(login);
        return User;
    }
    @PostMapping(path= "/Inscrire")//annotation utilisée pour lire un enregistrement.
    public String getInscrire(@RequestBody UtilisateurDTO utilisateurDTO){
        String s = utlisateurService.Inscrire(utilisateurDTO);
        return s;
    }
    @PostMapping(path= "/Paiment")//annotation utilisée pour lire un enregistrement.
    public String getPaiment(@RequestBody PaimentDTO paimentDTO){
        String a = utlisateurService.Paiment(paimentDTO);
        return a;
    }
    @GetMapping(path= "/AllProfils")//annotation utilisée pour lire un enregistrement.
    public List<Profils> getAll(){
        List<Profils> profils = utlisateurService.AllProfils();
        return profils;
    }
    @GetMapping(path= "/AllProfilsOne/{id}")//annotation utilisée pour lire un enregistrement.
    public List<Profils> getAllO(@PathVariable(value = "id") int id){
        List<Profils> profils = utlisateurService.AllProfilsOne(id);
        return profils;
    }
    @PostMapping(path= "/AjouterProfils")//annotation utilisée pour lire un enregistrement.
    public String getProfil(@RequestBody ProfilsDTO profilsDTO){
        String a = utlisateurService.AjouterProfil(profilsDTO);
        return a;
    }
    @PutMapping(path= "/ModifierProfils")//annotation utilisée pour lire un enregistrement.
    public String modProfil(@RequestBody ProfilsDTO profilsDTO){
        String a = utlisateurService.ModifierProfil(profilsDTO);
        return a;
    }
    @DeleteMapping(path="/SupprimerProfils/{id}")//annotation permettant de supprimer l’enregistrement
    public String get4supp(@PathVariable(value = "id") int id)
    {
        String deleteprof = utlisateurService.SupprimerProfil(id);
        return deleteprof;
    }
}
