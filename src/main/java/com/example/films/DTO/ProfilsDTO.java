package com.example.films.DTO;

import com.example.films.Entities.Utilisateur;

public class ProfilsDTO {
    private Integer id_profils;
    private String nom_profils;
    private String image;
    private Integer id_utilisateur;


    public ProfilsDTO() {
    }

    public ProfilsDTO(String nom_profils, String image, Integer id_utilisateur) {
        this.nom_profils = nom_profils;
        this.image = image;
        this.id_utilisateur = id_utilisateur;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Integer getId_profils() {
        return id_profils;
    }

    public void setId_profils(Integer id_profils) {
        this.id_profils = id_profils;
    }

    public String getNom_profils() {
        return nom_profils;
    }

    public void setNom_profils(String nom_profils) {
        this.nom_profils = nom_profils;
    }

    public Integer getId_utilisateur() {
        return id_utilisateur;
    }

    public void setId_utilisateur(Integer id_utilisateur) {
        this.id_utilisateur = id_utilisateur;
    }
}
