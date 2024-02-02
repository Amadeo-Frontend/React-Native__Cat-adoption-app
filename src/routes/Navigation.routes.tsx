// AppNavigation.js
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/Welcome/index";
import ChoiceScreen from "../screens/Choice";
import CongratulationsScreen from "../screens/Congratulation";

const { Navigator, Screen } = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Welcome"
      >
        <Screen name="Welcome" component={WelcomeScreen} />
        <Screen name="Choice" component={ChoiceScreen} />
        <Screen name="Congratulations" component={CongratulationsScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
