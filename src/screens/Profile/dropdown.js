import React, { useRef, useState } from "react";
import { View, StyleSheet, TouchableOpacity,  SafeAreaView, TextInput, FlatList } from "react-native";
import { Icon, Text } from "react-native-elements";
const dropdownData = [
    { sn: '1', category: 'Nirajan' },
    { sn: '2', category: 'NirajanN' },
    { sn: '3', category: 'NirajanNi' },
    { sn: '4', category: 'NirajanNir' },
    { sn: '4', category: 'asia' },

]

const DropdownScreen = () => {
    const [search, setSearch] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const [data, setData] = useState(dropdownData);
    const [selectedCountry, setSelectedCountry] = useState('Select Country');
    const searchRef = useRef();
    const onSearch = search => {
        if (search !== '') {
            let tempData = data.filter(item => {
              return item.category.toLowerCase().indexOf(search.toLowerCase()) > -1;
            });
            setData(tempData);
          } else {
            setData(dropdownData);
          }
    }

    return (
        <SafeAreaView>
            <TouchableOpacity
                onPress={() => { setIsClicked(!isClicked) }}>
                <View style={[styles.btncontainer, styles.oneLine]}>
                    <Text style={styles.btnText}> {selectedCountry}</Text>
                    {isClicked ? (<Icon name="add" />
                    ) : (<Icon name="menu" />
                    )}
                </View>
            </TouchableOpacity>
            {isClicked ? (<View style={styles.dropdownArea}>
                <TextInput placeholder="Search.." value={search} ref={searchRef} style={styles.searchInput} onChangeText={tet => {
                    onSearch(tet);
                    setSearch(tet);
                }} />
                <FlatList
                    // style={styles.FlatList}
                    // vertical
                    data={data}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableOpacity
                                style={styles.countryItem}
                                onPress={() => {
                                    setSelectedCountry(item.category);
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
            </View>
            ) : null}

        </SafeAreaView>
    );
};
export default DropdownScreen;
const styles = StyleSheet.create({
    btncontainer: {
        backgroundColor: "white",
        borderWidth: 0.9,
        height: 50,
        marginLeft: 50,
        marginRight: 50,
        padding: 15,
        borderRadius: 8,
        justifyContent: "space-between",
        marginTop: 30
    },
    btnText: {
        color: "black",
        alignSelf: "center",
        justifyContent: "center",
        fontSize: 16,
        fontWeight: "bold"
    },
    textStyle: {
        fontSize: 20,
        color: "black",
    },
    oneLine: {
        flexDirection: "row",
    },
    dropdownArea: {
        width: '70%',
        height: 300,
        borderRadius: 10,
        marginTop: 20,
        backgroundColor: '#fff',
        elevation: 5,
        alignSelf: "center"
    },
    searchInput: {
        width: '90%',
        height: 50,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#8e8e8e',
        alignSelf: 'center',
        marginTop: 20,
        paddingLeft: 15



    },
    countryItem: {
        width: '70%',
        height: 50,
        borderBottomWidth: 0.9,
        borderBottomColor: '#8e8e8e',
        alignSelf: "center",
        justifyContent: 'center'
    }

})