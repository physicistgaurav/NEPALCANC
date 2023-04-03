import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Card, Button, Header, Divider } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";

const HelpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
        rightComponent={{ text: "Hello, sir", style: { color: "#fff" } }}
      />
      <Text style={styles.heading}>Help Desk Dashboard</Text>
      <Text style={styles.bodytext}>
        <Text style={styles.bodytext2}>Warning :</Text>
        For now, tickets submitted via Help Desk are visible to all
        administrators. Hence do not submit any issue of personal or
        confidential nature via the Help Desk. We are working on visibility
        restrictions.
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("ticket")}
        style={styles.btn}
      >
        <FontAwesome
          name="print"
          size={20}
          color="#8ec7cf"
          style={styles.print}
        />
        <Text style={styles.btntext}>Add New Ticket</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Card containerStyle={styles.card1}>
          <Card.Title style={styles.title}>All My Tickets - 0</Card.Title>
          <Divider></Divider>
          <Text style={styles.ticketbody}> View Details</Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity>
        <Card containerStyle={styles.card2}>
          <Card.Title style={styles.title}>All My Tickets - 0</Card.Title>
          <Divider></Divider>
          <Text style={styles.ticketbody}> View Details</Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity>
        <Card containerStyle={styles.card3}>
          <Card.Title style={styles.title}>All My Tickets - 0</Card.Title>
          <Divider></Divider>
          <Text style={styles.ticketbody}> View Details</Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("viewtickets")}
        style={styles.btn2}
      >
        <FontAwesome
          name="eye"
          size={20}
          color="#8ec7cf"
          style={styles.print}
        />
        <Text style={styles.btntext}>View Ticket</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
    color: "crimson",
    paddingLeft: 5,
  },
  bodytext: {
    fontSize: 16,
    margin: 10,
    color: "black",
    paddingLeft: 5,
  },
  bodytext2: {
    fontSize: 16,
    margin: 10,
    color: "red",
    paddingLeft: 5,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#8ec7cf",
    width: 180,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 15,
  },
  btn2: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#8ec7cf",
    width: 180,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 15,
    marginTop: 15,
  },
  print: {
    marginRight: 10,
    paddingLeft: 5,
  },
  btntext: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#8ec7cf",
  },
  card1: {
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
    elevation: 2,
    backgroundColor: "#007bff",
  },
  card2: {
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
    elevation: 2,
    backgroundColor: "#dc3545",
  },
  card3: {
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
    elevation: 2,
    backgroundColor: "#28a745",
  },
  title: {
    color: "white",
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 18,
  },
  ticketbody: {
    fontSize: 16,
    color: "white",
    marginTop: 10,
  },
});
