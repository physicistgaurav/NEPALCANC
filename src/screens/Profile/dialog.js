import React from "react";
import { View, Button, Modal, StyleSheet,Text } from "react-native";
const DialogScreen = () => {
  <View style={[styles.container,styles.main]}>
    <Modal 
    transparent={true}
    >
      <View style={styles.centerView}>
        <View style={styles.modalView}>
          <Text>Hello</Text>
        </View>

      </View>
    </Modal>
    <View style={styles.buttonView} ><Button title="Open Modal" /></View>
  </View>
}
export default DialogScreen;
const styles = StyleSheet.create({
  container: {
    height:50,
    width: 250,
    backgroundColor: 'red'

  },
  main: {
    flex: 1
  },
  buttonView:{
    flex: 1,
    justifyContent:'flex-end'
  },
  centerView:{
    flex:1,
    justifyContent: "center",
    alignContent:"center",
  },
  modalView: {
    backgroundColor: 'skyblue',
    padding: 30,
    borderRadius: 20

  }
});