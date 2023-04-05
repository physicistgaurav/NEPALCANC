import React, { useRef, useState } from "react";
import { View, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, FlatList, Image, ScrollView } from "react-native";
import { Text } from "react-native-elements";

const attendanceTypeDropdownData = [
    { sn: '1', category: 'WorkDay' },
    { sn: '2', category: 'Weekend' },
    { sn: '3', category: 'Leave' },
    { sn: '4', category: 'Public Holiday' },
    { sn: '5', category: 'Not Started' },
    { sn: '6', category: 'Seperated' },
]

const AttendanceTypeDropdownScreen = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [data] = useState(attendanceTypeDropdownData);
    const [selectedMonth, setSelectedMonth] = useState('Select Type');

    return (
        <SafeAreaView>
            <View>
                <TouchableOpacity
                    onPress={() => { setIsClicked(!isClicked) }}>
                    <View style={[styles.btncontainer, styles.oneLine]}>
                        <Text style={styles.btnText}> {selectedMonth}</Text>
                        {isClicked ? (<Image style={{ height: 10, width: 10 }} source={require("../../../../../assets/upload.png")} />
                        ) : (<Image style={{ height: 10, width: 10 }} source={require("../../../../../assets/dropdown.png")} />
                        )}
                    </View>
                </TouchableOpacity>
                {isClicked ? (<View style={styles.dropdownArea}>
                    <FlatList
                        data={data}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    style={styles.monthItem}
                                    onPress={() => {
                                        setSelectedMonth(item.category);
                                        setIsClicked(!isClicked);
                                    }}
                                >
                                    <Text>{item.category}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
                ) : null}
                {/* function Clicked(props) {
                    setOnlyClicked = props.ssetOnlyClicked;
                    if (setOnlyClicked) {
                        <Text>{'Nirajan'}</Text>
                        
                    }
                    
                }
                
                null}
                 */}
            </View>
        </SafeAreaView>
    );
};
export default AttendanceTypeDropdownScreen;
const styles = StyleSheet.create({
    btncontainer: {
        width: 100,
        backgroundColor: "white",
        borderWidth: 0.5,
        height: 25,
        paddingLeft: 5,
        paddingRight: 5,
        borderRadius: 10,
        justifyContent: "space-between",
        marginTop: 10,
        marginRight: 15,
        alignItems: "center"
    },
    btnText: {
        color: "black",
        fontSize: 15,
    },
    oneLine: {
        flexDirection: "row",
    },
    dropdownArea: {
        width: '100%',
        height: 120,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignSelf: "center"
    },
    searchInput: {
        width: '90%',
        height: 25,
        borderRadius: 10,
        borderWidth: 0.5,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 5,
        paddingLeft: 10
    },
    monthItem: {
        width: '85%',
        height: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#8e8e8e',
        alignSelf: "center",
        justifyContent: 'center'
    }
})