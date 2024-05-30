import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../views/SplashScreen";

import BottomNavigation from "./BottomNavigation";







const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen name="splash" component={SplashScreen} options={{headerShown:false}} />
        <Stack.Screen name="bottom" component={BottomNavigation} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
