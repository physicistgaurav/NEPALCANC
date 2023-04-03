import React, { useState } from "react";

import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

import { NavigationContainer } from "@react-navigation/native";

import AppStack from "./src/navigations/AppStack";
import GuestStack from "./src/navigations/GuestStack";

import AuthContext, { AuthProvider, useAuth } from "./src/contexts/AuthContext";
import DocumentScreen from "./src/screens/Profile/documentScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import DropdownScreen from "./src/screens/Profile/dropdown";
import AppOnly from "./src/screens/Profile/help";
import ProfileScreen from "./src/screens/Profile/profileScreen";
import DocumentOnlyScreen from "./src/screens/Profile/documentonlyscreen";

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
    <SafeAreaView>
      <DocumentOnlyScreen/>
    </SafeAreaView>

    // <AuthProvider>
    //   <AppContent />
    // </AuthProvider>
  );
}
