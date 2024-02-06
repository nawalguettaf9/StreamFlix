package com.example.films.Entities;

import jakarta.persistence.*;
import org.antlr.v4.runtime.misc.NotNull;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
@Table(name = "Langue")
public class Langue {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id_langue;
    @NotNull
    @Column(name = "nom_langue" , length = 100)
    private String nom_langue;

    public Langue(String nom_langue) {
        this.nom_langue = nom_langue;
    }

    public Langue() {
    }

    public Integer getId_langue() {
        return id_langue;
    }

    public void setId_langue(Integer id_langue) {
        this.id_langue = id_langue;
    }

    public String getNom_langue() {
        return nom_langue;
    }

    public void setNom_langue(String nom_langue) {
        this.nom_langue = nom_langue;
    }
}
