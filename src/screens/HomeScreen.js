import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

import { authentication } from "../../firebase";
import { signOut } from "firebase/auth";
import { Button } from "react-native-elements";

const HomeScreen = ({ navigation }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const SignOutUser = () => {
    signOut(authentication)
      .then((re) => {
        setIsSignedIn(false);
        navigation.navigate("Login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.main}>
      <Text>HomeScreen</Text>
      <TouchableOpacity onPress={SignOutUser} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    margin: 30,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#057dfe",
    padding: 10,
    borderRadius: 4,
    width: "30%",
    marginTop: 15,
    marginLeft: 15,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});
