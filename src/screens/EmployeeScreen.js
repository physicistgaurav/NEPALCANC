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

// import { Table, Row, Rows } from "react-native-table-component";

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

const EmployeeScreen = ({ navigation }) => {
  //TABLE
  // const [tableHead, setTableHead] = useState([
  //   "ID",
  //   "Name",
  //   "Dept.",
  //   "Design.",
  //   "Branch",
  // ]);

  // const [tableData, setTableData] = useState([
  //   ["27", "Gaurav", "Finance", "Assistant", "Dhulikhel"],
  //   ["13", "Sanzay", "IT", "Ass. Manager", "Tinkune"],
  //   ["142", "Nirajan", "Operation", "Executive", "External"],
  //   ["66", "Suvam", "IT", "Dep. Director", "Tinkune"],
  //   ["19", "Deepak", "IT", "Manager", "Tinkune"],
  //   ["141", "Pooja", "Return", "Trainee", "Tulsipur"],
  //   ["105", "Sagar", "Operation", "Officer", "Itahari"],
  //   ["33", "Buddha", "Follow Up", "Regional Manager", "Pokhara"],
  //   ["86", "Prabin", "BD", "Logistic", "Syanja"],
  //   ["74", "Manish", "Pickup", "Supervisor", "Damak"],
  // ]);

  const employeesData = [
    {
      name: "Gaurav Rizal",
      id: "NCC027",
      phone: 9825339449,
      email: "gauravrijal03@gmail.com",
      department: "Logistic",
      designation: "Trainee",
      branch: "Dhulikhel",
      imageUri:
        "https://media.licdn.com/dms/image/C4E03AQGTl1oRBYjkFg/profile-displayphoto-shrink_800_800/0/1621526112245?e=2147483647&v=beta&t=Nk2LPUbbGiJUlQRJUFHEEbXcrm-9DvEYQl8fjtWY04w",
    },
    {
      name: "Deepak Sapkota",
      id: "NCC001",
      phone: 9821413030,
      email: "deepak.sapkota@gmail.com",
      department: "IT",
      designation: "Manager",
      branch: "Tinkune",
      imageUri:
        "https://hris.nepalcangroup.com/media/pics/NCM_045_DS_Photo_Cd4sBuG.jpg",
    },
    {
      name: "Nirajan Sahi",
      id: "NCG06",
      phone: 9826385325,
      email: "nirajan@thecanbrand.com",
      department: "Finance",
      designation: "Executive",
      branch: "External",
      imageUri:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Andrew_Tate_on_%27Anything_Goes_With_James_English%27_in_2021.jpg/640px-Andrew_Tate_on_%27Anything_Goes_With_James_English%27_in_2021.jpg",
    },

    {
      name: "Manish Baral",
      id: "NCC006",
      phone: 9877325287,
      email: "baral@yahoo.com",
      department: "Human Resources",
      designation: "Deputy Director",
      branch: "Syanja",
      imageUri:
        "https://pbs.twimg.com/profile_images/1355508721183383563/1OJbQrOl_400x400.jpg",
    },

    {
      name: "Prabin Lamsal",
      id: "NCC728",
      phone: 9852453762,
      email: "lamsalprabin@thecan.com",
      department: "Follow Up",
      designation: "Officer",
      branch: "Butwal",
      imageUri:
        "https://media.licdn.com/dms/image/C5603AQGsDGtyXHR8xw/profile-displayphoto-shrink_800_800/0/1652245791248?e=2147483647&v=beta&t=jNsLUvH09SuH63hzhKQjMZMSl5AVEacc5CUgsU4zgu8",
    },
    {
      name: "Sagar Paudel",
      id: "NCC126",
      phone: 9840324562,
      email: "sagarpaudel@ncc.com",
      department: "Finance",
      designation: "Regional Manager",
      branch: "Damak",
      imageUri:
        "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/313912713_2163291437164965_1078182382731031204_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=k9elZArqGBIAX9c2Vo2&_nc_ht=scontent.fktm8-1.fna&oh=00_AfCrbjbBReTHs2s0OMb8YpvWSaW47uEbXj3DZNNu8NLCUQ&oe=6428B8D7",
    },
    {
      name: "Buddha Mani Gautam",
      id: "NCC078",
      phone: 9821413030,
      email: "Buddhag@gmail.com",
      department: "Pick Up",
      designation: "CBDO",
      branch: "Biratnagar",
      imageUri:
        "https://scontent.fktm8-1.fna.fbcdn.net/v/t39.30808-6/330108083_218020070740503_1583788446958705812_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=81yaOC5XY64AX8IPwTq&_nc_ht=scontent.fktm8-1.fna&oh=00_AfDl3gKIGW4IjQ6G3H24_hyYY39Hrj0Ni-hl5ZSoSFmR1Q&oe=642901F9",
    },
    {
      name: "Aarush Timalsina",
      id: "NCC001",
      phone: 9821413030,
      email: "tirpe@nepalgroup.com",
      department: "IT",
      designation: "CEO",
      branch: "Kathmandy",
      imageUri: "https://pbs.twimg.com/media/ElGzZs4WkAAtRws.jpg",
    },
    {
      name: "Dipesh Bhandari",
      id: "NCC001",
      phone: 9821413030,
      email: "deepak.sapkota@gmail.com",
      department: "IT",
      designation: "Manager",
      branch: "Tinkune",
      imageUri:
        "data:image/jpeg;base64,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",
    },
    {
      name: "Girwan Budhathoki",
      id: "NCC361",
      phone: 9821413030,
      email: "girwan@thecangroup.com",
      department: "Doctor",
      designation: "Trainee",
      branch: "Palpa",
      imageUri:
        "https://cdns-images.dzcdn.net/images/artist/a423dd42b7394eeacc882be8ac633eee/500x500.jpg",
    },
    {
      name: "Ngamesh Raj Bhandari",
      id: "NCC342",
      phone: 9812345724,
      email: "ng123@nepalcangroup.com",
      department: "Operation",
      designation: "Officer",
      branch: "NewRoad",
      imageUri:
        "data:image/jpeg;base64,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",
    },
  ];

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
              <Text style={styles.backText}>
                {"< Home / Feedback / Document Center"}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.downbody2}>
            <Text style={styles.bodyhead}>Nepal Can Employees</Text>
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
          <View style={styles.cardContainer}>
            {employeesData.map((employees, index) => (
              <Card key={index} containerStyle={styles.card}>
                <View style={styles.cardContent}>
                  <Image
                    style={{
                      width: SCREEN_WIDTH * 0.2,
                      height: SCREEN_WIDTH * 0.2,
                      borderRadius: 40,
                      paddingRight: 10,
                    }}
                    source={{ uri: employees.imageUri }}
                  />
                  <View style={styles.cardInfoContainer}>
                    <View style={styles.cardInfo}>
                      <Text style={styles.cardTitle}>{employees.name}</Text>
                      <Text style={styles.cardSubtitle}>{employees.id}</Text>
                      <Text style={styles.cardSubtitle}>{employees.phone}</Text>
                      <Text style={styles.cardSubtitle}>{employees.email}</Text>
                      <Text style={styles.cardSubtitle}>
                        {employees.department}
                      </Text>
                      <Text style={styles.cardSubtitle}>
                        {employees.designation}
                      </Text>
                      <Text style={styles.cardSubtitle}>
                        {employees.branch}
                      </Text>
                    </View>
                  </View>
                </View>
              </Card>
            ))}
          </View>
          {/* <View style={styles.tableConatiner}>
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
          </View> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default EmployeeScreen;

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
