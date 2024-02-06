import { Pressable, StyleSheet, Text, View,Image, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';


const ProfileScreen = () => {
  const navigation = useNavigation();
  const profiles = [
    {
      id: "0",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd5_C49-HkFimzHQHqQwMLnCq4fHr1pgLtvw&usqp=CAU",
      name: "Mina",
    },
    {
      id: "1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOQfOPr1m7jryKxiCFP4IShrr88EWnR2mZJQ&usqp=CAU",
      name: "Nawal",
    },
    {
      id: "2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU",
      name: "Ilham",
    },
    {
      id: "3",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yQFL1YOsN3esm6p1jB1HT-Q6qKtxtZqh9LGwMDIgDCy-p54eMf8jdGSN6yZUeySqseA&usqp=CAU",
      name: "Mayssa",
    },
  ];

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Masque la barre de navigation
    });
  }, [navigation]);
  const handleSignOut = () => {
  
    navigation.navigate("LoginScreen");
  };
  const handleProfileSelect = () => {
     navigation.navigate("HomeScreen");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <Pressable
        style={{ flexDirection: "row", alignItems: "center" }}
        onPress={handleSignOut}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "500",
            marginLeft: 6,
          }}
        >
          Profiles and more
        </Text>
      </Pressable>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          style={{ height: 50, width: 120, marginTop: 20 }}
          source={{
            uri: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png",
          }}
        />
      </View>
      <View style={{ marginTop: 50, alignItems: "center" }}>
        <Text style={{ color: "gray", fontSize: 16, fontWeight: "600" }}>
          Who's Watching ?
        </Text>
        <FlatList
          numColumns={2}
          data={profiles}
          renderItem={({ item }) => (
            <Pressable onPress={handleProfileSelect} style={{ marginHorizontal: 10, padding: 20, marginTop: 10 }}>
              <Image
                style={{ width: 110, height: 110, borderRadius: 7, resizeMode: "contain" }}
                source={{ uri: item.image }}
              />
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 15, fontWeight: "500", marginTop: 10 }}
              >
                {item.name}
              </Text>
            </Pressable>
          )}
        />
      </View>
      <Pressable onPress={handleSignOut}>
        <Text style={{ fontSize: 18, textAlign: "center", color: "gray", marginTop: 15 }}>Sign Out</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ProfileScreen;

