import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Header, Icon, Card, Divider } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const regionsData = [
  {
    name: "Bagmati",
    branchType: "NCBA",
    location: "Kathmandu",
    imageUri:
      "https://www.seoulsolution.kr/sites/default/files/images/Bagmati.jpg",
  },
  {
    name: "Mahakali",
    branchType: "NPMA",
    location: "Attariya",
    imageUri:
      "https://nepaltraveller.com/laravel-filemanager/photos/shares/Mahakali.jpg",
  },
  {
    name: "Narayani",
    branchType: "NPNA",
    location: "Chitwan",
    imageUri:
      "https://cdn.pixabay.com/photo/2018/09/07/04/00/kulekhani-3659896_960_720.jpg",
  },
  {
    name: "Mechi",
    branchType: "NPME",
    location: "Birtamod",
    imageUri:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/fe/70/8f/breathtaking-view-of.jpg?w=500&h=400&s=1",
  },
  {
    name: "Gandaki",
    branchType: "NPGD",
    location: "Pokhara",
    imageUri:
      "https://www.india.com/wp-content/uploads/2018/08/Kali-Gandaki-main.jpg",
  },
  {
    name: "Koshi",
    branchType: "NPKO",
    location: "Itahari",
    imageUri:
      "https://indiaclimatedialogue.net/wp-content/uploads/2016/06/Tsho-Rolpa-Glacial-lake_web.jpg",
  },
];

const RegionScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
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
        <View style={styles.subContainer}>
          <View style={styles.backButton}>
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
              <Text style={styles.backText}>{"< Home"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.downbody}>
            <Text style={styles.bodyhead}>Regions</Text>
            <Divider
              style={{ color: "grey", width: 370, margin: 5, paddingLeft: 5 }}
            ></Divider>
            <View style={styles.cardContainer}>
              {regionsData.map((region, index) => (
                <Card key={index} containerStyle={styles.card}>
                  <View style={styles.cardContent}>
                    <Image
                      style={{
                        width: SCREEN_WIDTH * 0.3,
                        height: SCREEN_WIDTH * 0.3,
                        borderRadius: 10,
                        marginRight: 10,
                        paddingRight: 50,
                      }}
                      source={{ uri: region.imageUri }}
                    />
                    <View style={styles.cardInfoContainer}>
                      <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>{region.name}</Text>
                        <Text style={styles.cardSubtitle}>
                          {region.branchType}
                        </Text>
                        <Text style={styles.cardSubtitle}>
                          {region.location}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Card>
              ))}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegionScreen;

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
  },
});
