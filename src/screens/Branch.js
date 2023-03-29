import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Header, Divider, Card } from "react-native-elements";

import { Table, Row, Rows } from "react-native-table-component";

import { Dropdown } from "react-native-element-dropdown";

const SCREEN_WIDTH = Dimensions.get("window").width;
// const SCREEN_HEIGHT = Dimensions.get("window").height;

const MyHeader = () => {
  return (
    <Header
      leftComponent={{ icon: "menu", color: "#fff" }}
      centerComponent={{
        text: "Nepal Can",
        style: {
          color: "#fff",
          fontSize: 20,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 50,
        },
      }}
      rightComponent={{ text: "Hello, sir", style: { color: "#fff" } }}
    />
  );
};

const BranchScreen = ({ navigation }) => {
  //TABLE
  const [tableHead, setTableHead] = useState([
    "ID",
    "Name",
    "phone.",
    "Address.",
    "Region",
  ]);

  const [tableData, setTableData] = useState([
    ["BANS", "Bangadhi", "9801984435", "Bangadhi mun.", "Bheri"],
    ["CTRA", "Chatara", "9801984366", "DHARAN", "Koshi"],
    ["KALA", "Kalabanjar", "9801984116", "Kalabnjar", "Koshi"],
    ["KLINK", "Kalanki", "9801984017", "Kalanki", "Bagmati"],
    ["SIRA", "Siraha", "9801984516", "Siraha", "Sagarmatha"],
    ["SIDH", "Sidhuwa", "9810568890", "Sidhuwa", "Koshi"],
    ["CHSK", "Chainpur", "9812367303", "Chainpur", "Koshi"],
    ["JOMS", "Jomsom", "9846347798", "Jomsom", "Gandaki"],
    ["RUKU", "Rukumkot", "9843459842", "Rukumkot", "Rapti"],
    ["TBAS", "Tehrathum", "9849408447", "Tehrathum", "Koshi"],
  ]);

  const [search, setSearch] = React.useState("");

  const data = [
    { label: "10", value: "1" },
    { label: "25", value: "2" },
    { label: "50", value: "3" },
    { label: "100", value: "3" },
  ];

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <MyHeader />
        <View style={styles.subContainer}>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text style={styles.backText}>{"< Back / Home"}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.downbody2}>
            <Text style={styles.bodyhead}>Branches</Text>
            <Divider
              style={{ color: "grey", width: 370, margin: 2, paddingLeft: 5 }}
            ></Divider>
            <View style={styles.tableSearch}>
              <Text style={styles.bar1}> Show</Text>
              <Dropdown
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "10" : "..."}
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item) => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
                style={styles.dropdown}
              />
              <Text style={styles.bar1}>Entries</Text>
              <Text style={styles.bar2}>Search:</Text>
              <TouchableOpacity style={styles.inputView}>
                <TextInput
                  style={styles.TextInput}
                  placeholderTextColor="#003f5c"
                  onChangeText={(search) => setSearch(search)}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.tableConatiner}>
            <Table borderStyle={{ borderWidth: 2, borderColor: "#696664" }}>
              <Row
                data={tableHead}
                style={styles.head}
                textStyle={styles.textHead}
              />
              <Rows
                style={{ backgroundColor: "white" }}
                data={tableData}
                textStyle={styles.text}
              />
            </Table>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default BranchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  subContainer: {
    flex: 1,
    marginHorizontal: 5,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    backgroundColor: "#e9ecef",
    borderRadius: 5,
  },
  backText: {
    color: "#0257bf",
    fontSize: 16,
    margin: 12,
    // fontFamily: "ubuntu",
  },

  downbody: {
    marginVertical: 20,
    marginHorizontal: 10,
    backgroundColor: "#e9ecef",
    width: SCREEN_WIDTH - 30,
    borderRadius: 8,
  },
  bodyhead: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 10,
    color: "red",
    marginTop: 10,
  },
  tableConatiner: {
    flex: 1,
    padding: 16,
    backgroundColor: "#e9ecef",
    borderRadius: 8,
    margin: 10,
  },
  head: {
    height: 40,
    backgroundColor: "#e9ecef",
  },
  textHead: {
    margin: 6,
    fontSize: 14,
    fontWeight: "bold",
  },
  text: {
    margin: 6,
    fontSize: 10.9,
  },
  downbody2: {
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: "#e9ecef",
    width: SCREEN_WIDTH - 30,
    borderRadius: 8,
    marginTop: 10,
  },
  tableSearch: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
  },
  inputView: {
    height: 30,
    width: 100,
    backgroundColor: "white",
    borderRadius: 3,
    marginLeft: 15,
    alignSelf: "center",
  },
  TextInput: {
    height: 30,
    width: 100,
    flex: 1,
    padding: 10,
    alignSelf: "center",
  },
  bar1: {
    fontSize: 14,
    alignSelf: "center",
    padding: 3,
  },
  bar2: {
    fontSize: 14,
    alignSelf: "center",
    padding: 3,
    paddingLeft: 20,
  },
  dropdown: {
    height: 50,
    width: 70,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    margin: 3,
  },
  placeholderStyle: {
    fontSize: 12,
  },
  selectedTextStyle: {
    fontSize: 12,
  },
  cardContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
    marginHorizontal: 10,
    width: SCREEN_WIDTH - 50,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardInfo: {
    flex: 1,
  },
  cardInfoContainer: {
    paddingLeft: 50,
    flexDirection: "row",
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
    color: "#0257bf",
  },
  cardSubtitle: {
    fontSize: 16,
    color: "#8588c1",
  },
});
