import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

import { authentication } from "../../firebase";
import { signOut } from "firebase/auth";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Header, Icon, Card, Divider } from "react-native-elements";
import { useAuth } from "../contexts/AuthContext";

const SCREEN_WIDTH = Dimensions.get("window").width;

const HomeScreen = ({ navigation }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const { loggedInUser, setLoggedInUser } = useAuth();

  console.log(loggedInUser);

  const signOutUser = () => {
    signOut(authentication)
      .then((res) => {
        console.log(res);
        setLoggedInUser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const homeData = [
    {
      name: "My Profile",
      myIcon: "person",
      screen: "Profile",
    },
    {
      name: "Employee \nDirectory",
      myIcon: "home",
      screen: "Employee",
    },
    {
      name: "Document \nCenter",
      myIcon: "book",
      screen: "Documents",
    },
    {
      name: "Regions",
      myIcon: "location",
      screen: "Regions",
    },
    {
      name: "Branches",
      myIcon: "keypad-outline",
      screen: "Branches",
    },
    {
      name: "Feedback",
      myIcon: "star",
      screen: "Feedback",
    },
    {
      name: "Help Desk",
      myIcon: "umbrella-outline",
      screen: "Help",
    },
    {
      name: "Birthday \nNotification",
      myIcon: "heart-half-outline",
      screen: "Birthday",
    },
  ];

  function extractUsername(email) {
    var parts = email.split("@");
    var username = parts[0];
    username = username.charAt(0).toUpperCase() + username.slice(1);
    return username;
  }

  return (
    <ScrollView>
      <View style={styles.main}>
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{
            text: "Nepal Can",
            style: {
              color: "#fff",
              fontSize: 20,
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 50,
            },
          }}
          rightComponent={{
            icon: "logout",
            color: "white",
            onPress: signOutUser,
          }}
        />
        <Text style={styles.headtext}>
          {" "}
          Welcome, {extractUsername(loggedInUser?.email)}
        </Text>

        <View style={styles.cardContainer}>
          {homeData.map((homeData, index) => (
            <Card key={index} containerStyle={styles.card}>
              <TouchableOpacity
                onPress={() => navigation.navigate(homeData.screen)}
              >
                <View style={styles.cardContent}>
                  <Ionicons
                    name={homeData.myIcon}
                    // onPress={() => navigation.navigate({'homeData.screen'})}
                    size={75}
                    color="red"
                    style={{
                      width: SCREEN_WIDTH * 0.3,
                      height: SCREEN_WIDTH * 0.3,
                      borderRadius: 10,
                      marginRight: 10,
                      paddingHorizontal: 30,
                      paddingVertical: 30,
                    }}
                  />
                  <View style={styles.cardInfoContainer}>
                    <View style={styles.cardInfo}>
                      <Text style={styles.cardTitle}>{homeData.name}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </Card>
          ))}
        </View>

        <View style={styles.bulletContainer}>
          <Text style={styles.bullettitle}>On Leave Today</Text>
          <View style={styles.bulletList}>
            <Text style={styles.bullettext}>
              {"\u25CF" + " Ram Singh Khapangi - Ilam - Operation"}
            </Text>
            <Text style={styles.bullettext}>
              {"\u25CF" + " John Wick -Tinkune -Finance"}
            </Text>
            <Text style={styles.bullettext}>
              {"\u25CF" + " Elon  Musk -Pokhara -BD"}
            </Text>
            <Text style={styles.bullettext}>
              {"\u25CF" + " Dave Mustane -Birgunj -Finance"}
            </Text>
            <Text style={styles.bullettext}>
              {"\u25CF" + " Amitabh Bachhan -Urlabari -Admin"}
            </Text>
            <Text style={styles.bullettext}>
              {"\u25CF" + " Sanzai Kc -Kathmandu -IT"}
            </Text>
            <Text style={styles.bullettext}>
              {"\u25CF" + " Tony Soprano -Hetauda -Cleaning"}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {},
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
  cardContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 0,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
    marginHorizontal: 10,
    width: SCREEN_WIDTH - 30,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardInfo: {
    flex: 1,
  },
  cardInfoContainer: {
    paddingLeft: 50,
    flexDirection: "row",
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    color: "#0257bf",
  },
  headtext: {
    fontSize: 24,
    margin: 15,
    marginTop: 30,
  },
  bulletContainer: {
    flexDirection: "column",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
    marginHorizontal: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bullettitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#0257bf",
  },
  bulletList: {
    marginLeft: 20,
  },
  bullettext: {
    fontSize: 16,
    color: "#432316",
    padding: 2,
    lineHeight: 25,
  },
});
