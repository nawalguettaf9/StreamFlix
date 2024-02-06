package com.example.films.Repository;

import com.example.films.Entities.Langue;
import com.example.films.Entities.Offre;
import com.example.films.Entities.Utilisateur;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@EnableJpaRepositories
@Repository
public interface LangueRepo extends JpaRepository<Langue, Integer> {
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO Langue (nom_langue) " +
            "VALUES (?1)", nativeQuery = true)
    void insertLangue(String nom_langue);

    @Query("SELECT u FROM Langue u ")
    List<Langue> getAll();

    @Query("SELECT u FROM Langue u WHERE u.id_langue = ?1 ")
    Langue getLangueById(Integer id);

    @Query("SELECT u FROM Langue u WHERE u.nom_langue = ?1 ")
    Langue getLangueByNom(String nom_langue);
    @Query("SELECT u FROM Langue u WHERE u.nom_langue = ?1  Or u.id_langue = ?1")
    List<Langue> getLangueByNomOrId(String n);
    @Transactional
    @Modifying
    @Query(value = "UPDATE langue SET nom_langue = ?2 WHERE id_langue = ?1", nativeQuery = true)
    void updateLangue(Integer id_langue, String nom_langue);
    @Transactional
    @Modifying
    @Query(value = "DELETE FROM langue WHERE id_langue= ?1", nativeQuery = true)
    void deleteLangueById(Integer id);

    @Transactional
    @Query(value = "SELECT COUNT(*) FROM langue", nativeQuery = true)
    Integer Stat3();
}
