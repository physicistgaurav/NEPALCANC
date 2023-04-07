import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Modal,
  Dimensions,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { Button, Text } from "react-native-elements";
import AppOnly from "../../widgets/dropdown";
import DocumentOnlyScreen from "./documentonlyscreen";
import { Divider, TextInput } from "react-native-paper";
import { ScreenHeight } from "@rneui/base";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const showAlert = () =>
  Alert.alert(
    "Alert Title",
    "My Alert Msg",
    [
      {
        text: "Cancel",
        onPress: () => Alert.alert("Cancel Pressed"),
        style: "cancel",
      },
    ],
    {
      cancelable: true,
      onDismiss: () =>
        Alert.alert(
          "This alert was dismissed by tapping outside of the alert dialog."
        ),
    }
  );

const ProfileDocumentScreen = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.container2}>
      <View style={styles.container1}>
        <DocumentOnlyScreen />
      </View>
      <View>
        <Modal visible={showModal} transparent={true}>
          <View style={styles.modalView}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={{ fontSize: 40, color: "red" }}>
                Upload Employee Documents
              </Text>
              <Text style={{ fontSize: 20 }}>Employee :</Text>
              <AppOnly />
              <Text style={{ fontSize: 20 }}>Category :</Text>
              <AppOnly />
              <Text style={{ fontSize: 20 }}>Label :</Text>
              <TextInput
                style={styles.textInput}
                underlineColor="transparent"
                activeUnderlineColor="false"
              />
              <Text style={{ fontSize: 20 }}>Expiry date :</Text>
              <TextInput
                style={styles.textInput}
                underlineColor="transparent"
                activeUnderlineColor="false"
              />
              <Text style={{ fontSize: 20 }}>Document :</Text>
              <TextInput
                style={styles.textInput}
                underlineColor="transparent"
                activeUnderlineColor="false"
              />
            </ScrollView>
            <View
              style={[
                styles.oneLine,
                { justifyContent: "space-between", padding: 10 },
              ]}
            >
              <Button
                title="Cancel"
                color="red"
                onPress={() => setShowModal(false)}
              />
              <Button
                title="Submit"
                color="red"
                onPress={() => {
                  [setShowModal(false), showAlert(true)];
                }}
              />
            </View>
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
export default ProfileDocumentScreen;

const styles = StyleSheet.create({
  container: {
    height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: "transparent",
  },
  container1: {
    height: ScreenHeight-100,
  },
  modalView: {
    height: "85%",
    width: "90%",
    elevation: 20,
    borderRadius: 25,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    margin: "5%",
    backgroundColor: "#e6ffff",
  },
  btncontainer: {
    backgroundColor: "#0096FF",
    height: 30,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: SCREEN_HEIGHT - 100,
    borderRadius: 10,
  },
  textInput: {
    width: "100%",
    height: 25,
    borderWidth: 0.5,
    marginTop: 10,
    backgroundColor: "white",
    marginBottom: 10,
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
