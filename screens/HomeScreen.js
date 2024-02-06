import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  ScrollView,
  Dimensions,
  StatusBar,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HeaderTabs from "../components/HeaderTabs";
import TrendingComponent from "../components/TrendingComponent";
import { AntDesign, MaterialIcons, Entypo } from "@expo/vector-icons";

// Clé API de TMDb
const API_KEY = "b93a64480573ce5248c28b200d79d029";
const HomeScreen = () => {
  const navigation = useNavigation();
  const [movie, setMovie] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  useEffect(() => {
    const movieData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
        );
        const data = await response.json();
        setMovie(data.results[Math.floor(Math.random() * data.results.length)]);
      } catch (error) {
        console.error("Error fetching movie data: ", error);
      }
    };
    movieData();
  }, []);

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <ImageBackground
          style={styles.imageBackground}
          source={{
            uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`,
          }}
        >
          <LinearGradient
            colors={[
              "rgba(0,0,0,0.0)",
              "rgba(0,0,0,0.3)",
              "rgba(0,0,0,0.6)",
              "rgba(0,0,0,1)",
            ]}
            style={styles.gradient}
          >
            <Header login={true} navigation={navigation} />
            <HeaderTabs />
            <Hero user={null} />
          </LinearGradient>
        </ImageBackground>
        <TrendingComponent />
        {/* Other components can be added here if needed */}
      </ScrollView>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
          <View style={styles.navbarItem}>
            <AntDesign name="home" size={30} color="#5B5B5B" />
            <Text style={styles.navbarText}>Home</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navbarItem}
          onPress={() => navigation.navigate("ProfileScreen")}
        >
          <MaterialIcons name="person" size={30} color="#5B5B5B" />
          <Text style={styles.navbarText}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <View style={styles.navbarItem}>
            <Entypo name="cog" size={30} color="#5B5B5B" />
            <Text style={styles.navbarText}>Settings</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#000",
  },
  imageBackground: {
    width: "100%",
    height: Dimensions.get("window").height * 0.8, // Adjust this value as needed to fit your content
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: Dimensions.get("window").height * 0.8,
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#000",
    /*backgroundColor: "#1a1a1a",*/
    height: 80,
    // marginTop removed to eliminate white space
  },
  navbarItem: {
    alignItems: "center",
  },
  navbarText: {
    color: "#5B5B5B",
    fontSize: 14,
    marginTop: 5,
  },
  settingsIcon: {
    alignItems: "center",
  },
});

export default HomeScreen;
