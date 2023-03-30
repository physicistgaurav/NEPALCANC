import React, { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from "react-native";
import { Divider } from "@rneui/themed";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/FontAwesome";

import { authentication } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAuth } from "../contexts/AuthContext";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = React.useState(null);

  const [isLoading, setIsLoading] = useState(false);

  const { setLoggedInUser } = useAuth();
  const inputRef = React.useRef();
  const passwordRef = React.useRef();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((res) => {
        console.log(res.user);
        setLoggedInUser(res.user);
      })
      .catch((re) => {
        console.log(re);
      });
  };

  const handleSignIn = async () => {
    setIsLoading(true);

    signInWithEmailAndPassword(authentication, email, password)
      .then((res) => {
        console.log("successful");
        navigation.navigate("Home");
        setLoggedInUser(res.user);
      })

      .catch((err) => {
        console.log(err);
        setError("Incorrect Email/Password");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headertext1}>Nepal Can Code</Text>
        <FontAwesome.Button
          name="bars"
          backgroundColor="transparent"
          style={styles.headertext2}
        ></FontAwesome.Button>
      </View>
      <View style={styles.logincontainer}>
        <Text style={styles.textcontainerlogin}>Log in</Text>
        <Divider style={styles.divider}></Divider>
        <Text style={styles.loginlabel}>Email</Text>
        <TouchableOpacity
          onPress={() => inputRef.current.focus()}
          style={styles.inputView}
        >
          <TextInput
            ref={inputRef}
            style={styles.TextInput}
            placeholder="Enter your email"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
          />
        </TouchableOpacity>

        <Text style={styles.loginlabel}>Password</Text>
        <TouchableOpacity
          onPress={() => passwordRef.current.focus()}
          style={styles.inputView}
        >
          <TextInput
            ref={passwordRef}
            style={styles.TextInput}
            placeholder="Enter your password"
            placeholderTextColor="#003f5c"
            secureTextEntry={!showPassword}
            onChangeText={(password) => setPassword(password)}
          />
          <TouchableOpacity
            style={{ position: "absolute", right: 15, top: 10 }}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Icon
              name={showPassword ? "eye-slash" : "eye"}
              size={20}
              color="#777"
            />
          </TouchableOpacity>
        </TouchableOpacity>

        {error && <Text style={styles.errorText}>{error}</Text>}

        {/* {isLoading ? (
          <ActivityIndicator size="large" color="black" />
        ) : (
          <View flexDirection="row">
            <TouchableOpacity onPress={handleSignIn} style={styles.button}>
              <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignUp} style={styles.button}>
              <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        )} */}

        <View flexDirection="row">
          <TouchableOpacity onPress={handleSignIn} style={styles.button}>
            {isLoading ? (
              <ActivityIndicator size="small" color="black" />
            ) : (
              <Text style={styles.buttonText}>Log in</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={handleSignUp} style={styles.button}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
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
    height: 340,
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
  errorText: {
    fontSize: 14,
    color: "red",
    marginTop: 10,
    paddingLeft: 15,
  },
});
