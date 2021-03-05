import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import Product from "../screen/Product";
import Login from "../screen/Login";
const Stack = createStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="LoginScreen"
      >
         <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="ProductScreen" component={Product} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
