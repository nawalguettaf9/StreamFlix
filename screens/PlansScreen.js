import { StyleSheet, Text, View, SafeAreaView, Pressable, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import plans from "../data/plans";
import { Entypo } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";


const PlansScreen = () => {
  const [selected, setSelected] = useState([]);
  const [price, setPrice] = useState(0); // Initialisez price à 0
  console.log(selected);
  console.log(price)
  const data = plans;
  const [offers, setOffers] = useState([]);
  const navigation = useNavigation();
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  
  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('http://192.168.43.162:8084/api/admin/AllOffre')
      .then(response => response.json())
      .then(data => setOffers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Masque la barre de navigation
    });
  }, [navigation]); 

  return (
    <>
      <ScrollView style={{ marginTop: 50 }}>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            Choose the plan that is right for you
          </Text>
<View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <Feather name="check" size={24} color="#E50914" />
          <Text style={{ marginLeft: 6, fontSize: 16, fontWeight: "600" }}>
            Watch all you want Ad free
          </Text>
        </View>

        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}
        >
          <Feather name="check" size={24} color="#E50914" />
          <Text style={{ marginLeft: 6, fontSize: 16, fontWeight: "600" }}>
            Recommendations just for you
          </Text>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Feather name="check" size={24} color="#E50914" />
          <Text
            style={{
              marginLeft: 6,
              fontSize: 16,
              fontWeight: "600",
              marginTop: 3,
            }}
          >
            Cancel your Plan anytime
          </Text>
        </View>
        <View style={{ marginTop: 20 }} />
        {offers.map((item, index) => (
         <Pressable
         onPress={() => {
          setSelected(item.description);
          setPrice(item.prix);
    }}
          style={
                selected.includes(item.description)
                  ? {
                      height: 170,
                      borderRadius: 7,
                      borderColor: "#E50914",
                      borderWidth: 2,
                      padding: 15,
                      margin: 10,
                    }
                  : {
                      height: 170,
                      borderRadius: 7,
                      borderColor: "#E50914",
                      borderWidth: 0.5,
                      padding: 15,
                      margin: 10,
                    }
              }
            key={index}
          >
           <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#E50914",
                    padding: 10,
                    width: 120,
                    borderRadius: 7,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 16,
                      fontWeight: "600",
                    }}
                  >
                    {item.description}
                  </Text>
                </View>

                <Text style={{ fontSize: 18, fontWeight: "600" }}>
                  Price: ₹{item.prix}
                </Text>
              </View>

              <View
                style={{
                  marginTop: 15,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{ color: "gray", fontSize: 15, fontWeight: "500" }}
                  >
                    video Quality : {item.qualite}
                  </Text>
                  <Text
                    style={{ fontSize: 16, fontWeight: "500", marginTop: 3 }}
                  >
                    Resolution : {item.resolution}
                  </Text>
                </View>
                <Fontisto
                  style={{ marginRight: 6 }}
                  name="netflix"
                  size={28}
                  color="black"
                />
              </View>

              <View
                style={{
                  marginTop: 10,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 16 }}>
                  Devices You can watch On :{" "}
                </Text>
                {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
                  {item.devices.map((device) => (
                    <Entypo
                      style={{ marginRight: 6 }}
                      name={device.name}
                      size={25}
                      color="#E50914"
                    />
                  ))}
                </View> */}
              </View>
          </Pressable>
        ))}
        </View>
      </ScrollView>
      {selected.length > 0 ? (
        <Pressable
        style={{
          backgroundColor: "#E50914",
          padding: 10,
          marginBottom: 15,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 55,
          paddingHorizontal: 20, // Ajoutez une marge horizontale
        }}
        onPress={() => {
            navigation.navigate("PaymentScreen"); // Naviguer vers l'écran "Payment"
          }}
      >
        <View>
          <Text style={{ color: "white", fontSize: 17, fontWeight: "600" }}>Selected Plan {selected}</Text>
        </View>
        <View>
        
          <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>PAY ₹{price}</Text>
        </View>
      </Pressable>

      ) :(
        null
      )}
      
    </>
  );
};

export default PlansScreen;

const styles = StyleSheet.create({});