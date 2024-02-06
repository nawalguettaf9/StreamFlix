package com.example.films.Repository;

import com.example.films.Entities.Offre;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface OffreRepo extends JpaRepository<Offre, Integer> {
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO Offre (description, resolution,prix, qualite, type) " +
            "VALUES (?1, ?2, ?3, ?4, ?5)", nativeQuery = true)
    void insertOffre(String description, String resolution,Integer prix, String qualite, String type);
    @Transactional
    @Modifying
    @Query(value = "UPDATE Offre SET description = ?2, resolution = ?3, prix = ?4, qualite = ?5, type = ?6 WHERE id_offre = ?1", nativeQuery = true)
    void updateOffre(Integer id_offre, String description, String resolusion, Integer prix, String qualite, String type);
    @Transactional
    @Modifying
    @Query(value = "DELETE FROM Offre WHERE id_offre = ?1", nativeQuery = true)
    void deleteOffre(Integer id_offre);

    @Query("SELECT u FROM Offre u ")
    List<Offre> getAllOffre();

    @Query("SELECT u FROM Offre u WHERE u.type = ?1 ")
    Offre getOffreByType(String type);

    @Query("SELECT u FROM Offre u WHERE u.type = ?1 Or u.id_offre = ?1 Or u.description = ?1 Or u.qualite = ?1 Or u.prix = ?1 Or u.resolution = ?1  ")
    List<Offre> getOffre(String t);
    @Query("SELECT u FROM Offre u WHERE u.id_offre = ?1 ")
    Offre getOffreById(Integer id);
}
