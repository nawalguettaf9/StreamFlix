package com.example.films.Entities;
import jakarta.persistence.*;
import lombok.Data;
import org.antlr.v4.runtime.misc.NotNull;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
@Entity
@Table(name = "Profils")
public class Profils {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id_profils;
    @NotNull
    @Column(name = "nom_profils" , length = 100)
    private String nom_profils;
    @NotNull
    @Column(name = "image" , length = 100)
    private String image;
    @NotNull
    @ManyToOne
    @JoinColumn(name = "id_utilisateur") // Spécifiez ici le nom de la colonne de clé étrangère
    private Utilisateur id_utilisateur;


    public Profils(String nom_profils, String image, Utilisateur id_utilisateur) {
        this.nom_profils = nom_profils;
        this.image = image;
        this.id_utilisateur = id_utilisateur;
    }

    public Profils() {
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

    public Utilisateur getId_utilisateur() {
        return id_utilisateur;
    }

    public void setId_utilisateur(Utilisateur id_utilisateur) {
        this.id_utilisateur = id_utilisateur;
    }
}
