package com.example.films.Repository;

import com.example.films.Entities.Fillm;
import com.example.films.Entities.langue_film;
import com.example.films.Entities.Langue;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface Langue_film_Repo extends JpaRepository<langue_film, Integer> {
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO Langue_film (id_film, id_langue) " +
            "VALUES (?1, ?2)", nativeQuery = true)
    void insertLangue_Film(Integer id_film, String id_langue);

    @Transactional
    @Modifying
    @Query(value = "UPDATE langue_film SET id_film = ?1, id_langue = ?2 WHERE id_film = ?1", nativeQuery = true)
    void updateLangueFilm(Integer idFilm, String idLangue);


    @Transactional
    @Modifying
    @Query(value = "DELETE FROM langue_film WHERE id_film = ?1", nativeQuery = true)
    void deleteLangueFilm(Integer id);
}
