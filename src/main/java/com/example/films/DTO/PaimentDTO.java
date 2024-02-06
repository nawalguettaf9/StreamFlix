package com.example.films.DTO;

import java.util.Date;

public class PaimentDTO {
    private Integer id_paiment;
    private Date date_expiration;
    private Integer code_carte;
    private Integer id_utilisateur;
    private Integer id_offre;

    public PaimentDTO(Date date_expiration,Integer code_carte, Integer id_utilisateur, Integer id_offre) {
        this.date_expiration = date_expiration;
        this.code_carte = code_carte;
        this.id_utilisateur = id_utilisateur;
        this.id_offre = id_offre;
    }

    public PaimentDTO() {
    }

    public Integer getCode_carte() {
        return code_carte;
    }

    public void setCode_carte(Integer code_carte) {
        this.code_carte = code_carte;
    }

    public Integer getId_offre() {
        return id_offre;
    }

    public void setId_offre(Integer id_offre) {
        this.id_offre = id_offre;
    }

    public Integer getId_paiment() {
        return id_paiment;
    }

    public void setId_paiment(Integer id_paiment) {
        this.id_paiment = id_paiment;
    }


    public Date getDate_expiration() {
        return date_expiration;
    }

    public void setDate_expiration(Date date_expiration) {
        this.date_expiration = date_expiration;
    }

    public Integer getId_utilisateur() {
        return id_utilisateur;
    }

    public void setId_utilisateur(Integer id_utilisateur) {
        this.id_utilisateur = id_utilisateur;
    }
}
