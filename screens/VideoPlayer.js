import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "../components/Header";
import { Video } from "expo-av";
import {
  Feather,
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Fontisto from "react-native-vector-icons/Fontisto";
import {
  useFonts,
  Montserrat_200ExtraLight,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import styled from "styled-components/native";
import Slider from "@react-native-community/slider"; // Make sure to install this package
// Styled components definitions
import { useNavigation } from '@react-navigation/native';
const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const HeaderIcons = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  margin: 10px;
  font-family: "Montserrat_700Bold";
`;

const MovieBadge = styled.Text`
  color: #a2a2a2;
  background-color: #373737;
  padding: 2px;
  border-radius: 5px;
  width: 38px;
  text-align: center;
  margin: 15px;
`;

const Subtitle = styled.Text`
  color: #a2a2a2;
  margin: 5px;
`;

const MovieSubDetails = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: -17px;
`;

const Play = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #fff;
  width: 95%;
  height: 32px;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const TextButtonPlay = styled.Text`
  font-size: 15px;
  font-weight: bold;
  padding-left: 5px;
`;

const Download = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #262626;
  width: 95%;
  height: 32px;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
`;

const TextButtonDownload = styled.Text`
  font-size: 15px;
  font-weight: 700;
  color: white;
  padding-left: 5px;
`;

const ActionButtons = styled.View`
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

const MovieDescription = styled.Text`
  color: white;
  width: 98%;
  margin-left: 10px;
  margin: 10px;
  font-weight: 100;
  font-family: "Montserrat_300Light";
  line-height: 20px;
  margin-top: 25px;
`;

const Tag = styled.Text`
  color: #fff;
  font-family: "Montserrat_400Regular";
`;

const TagDot = styled.View`
  margin: 10px;
  background-color: white;
  height: 2px;
  width: 2px;
`;

const Tags = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 10px 0 5px 3px;
  align-items: center;
  flex-wrap: wrap;
  width: 99%;
`;

const TagWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const ActionButtons2 = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 20px;
  align-items: center;
`;

const ActionButton = styled.TouchableOpacity`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
  margin-top: 20px;
`;

const ActionButtonLabel = styled.Text`
  color: white;
  font-family: "Montserrat_300Light";
  font-size: 15px;
`;

const VideoPlayer = ({ navigation, route }) => {
  const videoRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);
  const [playbackStatus, setPlaybackStatus] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Masque la barre de navigation
    });
  }, [navigation]);

  // When playback status updates
  const onPlaybackStatusUpdate = (status) => {
    setPlaybackStatus(status);
    if (status.isLoaded) {
      const value = status.positionMillis / status.durationMillis;
      setSliderValue(value);
    }
  };
  const toggleFullScreen = () => {
    if (videoRef.current) {
      videoRef.current.presentFullscreenPlayer();
      setIsFullScreen(true);
    }
  };
  const videoStyle = isFullScreen ? styles.fullScreenVideo : styles.normalVideo;
  const handleSlidingComplete = (value) => {
    if (videoRef.current && playbackStatus?.isLoaded) {
      const newPosition = value * playbackStatus.durationMillis;
      videoRef.current.setPositionAsync(newPosition);
    }
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        console.log("ID du film récupéré:", route.params.id);
        const response = await fetch(`http://192.168.43.162:8084/api/admin/Film/${route.params.id}`);
        const [firstMovie] = await response.json(); // Destructure the first movie from the array
  
        console.log("Réponse de l'API:", firstMovie);
        setMovie(firstMovie?.id_film); // Access the movie object directly
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
  
    if (route.params.id) {
      fetchMovieDetails();
    }
  }, [route.params.id]);
  
  
  

  let [fontsLoaded] = useFonts({
    Montserrat_200ExtraLight,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
  });

  // TODO: Implement any additional state or effects needed for your application
  const formatTime = (millis) => {
    const totalSeconds = millis / 1000;
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalSeconds / 60);

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return fontsLoaded && !loading ? (
    <Container>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Header login={true} goBack={navigation.goBack} />
      <Video
       source={{ uri: movie?.source }}
       isMuted={false}
       useNativeControls={false}
       shouldPlay={true}
       style={{ height: 225, marginTop: 15 }}
       resizeMode="contain"
       usePoster={true}
       posterSource={{ uri: movie?.banner }}
       onPlaybackStatusUpdate={(status) => setPlaybackStatus(status)}
       style={videoStyle}
       onPlaybackStatusUpdate={onPlaybackStatusUpdate}
        />

      {/* Full-screen button */}
      {!isFullScreen && (
        <TouchableOpacity
          style={styles.fullScreenButton}
          onPress={toggleFullScreen}
        >
          <MaterialCommunityIcons name="fullscreen" size={24} color="white" />
        </TouchableOpacity>
      )}
      {/* Progress bar */}
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          value={sliderValue}
          minimumTrackTintColor="red" // Green color for the track
          thumbTintColor="red" // Green color for the thumb
          disabled={!playbackStatus?.isLoaded} // Disable if the video is not loaded
          onSlidingComplete={(value) => {
            if (playbackStatus?.isLoaded) {
              const newPosition = value * playbackStatus.durationMillis;
              videoRef.current.setPositionAsync(newPosition);
            }
          }}
        />
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>
          {playbackStatus ? formatTime(playbackStatus.positionMillis) : "0:00"}
        </Text>
        <Text style={styles.timeText}>
          {playbackStatus ? formatTime(playbackStatus.durationMillis) : "0:00"}
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Fontisto name="netflix" size={22} color="red" />
        <Text style={{ fontSize: 15, color: "white", letterSpacing: 5 }}>
          MOVIES
        </Text>
      </View>
      <Title>{movie?.title}</Title>
      <MovieSubDetails>
        <MovieBadge>{movie?.age}</MovieBadge>
        <Subtitle>{movie?.year_of_release}</Subtitle>
      </MovieSubDetails>
      <ActionButtons>
        <Play activeOpacity={0.5}>
          <Ionicons name="ios-play" size={26} />
          <TextButtonPlay>Play</TextButtonPlay>
        </Play>
        <Download activeOpacity={0.5}>
          <Feather
            name="download"
            size={24}
            style={{ color: "white", margin: 4 }}
          />
          <TextButtonDownload>Download</TextButtonDownload>
        </Download>
      </ActionButtons>
      <MovieDescription>
      {movie?.description}
      </MovieDescription>
      <Tags>
  {Array.isArray(movie?.tags) && movie?.tags.map((tag, i) => (
    <TagWrapper key={i}>
      <Tag>{tag}</Tag>
      {i + 1 < movie?.tags.length && <TagDot />}
    </TagWrapper>
  ))}
</Tags>

      {/* Implement your custom action buttons logic here */}
      <ActionButtons2>
        <ActionButton>
          <Feather name="check" size={35} color="white" />
          <ActionButtonLabel
            activeOpacity={0.5}
            onPress={() => navigation.navigate("HomeScreen")}
          >
            My List
          </ActionButtonLabel>
        </ActionButton>

        <ActionButton activeOpacity={0.5}>
          <AntDesign
            name="like2"
            size={30}
            color="white"
            style={{ marginBottom: 7 }}
          />
          <ActionButtonLabel>Rate</ActionButtonLabel>
        </ActionButton>
      </ActionButtons2>
    </Container>
  ) : (
    <Container />
  );
};
const styles = StyleSheet.create({
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  timeText: {
    color: "white",
    fontSize: 18,
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  fullScreenContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  normalVideo: {
    alignSelf: "stretch",
    height: 225,
  },
  fullScreenVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  fullScreenButton: {
    position: "absolute",
    right: 10,
    top: 10,
    zIndex: 1000,
  },
  sliderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    alignItems: "center",
  },
  slider: {
    flex: 1,
  },
});

export default VideoPlayer;
