import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
  FlatList,
} from "react-native";
import { Text } from "react-native-elements";

const countries = [
  { country: "............." },
  { country: "Nirajan shahi" },
];
const AttendanceEmployeeDropdown = () => {
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
            source={require("../../../../../assets/upload.png")}
            style={{ width: 10, height: 10 }}
          />
        ) : (
          <Image
            source={require("../../../../../assets/dropdown.png")}
            style={{ width: 10, height: 10 }}
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
          <ScrollView>
            <FlatList
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
          </ScrollView>
        </View>

      ) : null}
      <View style={{ height: 10 }} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 35,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#ffffff'

  },
  insideContainer: {
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingBottom: 5,
    backgroundColor: '#e6ffff'
  },
  searchContainer: {
    width: "90%",
    height: 30,
    alignSelf: "center",
    borderWidth: 0.2,
    borderColor: "#8e8e8e",
    borderRadius: 7,
    marginTop: 10,
    paddingLeft: 10,
    backgroundColor: '#ffffff'
  },
  searchingContainer: {
    width: "30%",
    height: 25,
    backgroundColor: 'transparent',
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderColor: "#8e8e8e",
    marginLeft: 20,
  },
});
export default AttendanceEmployeeDropdown;
