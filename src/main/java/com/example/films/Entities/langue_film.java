package com.example.films.Entities;
import jakarta.persistence.*;
import lombok.Data;
import org.antlr.v4.runtime.misc.NotNull;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.util.Date;
@Entity
@Table(name = "langue_film")
public class langue_film {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id_langue_film;

    @ManyToOne
    @JoinColumn(name = "id_film") // Spécifiez ici le nom de la colonne de clé étrangère
    private Fillm id_film;
    @ManyToOne
    @JoinColumn(name = "id_langue") // Spécifiez ici le nom de la colonne de clé étrangère
    private Langue id_langue;

    public langue_film(Fillm id_film, Langue id_langue) {
        this.id_film = id_film;
        this.id_langue = id_langue;
    }

    public langue_film() {
    }

    public Integer getId_langue_film() {
        return id_langue_film;
    }

    public void setId_langue_film(Integer id_langue_film) {
        this.id_langue_film = id_langue_film;
    }

    public Fillm getId_film() {
        return id_film;
    }

    public void setId_film(Fillm id_film) {
        this.id_film = id_film;
    }

    public Langue getId_langue() {
        return id_langue;
    }

    public void setId_langue(Langue id_langue) {
        this.id_langue = id_langue;
    }
}
