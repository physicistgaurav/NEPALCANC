import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Divider } from "react-native-elements";

import { firebase } from "../../firebase";
import { async } from "@firebase/util";
import { doc, QuerySnapshot } from "@firebase/firestore";

const ViewTickets = () => {
  const [myTickets, setMyTickets] = useState([]);
  const fetchTicketsAll = firebase.firestore().collection("Tickets");

  const handleFetchTickets = () => {
    setMyTickets([]);
    fetchTicketsAll.onSnapshot((QuerySnapshot) => {
      let _ticketsIssues = [];

      QuerySnapshot.forEach((doc) => {
        _ticketsIssues.push({ ...doc.data() });
      });
      setMyTickets(_ticketsIssues);
    });
  };

  useEffect(() => {
    handleFetchTickets();
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.heading}>Tickets Created</Text>
          <Divider
            style={{ marginLeft: 10, marginRight: 10, marginBottom: 20 }}
          ></Divider>
          {myTickets.map((ticketshelp) => (
            <View key={ticketshelp.id} style={styles.ticketshelpContainer}>
              <Text style={styles.ticketTitle}>
                {" "}
                Title: {ticketshelp.title}
              </Text>
              <Text style={styles.ticketDescription}>
                Description: {ticketshelp.description}
              </Text>
              <Text style={styles.ticketDescription}>
                Department: {ticketshelp.department}
              </Text>
              <Text style={styles.ticketDescription}>
                Responsible: {ticketshelp.responsible}
              </Text>
              <Text style={styles.ticketDescription}>
                Priority: {ticketshelp.priority}
              </Text>
              <Text style={styles.ticketDescription}>
                Remarks: {ticketshelp.remarks}
              </Text>
              <Divider
                style={{
                  height: 2,
                  backgroundColor: "black",
                  marginTop: 10,
                  marginBottom: 10,
                }}
              />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default ViewTickets;

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
  ticketTitle: {
    fontWeight: "bold",
    fontSize: 24,
  },
  ticketDescription: {
    color: "#555",
    paddingLeft: 5,
    fontSize: 20,
  },
});
