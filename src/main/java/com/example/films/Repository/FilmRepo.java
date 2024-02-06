package com.example.films.Repository;

import com.example.films.Entities.Fillm;
import com.example.films.Entities.Langue;
import com.example.films.Entities.Offre;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Date;
import java.util.List;

@EnableJpaRepositories
@Repository
public interface FilmRepo extends JpaRepository<Fillm, Integer> {
    @Transactional
    @Modifying
    @Query(value = "INSERT INTO Film (uri ,source, title,age,year_of_release,description) " +
            "VALUES (?1,?2,?3,?4,?5,?6)", nativeQuery = true)
    void insertFilm(String uri , String source, String title, String age, String year_of_release, String description);

    @Query("SELECT u FROM Fillm u ")
    List<Fillm> getAll();

    @Query("SELECT u FROM Fillm u WHERE u.title = ?1  Or u.year_of_release = ?1 Or u.source = ?1  ")
    Fillm getFilm(String n);
    @Transactional
    @Modifying
    @Query(value = "UPDATE Film SET uri = ?2, source = ?3, title = ?4, age = ?5, year_of_release = ?6, description = ?7 WHERE id_film = ?1",
            nativeQuery = true)
    void updateFilm(Integer id, String uri , String source, String title, String age, String year_of_release, String description);


    @Transactional
    @Modifying
    @Query(value = "DELETE FROM Film WHERE id_film= ?1", nativeQuery = true)
    void deleteFilm(Integer id);
    @Transactional
    @Modifying
    @Query("SELECT u.id_film FROM Fillm u WHERE u.id_film = ?1 ")
    Integer getFilmById(Integer id);
    @Transactional
    @Modifying
    @Query("SELECT u FROM Fillm u WHERE u.id_film = ?1 ")
    List<Fillm> getFilmById2(Integer id);
    @Transactional
    @Modifying
    @Query("SELECT u FROM Fillm u WHERE u.title = ?1 ")
    List<Fillm> getFilmById3(String nom);
    @Transactional
    @Modifying
    @Query("SELECT u FROM Fillm u WHERE u.title= ?1  Or u.age = ?1  Or u.source= ?1 ")
    List<Fillm> getfilmByOr(String n);

    @Transactional
    @Query(value = "SELECT COUNT(*) FROM Film", nativeQuery = true)
    Integer Stat1();


    @Transactional
    @Query(value = "SELECT * FROM Film LIMIT 10", nativeQuery = true)
    List<Fillm> getFirst10Films();

}
