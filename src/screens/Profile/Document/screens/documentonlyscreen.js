import React from "react";
import { TouchableOpacity } from "react-native";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Dimensions,
  Image,
  Alert,
} from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const downloadAlert = () =>
  Alert.alert(
    "Download",
    "Are you sure you want to download ?",
    [
      {
        text: "Ok",
        onPress: () => Alert.alert("Downloaded"),
      },
      {
        text: "Cancel",
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );

const DocumentOnlyScreen = () => {
  const documentDetails = [
    {
      sn: "1",
      category: "Photo",
      label: "Photo",
      uploadedOn: "23/01/2023",
      action: "",
    },
    {
      sn: "2",
      category: "Intern Contract",
      label: "Intern Contract",
      uploadedOn: "23/01/2023",
      action: "",
    },
    {
      sn: "3",
      category: "Education",
      label: "Education",
      uploadedOn: "23/01/2023",
      action: "",
    },
    {
      sn: "4",
      category: "Citizenship",
      label: "Citizenship",
      uploadedOn: "23/01/2023",
      action: "",
    },
    {
      sn: "5",
      category: "Branch Operation",
      label: "Branch Operation",
      uploadedOn: "23/01/2023",
      action: "",
    },
    {
      sn: "1",
      category: "Photo",
      label: "Photo",
      uploadedOn: "23/01/2023",
      action: "",
    },
    {
      sn: "2",
      category: "Intern Contract",
      label: "Intern Contract",
      uploadedOn: "23/01/2023",
      action: "",
    },
    {
      sn: "3",
      category: "Education",
      label: "Education",
      uploadedOn: "23/01/2023",
      action: "",
    },
    {
      sn: "4",
      category: "Citizenship",
      label: "Citizenship",
      uploadedOn: "23/01/2023",
      action: "",
    },
    {
      sn: "5",
      category: "Branch Operation",
      label: "Branch Operation",
      uploadedOn: "23/01/2023",
      action: "",
    },
    {
      sn: "1",
      category: "Photo",
      label: "Photo",
      uploadedOn: "23/01/2023",
      action: "",
    },
    {
      sn: "2",
      category: "Intern Contract",
      label: "Intern Contract",
      uploadedOn: "23/01/2023",
      action: "",
    },
    {
      sn: "3",
      category: "Education",
      label: "Education",
      uploadedOn: "23/01/2023",
      action: "",
    },
    {
      sn: "4",
      category: "Citizenship",
      label: "Citizenship",
      uploadedOn: "23/01/2023",
      action: "",
    },
    {
      sn: "5",
      category: "Branch Operation",
      label: "Branch Operation",
      uploadedOn: "23/01/2023",
      action: "",
    },
  ];
  return (
    <View>
      <FlatList
        numColumns={2}
        data={documentDetails}
        renderItem={({ item }) => {
          return (
            <View style={styles.flatlistContainer}>
              <View>
                <View style={styles.oneLine}>
                  <Text>{item.uploadedOn}</Text>
                  <View style={{ flex: 1 }} />
                  <TouchableOpacity
                    onPress={() => downloadAlert(true)}
                    style={{ borderWidth: 0.21 }}
                  >
                    <Image
                      source={require("../../../../../assets/download.png")}
                      style={{ height: 25, width: 25 }}
                    />
                  </TouchableOpacity>
                </View>
                <Image
                  source={require("../../../../../assets/documents.png")}
                  style={{
                    alignSelf: "center",
                    margin: 10,
                    height: 60,
                    width: 60,
                  }}
                />
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  {item.category}
                </Text>
                <Text style={{ fontWeight: "200" }}>{item.label}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};
export default DocumentOnlyScreen;
const styles = StyleSheet.create({
  flatlistContainer: {
    width: "40%",
    backgroundColor: "#f5ff5",
    marginLeft: 22,
    marginRight: 14,
    marginBottom: 8,
    marginTop: 10,
    padding: 10,
    borderWidth: 0.5,
  },
  oneLine: {
    flexDirection: "row",
  },
});
