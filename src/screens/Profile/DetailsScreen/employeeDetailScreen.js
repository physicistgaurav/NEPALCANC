import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Dimensions,
  ScrollView,
} from "react-native";

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
            <View>
              <View style={styles.oneLine}>
                <View style={[styles.flatlistContainer1, styles.oneLine]}>
                  <Text style={[styles.textStyle, { alignSelf: "center" }]}>
                    {item.sn}
                  </Text>
                </View>

                <View style={styles.flatlistContainer2}>
                  <Text style={styles.textStyle}>{item.category} </Text>
                </View>
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
  flatlistContainer1: {
    width: "40%",
    backgroundColor: "#F0FFFF",
    marginTop: 4,
    marginLeft: 10,
    marginRight: 5,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    borderWidth: 2,
  },
  flatlistContainer2: {
    width: "53%",
    backgroundColor: "#00FFFF",
    justifyContent: "center",
    marginTop: 4,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 0.5,
  },

  oneLine: {
    flexDirection: "row",
  },
  textStyle: {
    fontSize: 20,
    color: "black",
    marginLeft: 10,
  },
});
