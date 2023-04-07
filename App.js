import React from "react";
import { LogBox, SafeAreaView } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./src/navigations/AppStack";
import GuestStack from "./src/navigations/GuestStack";
import { AuthProvider, useAuth } from "./src/contexts/AuthContext";
import ProfileDocumentScreen from "./src/screens/Profile/Document/screens/profileDocumentScreen";

const AppContent = () => {
  const { loggedInUser } = useAuth();
  return (
    <NavigationContainer>
      {!!loggedInUser ? <AppStack /> : <GuestStack />}
    </NavigationContainer>
  );
};

export default function App() {
  return (
    // <SafeAreaView>
    //   <ProfileDocumentScreen />
    // </SafeAreaView>

    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
