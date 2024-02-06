package com.example.films.Repository;

import com.example.films.Entities.Genre;
import com.example.films.Entities.Langue;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface GenreRepo extends JpaRepository<Genre, Integer> {
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO Genre (nom_genre) " +
            "VALUES (?1)", nativeQuery = true)
    void insertGenre(String nom_genre);

    @Query("SELECT u FROM Genre u ")
    List<Genre> getAll();


    @Query("SELECT u FROM Genre u WHERE u.id_genre= ?1 ")
    Genre getGenreById(Integer id);
    @Query("SELECT u FROM Genre u WHERE u.nom_genre= ?1 ")
    Genre getGenreByNom(String nom_genre);
    @Query("SELECT u FROM Genre u WHERE u.nom_genre= ?1 Or u.id_genre= ?1 ")
    List<Genre> getGenreByNomOrId(String n);
    @Transactional
    @Modifying
    @Query(value = "UPDATE genre SET nom_genre = ?2 WHERE id_genre = ?1", nativeQuery = true)
    void updateGenre(Integer id_genre, String nom_genre);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM genre WHERE id_genre= ?1", nativeQuery = true)
    void deleteGenreById(Integer id);

    @Transactional
    @Query(value = "SELECT COUNT(*) FROM genre", nativeQuery = true)
    Integer Stat2();
}
