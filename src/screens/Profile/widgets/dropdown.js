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
const countries = [
  { country: "Nirajan", code: "93", iso: "AF" },
  { country: "NirajanN", code: "355", iso: "AL" },
  { country: "NirajanNi", code: "213", iso: "DZ" },
  { country: "American Samoa", code: "1-684", iso: "AS" },
  { country: "NirajanNir", code: "376", iso: "AD" },
  { country: "asia", code: "244", iso: "AO" },
  { country: "Anguilla", code: "1-264", iso: "AI" },
];
const AppOnly = () => {
  const [search, setSearch] = useState("");
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(countries);
  const [selectedCountry, setSelectedCountry] = useState("");
  const searchRef = useRef();
  const onSearch = (search) => {
    if (search !== "") {
      let tempData = data.filter((item) => {
        return item.country.toLowerCase().indexOf(search.toLowerCase()) > -1;
      });
      setData(tempData);
    } else {
      setData(countries);
    }
  };
  return (
    <View style={{ flex: 0 }}>
      <TouchableOpacity
        style={{
          width: "100%",
          height: 30,
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
        <Text style={{ fontWeight: "600" }}>
          {selectedCountry == "" ? "Select Country" : selectedCountry}
        </Text>
        {clicked ? (
          <Image
            source={require("../../../../assets/favicon.png")}
            style={{ width: 20, height: 20 }}
          />
        ) : (
          <Image
            source={require("../../../../assets/favicon.png")}
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
                    setSelectedCountry(item.country);
                    setClicked(!clicked);
                    onSearch("");
                    setSearch("");
                  }}
                >
                  <Text style={{ fontWeight: "600" }}>{item.country}</Text>
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
  container2: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: "transparent",
  },
  modalView: {
    height: SCREEN_HEIGHT - 250,
    backgroundColor: "white",
    margin: SCREEN_WIDTH - 400,
    elevation: 20,
    borderRadius: 25,
    padding: 30,
    backgroundColor: "lightblue",
  },
  btncontainer: {
    backgroundColor: "blue",
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: SCREEN_HEIGHT - 80,
    borderRadius: 8,
  },
  btnText: {
    color: "white",
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  textStyle: {
    fontSize: 20,
    color: "black",
  },
  oneLine: {
    flexDirection: "row",
  },
});
export default AppOnly;
