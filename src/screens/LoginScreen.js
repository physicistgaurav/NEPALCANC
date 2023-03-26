import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider } from "@rneui/themed";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headertext1}>Nepal Can Code</Text>
        <Text style={styles.headertext2}>Login</Text>
      </View>
      <View style={styles.logincontainer}>
        <Text style={styles.textcontainerlogin}>Log in</Text>
        <Divider style={styles.divider}></Divider>
        <Text style={styles.loginlabel}>Email</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter your email"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <Text style={styles.loginlabel}>Password</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Enter your password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  header: {
    width: SCREEN_WIDTH,
    backgroundColor: "#003893",
    height: 100,
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  headertext1: {
    color: "white",
    margin: 5,
    fontSize: 20,
  },
  headertext2: {
    color: "white",
    margin: 10,
    fontSize: 20,
    paddingLeft: 150,
  },
  logincontainer: {
    backgroundColor: "#e9ecef",
    margin: 50,
    width: 320,
    height: 320,
    borderRadius: 4,
    paddingLeft: 10,
    paddingRight: 10,
  },
  textcontainerlogin: {
    color: "red",
    paddingLeft: 10,
    margin: 10,
    fontSize: 20,
  },
  divider: {
    margin: 5,
  },
  loginlabel: {
    margin: 15,
    fontSize: 16,
  },

  inputView: {
    backgroundColor: "white",
    borderRadius: 3,
    width: "90%",
    height: 45,
    // marginBottom: 20,
    marginLeft: 15,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    alignSelf: "baseline",
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
