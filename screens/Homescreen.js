import { StyleSheet, View, Text, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Homescreen = ({ navigation }) => {
  onPressBandage = () => {
    console.log("call python api");
  };

  return (
    <View style={styles.container}>
      <Text>Homescreen</Text>
      <Button title="Bandages" color="#3A4454" onPress={onPressBandage} />
      <Button title="Pills" color="#3A4454" onPress={onPressBandage} />
      <Button title="Miscellaneous" color="#3A4454" onPress={onPressBandage} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8F0",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Homescreen;
