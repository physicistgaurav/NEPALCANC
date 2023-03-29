import React from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { IconButton } from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar } from "@rneui/base/dist/Avatar/Avatar";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const ProfileScreen = ({ navigation }) => {
  const lists = [
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
      route: "Documents",
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
    <SafeAreaView>
      <View style={styles.container1}>
        <View style={{ height: 25 }} />
        <Avatar
          style={styles.avatar}
          rounded
          source={require("/home/nirajan/NepalCanCode/NEPALCANC/assets/defaultUser.png")}
        />
        <View style={{ height: 25 }} />

        <FlatList
          numColumns="2"
          style={styles.FlatList}
          keyExtractor={(key) => {
            return key.index;
          }}
          vertical
          data={lists}
          renderItem={({ item }) => {
            console.log(item.name);
            return (
              <TouchableOpacity
                onPress={(key) => navigation.navigate(item.route)}
              >
                <View style={[styles.container, styles.oneLine]}>
                  <View style={[styles.container2]}>
                    <IconButton
                      icon={
                        <MaterialCommunityIcons
                          name={item.icon}
                          color="red"
                          size={30}
                        />
                      }
                      disabled
                    />
                  </View>

                  <View style={[styles.container2]}>
                    <Text style={styles.textStyle}> {item.name}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "black",
  },
  listStyle: {
    textAlign: "center",
  },
  container: {
    height: 60,
    width: 205,
    backgroundColor: "white",
    margin: 10,
    elevation: 5,
  },
  container1: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: "white",
  },
  oneLine: {
    flexDirection: "row",
  },
  container2: {
    justifyContent: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    alignSelf: "center",
  },
});
