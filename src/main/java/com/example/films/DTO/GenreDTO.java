package com.example.films.DTO;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import org.antlr.v4.runtime.misc.NotNull;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

public class GenreDTO {
    private Integer id_genre;

    private String nom_genre;

    public GenreDTO(String nom_genre) {

        this.nom_genre = nom_genre;
    }

    public GenreDTO() {
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
