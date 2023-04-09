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
const styles = StyleSheet.create({
  container: {
    height: 35,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#ffffff'

  },
  insideContainer: {
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingBottom: 5,
    backgroundColor: '#e6ffff'
  },
  searchContainer: {
    width: "90%",
    height: 30,
    alignSelf: "center",
    borderWidth: 0.2,
    borderColor: "#8e8e8e",
    borderRadius: 7,
    marginTop: 10,
    paddingLeft: 10,
    backgroundColor: '#ffffff'
  },
  searchingContainer: {
    width: "30%",
    height: 25,
    backgroundColor: 'transparent',
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderColor: "#8e8e8e",
    marginLeft: 20,
  },
});
export default AttendanceMonthDropdownScreen;
