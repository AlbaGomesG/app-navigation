import React from "react";
import { NavigationContainer } from "@react-navigation/native";
//import Stack2 from "./navigation/StackNavigation";
import Stack1 from "./navigation/DrawerNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <Stack1 />
    </NavigationContainer>
  );
}

