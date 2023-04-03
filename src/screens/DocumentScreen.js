import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card, Button, Header } from "react-native-elements";
import * as OpenAnything from "react-native-openanything";

const ProfileDocumentScreen = () => {
  return (
    <ScrollView>
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
        <Text style={styles.heading}>Nepal Can Document Center</Text>
        <Text style={styles.bodytext}>
          <Text style={styles.bodytext2}>Warning :</Text>
          These are the official documents of the company. Unauthorized
          distribution to third-party is not allowed, unless, expressly approved
          by the management.{" "}
        </Text>
        <Card containerStyle={styles.card}>
          <Card.Title style={styles.title}>NCM Logistic Manual</Card.Title>
          <Button
            title="View PDF"
            onPress={() =>
              OpenAnything.Pdf("https://hris.nepalcangroup.com/qms/my/23/")
            }
          />
        </Card>

        <Card containerStyle={styles.card}>
          <Card.Title style={styles.title}>NCM Operating Manual</Card.Title>
          <Button
            title="View PDF"
            onPress={() =>
              OpenAnything.Pdf("https://hris.nepalcangroup.com/qms/my/21/")
            }
          />
        </Card>

        <Card containerStyle={styles.card}>
          <Card.Title style={styles.title}>
            NCMOPSP001 - Area of coverage
          </Card.Title>
          <Button
            title="View PDF"
            onPress={() =>
              OpenAnything.Pdf("https://hris.nepalcangroup.com/qms/my/18/")
            }
          />
        </Card>

        <Card containerStyle={styles.card}>
          <Card.Title style={styles.title}>
            Brand Identity Guidelines
          </Card.Title>
          <Button
            title="View PDF"
            onPress={() =>
              OpenAnything.Pdf("https://hris.nepalcangroup.com/qms/my/17/")
            }
          />
        </Card>

        <Card containerStyle={styles.card}>
          <Card.Title style={styles.title}>
            HR policies and procedures manual Details
          </Card.Title>
          <Button
            title="View PDF"
            onPress={() =>
              OpenAnything.Pdf("https://hris.nepalcangroup.com/qms/my/14/")
            }
          />
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // padding: 20,
  },
  card: {
    borderRadius: 10,
    marginVertical: 10,
    padding: 15,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
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
});

export default ProfileDocumentScreen;
