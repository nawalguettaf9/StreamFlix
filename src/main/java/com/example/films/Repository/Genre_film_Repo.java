package com.example.films.Repository;

import com.example.films.Entities.Fillm;
import com.example.films.Entities.Genre_film;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface Genre_film_Repo extends JpaRepository<Genre_film, Integer> {
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO Genre_film (id_film, id_genre) " +
            "VALUES (?1, ?2)", nativeQuery = true)
    void insertGenre_Film(Integer id_film, String id_genre);

    @Transactional
    @Modifying
    @Query(value = "UPDATE Genre_film SET id_film = ?1, id_genre = ?2 WHERE id_film = ?1", nativeQuery = true)
    void updateGenreFilm(Integer idFilm, String idGenre);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM genre_film WHERE id_film = ?1", nativeQuery = true)
    void deleteGenreFilm(Integer id);

    @Transactional
    @Modifying
    @Query("SELECT u FROM Fillm u WHERE u.title = ?1  Or u.age= ?1 Or u.source = ?1  Or u.description= ?1 ")
    List<Genre_film> getfilmByOr(String n);

    @Transactional
    @Modifying
    @Query(value = "SELECT * FROM genre_film WHERE id_film= ?1", nativeQuery = true)
    List<Genre_film> FindGenreFilm(String id);

    @Transactional
    @Modifying
    @Query(value = "SELECT * FROM genre_film", nativeQuery = true)
    List<Genre_film> AlllFilm();
}
