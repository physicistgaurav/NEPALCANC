import { TextInput } from "@react-native-material/core";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Alert,
} from "react-native";

import { Card, Header, Divider } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import DepartmentDropDownMenu from "./Profile/widgets/departmentdropdown";
import ResponsibleDropDownMenu from "./Profile/widgets/responsibledropdown";

import { firebase } from "../../firebase";
import { async } from "@firebase/util";
import { doc, QuerySnapshot } from "@firebase/firestore";

const TicketFormScreen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [items, setItems] = useState([
    { label: "low", value: "1" },
    { label: "mid", value: "2" },
    { label: "high", value: "3" },
    { label: "critical", value: "4" },
  ]);

  const ticketAdd = firebase.firestore().collection("Tickets");
  const [addTitle, setaddTitle] = useState("");
  const [addDescription, setAddDescription] = useState("");
  const [addRemarks, setAddRemarks] = useState("");
  const [addDepartment, setAddDepartment] = useState("");
  const [addResponsible, setAddResponsible] = useState("");
  const [addPriority, setAddPriority] = useState("");

  const addField = () => {
    if (addTitle && addTitle.length > 0) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();

      const data = {
        title: addTitle,
        description: addDescription,
        remarks: addRemarks,
        priority: items.find((el) => el?.value === addPriority)?.label,
        department: addDepartment,
        responsible: addResponsible,
        createdAt: timestamp,
      };

      Alert.alert(
        "Data Sent",
        "Your data has been sent in firebase successfully!"
      );

      ticketAdd
        .add(data)
        .then((res) => {
          setaddTitle("");
          setAddDescription("");
          setAddPriority("");
          setAddRemarks("");
          setAddDepartment("");
          setAddResponsible("");
          Keyboard.dismiss();
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
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
          <View style={styles.body}>
            <Text style={styles.heading}>Create New Ticket</Text>
            <Text style={styles.formtitletexts}>Title</Text>
            <TextInput
              value={addTitle}
              style={styles.formtitle}
              placeholder="Enter Title"
              placeholderTextColor="grey"
              inputContainerStyle={{
                borderBottomWidth: 0,
              }}
              backgroundColor="white"
              focusColor="blue"
              onChangeText={(title) => {
                setaddTitle(title);
              }}
            ></TextInput>
            <Text style={styles.formtitletexts}>Description:</Text>
            <TextInput
              value={addDescription}
              style={styles.formtitle}
              placeholder="Enter Description"
              placeholderTextColor="grey"
              // label="title"
              backgroundColor="white"
              underlineColorAndroid="transparent"
              // focusColor="blue"
              onChangeText={(description) => {
                setAddDescription(description);
              }}
            ></TextInput>

            <Text style={styles.formtitletexts}>Department:</Text>
            <DepartmentDropDownMenu
              department={addDepartment}
              onChangeDepartment={setAddDepartment}
            />

            <Text style={styles.formtitletexts}>Responsible:</Text>

            <ResponsibleDropDownMenu
              responsible={addResponsible}
              onChangeResponsible={setAddResponsible}
            />
            <Text style={styles.formtitletexts}>Priority:</Text>
            <DropDownPicker
              placeholder="Select priority"
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              // setItems={setItems}
              onChangeValue={(value) => setAddPriority(value)}
            />
            <Text style={styles.formtitletexts}>Remarks:</Text>
            <TextInput
              value={addRemarks}
              style={styles.formtitle}
              placeholder="Enter Remarks"
              placeholderTextColor="grey"
              // label="title"
              backgroundColor="white"
              focusColor="blue"
              onChangeText={(remarks) => {
                setAddRemarks(remarks);
              }}
            ></TextInput>
            <TouchableOpacity style={styles.btn} onPress={addField}>
              <FontAwesome
                name="send"
                size={20}
                color="#8ec7cf"
                style={styles.print}
              />
              <Text style={styles.btntext}>submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TicketFormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    margin: 20,
  },
  heading: {
    color: "crimson",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 3,
  },
  formtitletexts: {
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
  },
  formtitle: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 0.3,
    paddingHorizontal: 10,
    marginBottom: 20,
  },

  btn: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#8ec7cf",
    width: 180,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
  },
  print: {
    marginRight: 10,
    paddingLeft: 5,
  },
  btntext: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#8ec7cf",
  },
  dropdownselector: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#8e8e8e",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  icon: {
    width: 15,
    height: 15,
  },
  dropdownArea: {
    width: "90%",
    height: 300,
    borderRadius: 10,
    marginTop: 20,

    backgroundColor: "red",
    elevation: 5,
  },
  searchInput: {
    width: "100%",
    backgroundColor: "blue",
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "blue",
    marginTop: 10,
  },
});
