package com.example.films.Entities;
import jakarta.persistence.*;
import lombok.Data;
import org.antlr.v4.runtime.misc.NotNull;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.util.Date;

@Entity
@Table(name = "Paiment")
public class Paiment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id_paiment;

    @NotNull
    @Column(name = "date_expiration" , length = 100)
    private Date date_expiration;
    @NotNull
    @Column(name = "code_carte" , length = 100)
    private Integer code_carte;


    @ManyToOne
    @JoinColumn(name = "id_offre") // Spécifiez ici le nom de la colonne de clé étrangère
    private Offre id_offre;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "id_utilisateur") // Spécifiez ici le nom de la colonne de clé étrangère
    private Utilisateur id_utilisateur;


    public Paiment(Date date_expiration,Integer code_carte, Utilisateur id_utilisateur, Offre id_offre) {
        this.date_expiration = date_expiration;
        this.code_carte = code_carte;
        this.id_utilisateur = id_utilisateur;
        this.id_offre = id_offre;
    }

    public Paiment() {
    }

    public Integer getCode_carte() {
        return code_carte;
    }

    public void setCode_carte(Integer code_carte) {
        this.code_carte = code_carte;
    }

    public Integer getId_paiment() {
        return id_paiment;
    }

    public Date getDate_expiration() {
        return date_expiration;
    }

    public void setDate_expiration(Date date_expiration) {
        this.date_expiration = date_expiration;
    }

    public void setId_paiment(Integer id_paiment) {
        this.id_paiment = id_paiment;
    }


    public Utilisateur getId_utilisateur() {
        return id_utilisateur;
    }

    public void setId_utilisateur(Utilisateur id_utilisateur) {
        this.id_utilisateur = id_utilisateur;
    }

    public Offre getId_offre() {
        return id_offre;
    }

    public void setId_offre(Offre id_offre) {
        this.id_offre = id_offre;
    }
}