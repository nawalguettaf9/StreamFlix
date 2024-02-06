package com.example.films.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import org.antlr.v4.runtime.misc.NotNull;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.util.Date;

@Entity
@Table(name = "Utilisateur")
public class Utilisateur {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id_utilisateur;
    @NotNull
    @Column(name = "email" , length = 100)
    private String email;
    @NotNull
    @Column(name = "nom" , length = 100)
    private String nom;
    @NotNull
    @Column(name = "prenom" , length = 100)
    private String prenom;
    @NotNull
    @Column(name = "date_naissance" , length = 100)
    private Date date_naissance;
    @NotNull
    @Column(name = "mot_de_pass" , length = 100)
    private String mot_de_pass;
    @Enumerated(EnumType.STRING)
    private ERole roleE;
    //@NotNull
    //@Column(name = "role" , length = 100)
    //private String role;
    public Utilisateur(String email, String nom, String prenom, Date date_naissance, String mot_de_pass,ERole roleE) {
        this.email = email;
        this.nom = nom;
        this.prenom = prenom;
        this.date_naissance = date_naissance;
        this.mot_de_pass = mot_de_pass;
        //this.role = role;
        this.roleE = roleE;
    }

    public Utilisateur() {
    }

    public ERole getRoleE() {
        return roleE;
    }

    public void setRoleE(ERole roleE) {
        this.roleE = roleE;
    }

    public Utilisateur(Integer id_utilisateur) {
        this.id_utilisateur = id_utilisateur;
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








