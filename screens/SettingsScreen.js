import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONTS, SIZES, images } from "../constants";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const SettingsScreen = () => {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  const goToProfileScreen = () => {
    navigation.navigate("ProfileScreen"); // Redirection vers ProfileScreen
  };
  const goToEditProfileScreen = () => {
    navigation.navigate("EditProfile"); // Redirection vers EditProfileScreen
  };
  const goToAddProfileScreen = () => {
    navigation.navigate("AddProfile"); // Redirection vers AddProfileScreen
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, alignItems: "center" }}>
        {/* Logo */}
        <Image
          style={{ height: 50, width: 120, marginTop: 20 }}
          source={{
            uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
          }}
        />

        {/* Profile Image */}
        <Image
          source={images.profile}
          resizeMode="contain"
          style={{
            height: 155,
            width: 155,
            borderRadius: 999,
            borderColor: COLORS.primary,
            borderWidth: 2,
            marginTop: 60,
          }}
        />

        {/* User Information */}
        <Text
          style={{
            color: COLORS.primary,
            marginVertical: 8,
            fontSize: 22,
          }}
        >
          ILHAM MAARAF
        </Text>
        <Text style={{ color: COLORS.white }}>Création de compte</Text>

        <View style={{ flexDirection: "row", marginVertical: 6 }}>
          <MaterialIcons name="location-on" size={24} color="white" />
          <Text style={{ color: COLORS.white, marginLeft: 4 }}>
            Oujda, Maroc
          </Text>
        </View>
        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: 20,
            left: 160,
            top: 340,
            width: 124,
            height: 36,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.primary,
            borderRadius: 10,
          }}
          onPress={goToProfileScreen}
        >
          <Text style={{ color: COLORS.white }}>PROFILE</Text>
        </TouchableOpacity>

        {/* Buttons */}
        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <TouchableOpacity
            style={{
              width: 124,
              height: 36,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.primary,
              borderRadius: 10,
              marginHorizontal: SIZES.padding,
            }}
            onPress={goToEditProfileScreen} // Navigation vers EditProfileScreen
          >
            <Text style={{ color: COLORS.white }}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 124,
              height: 36,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.primary,
              borderRadius: 10,
              marginHorizontal: SIZES.padding,
            }}
            onPress={goToAddProfileScreen} // Navigation vers AddProfileScreen
          >
            <Text style={{ color: COLORS.white }}>Add Friend</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Button */}
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

export default SettingsScreen;
