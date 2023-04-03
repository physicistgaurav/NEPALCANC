import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Dimensions,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import { Icon, Text } from "react-native-elements";
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;
var DepartmentDropDownItems = [
  {
    id: 1,
    name: "IT",
  },
  {
    id: 2,
    name: "Finance",
  },
  {
    id: 3,
    name: "Human Resources",
  },
  {
    id: 4,
    name: "Operation",
  },
  {
    id: 5,
    name: "Operation",
  },
  {
    id: 6,
    name: "BD",
  },
];
const DepartmentDropDownMenu = ({ department, onChangeDepartment }) => {
  const [search, setSearch] = useState("");
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(DepartmentDropDownItems);
  const searchRef = useRef();
  const onSearch = (search) => {
    if (search !== "") {
      let tempData = data.filter((item) => {
        return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(DepartmentDropDownItems);
    }
  };
  return (
    <View style={{ flex: 0 }}>
      <TouchableOpacity
        style={{
          width: "100%",
          backgroundColor: "white",
          height: 50,
          borderRadius: 10,
          borderWidth: 0.5,
          alignSelf: "center",
          marginTop: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 15,
          paddingRight: 15,
        }}
        onPress={() => {
          setClicked(!clicked);
        }}
      >
        <Text style={{ fontWeight: "400" }}>
          {department == "" ? "Select Departnent" : department}
        </Text>
        {clicked ? (
          <Image
            source={require("../../../../assets/dropdown.png")}
            style={{ width: 20, height: 20 }}
          />
        ) : (
          <Image
            source={require("../../../../assets/dropdown.png")}
            style={{ width: 20, height: 20 }}
          />
        )}
      </TouchableOpacity>
      {clicked ? (
        <View
          style={{
            elevation: 5,
            marginTop: 20,
            height: 200,
            alignSelf: "center",
            width: "90%",
            backgroundColor: "#fff",
            borderRadius: 10,
          }}
        >
          <TextInput
            placeholder="Search.."
            value={search}
            ref={searchRef}
            onChangeText={(txt) => {
              onSearch(txt);
              setSearch(txt);
            }}
            style={{
              width: "90%",
              height: 50,
              alignSelf: "center",
              borderWidth: 0.2,
              borderColor: "#8e8e8e",
              borderRadius: 7,
              marginTop: 20,
              paddingLeft: 20,
            }}
          />

          <FlatList
            numColumns={2}
            style={styles.FlatList}
            data={data}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    width: "50%",
                    alignSelf: "center",
                    height: 50,
                    justifyContent: "center",
                    borderBottomWidth: 0.5,
                    borderColor: "#8e8e8e",
                    paddingLeft: 10,
                    paddingRight: 10,
                  }}
                  onPress={() => {
                    onChangeDepartment(item.name);
                    setClicked(!clicked);
                    onSearch("");
                    setSearch("");
                  }}
                >
                  <Text style={{ fontWeight: "600" }}>{item.name}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0,
    marginBottom: 10,
  },
  dropDownButton: {
    width: "95%",
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#C4C4C4",
    alignSelf: "center",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  dropDownButtonText: {
    fontWeight: "600",
    color: "#4A4A4A",
  },
  dropDownButtonIcon: {
    width: 20,
    height: 20,
    tintColor: "#4A4A4A",
  },
  dropDownContent: {
    elevation: 5,
    marginTop: 20,
    height: 200,
    alignSelf: "center",
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
  },
  dropDownSearchInput: {
    width: "90%",
    height: 50,
    alignSelf: "center",
    borderWidth: 1,
    borderColor: "#C4C4C4",
    borderRadius: 7,
    marginTop: 20,
    paddingLeft: 20,
  },
  dropDownListItem: {
    width: "50%",
    alignSelf: "center",
    height: 50,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderColor: "#C4C4C4",
    paddingLeft: 10,
    paddingRight: 10,
  },
  dropDownListItemText: {
    fontWeight: "600",
    color: "#4A4A4A",
  },
});

export default DepartmentDropDownMenu;
