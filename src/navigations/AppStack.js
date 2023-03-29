import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DocumentScreen from "../screens/DocumentScreen";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/Profile/profileScreen";
import RegionScreen from "../screens/RegionScreen";
import LoginScreen from "../screens/LoginScreen";
import EmployeeDetailScreen from "../screens/Profile/employeeDetailScreen";
import PersonalDetailsScreen from "../screens/Profile/personalDetailScreen";
import BankDetailScreen from "../screens/Profile/bankDetailScreen";
import EmergencyContactScreen from "../screens/Profile/emergencyContactScreen";
import LeavesScreen from "../screens/Profile/leavesScreen";
import AttendanceScreen from "../screens/Profile/attendanceScreen";
import PerformanceScreen from "../screens/Profile/performanceScreen";


const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Regions"
        component={RegionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />

      <Stack.Screen name="EmployeeDetail" component={EmployeeDetailScreen} />
      <Stack.Screen name="PersonalDetail" component={PersonalDetailsScreen} />
      <Stack.Screen name="BankDetail" component={BankDetailScreen} />
      <Stack.Screen name="EmergencyContact" component={EmergencyContactScreen} />
      <Stack.Screen name="Documents" component={DocumentScreen} />
      <Stack.Screen name="Leaves" component={LeavesScreen} />
      <Stack.Screen name="Attendance" component={AttendanceScreen} />
      <Stack.Screen name="Performance" component={PerformanceScreen} />

    </Stack.Navigator>



  );
};

export default AppStack;
