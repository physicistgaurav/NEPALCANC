import React from "react";
import { View, StyleSheet, FlatList, Dimensions, Text } from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const PersonalDetailsScreen = () => {
  const personalDetail = [
    { sn: "Date of Birth", category: "Jan 1, 1000" },
    { sn: "Gender", category: "Male" },
    { sn: "Marital Status", category: "Single" },
    { sn: "Number of Dependents", category: "0" },
    { sn: "Nationality", category: "Nepal" },
    { sn: "Religion", category: "Hinduism" },
    { sn: "Current Address", category: "Kathmandu-17, Kathmandu" },
    { sn: "Permanent Address", category: "Kathmandu-17, Kathmandu" },
  ];
  return (
    <View style={styles.screenContainer}>
      <FlatList
        data={personalDetail}
        renderItem={({ item }) => {
          return (
            <View style={[styles.flatlistContainer, styles.oneLine]}>
              <View style={styles.flatlistContainer1}>
                <Text style={styles.textStyle}> {item.sn}</Text>
              </View>
              <View style={{ width: 20 }} />
              <View>
                <Text style={styles.textStyle}>{item.category}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
export default PersonalDetailsScreen;
const styles = StyleSheet.create({
  screenContainer: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: "#fffafa",
  },
  flatlistContainer: {
    backgroundColor: "#e6ffff",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    elevation: 2,
  },
  flatlistContainer1: {
    width: 170,
    backgroundColor: "#ffffff",
  },
  oneLine: {
    flexDirection: "row",
  },
  textStyle: {
    fontSize: 18,
    color: "black",
  },
});
