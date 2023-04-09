import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import { Text } from "react-native-elements";

const countries = [
  { SN: "---------" },
  { SN: "Best Employee Award" },
  { SN: "Branch Operation Course Certificate" },
  { SN: "Certificate of Achievement" },
  { SN: "Certificate of Achievement (Futsal Tour)" },
  { SN: "Confirmation Letter" },
  { SN: "CV" },
  { SN: "Education" },
  { SN: "Employee Contract" },
  { SN: "Experience Letter" },
  { SN: "Explanation Letter" },
  { SN: "ID" },
  { SN: "ID-Citizenship" },
  { SN: "ID-Driver License" },
  { SN: "ID-PAN Card" },
  { SN: "ID-Passport" },
  { SN: "Insurance" },
  { SN: "Intern contract" },
  { SN: "Internship Completion Letter" },
  { SN: "Job Offer" },
  { SN: "Letter" },
  { SN: "Letter for Expenses of Reimbursement" },
  { SN: "NDA" },
  { SN: "No Objection Letter" },
  { SN: "Other" },
  { SN: "Personal" },
  { SN: "Photo" },
  { SN: "Position Revision" },
  { SN: "Probation Extension Letter" },
  { SN: "Promotion Letter" },
  { SN: "Re-designed" },
  { SN: "Reference Letter" },
  { SN: "Reimbursement" },
  { SN: "Reinstatement" },
  { SN: "Release Letter" },
  { SN: "Resigned Letter" },
  { SN: "Salary Certificate" },
  { SN: "SSF Medical Claim Letter" },
  { SN: "SSF Release Letter" },
  { SN: "Termination Letter" },
  { SN: "Training Certificate" },
  { SN: "Transfer Letter" },
  { SN: "Vehicle-Blue Book" },
  { SN: "Voter ID" },
  { SN: "Warning Letter" },

];
const AttendanceCategoryDropdown = () => {
  const [search, setSearch] = useState("");
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState(countries);
  const [selectedCountry, setSelectedCountry] = useState("");
  const searchRef = useRef();
  const onSearch = (search) => {
    if (search !== "") {
      let tempData = data.filter((item) => {
        return item.SN.toLowerCase().indexOf(search.toLowerCase()) > -1;
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
          <ScrollView nestedScrollEnabled={true}>
            <FlatList
              style={styles.FlatList}
              data={data}
              renderItem={({ item, index }) => {
                return (
                  <TouchableOpacity
                    style={styles.searchingContainer}
                    onPress={() => {
                      setSelectedCountry(item.SN);
                      setClicked(!clicked);
                      onSearch("");
                      setSearch("");
                    }}
                  >
                    <Text style={{ fontWeight: "600" }}>{item.SN}</Text>
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
    height: 200,
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
    width: "75%",
    height: 25,
    backgroundColor: 'transparent',
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderColor: "#8e8e8e",
    marginLeft: 20,
  },
});
export default AttendanceCategoryDropdown;
