import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My Profile" component={ProfileScreen} />
<Stack.Screen name="Login" component={LoginScreen} />
<Stack.Screen name="EmployeeDetail" component={EmployeeDetailScreen} />
<Stack.Screen name="PersonalDetail" component={PersonalDetailsScreen} />
<Stack.Screen name="BankDetail" component={BankDetailScreen} />
<Stack.Screen
name="EmergencyContact"
component={EmergencyContactScreen}
/>
<Stack.Screen name="Documents" component={DocumentScreen} />
<Stack.Screen name="Leaves" component={LeavesScreen} />
<Stack.Screen name="Attendance" component={AttendanceScreen} />
<Stack.Screen name="Performance" component={PerformanceScreen} />
<Stack.Screen name="Profile" component={ProfileStack} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
