import React, { useState } from "react";
import { Text, Button } from "react-native-elements";
import { StyleSheet, FlatList, Dimensions, View, TouchableOpacity, Modal, ScrollView, Keyboard } from "react-native";
import AttendanceOnlyScreen from "./attendanceOnlyScreen";
import AppOnly from "../../widgets/dropdown";
import AttendanceMonthDropdownScreen from "../attendanceWidgets/attendanceMonthDropdown";
import AttendanceTypeDropdownScreen from "../attendanceWidgets/attendanceTypeDropdown";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const AttendanceScreen = () => {
  const attendanceScreenDatelist = [

    { date: '1-1-2079' },
    { date: '2-1-2079' },
    { date: '3-1-2079' },
    { date: '4-1-2079' },
    { date: '5-1-2079' },
    { date: '6-1-2079' },
    { date: '7-1-2079' },
    { date: '8-1-2079' },
    { date: '9-1-2079' },
    { date: '10-1- 2079' },
    { date: '11-1- 2079' },
    { date: '12-1- 2079' },
    { date: '13-1- 2079' },
    { date: '14-1- 2079' },
    { date: '15-1- 2079' },
    { date: '16-1- 2079' },
    { date: '17-1- 2079' },
    { date: '18-1- 2079' },
    { date: '19-1- 2079' },
    { date: '20-1- 2079' },
    { date: '21-1- 2079' },
    { date: '22-1- 2079' },
    { date: '23-1- 2079' },
    { date: '24-1- 2079' },
    { date: '25-1- 2079' },
    { date: '26-1- 2079' },
    { date: '27-1- 2079' },
    { date: '28-1- 2079' },
    { date: '29-1- 2079' },
    { date: '30-1- 2079' },

  ]
  const [showMonthModal, setShowMonthModal] = useState(false);
  const [showEmployeeAttendanceModal, setShowEmployeeAttendancModal] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <View>
      <AttendanceOnlyScreen />
      <View style={styles.btncontainer}>
        <TouchableOpacity onPress={() => setShowMonthModal(true)}>
          <Text style={styles.btnText}> Add Attendance</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Modal visible={showMonthModal} transparent={true}>
          <View style={styles.modalView1}>
            <Text style={{ fontSize: 40, color: 'red' }}>Choose Month</Text>
            <View style= {styles.dropdownContainer}>
               <AttendanceMonthDropdownScreen />
              </View>
            <View style={[styles.oneLine, { justifyContent: "space-between", padding: 10 }]}>
              <Button title='Cancel' color='red' onPress={() => setShowMonthModal(false)} />
              <Button title='Submit' color='red' onPress={() => { [setShowMonthModal(false), setShowEmployeeAttendancModal(true)] }} />
            </View>
          </View>
        </Modal>
      </View>
      <View>
        <Modal visible={showEmployeeAttendanceModal} transparent={true}>
          <View style={styles.modalView2}>
              <Text style={{ fontSize: 35, color: 'red' }}>Employee Attendance</Text>
              <ScrollView horizontal >

              <View>
                <FlatList
                  data={attendanceScreenDatelist}
                  renderItem={({ item }) => {
                    return (
                      <View>
                        <View style={styles.oneLine}>
                          <View style={styles.dateContainer}>
                          <Text>{item.date}</Text></View>
                          <AttendanceTypeDropdownScreen />
                          <AttendanceTypeDropdownScreen />
                          <AttendanceTypeDropdownScreen />
                          <AttendanceTypeDropdownScreen />
                          <AttendanceTypeDropdownScreen />
                          <AttendanceTypeDropdownScreen />
                        </View>
                      </View>
                    );
                  }}
                />
              </View>
            </ScrollView>
            <View style={[styles.oneLine, { justifyContent: "space-between", padding: 10 }]}>
              <Button title='Cancel' color='red' onPress={() => {[setShowEmployeeAttendancModal(false),setShowMonthModal(true)]}} />
              <Button title='Submit' color='red' onPress={() => { [setShowEmployeeAttendancModal(false)] }} />
            </View>
          </View>
        </Modal>
      </View>
    </View>)
};
export default AttendanceScreen;
const styles = StyleSheet.create({
  btncontainer: {
    backgroundColor: "green",
    height: 30,
    marginLeft: 15,
    marginRight: 15,
    marginTop: SCREEN_HEIGHT - 100,
    marginBottom: SCREEN_HEIGHT,
    position: "absolute",
    left: 0,
    right: 0,
    borderRadius: 10,
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    alignSelf: "center",
    fontSize: 15,
    fontWeight: "bold",
  },
  modalView1: {
    height: 350,
    width: '90%',
    borderRadius: 25,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    margin: '5%',
    backgroundColor: "#e6ffff",
  },
  dropdownContainer:{
    height: '70%'
  },
  modalView2: {
    height: SCREEN_HEIGHT-80,
    borderRadius: 25,
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    margin: '5%',
    backgroundColor: "#e6ffff",
  },
dateContainer:{
width:70,
alignItems: "center",
justifyContent:"center",
marginTop:10,
marginRight:10
},
  oneLine: {
    flexDirection: "row",
  },
})
