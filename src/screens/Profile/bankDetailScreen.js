import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { Text } from "react-native-elements";

const BankDetailScreen = () => {
  const bankDetail = [
    {
      sn: "Bank Name",
      category: "Nic Asia Bank",
    },
    {
      sn: "Bank account name",
      category: "3987856633524001",
    },
    {
      sn: "Bank account number",
      category: "Nirajan shahi",
    },
  ];
  return (
    <FlatList
      style={styles.FlatList}
      vertical
      data={bankDetail}
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
export default BankDetailScreen;
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
    width: 170,
    backgroundColor: "white",
  },
  oneLine: {
    flexDirection: "row",
  },
});
