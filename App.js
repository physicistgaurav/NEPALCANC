import React, { useState } from "react";

import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

import { NavigationContainer } from "@react-navigation/native";

import AppStack from "./src/navigations/AppStack";
import GuestStack from "./src/navigations/GuestStack";

import AuthContext, { AuthProvider, useAuth } from "./src/contexts/AuthContext";

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
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
