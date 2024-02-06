package com.example.films.DTO;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import org.antlr.v4.runtime.misc.NotNull;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

public class LangueDTO {

    private Integer id_langue;

    private String nom_langue;

    public LangueDTO(String nom_langue) {
        this.nom_langue = nom_langue;
    }

    public LangueDTO() {
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
