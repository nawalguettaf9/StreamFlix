package com.example.films.Entities;
import jakarta.persistence.*;
import lombok.Data;
import org.antlr.v4.runtime.misc.NotNull;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "Film")
public class Fillm {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id_film;
    @NotNull
    @Column(name = "uri" , length = 100)
    private String uri;
    @NotNull
    @Column(name = "age" , length = 100)
    private String age;
    @NotNull
    @Column(name = "source" , length = 100)
    private String source;
    @NotNull
    @Column(name = "title" , length = 100)
    private String title;
    @NotNull
    @Column(name = "year_of_release" , length = 100)
    private String year_of_release;
    @NotNull
    @Column(name = "description" , length = 100)
    private String description;

    public Fillm(String uri, String age, String source, String title, String year_of_release, String description) {
        this.uri = uri;
        this.age = age;
        this.source = source;
        this.title = title;
        this.year_of_release = year_of_release;
        this.description = description;
    }

    public Fillm() {
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
