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
    <View style={styles.header}>
      <Text style={styles.headertext1}>Nepal Can</Text>
      <Text style={styles.headertext2}>Login</Text>
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
    margin: 10,
    fontSize: 20,
  },
  headertext2: {
    color: "white",
    margin: 10,
    fontSize: 20,
    paddingLeft: 150,
  },
});
