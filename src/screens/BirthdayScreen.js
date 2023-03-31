import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { firebase } from "../../firebase";
import { async } from "@firebase/util";
import { doc, QuerySnapshot } from "@firebase/firestore";

const BirthdayScreen = ({ navigation }) => {
  const [empbirthtoday, setEmpBirthToday] = useState([]);
  const fetchEmpBirthday = firebase.firestore().collection("empbirthdaytoday");

  const handleFetchTodayBirthday = () => {
    setEmpBirthToday([]);
    fetchEmpBirthday.onSnapshot((QuerySnapshot) => {
      let _employeesBirthday = [];

      QuerySnapshot.forEach((doc) => {
        _employeesBirthday.push({ ...doc.data() });
      });
      setEmpBirthToday(_employeesBirthday);
    });
  };

  useEffect(() => {
    handleFetchTodayBirthday();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Birthday Notification</Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today's Birthdays</Text>
        {empbirthtoday.map((person) => (
          <View key={person.id} style={styles.personContainer}>
            <Image source={{ uri: person.image }} style={styles.avatar} />
            <Text style={styles.personName}>{person.name}</Text>
            <Text style={styles.personDob}>{person.dob}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity
        style={[styles.card, styles.employeeCard]}
        onPress={() => navigation.navigate("EmployeeBirthdays")}
      >
        <Text style={styles.cardTitle2}>Employee Birthday Details</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BirthdayScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2596be",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "white",
  },
  card: {
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    padding: 20,
    width: "90%",
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 25,
    color: "#74452b",
  },
  cardTitle2: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#022a5b",
  },
  personContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 20,
    marginRight: 10,
  },
  personName: {
    fontWeight: "bold",
    fontSize: 18,
  },
  personDob: {
    marginLeft: "auto",
    color: "#555",
  },
  employeeCard: {
    backgroundColor: "#a6d0e8",
  },
});
