import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import CreditCard from "./CreditCard";
import { useNavigation } from "@react-navigation/native";
import { Input } from "react-native-elements";
import styled from "styled-components/native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { COLORS, FONTS } from "../constants";

const PaymentScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>PaymentScreen</Text>
      <CreditCard />
      <View style={styles.form}>
        <View style={styles.formItem}>
          <Text style={styles.formLabel}>Card Number</Text>
          <Input
            placeholderTextColor="grey"
            placeholder="5444 4444 5555 5555"
            inputContainerStyle={styles.formInput}
          />
        </View>
        <View style={styles.formItem}>
          <Text style={styles.formLabel}>Expiry Date</Text>
          <Input
            placeholderTextColor="grey"
            placeholder="12/25"
            inputContainerStyle={styles.formInput}
          />
        </View>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: "black",
          height: 50,
          width: 120,
          borderRadius: 6,
          alignItems: "center",
          justifyContent: "center",
          top: 30,
        }}
        onPress={() => alert("Payment passé avec succées!")}
      >
        <Text style={{ fontSize: 22, color: COLORS.white }}>Pay</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 70,
    color: "#000000",
  },
  form: {
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  formItem: {
    width: "100%",
    marginBottom: 20,
  },
  formLabel: {
    fontSize: 18,
    fontWeight: "bold",
    top: 32,
  },
  formInput: {
    width: "95%",
    height: 50,
    borderRadius: 10,
    backgroundColor: "#A9A9A9",
    color: "#000000",
    marginTop: 10,
    paddingHorizontal: 10,
    top: 40,
  },
  buttonContainer: {
    marginTop: 50,
  },
  button: {
    paddingVertical: 20,
    width: "91%",
  },
});

const ButtonText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  padding-left: 5px;
  color: white;
`;

const SubmitForm = styled.TouchableOpacity`
  width: 65%;
  height: 50px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  background-color: #000000;
`;