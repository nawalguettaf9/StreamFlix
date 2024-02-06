package com.example.films.Repository;
import com.example.films.Entities.Genre;
import com.example.films.Entities.Langue;
import com.example.films.Entities.Profils;
import com.example.films.Entities.Utilisateur;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;
@EnableJpaRepositories
@Repository
public interface ProfilsRepo extends JpaRepository<Profils, Integer>{
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO Profils (nom_profils,image,id_utilisateur) " +
            "VALUES (?1,?2)", nativeQuery = true)
    void insertProfils(String nom_profils,String image,Integer id_utilisateur);

    @Query("SELECT u FROM Profils u ")
    List<Profils> getAll();
    @Query("SELECT u FROM Profils u WHERE u.id_utilisateur=?1")
    List<Profils> getAllO(Utilisateur i);

    @Query("SELECT u FROM Profils u WHERE u.id_profils= ?1 ")
    Profils getProfilsById2(Integer id);
    @Query("SELECT u FROM Profils u WHERE u.id_profils= ?1 ")
    Profils getProfilsById(Integer id);
    @Query("SELECT u FROM Profils u WHERE u.nom_profils= ?1 ")
    Profils getProfilsByNom(String nom_profils);
    @Query("SELECT u FROM Profils u WHERE u.nom_profils= ?1 Or u.id_utilisateur= ?1 ")
    List<Profils> getProfilsByNomOrId(String n);
    @Transactional
    @Modifying
    @Query(value = "UPDATE Profils SET nom_profils = ?2 , image = ?3 WHERE id_profils = ?1", nativeQuery = true)
    void updateProfils(Integer id_profils,String image, String nom_profils);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM Profils WHERE id_profils= ?1", nativeQuery = true)
    void deleteProfilsById(Integer id);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM Profils WHERE id_utilisateur= ?1", nativeQuery = true)
    void deleteProfilsByIdd(Integer id);
}