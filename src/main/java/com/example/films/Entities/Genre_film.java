package com.example.films.Entities;
import jakarta.persistence.*;
import lombok.Data;
import org.antlr.v4.runtime.misc.NotNull;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
@Entity
@Table(name = "Genre_film")
public class Genre_film {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id_genre_film;

    @ManyToOne
    @JoinColumn(name = "id_film") // Spécifiez ici le nom de la colonne de clé étrangère
    private Fillm id_film;
    @ManyToOne
    @JoinColumn(name = "id_genre") // Spécifiez ici le nom de la colonne de clé étrangère
    private Genre id_genre;

    public Genre_film(Fillm id_film, Genre id_genre) {
        this.id_film = id_film;
        this.id_genre = id_genre;
    }

    public Genre_film() {
    }

    public Integer getId_genre_film() {
        return id_genre_film;
    }

    public void setId_genre_film(Integer id_genre_film) {
        this.id_genre_film = id_genre_film;
    }

    public Fillm getId_film() {
        return id_film;
    }

    public void setId_film(Fillm id_film) {
        this.id_film = id_film;
    }

    public Genre getId_genre() {
        return id_genre;
    }

    public void setId_genre(Genre id_genre) {
        this.id_genre = id_genre;
    }
}
