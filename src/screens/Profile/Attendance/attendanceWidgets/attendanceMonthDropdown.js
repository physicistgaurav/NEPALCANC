import React, { useRef, useState } from "react";
import { View, StyleSheet, TouchableOpacity, SafeAreaView, TextInput, FlatList, Image, ScrollView } from "react-native";
import { Icon, Text } from "react-native-elements";

const attendanceDropdownMonthData = [
    { sn: '1', category: 'Baishakh' },
    { sn: '2', category: 'Jestha' },
    { sn: '3', category: 'Ashadh' },
    { sn: '4', category: 'Shrawan' },
    { sn: '5', category: 'Bhadra' },
    { sn: '6', category: 'Ashwin' },
    { sn: '7', category: 'Kartik' },
    { sn: '8', category: 'Mangsir' },
    { sn: '9', category: 'Poush' },
    { sn: '10', category: 'Magh' },
    { sn: '11', category: 'Falgun' },
    { sn: '12', category: 'Chaitra' },
]

const AttendanceMonthDropdownScreen = () => {
    const [search, setSearch] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const [data, setData] = useState(attendanceDropdownMonthData);
    const [selectedMonth, setSelectedMonth] = useState('Select Month');
    const searchRef = useRef();
    const onSearch = search => {
        if (search !== '') {
            let tempData = data.filter(item => {
                return item.category.toLowerCase().indexOf(search.toLowerCase()) > -1;
            });
            setData(tempData);
        } else {
            setData(attendanceDropdownMonthData);
        }
    }
    return (
        <SafeAreaView>
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
                <TextInput placeholder="Search" value={search} ref={searchRef} style={styles.searchInput} onChangeText={tet => {
                    onSearch(tet);
                    setSearch(tet);
                }} />
                <ScrollView>
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity
                                    style={styles.monthItem}
                                    onPress={() => {
                                        setSelectedMonth(item.category);
                                        setIsClicked(!isClicked);
                                        onSearch('');
                                        setSearch('');
                                    }}
                                >
                                    <Text>{item.category}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </ScrollView>
            </View>
            ) : null}

        </SafeAreaView>
    );
};
export default AttendanceMonthDropdownScreen;
const styles = StyleSheet.create({
    btncontainer: {
        backgroundColor: "white",
        borderWidth: 0.5,
        height: 25,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        justifyContent: "space-between",
        marginTop: 10,
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
        height: 200,
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