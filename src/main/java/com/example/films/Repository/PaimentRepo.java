package com.example.films.Repository;

import com.example.films.Entities.Paiment;
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
public interface PaimentRepo extends JpaRepository<Paiment, Integer> {
    @Query("SELECT u FROM Paiment u ")
    List<Paiment> getAllPaim();

    @Query("SELECT u FROM Paiment u WHERE u.id_offre = ?1 OR u.code_carte = ?1 OR u.date_expiration = ?1 OR u.id_paiment = ?1")
    List<Paiment> getPaimentByOR (String n);
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO Paiment (date_expiration,code_carte, id_utilisateur, id_offre) " +
            "VALUES (?1, ?2, ?3, ?4)", nativeQuery = true)
    void insertPaiment(Date DATE,Integer code_carte, Integer id_utilisateur, Integer id_offre);
    @Transactional
    @Modifying
    @Query(value = "DELETE FROM Paiment WHERE id_utilisateur = ?1", nativeQuery = true)
    void deletePaimentById(Integer id);
}