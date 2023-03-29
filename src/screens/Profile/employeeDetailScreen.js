import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text } from "react-native-elements";

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
    <FlatList
      style={styles.FlatList}
      vertical
      data={employeeDetail}
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
export default EmployeeDetailScreen;

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
    width: 150,
    backgroundColor: "white",
  },
  oneLine: {
    flexDirection: "row",
  },
});
