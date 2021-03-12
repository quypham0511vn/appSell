import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screen/Login";
import Product from "../screen/Product";
import ProductDetail from "../screen/ProductDetail";
const Stack = createStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="ProductScreen" component={Product} />
        <Stack.Screen name="ProductDetailScreen" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
