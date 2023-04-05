import { IconButton } from "@react-native-material/core";
import React from "react";
import {
    StyleSheet,
    FlatList,
    Text,
    View,
    Dimensions,
    Button,
    ScrollView,
} from "react-native";
import { Icon } from "react-native-elements";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

const AttendanceOnlyScreen = () => {
    const emergencyContact = [
        {
            sn: "1",
            name: 'Nirajan shahi',
            month: 'Chaitra',
            Worked: '15',
            holiday: '2',
            leave: '0',
            halfDay: '0',
            hours: '104',
            managerHrApprove: 'null',
            submitted: 'cross',
            actions: ''
        },
    ];
    return (
        <View>
            <View style={styles.screenContainer}>
                <ScrollView>
                    <FlatList
                        data={emergencyContact}
                        renderItem={({ item }) => {
                            return (
                                <View style={[styles.textStyle]}>
                                    <View style={[styles.flatlistContainer, styles.oneLine]}>
                                        <View style={styles.flatlistContainer1}>
                                            <Text style={styles.textStyle}>  SN</Text>
                                            <Text style={styles.textStyle}>  Name</Text>
                                            <Text style={styles.textStyle}>  Month</Text>
                                            <Text style={styles.textStyle}>  Holiday </Text>
                                            <Text style={styles.textStyle}>  Leave </Text>
                                            <Text style={styles.textStyle}>  Half Day </Text>
                                            <Text style={styles.textStyle}>  Hours </Text>
                                            <Text style={styles.textStyle}>  Manager Hr Approve </Text>
                                            <Text style={styles.textStyle}>  Submitted </Text>
                                        </View>
                                        <View style={{ width: 20 }} />
                                        <View>
                                            <Text style={styles.textStyle}> {item.sn}</Text>
                                            <Text style={styles.textStyle}>{item.name}</Text>
                                            <Text style={styles.textStyle}>{item.month}</Text>
                                            <Text style={styles.textStyle}>{item.holiday}</Text>
                                            <Text style={styles.textStyle}>{item.leave}</Text>
                                            <Text style={styles.textStyle}>{item.halfDay}</Text>
                                            <Text style={styles.textStyle}>{item.hours}</Text>
                                            <Text style={styles.textStyle}>{item.managerHrApprove}</Text>
                                            <Text style={styles.textStyle}>{item.submitted}</Text>



                                        </View>
                                    </View>
                                    <View style={styles.buttonContainer}>
                                        <Button title="Submit" color={'green'} />
                                        <IconButton icon={< Icon name='edit' color={'white'} />} backgroundColor='red' />
                                        <IconButton icon={< Icon name='people' color={'white'} />} backgroundColor='red' />
                                    </View>
                                </View>
                            );
                        }}
                    />
                </ScrollView>
                <View style={{ height: '16%' }} />
            </View>
        </View>

    );
};
export default AttendanceOnlyScreen;
const styles = StyleSheet.create({
    screenContainer: {
        height: SCREEN_HEIGHT,
        width: SCREEN_WIDTH,
        backgroundColor: "#fffafa",
    },
    flatlistContainer: {
        backgroundColor: "#e6ffff",
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        elevation: 2,
    },
    buttonContainer: {
        marginLeft: 15,
        flexDirection: "row-reverse"
    },
    flatlistContainer1: {
        width: 125,
        backgroundColor: "#ffffff",
    },
    oneLine: {
        flexDirection: "row",
    },
    textStyle: {
        fontSize: 18,
        color: "black",
    },
});

