package com.example.films.Entities;
import jakarta.persistence.*;
import lombok.Data;
import org.antlr.v4.runtime.misc.NotNull;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.util.Date;
@Entity
@Table(name = "Offre")
public class Offre {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id_offre;
    @NotNull
    @Column(name = "description" , length = 100)
    private String description;
    @NotNull
    @Column(name = "resolution" , length = 100)
    private String resolution;
    @NotNull
    @Column(name = "prix" , length = 100)
    private Integer prix;
    @NotNull
    @Column(name = "qualite" , length = 100)
    private String qualite;
    @NotNull
    @Column(name = "type" , length = 100)
    private String type;

    public Offre(String description, String resolution, Integer prix, String qualite, String type) {
        this.description = description;
        this.resolution = resolution;
        this.prix = prix;
        this.qualite = qualite;
        this.type = type;
    }

    public Offre() {
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

    public void setResolution(String resolusion) {
        this.resolution = resolusion;
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
