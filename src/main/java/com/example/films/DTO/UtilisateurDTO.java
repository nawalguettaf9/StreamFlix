package com.example.films.DTO;

import com.example.films.Entities.ERole;
import jakarta.persistence.Column;
import lombok.Data;

import java.util.Date;

public class UtilisateurDTO {
    private  Integer id_utilisateur;
    private String email;
    private String nom;
    private String prenom;

    private Date date_naissance;

    private String mot_de_pass;
   // private String role;

    private  String roleE;

    public UtilisateurDTO( String email, String nom, String prenom, Date date_naissance, String mot_de_pass, String roleE) {
        //this.id_utilisateur = id_utilisateur;
        this.email = email;
        this.nom = nom;
        this.prenom = prenom;
        this.date_naissance = date_naissance;
        this.mot_de_pass = mot_de_pass;
       // this.role = role;
        this.roleE = roleE;
    }

    public UtilisateurDTO() {
    }

    public String getRoleE() {
        return roleE;
    }

    public void setRoleE(String roleE) {
        this.roleE = roleE;
    }

    public Integer getId_utilisateur() {
        return id_utilisateur;
    }

    public void setId_utilisateur(Integer id_utilisateur) {
        this.id_utilisateur = id_utilisateur;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public Date getDate_naissance() {
        return date_naissance;
    }

    public void setDate_naissance(Date date_naissance) {
        this.date_naissance = date_naissance;
    }

    public String getMot_de_pass() {
        return mot_de_pass;
    }

    public void setMot_de_pass(String mot_de_pass) {
        this.mot_de_pass = mot_de_pass;
    }




}
