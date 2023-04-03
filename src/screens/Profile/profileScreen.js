import React from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { IconButton } from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar } from "@rneui/base/dist/Avatar/Avatar";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const ProfileScreen = ({ navigation }) => {
  const profileLists = [
    {
      index: "1",
      name: "Employee \n Details ",
      icon: "account-circle",
      route: "EmployeeDetail",
    },
    {
      index: "2",
      name: "Personal \n Details",
      icon: "badge-account-horizontal",
      route: "PersonalDetail",
    },
    {
      index: "3",
      name: "Bank \n Details",
      icon: "bank",
      route: "BankDetail",
    },
    {
      index: "4",
      name: "Emergency \n Contact",
      icon: "alert-octagram",
      route: "EmergencyContact",
    },
    {
      index: "5",
      name: "Documents",
      icon: "file",
      route: "myDocuments",
    },
    {
      index: "6",
      name: "Leaves",
      icon: "calendar-check",
      route: "Leaves",
    },
    {
      index: "7",
      name: "Attendance",
      icon: "calendar",
      route: "Attendance",
    },
    {
      index: "8",
      name: "Performance",
      icon: "group",
      route: "Performance",
    },
  ];
  return (
    <View style={styles.screenContainer}>
      <View style={{ height: 25 }} />
      <Avatar
        style={styles.avatar}
        source={require("../../../assets/profileDefaultUser.png")}
      />
      <View style={{ height: 25 }} />
      <FlatList
        numColumns="2"
        // style={styles.FlatList}
        // keyExtractor={(key) => {
        //   return key.index;
        // }}
        // vertical
        data={profileLists}
        renderItem={({ item }) => {
          // console.log(item.name);
          return (
            <TouchableOpacity
              onPress={(key) => navigation.navigate(item.route)}
            >
              <View style={[styles.flatlistContainer, styles.oneline]}>
                <View style={[styles.insideFlatlistContainer]}>
                  <IconButton
                    icon={
                      <MaterialCommunityIcons
                        name={item.icon}
                        color="#246EE9"
                        size={25}
                      />
                    }
                    disabled
                  />
                </View>

                <View style={[styles.insideFlatlistContainer]}>
                  <Text style={styles.textStyle}> {item.name}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  screenContainer: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: "#fffafa",
  },
  avatar: {
    width: 125,
    height: 125,
    alignSelf: "center",
  },
  flatlistContainer: {
    // height: 55,
    width: 200,
    backgroundColor: "#f0f8ff",
    elevation: 2,
    alignContent: "center",
    marginLeft: 15,
    marginRight: 5,
    marginTop: 10,
  },
  oneline: {
    flexDirection: "row",
  },
  insideFlatlistContainer: {
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 18,
    color: "black",
  },
});
