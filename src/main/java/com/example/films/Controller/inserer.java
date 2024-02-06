package com.example.films.Controller;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class inserer {
    public static void main(String[] args) {
        try {
            // Charger le pilote JDBC
            Class.forName("com.mysql.cj.jdbc.Driver");

            // Établir la connexion à la base de données
            String jdbcUrl = "jdbc:mysql://localhost:3306/SW";
            String username = "root";
            String password = "admin123";
            Connection connection = DriverManager.getConnection(jdbcUrl, username, password);

            // Chemin vers le fichier JSON
            String jsonFilePath = "src/main/java/com/example/films/Controller/video.json";

            // Lire le fichier JSON
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode rootNode = objectMapper.readTree(new File(jsonFilePath));

            // Accéder au tableau "series" dans le JSON
            JsonNode seriesArray = rootNode.get("series");

            // Préparer la requête SQL d'insertion
            String insertQuery = "INSERT INTO film (uri, source, title, age, year_of_release, description) VALUES (?, ?, ?, ?, ?, ?)";
            PreparedStatement preparedStatement = connection.prepareStatement(insertQuery);

            // Parcourir le tableau et insérer chaque série dans la base de données
            for (JsonNode seriesNode : seriesArray) {
                preparedStatement.setString(1, seriesNode.get("uri").asText());
                preparedStatement.setString(2, seriesNode.get("source").asText());
                preparedStatement.setString(3, seriesNode.get("title").asText());
                preparedStatement.setString(4, seriesNode.get("age").asText());
                preparedStatement.setInt(5, seriesNode.get("yearOfRelease").asInt());
                preparedStatement.setString(6, seriesNode.get("description").asText());

                // Exécuter la requête pour chaque série
                preparedStatement.executeUpdate();
            }

            // Fermer les ressources
            preparedStatement.close();
            connection.close();

            System.out.println("Insertion réussie dans la table 'film'.");
        } catch (ClassNotFoundException | SQLException | IOException e) {
            e.printStackTrace();
        }
    }
}