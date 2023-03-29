import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import { Text } from "react-native-elements";

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
    <FlatList
      style={styles.FlatList}
      vertical
      data={emergencyContact}
      renderItem={({ item }) => {
        console.log(item.sn);
        return (
          <View style={[styles.container, styles.oneLine]}>
            <View style={styles.container1}>
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
  );
};
export default EmergencyContactScreen;
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "black",
  },
  container: {
    height: 30,
    width: 450,
    backgroundColor: "#cae9f5",
    margin: 5,
  },
  container1: {
    height: 30,
    width: 190,
    backgroundColor: "white",
  },
  oneLine: {
    flexDirection: "row",
  },
});
