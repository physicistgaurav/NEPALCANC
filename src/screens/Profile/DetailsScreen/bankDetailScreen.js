import React from "react";
import { View, StyleSheet, FlatList, Text, Dimensions, ScrollView } from "react-native";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const BankDetailScreen = () => {
  const bankDetail = [
    {
      sn: "Bank Name",
      category: "Nic Asia Bank",
    },
    {
      sn: "Bank account name",
      category: "39000000000000000",
    },
    {
      sn: "Bank account number",
      category: "Nirajan shahi",
    },
  ];
  return (
    <View style={styles.screenContainer}>
    <View style={{ height: 10 }} />
    <FlatList
      data={bankDetail}
      renderItem={({ item }) => {
        return (
          <View>
            <View style={styles.oneLine}>
              <View style={[styles.flatlistContainer1, styles.oneLine]}>
                <Text style={[styles.textStyle, { alignSelf: "center" }]}>
                  {" "}
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
export default BankDetailScreen;

const styles = StyleSheet.create({
  screenContainer: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: "#fffafa",
  },
  flatlistContainer1: {
    width: "40%",
    height: 40,
    backgroundColor: "cyan",
    marginTop: 4,
    marginLeft: 10,
    marginRight: 5,
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    borderWidth: 2,
  },
  flatlistContainer2: {
    width: "53%",
    height: 40,
    backgroundColor: "#e6ffff",
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
    marginLeft: 5,
  },
});
