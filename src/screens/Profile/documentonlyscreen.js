import React from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Dimensions,
  Button,
} from "react-native";
import { IconButton } from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Avatar } from "@rneui/base/dist/Avatar/Avatar";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const DocumentOnlyScreen = () => {
  const emergencyContact = [
    {
      sn: "1",
      category: "Photo",
      label: "Photo",
      uploadedOn: "March 23,2023",
      action: "",
    },
    {
      sn: "2",
      category: "Intern Contract",
      label: "Intern Contract",
      uploadedOn: "March 23,2023",
      action: "",
    },
    {
      sn: "3",
      category: "Education",
      label: "Education",
      uploadedOn: "March 23,2023",
      action: "",
    },
    {
      sn: "4",
      category: "Citizenship",
      label: "Citizenship",
      uploadedOn: "March 23,2023",
      action: "",
    },
    {
      sn: "5",
      category: "Branch Operation",
      label: "Branch Operation",
      uploadedOn: "March 23,2023",
      action: "",
    },
  ];
  return (
    <View style={styles.screenContainer}>
      <FlatList
        data={emergencyContact}
        // numColumns="2"
        renderItem={({ item }) => {
          return (
            <View style={styles.flatlistContainer}>
            <Text style={styles.textStyle}> {item.sn}</Text>
              <Text style={styles.textStyle}>'0' {item.category}</Text>
              <Text style={styles.textStyle}> {item.label}</Text>
              <Text style={styles.textStyle}> {item.uploadedOn}</Text>
              <Button title={"Download"} />
            </View>
          );
        }}
      />
    </View>
  );
};
export default DocumentOnlyScreen;

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
