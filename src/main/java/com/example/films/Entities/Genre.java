package com.example.films.Entities;

import jakarta.persistence.*;
import lombok.Data;
import org.antlr.v4.runtime.misc.NotNull;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
@Table(name = "Genre")
public class Genre {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id_genre;
    @NotNull
    @Column(name = "nom_genre" , length = 100)
    private String nom_genre;

    public Genre(String nom_genre) {
        this.nom_genre = nom_genre;
    }

    public Genre() {
    }

    public Integer getId_genre() {
        return id_genre;
    }

    public void setId_genre(Integer id_genre) {
        this.id_genre = id_genre;
    }

    public String getNom_genre() {
        return nom_genre;
    }

    public void setNom_genre(String nom_genre) {
        this.nom_genre = nom_genre;
    }
}
