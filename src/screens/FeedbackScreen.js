import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Header, Icon, Card, Divider } from "react-native-elements";

const SCREEN_WIDTH = Dimensions.get("window").width;

const FeedbackScreen = ({ navigation }) => {
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
              height: 40,
            },
          }}
          rightComponent={{ text: "Hello, sir", style: { color: "#fff" } }}
        />
        <View style={styles.subContainer}>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text style={styles.backText}>{"< Home"}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.downbody}>
            <Text style={styles.bodyhead}>Feedback</Text>

            <View style={styles.downbody2}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                  ⭐ Give feedback to your colleague
                </Text>
              </TouchableOpacity>
              <View style={styles.feedbackContainer}>
                <Text style={styles.feedbackReport}>My Feedback Report</Text>
                <View style={styles.positiveContainer}>
                  <Text style={styles.positiveText}>Positive</Text>
                  <Divider
                    style={{
                      color: "grey",
                      width: 310,
                      margin: 10,
                      paddingLeft: 10,
                    }}
                  ></Divider>
                  <Text style={styles.totalText}>Total - 0</Text>
                </View>
                <View style={styles.negativeContainer}>
                  <Text style={styles.negativeText}>Negative</Text>
                  <Divider
                    style={{
                      color: "grey",
                      width: 310,
                      margin: 10,
                      paddingLeft: 10,
                    }}
                  ></Divider>
                  <Text style={styles.totalText}>Total - 0</Text>
                </View>

                <View style={styles.attributeContainer}>
                  <Text style={styles.positiveAttribute}>
                    Positive Attribute
                  </Text>
                  <Divider
                    style={{
                      color: "grey",
                      width: 310,
                      margin: 10,
                      paddingLeft: 10,
                    }}
                  ></Divider>
                  <Text style={styles.attributeText}>
                    Complete task in time - 0
                  </Text>
                  <Text style={styles.attributeText}>Good Team Player - 0</Text>
                  <Text style={styles.attributeText}>
                    Good Customer Service - 0
                  </Text>
                  <Text style={styles.attributeText}>
                    Polite and Respectful - 0
                  </Text>
                  <Text style={styles.attributeText}>
                    Good Leadership Skills - 0
                  </Text>
                  <Text style={styles.attributeText}>
                    Good Communication Skills - 0
                  </Text>
                  <Text style={styles.attributeText}>
                    Promotes NCM in Social Media - 0
                  </Text>
                </View>

                <View style={styles.attributeContainer}>
                  <Text style={styles.negativeAttribute}>
                    Negative Attribute
                  </Text>
                  <Divider
                    style={{
                      color: "grey",
                      width: 310,
                      margin: 10,
                      paddingLeft: 10,
                    }}
                  ></Divider>
                  <Text style={styles.attributeText}>Delayed Tasks - 0</Text>
                  <Text style={styles.attributeText}>
                    Disrespectful, Rude and Arrogant Behavior - 0
                  </Text>
                  <Text style={styles.attributeText}>
                    Bad Customer Services - 0
                  </Text>
                  <Text style={styles.attributeText}>Troublemaker - 0</Text>
                  <Text style={styles.attributeText}>
                    Ignores Company Policies - 0
                  </Text>
                  <Text style={styles.attributeText}>
                    Does not fit well in Team - 0
                  </Text>
                  <Text style={styles.attributeText}>
                    Does not show interest in promoting NCM - 0
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default FeedbackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // padding: 10,
  },
  subContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    backgroundColor: "#e9ecef",
    borderRadius: 5,
  },
  backText: {
    color: "#0257bf",
    fontSize: 16,
    margin: 12,
    // fontFamily: "ubuntu",
  },
  downbody: {
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: "#e9ecef",
    width: SCREEN_WIDTH - 30,
    borderRadius: 8,
  },
  downbody2: {
    marginHorizontal: 10,
    // backgroundColor: "#e0dcd9",
    width: SCREEN_WIDTH - 30,
    borderRadius: 8,
  },
  bodyhead: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 10,
    color: "red",
    paddingLeft: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTextLeft: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerTextRight: {
    fontSize: 16,
    color: "#333",
  },
  homeText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 20,
  },
  feedbackText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
  },

  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    margin: 10,
    width: 350,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    // textAlign: "center",
  },
  feedbackContainer: {
    marginTop: 20,
  },
  feedbackReport: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    paddingLeft: 10,
  },
  positiveContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#66BB6A",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    width: 350,
  },
  positiveText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 40,
  },
  negativeContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#EF5350",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: 350,
  },
  negativeText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 40,
  },
  totalText: {
    color: "#fff",
    fontWeight: "bold",
  },
  positiveAttribute: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    padding: 0,
  },
  negativeAttribute: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
    // padding: 10,
  },
  attributeContainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    // paddingLeft: 50,
    width: 350,
  },
  attributeText: {
    fontSize: 16,
    // fontWeight: "bold",
    marginBottom: 5,
  },
  attrhead: {
    backgroundColor: "#e9ecef",
    width: SCREEN_WIDTH - 30,
    borderRadius: 8,
    margin: 1,
    marginBottom: 10,
  },
  attributecalText: {
    fontSize: 20,
    margin: 10,
  },
});
