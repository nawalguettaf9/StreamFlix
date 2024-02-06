import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CreditCard = ({ type, holder, cvc, number, expiryMonth }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardHeader}>
        <View style={styles.microship}>
          <MaterialCommunityIcons
            name="integrated-circuit-chip"
            size={50}
            color="#DAA520"
          />
        </View>
        <View style={styles.cardType}>
          <Image
            source={require("../assets/images/icons/mastercard.png")}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.cardCenter}>
        <View style={styles.cardNumberContainer}>
          <Text style={styles.cardNumber}>5444 4444 5555 5555</Text>
        </View>
      </View>
      <View style={styles.cardFooter}>
        <View style={styles.cardHolder}>
          <Text style={[styles.textMedium, styles.boldText]}>Ilham MAARAF</Text>
        </View>
        <View style={styles.cardExpiry}>
          <Text style={[styles.textMedium, styles.boldText]}>12/25</Text>
        </View>
      </View>
    </View>
  );
};

export default CreditCard;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    marginHorizontal: 20,
    height: 200,
    backgroundColor: "black",
    marginTop: 30,
    borderRadius: 20,
    alignSelf: "center",
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    borderColor: "#E50914",
    flex: 1,
  },
  microship: {
    padding: 10,
  },
  cardType: {},
  image: {
    width: 50,
    height: 50,
  },
  cardNumberContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardNumber: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  cardCenter: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    borderColor: "#E50914",
    width: "80%",
    top: 3,
    flex: 1,
  },
  cardFooter: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  cardHolder: {
    flex: 1,
  },
  textMedium: {
    color: "white",
    fontSize: 15,
    //fontFamily: "Lato-Bold",
    textTransform: "uppercase",
  },
  boldText: {
    fontWeight: "bold",
  },
  cardExpiry: {},
  textBold: {
    color: "white",
    fontSize: 13,
  },
});