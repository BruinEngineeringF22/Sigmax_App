import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Button,
} from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleOnPress = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <SafeAreaView>
      <Text style={styles.title}>Email Address</Text>
      <TextInput style={styles.textbox} onChangeText={setEmail} value={email} />
      <Text style={styles.title}>Password</Text>
      <TextInput style={styles.textbox} onChangeText={setPass} value={pass} />
      <Button
        title="Submit"
        style={styles.submitButton}
        onPress={handleOnPress}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    height: 25,
    margin: 4,
    // borderWidth: 1,
    padding: 10,
  },

  textbox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    justifyContent: "center",
  },
});

export default SignIn;
