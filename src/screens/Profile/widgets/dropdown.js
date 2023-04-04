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
        style={styles.container
        }
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
          style={styles.insideContainer
          }
        >
          <TextInput
            placeholder="Search.."
            value={search}
            ref={searchRef}
            onChangeText={(txt) => {
              onSearch(txt);
              setSearch(txt);
            }}
            style={styles.searchContainer}
          />
          <FlatList
            numColumns={2}
            style={styles.FlatList}
            data={data}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={styles.searchingContainer}
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
      <View style={{ height: 10 }} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
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
  },
  insideContainer: {
    elevation: 5,
    height: 200,
    alignSelf: "center",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  searchContainer: {
    width: "95%",
    height: 30,
    alignSelf: "center",
    borderWidth: 0.2,
    borderColor: "#8e8e8e",
    borderRadius: 7,
    marginTop: 20,
    paddingLeft: 20,
  },
  searchingContainer: {
    width: "40%",
    alignSelf: "center",
    height: 30,
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderColor: "#8e8e8e",
    marginLeft: 15,
  },
});
export default AppOnly;
