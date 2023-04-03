import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Modal,
  Dimensions,
  StyleSheet,
} from "react-native";
import { Icon, Text } from "react-native-elements";
import AppOnly from "./widgets/dropdown";
import DocumentOnlyScreen from "./documentonlyscreen";
import { color } from "@rneui/base";
import { TextInput } from "react-native-paper";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const DocumentScreen = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.container2}>
      <DocumentOnlyScreen />
      <View>
        <Modal visible={showModal} transparent={true}>
          <View style={styles.modalView}>
            <Text style={{ fontSize: 40, color: 'red' }}>Upload Employee Documents</Text>
            <Text style={{ fontSize: 20 }}>Employee :</Text>
            <AppOnly />
            <Text style={{ fontSize: 20 }}>Category :</Text>
            <AppOnly />
            <Text style={{ fontSize: 20 }}>Label :</Text>
            <TextInput style={{
              width: "100%",
              height: 25,
              borderWidth: 0.5,
              alignSelf: "center",
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              // paddingLeft: 15,
              // paddingRight: 15,
              backgroundColor: 'white',
            }} />
            <Text style={{ fontSize: 20 }}>Expiry date :</Text>
            <TextInput style={{
              width: "100%",
              height: 25,
              borderWidth: 0.5,
              alignSelf: "center",
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              // paddingLeft: 15,
              // paddingRight: 15,
              backgroundColor: 'white',
            }} />
            <Text style={{ fontSize: 20 }}>Document :</Text>
            <TextInput style={{
              width: "100%",
              height: 25,
              borderWidth: 0.5,
              alignSelf: "center",
              marginTop: 10,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              // paddingLeft: 15,
              // paddingRight: 15,
              backgroundColor: 'white',
            }} />

            <TouchableOpacity onPress={() => setShowModal(false)}>
              <View style={styles.oneLine}>
                <Text>Hello</Text>
                <Icon name="add" />
                <Text style={styles.textStyle}>Add Documents</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
      <View style={styles.btncontainer}>
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <Text style={styles.btnText}> Add Documents</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default DocumentScreen;

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
    backgroundColor: "#e6ffff",
  },
  btncontainer: {
    backgroundColor: "red",
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: SCREEN_HEIGHT - 150,
    borderRadius: 8,
  },
  btncontainer: {
    backgroundColor: "red",
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: SCREEN_HEIGHT - 150,
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
