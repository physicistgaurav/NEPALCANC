import React from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  Dimensions,
  Button,
} from "react-native";
import DocumentScreen from "./profileDocumentScreen";

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
    <View>
      <View style={styles.screenContainer}>
        <FlatList
          data={emergencyContact}
          renderItem={({ item }) => {
            return (
              <View style={[styles.textStyle]}>
                <View style={[styles.flatlistContainer, styles.oneLine]}>
                  <View style={styles.flatlistContainer1}>
                    <Text style={styles.textStyle}>  SN</Text>
                    <Text style={styles.textStyle}>  Category</Text>
                    <Text style={styles.textStyle}>  Label</Text>
                    <Text style={styles.textStyle}>  Uploaded On</Text>
                  </View>
                  <View style={{ width: 20 }} />
                  <View>
                    <Text style={styles.textStyle}> {item.sn}</Text>
                    <Text style={styles.textStyle}>{item.category}</Text>
                    <Text style={styles.textStyle}>{item.label}</Text>
                    <Text style={styles.textStyle}>{item.uploadedOn}</Text>
                  </View>
                </View>
                <View style={styles.buttonContainer}>
                  <Button title="Download" color={'red'} />
                </View>
              </View>
            );
          }}
        />

      </View>
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
  flatlistContainer: {
    backgroundColor: "#e6ffff",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    elevation: 2,
  },
  buttonContainer: {
    marginLeft: 15,
    flexDirection: "row-reverse"
  },
  flatlistContainer1: {
    width: 125,
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

