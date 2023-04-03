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
      <ScrollView horizontal>
        <FlatList
          data={bankDetail}
          renderItem={({ item }) => {
            return (
              <View style={[styles.flatlistContainer, styles.oneLine]}>
                <View style={styles.flatlistContainer1}>
                  <Text style={styles.textStyle}> {item.sn}</Text>
                </View>
                <View style={{ width: 20 }} />
                <View>
                  <Text style={styles.textStyle}>{item.category}  </Text>
                </View>
              </View>
            );
          }}
        />
      </ScrollView>
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
  flatlistContainer: {
    backgroundColor: "#e6ffff",
    marginLeft: 15,
    marginRight: 15,
    marginTop: 10,
    elevation: 2,
  },
  flatlistContainer1: {
    width: 160,
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
