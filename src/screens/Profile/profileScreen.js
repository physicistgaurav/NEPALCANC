import React from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { IconButton } from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar } from "@rneui/base/dist/Avatar/Avatar";
import { Divider } from "react-native-elements";
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
const ProfileScreen = ({ navigation }) => {
  const profileLists = [
    {
      index: "1",
      name: "Employee Details",
      nameDetail: "See your details here",
      icon: "account-circle-outline",
      route: "EmployeeDetail",
    },
    {
      index: "2",
      name: "Personal Details",
      nameDetail: "See your details here",
      icon: "badge-account-horizontal-outline",
      route: "PersonalDetail",
    },
    {
      index: "3",
      name: "Bank Details",
      nameDetail: "See your details here",
      icon: "bank-outline",
      route: "BankDetail",
    },
    {
      index: "4",
      name: "Emergency Contact",
      nameDetail: "See your details here",
      icon: "alert-octagram-outline",
      route: "EmergencyContact",
    },
    {
      index: "5",
      name: "Documents",
      nameDetail: "See your details here",
      icon: "file-outline",
      route: "Documents",
    },
    {
      index: "6",
      name: "Leaves",
      nameDetail: "See your details here",
      icon: "calendar-check-outline",
      route: "Leaves",
    },
    {
      index: "7",
      name: "Attendance",
      nameDetail: "See your details here",
      icon: "calendar-outline",
      route: "Attendance",
    },
    {
      index: "8",
      name: "Performance",
      nameDetail: "See your details here",
      icon: "group",
      route: "Performance",
    },
  ];
  return (
    <View>
    <View style={styles.screenContainer}>
      <View style={styles.avatarContainer}>
        <Avatar
          style={styles.avatar}
          source={require("../../../assets/profileDefaultUser.png")}
        />
        <Text style={{ fontSize: 30, alignSelf: "center" }}>Nirajan shahi</Text>
        <Text style={{ fontSize: 20, alignSelf: "center", fontWeight: "200" }}>
          nirajan.shahi@nepalcanmove.com
        </Text>
        <View
          style={[
            styles.oneline,
            { alignSelf: "center", marginTop: 5, marginBottom: 10 },
          ]}
        >
          <Text style={{ fontSize: 20, color: "green" }}>
            React native Intern{"     "}
          </Text>
          <Divider orientation="vertical" width={2} />
          <Text style={{ fontSize: 20, color: "green" }}>
            {"     "} +977 9800000000
          </Text>
        </View>
      </View>
      <View style={{ height: 5 }} />
      <FlatList
        data={profileLists}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={(_key) => navigation.navigate(item.route)}
            >
              <View style={[styles.flatlistContainer, styles.oneline]}>
                <View style={[styles.insideFlatlistContainer]}>
                  <IconButton
                    icon={<MaterialCommunityIcons name={item.icon} size={30} />}
                    disabled
                  />
                </View>

                <View style={[styles.insideFlatlistContainer]}>
                  <Text style={styles.textStyle}> {item.name}</Text>
                  <Text style={styles.textStyle1}> {item.nameDetail}</Text>
                </View>
                <View style={{ flex: SCREEN_WIDTH }} />
                <Image
                  style={{ alignSelf: "center", height: 25, width: 25 }}
                  source={require("../../../assets/rightArrow.png")}
                />
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
    </View>

  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  screenContainer: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: "#f0f8ff",
  },
  avatarContainer: {
    backgroundColor: "#fffafa",
    marginTop: 5,
    paddingTop: 15,
  },
  avatar: {
    width: 125,
    height: 125,
    alignSelf: "center",
  },
  flatlistContainer: {
    width: "95%",
    backgroundColor: "#fffafa",
    alignContent: "center",
    marginTop: 2,
    marginLeft: 10,
    height: 70,
    paddingRight: 15,
  },
  oneline: {
    flexDirection: "row",
  },
  insideFlatlistContainer: {
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 25,
    color: "black",
    marginLeft: 15,
  },
  textStyle1: {
    fontSize: 15,
    color: "black",
    fontWeight: "200",
    marginLeft: 15,
  },
});
