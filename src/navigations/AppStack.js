import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmployeeScreen from "../screens/EmployeeScreen";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/Profile/profileScreen";
import RegionScreen from "../screens/RegionScreen";
import FeedbackScreen from "../screens/FeedbackScreen";
import LeavesScreen from "../screens/Profile/leavesScreen";
import PerformanceScreen from "../screens/Profile/performanceScreen";
import AlertScreen from "../screens/Profile/alert";
import Dialog from "../screens/Profile/dialog";
import BranchScreen from "../screens/Branch";
import BirthdayScreen from "../screens/BirthdayScreen";
import EmployeeBirthdaysScreen from "../screens/EmployeeBirthdayScreen";
import HelpScreen from "../screens/HelpScreen";
import DocumentOnlyScreen from "../screens/Profile/documentonlyscreen";
import ProfileDocumentScreen from "../screens/Profile/profileDocumentScreen";
import DocumentCenterScreen from "../screens/DocumentScreen";
import TicketFormScreen from "../screens/TicketFormScreen";
import ViewTickets from "../screens/ViewTickets";
import AttendanceScreen from "../screens/Profile/Attendance/attendanceScreen/attendanceScreen";
import EmployeeDetailScreen from "../screens/Profile/DetailsScreen/employeeDetailScreen";
import BankDetailScreen from "../screens/Profile/DetailsScreen/bankDetailScreen";
import EmergencyContactScreen from "../screens/Profile/DetailsScreen/emergencyContactScreen";
import PersonalDetailsScreen from "../screens/Profile/DetailsScreen/personalDetailScreen";

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
      <Stack.Screen name="Alerts" component={AlertScreen} />
      <Stack.Screen name="Dialog" component={Dialog} />

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
      <Stack.Screen name="Documents" component={ProfileDocumentScreen} />
      <Stack.Screen name="myDocuments" component={DocumentCenterScreen} />
      <Stack.Screen name="DocumentsOnly" component={DocumentOnlyScreen} />
      <Stack.Screen
        name="Help"
        component={HelpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ticket"
        component={TicketFormScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="viewtickets"
        component={ViewTickets}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
