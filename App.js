import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import MainContainer from './navigation/MainContainer';
import Homescreen from "./screens/Homescreen";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";

//import Remote from "./screens/Remote"
import ProductScreen from "./screens/ProductScreen";


export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ gestureENabled: false }}
        initialRouteName="HomeScreen"
      >
        <Stack.Screen 
          name="RemoteScreen"
          component={RemoteScreen}
        />
        <Stack.Screen
          options={{ gestureEnabled: false }}
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen name="SignUp" component={SignUp} />

        <Stack.Screen
          options={{ gestureEnabled: false, headerBackVisible: false }}
          name="HomeScreen"
          component={Homescreen}
        />

        <Stack.Screen
          options={{ gestureEnabled: false }}
          name="ProductScreen"
          component={ProductScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
