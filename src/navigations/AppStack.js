import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmployeeScreen from "../screens/EmployeeScreen";
import DocumentScreen from "../screens/EmployeeScreen";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/Profile/profileScreen";
import RegionScreen from "../screens/RegionScreen";
import FeedbackScreen from "../screens/FeedbackScreen";
import EmployeeDetailScreen from "../screens/Profile/employeeDetailScreen";
import PersonalDetailsScreen from "../screens/Profile/personalDetailScreen";
import BankDetailScreen from "../screens/Profile/bankDetailScreen";
import EmergencyContactScreen from "../screens/Profile/emergencyContactScreen";
import LeavesScreen from "../screens/Profile/leavesScreen";
import AttendanceScreen from "../screens/Profile/attendanceScreen";
import PerformanceScreen from "../screens/Profile/performanceScreen";
import BranchScreen from "../screens/Branch";
import BirthdayScreen from "../screens/BirthdayScreen";
import EmployeeBirthdaysScreen from "../screens/EmployeeBirthdayScreen";

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

      <Stack.Screen name="Profile" component={ProfileScreen} />

      <Stack.Screen name="EmployeeDetail" component={EmployeeDetailScreen} />
      <Stack.Screen name="PersonalDetail" component={PersonalDetailsScreen} />
      <Stack.Screen name="BankDetail" component={BankDetailScreen} />
      <Stack.Screen
        name="EmergencyContact"
        component={EmergencyContactScreen}
      />
      <Stack.Screen name="Leaves" component={LeavesScreen} />
      <Stack.Screen name="Attendance" component={AttendanceScreen} />
      <Stack.Screen name="Performance" component={PerformanceScreen} />

      <Stack.Screen
        name="Employee"
        component={EmployeeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Feedback"
        component={FeedbackScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Branches"
        component={BranchScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Birthday"
        component={BirthdayScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EmployeeBirthdays"
        component={EmployeeBirthdaysScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="EmployeeBirthdays"
        component={Emplo}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};

export default AppStack;
