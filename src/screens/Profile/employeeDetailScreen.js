import React from "react";
import { View, StyleSheet, FlatList, Text, Dimensions } from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const EmployeeDetailScreen = () => {
  const employeeDetail = [
    {
      sn: "Employee ID",
      category: "NCC13",
    },
    {
      sn: "Name",
      category: "Nirajan shahi",
    },
    {
      sn: "Phone",
      category: "98000000",
    },
    {
      sn: "Personal Phone",
      category: "98000000",
    },
    {
      sn: "Company Email",
      category: "nirajan.shahi@gmail.com",
    },
    {
      sn: "Personal Email",
      category: "nirajan.shahi@gmail.com",
    },
    {
      sn: "Department",
      category: "IT",
    },
    {
      sn: "Designation",
      category: "Intern",
    },
    {
      sn: "Joining Date",
      category: "March 00, 2023",
    },
    {
      sn: "Work Permit",
      category: "Nepal Can Code",
    },
    {
      sn: "Branch",
      category: "TINKUNE",
    },
    {
      sn: "Branch Assign",
      category: "TINKUNE",
    },
  ];

  return (
    <View style={styles.screenContainer}>
      <View style={{ height: 10 }} />
      <FlatList
        data={employeeDetail}
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
export default EmployeeDetailScreen;

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
    width: 150,
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
