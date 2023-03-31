import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Divider } from "react-native-elements";

import { firebase } from "../../firebase";
import { async } from "@firebase/util";
import { doc, QuerySnapshot } from "@firebase/firestore";

const EmployeeBirthdaysScreen = ({ navigation }) => {
  const [empbirthalldetails, setEmpBirthEmp] = useState([]);
  const fetchEmpBirthdayall = firebase.firestore().collection("empbirthdayall");

  const handleFetchBirthday = () => {
    setEmpBirthEmp([]);
    fetchEmpBirthdayall.onSnapshot((QuerySnapshot) => {
      let _employeesBirthday = [];

      QuerySnapshot.forEach((doc) => {
        _employeesBirthday.push({ ...doc.data() });
      });
      setEmpBirthEmp(_employeesBirthday);
    });
  };

  useEffect(() => {
    handleFetchBirthday();
  }, []);

  // const employeeBirthdays = [
  //   {
  //     id: 1,
  //     name: "Sudip Shrestha",
  //     dob: "01 April",
  //     avatar: require("../../assets/male_avtar.png"),
  //   },
  //   {
  //     id: 2,
  //     name: "Samrin Basnet",
  //     dob: "07 April",
  //     avatar: require("../../assets/female_avtar.png"),
  //   },
  //   {
  //     id: 3,
  //     name: "Anibesh Shakya Doe",
  //     dob: "15 April",
  //     avatar: require("../../assets/male_avtar.png"),
  //   },
  //   {
  //     id: 4,
  //     name: "Manish Karki",
  //     dob: "26 May",
  //     avatar: require("../../assets/male_avtar.png"),
  //   },
  //   {
  //     id: 5,
  //     name: "Nisha Gautam",
  //     dob: "12 Sept",
  //     avatar: require("../../assets/female_avtar.png"),
  //   },
  //   {
  //     id: 6,
  //     name: "Ghan Bdr Chunara",
  //     dob: "01 Dec",
  //     avatar: require("../../assets/male_avtar.png"),
  //   },
  //   {
  //     id: 7,
  //     name: "Mishan Basnet",
  //     dob: "11 Nov",
  //     avatar: require("../../assets/male_avtar.png"),
  //   },
  //   {
  //     id: 8,
  //     name: "Aayusha Pathak",
  //     dob: "13 Feb",
  //     avatar: require("../../assets/female_avtar.png"),
  //   },
  //   {
  //     id: 9,
  //     name: "Gaurav Rizal",
  //     dob: "01 Jan",
  //     avatar: require("../../assets/male_avtar.png"),
  //   },
  // ];

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>Employee Birthdays</Text>
        <Divider
          style={{ marginLeft: 10, marginRight: 10, marginBottom: 20 }}
        ></Divider>
        {empbirthalldetails.map((person) => (
          <View key={person.id} style={styles.personContainer}>
            <Image source={{ uri: person.image }} style={styles.avatar} />
            <Text style={styles.personName}>{person.name}</Text>
            <Text style={styles.personDob}>{person.dob}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

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
    marginBottom: 10,
    textAlign: "center",
  },
  personContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
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
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  personName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  personDob: {
    marginLeft: "auto",
    color: "#555",
  },
});

export default EmployeeBirthdaysScreen;
