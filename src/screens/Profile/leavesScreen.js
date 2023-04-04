import React, { useState } from "react";
import { View, StyleSheet, FlatList, Text, TouchableOpacity, ScrollView, Overlay, Button, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/FontAwesome';


const LeaveCard = (props)=> {
  return (
    (props.index % 2 == 0 ? 
      <View style={styles.card}>
      <View style={styles.reason}>
      <Text style={styles.title}>{props.reason}</Text>
      <Text>10 Days</Text>
      {props.status == "approved" ? <Icon name="square" size={30} color= "green"/> 
      : <Icon name="square" size={30} color="red"/>  
      }
      </View>

      <View style={styles.contents}>
        <Text style={styles.subTitle}>{props.startDate}</Text>
        <Icon name="arrow-down" size={20} color="brown"/>  
        <Text style={styles.subTitle}>{props.endDate}</Text>
      </View>
    </View> 
    :
    <View style={styles.card2}>
      <View style={styles.reason}>
      <Text style={styles.title}>{props.reason}</Text>
      <Text>10 Days</Text>
      {props.status == "approved" ? <Icon name="square" size={30} color= "green"/> 
      : <Icon name="square" size={30} color="red"/>  
      }
      </View>

      <View style={styles.contents}>
        <Text style={styles.subTitle}>{props.startDate}</Text>
        <Icon name="arrow-down" size={20} color="brown"/>  
        <Text style={styles.subTitle}>{props.endDate}</Text>
      </View>
    </View> 
      ) 
  )
}

const OverlayView = (props)=> {
  return (

    <View style={styles.container}>
      <View style={styles.topRow}>
        <View style={styles.leftColumn}>
        <Text style={styles.title}>{props.index}</Text>
      <Text style={styles.title}>{props.reason}</Text>
      <Text>10 Days</Text>
        </View>
        <View style={styles.rightColumn}>
        <TouchableOpacity onPress={
          ()=> {
            props.setShowOverlay(false)
          }
        } style={styles.closeOverlay}>
          <Ionicons name="ios-close" size={32} color="white" />
        </TouchableOpacity>
        <Text style={styles.subTitle}>From : {props.startDate}</Text>
        <Text style={styles.subTitle}>To : {props.endDate}</Text>
        </View>
      </View>

      {props.status == "approved" ?
              <View style={styles.bottomRow}>
              <Text style={styles.subTitle}>Applied On : {props.appliedDate}</Text>
                <Text style={styles.subTitle}>Approved By : {props.approver}</Text>
                <Text style={styles.approved}>Status : {props.status}</Text>
                <View> 
                <Text style={styles.subTitle}>Description : </Text>
                <Text style={styles.subTitle}>{props.description}</Text>
                </View>
                
                
              </View>
              :
              <View style={styles.bottomRow}>
      <Text style={styles.subTitle}>Applied On : {props.appliedDate}</Text>
        <Text style={styles.subTitle}>Approved By : {props.approver}</Text>
        <Text style={styles.rejected}>Status : {props.status}</Text>
        
        <View>
        <Text style={styles.subTitle}>Reject Reason : </Text>
        <Text style={styles.subTitle}>{props.rejectReason}</Text>
        </View>
        <View>
        <Text style={styles.subTitle}>Description : </Text>
        <Text style={styles.subTitle}>{props.description}</Text>
          
        </View>
      </View>
      }
      
    </View>
  )
}

const LeavesScreen = () => {
  const [unFilteredLeave, setUnfilteredLeave] = useState([
    {key: 1, reason : "Half Day", startDate : "1st Jan", endDate : "22nd Jan", appliedDate : "2023/03/25" , approver : "Ram", status : "rejected", rejectReason : "manpower shortage", description : "As the office is facing shortage of manpower, we cannot issue leaves for a few more weeks :( "},
    {key: 2, reason : "Whole Day", startDate : "2nd Feb", endDate : "12th Feb", appliedDate : "2023/03/25" , approver : "Tom", status : "rejected", rejectReason : "manpower shortage", description : "As the office is facing shortage of manpower, we cannot issue leaves for a few more weeks :("},
    {key: 3, reason : "Sick", startDate : "9th March", endDate : "22nd March", appliedDate : "2023/03/25" , approver : "Ram", status : "approved", rejectReason : "manpower shortage", description : "As the office is facing shortage of manpower, we cannot issue leaves for a few more weeks :("},
    {key: 4, reason : "Half Day", startDate : "1st April", endDate : "22nd April", appliedDate : "2023/03/25" , approver : "Shyam", status : "rejected", rejectReason : "manpower shortage", description : "As the office is facing shortage of manpower, we cannot issue leaves for a few more weeks :("},
    {key: 5, reason : "Whole Day", startDate : "1st April", endDate : "22nd April", appliedDate : "2023/03/25" , approver : "Hari", status : "approved", rejectReason : "manpower shortage", description : "As the office is facing shortage of manpower, we cannot issue leaves for a few more weeks :("},
    {key: 6, reason : "Half Day", startDate : "1st April", endDate : "22nd April", appliedDate : "2023/03/25" , approver : "Gopal", status : "approved", rejectReason : "manpower shortage", description : "As the office is facing shortage of manpower, we cannot issue leaves for a few more weeks :("},
  ])
  const [leaveState, setLeaveState] = useState(
    unFilteredLeave
  );

  
  
  const [showOverlay, setShowOverlay] = useState(false);

  const [index, setIndex] = useState('No Data');
  const [reason, setReason] = useState('No Data');
  const [startDate, setStartDate] = useState('No Data');
  const [endDate, setEndDate] = useState('No Data');
  const [appliedDate, setAppliedDate] = useState('No Data');
  const [approver, setApprover] = useState('No Data');
  const [status, setStatus] = useState('No Data');
  const [rejectReason, setRejectReason] = useState('No Data');
  const [description, setDescription] = useState('No Data');

  const HandleLeaveTouch = (item)=> {
    setIndex(item.index);
    setReason(item.reason);
    setStartDate(item.startDate);
    setEndDate(item.endDate);
    setAppliedDate(item.appliedDate);
    setApprover(item.approver);
    setStatus(item.status);
    setRejectReason(item.rejectReason);
    setDescription(item.description);
    setShowOverlay(true);
  }
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text)=> {
    setSearchText(text);
  if (text) {
    const newData = unFilteredLeave.filter((item) => {
      const itemData = item.reason.toLowerCase();
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    setLeaveState(newData);
  } else {
    setLeaveState(unFilteredLeave);
  }
  }
  renderGridItem = ({ item }) => {
    return (
        <TouchableOpacity activeOpacity={1} onPress={()=>{
            HandleLeaveTouch(item);
        } }>
            <LeaveCard index= {item.key} 
            reason = {item.reason} 
            startDate = {item.startDate} 
            endDate = {item.endDate} 
            status = {item.status}
            />
        </TouchableOpacity >       
    );
  }
  return (
    <ScrollView>
      <Text>Your Leaves</Text>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchText}
        onChangeText={handleSearch}
      />
      {
        showOverlay ? <View>
        <OverlayView index= {index} reason = {reason} startDate = {startDate} endDate = {endDate} showOverlay={showOverlay} 
        appliedDate={appliedDate}
        approver = {approver}
        status = {status}  
        rejectReason = {rejectReason}
        description = {description}
        setShowOverlay = {setShowOverlay} />
        
      </View> : 
        <FlatList showsVerticalScrollIndicator={false}
        data={leaveState}
        renderItem={this.renderGridItem}
        numColumns={1}
      />
      } 
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  card: {
    justifyContent : 'center',
      marginHorizontal : 10,
      width: '95%',
      flexDirection: 'row',
      borderRadius: 10,
      padding: 10,
      marginBottom: 10,
      backgroundColor : 'lightblue',
      elevation: 2,
    },
    card2: {
      marginHorizontal : 10,
      width: '95%',
      flexDirection: 'row',
      borderRadius: 10,
      padding: 10,
      marginBottom: 10,
      backgroundColor : 'lightyellow',
      elevation: 2,
    },
    reason: {
      justifyContent : 'space-evenly',
      alignItems : 'center',
      width: '50%',
      height: 100,
      borderRadius: 5,
      marginRight: 10,
    },
    contents : {
      width : '50%',
      justifyContent : 'space-evenly',
      paddingLeft : 10,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      color: 'darkblue',
    },
    subTitle: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'blue',
    },
    approved: {
      fontSize: 14,
      color: 'green',
    },
    rejected: {
      fontSize: 14,
      color: 'red',
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    fab: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      margin: 16,
      backgroundColor: '#009688',
      width: 56,
      height: 56,
      borderRadius: 28,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 4,
    },

    container: {
      flex: 1,
      flexDirection: 'column',
      marginHorizontal : 10,
      height : 600,
    },
    topRow: {
      flex: 1,
      flexDirection: 'row',
    },
    leftColumn: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightblue',
    },
    rightColumn: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightgreen',
    },
    bottomRow: {
      flex: 2,
      paddingHorizontal : 10,
      justifyContent : 'space-evenly',
      backgroundColor: 'lightyellow',
    },
    closeOverlay : {
      margin: 10,
      position : 'absolute',
      top : 0,
      right : 0,
      backgroundColor: 'red',
      borderRadius: 50,
      width: 45,
      height: 45,
      justifyContent: 'center',
      alignItems: 'center',
    },
    
    input: {
      height: 40,
      backgroundColor: '#fff',
      borderRadius: 20,
      padding: 10,
    },
});


export default LeavesScreen;
