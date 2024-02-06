package com.example.films.Repository;

import com.example.films.Entities.ERole;
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
public interface UtilisateurRepo extends JpaRepository<Utilisateur, Integer> {
    @Query("SELECT u FROM Utilisateur u WHERE u.email = ?1 AND u.mot_de_pass = ?2")
    Utilisateur getUserByLoginAndPasswd(String email, String mot_de_pass);
    @Query("SELECT u FROM Utilisateur u WHERE u.email = ?1 OR u.id_utilisateur = ?1")
    List<Utilisateur> getUserByEmailOrId(String n);
    @Query("SELECT u FROM Utilisateur u WHERE u.email = ?1")
    Utilisateur getUserByEmail(String email);
    @Query("SELECT u FROM Utilisateur u WHERE u.id_utilisateur = ?1 ")
    Utilisateur getUserById(Integer id);
    @Query("SELECT u FROM Utilisateur u WHERE u.nom = ?1 ")
    List<Utilisateur> getUserByNom(String email);
    @Query("SELECT u FROM Utilisateur u ")
    List<Utilisateur> getAll();
    @Transactional
    @Modifying
    @Query(value = "UPDATE utilisateur SET email = ?2, nom = ?3, prenom = ?4, date_naissance = ?5, mot_de_pass = ?6, roleE = ?7 WHERE id_utilisateur = ?1", nativeQuery = true)
    void updateUser(Integer id_utilisateur,String email, String nom, String prenom, Date date_naissance, String mot_de_pass, Integer roleE);
    @Transactional
    @Modifying
    @Query(value = "DELETE FROM utilisateur WHERE id_utilisateur = ?1", nativeQuery = true)
    void deleteUserById(Integer id);

    @Transactional()
    @Query(value = "SELECT COUNT(*) FROM utilisateur", nativeQuery = true)
    Integer Stat();

    @Transactional
    @Modifying
    @Query(value = "INSERT INTO utilisateur (email, nom, prenom,date_naissance,mot_de_pass,roleE) " +
            "VALUES (?1, ?2, ?3, ?4, ?5, ?6)", nativeQuery = true)
    void insertUser(String email, String nom, String prenom,Date date_naissance,String mot_de_pass,String roleE);

}
