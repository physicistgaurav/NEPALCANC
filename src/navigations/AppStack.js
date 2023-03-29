import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DocumentScreen from "../screens/DocumentScreen";

import HomeScreen from "../screens/HomeScreen";
import RegionScreen from "../screens/RegionScreen";

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
      <Stack.Screen
        name="Documents"
        component={DocumentScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
