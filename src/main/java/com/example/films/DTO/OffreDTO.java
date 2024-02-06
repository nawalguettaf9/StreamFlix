package com.example.films.DTO;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import org.antlr.v4.runtime.misc.NotNull;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

public class OffreDTO {

    private Integer id_offre;
    private String description;

    private String resolution;

    private Integer prix;

    private String qualite;

    private String type;

    public OffreDTO(String description, String resolution, Integer prix, String qualite, String type) {
        this.description = description;
        this.resolution = resolution;
        this.prix = prix;
        this.qualite = qualite;
        this.type = type;
    }

    public OffreDTO() {
    }

    public Integer getId_offre() {
        return id_offre;
    }

    public void setId_offre(Integer id_offre) {
        this.id_offre = id_offre;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getResolution() {
        return resolution;
    }

    public void setResolution(String resolution) {
        this.resolution = resolution;
    }

    public Integer getPrix() {
        return prix;
    }

    public void setPrix(Integer prix) {
        this.prix = prix;
    }

    public String getQualite() {
        return qualite;
    }

    public void setQualite(String qualite) {
        this.qualite = qualite;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }
}
