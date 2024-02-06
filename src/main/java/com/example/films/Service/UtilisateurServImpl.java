package com.example.films.Service;

import com.example.films.DTO.PaimentDTO;
import com.example.films.DTO.ProfilsDTO;
import com.example.films.DTO.UtilisateurDTO;
import com.example.films.DTO.loginn;
import com.example.films.Entities.*;
import com.example.films.Repository.PaimentRepo;
import com.example.films.Repository.ProfilsRepo;
import com.example.films.Repository.UtilisateurRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UtilisateurServImpl implements UtlisateurService{

    @Autowired
    private UtilisateurRepo utilisateurRepo;
    @Autowired
    private PaimentRepo paimentRepo;
    @Autowired
    private ProfilsRepo profilsRepo;
    @Override
    public Utilisateur Login(loginn log) {
        if(utilisateurRepo.getUserByLoginAndPasswd(log.getEmail(), log.getMot_de_pass()) != null){
            return utilisateurRepo.getUserByLoginAndPasswd(log.getEmail(), log.getMot_de_pass());
        }
        else {
            return null;
        }
    }
    public String Inscrire(UtilisateurDTO u) {
        if(utilisateurRepo.getUserByEmail(u.getEmail())!= null){
            return "exite deja";
        }
        else {

            utilisateurRepo.insertUser(u.getEmail(),u.getNom(),u.getPrenom(),u.getDate_naissance(),u.getMot_de_pass(),u.getRoleE() );
            //hhRepoo.insertHh(u.getEmail(),u.getNom());

            return "fait";
        }
    }

    @Override
    public String Paiment(PaimentDTO u) {
        paimentRepo.insertPaiment(u.getDate_expiration(),u.getCode_carte(),u.getId_utilisateur(), u.getId_offre());
        //hhRepoo.insertHh(u.getEmail(),u.getNom());

        return "fait";
    }

    @Override
    public String AjouterProfil(ProfilsDTO profilsDTO) {
        if(profilsRepo.getProfilsByNom(profilsDTO.getNom_profils())!= null){
            return "exite deja";
        }
        else {

            profilsRepo.insertProfils(profilsDTO.getNom_profils(),profilsDTO.getImage(),profilsDTO.getId_utilisateur());


            return "fait";
        }
    }

    @Override
    public List<Profils> AllProfils() {
        List<Profils> profils = profilsRepo.getAll(); // Remplacez par la méthode réelle de récupération des utilisateurs.

        if (profils.isEmpty()) {
            // La liste des utilisateurs est vide, vous pouvez renvoyer null ou une liste vide, selon vos besoins.
            return null; // Ou vous pouvez renvoyer une liste vide en utilisant "return new ArrayList<>();" au lieu de "return null;".
        } else {
            // La liste des utilisateurs n'est pas vide, vous pouvez la renvoyer telle quelle.
            return profils;
        }
    }

    @Override
    public List<Profils> AllProfilsOne(Integer i) {
        Utilisateur profils = utilisateurRepo.getUserById(i);
        List<Profils> j = profilsRepo.getAllO(profils); // Remplacez par la méthode réelle de récupération des utilisateurs.

        if (j.isEmpty()) {
            // La liste des utilisateurs est vide, vous pouvez renvoyer null ou une liste vide, selon vos besoins.
            return null; // Ou vous pouvez renvoyer une liste vide en utilisant "return new ArrayList<>();" au lieu de "return null;".
        } else {
            // La liste des utilisateurs n'est pas vide, vous pouvez la renvoyer telle quelle.
            return j;
        }
    }

    @Override
    public String SupprimerProfil(Integer id) {
        Profils profils = profilsRepo.getProfilsById(id);
        if (profils != null) {
            profilsRepo.deleteProfilsById(id);
            return "profil supprimé avec succès";
        } else {
            return "profil introuvable";
        }
    }

    @Override
    public String ModifierProfil(ProfilsDTO profilsDTO) {
        Profils existingUser = profilsRepo.getProfilsById2(profilsDTO.getId_profils());
        Utilisateur k = utilisateurRepo.getUserById(profilsDTO.getId_utilisateur());

        if (existingUser != null) {
            // User with the specified ID exists, update their information
            existingUser.setId_utilisateur(k);
            existingUser.setNom_profils(profilsDTO.getNom_profils());

            // Assuming you have a method to update the user in your repository
            profilsRepo.updateProfils(existingUser.getId_profils(),existingUser.getImage(),existingUser.getNom_profils());

            return "profil mis à jour avec succès";
        } else {
            return "profil introuvable";
        }
    }
}
