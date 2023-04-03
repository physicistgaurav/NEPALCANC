import React from "react";
import { View, StyleSheet, FlatList, Text, Dimensions } from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const EmergencyContactScreen = () => {
  const emergencyContact = [
    {
      sn: "Next of kin Name",
      category: "Nirajan Bahadur Shahi",
    },
    {
      sn: "Next of kin Relationship",
      category: "Father",
    },
    {
      sn: "Next of kin Contact No",
      category: "9800000000",
    },
  ];
  return (
    <View style={styles.screenContainer}>
      <View style={{ height: 10 }} />
      <FlatList
        data={emergencyContact}
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
export default EmergencyContactScreen;

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
