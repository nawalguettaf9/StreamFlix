package com.example.films.DTO;

import com.example.films.Entities.Genre;
import com.example.films.Entities.Langue;
import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Id;
import org.antlr.v4.runtime.misc.NotNull;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.util.Date;
import java.util.List;

public class FilmDTO {
    private Integer id_film;

    private String uri;

    private String age;

    private String source;

    private String title;

    private String year_of_release;

    private String description;

    private String genre;
    private String langue;

    public FilmDTO(String uri, String age, String source, String title, String year_of_release, String description,String genre,String langue) {
        this.uri = uri;
        this.age = age;
        this.source = source;
        this.title = title;
        this.year_of_release = year_of_release;
        this.description = description;
        this.genre = genre;
        this.langue = langue;
    }

    public FilmDTO() {
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getLangue() {
        return langue;
    }

    public void setLangue(String langue) {
        this.langue = langue;
    }

    public Integer getId_film() {
        return id_film;
    }

    public void setId_film(Integer id_film) {
        this.id_film = id_film;
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getSource() {
        return source;
    }

    public void setSource(String source) {
        this.source = source;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getYear_of_release() {
        return year_of_release;
    }

    public void setYear_of_release(String year_of_release) {
        this.year_of_release = year_of_release;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
