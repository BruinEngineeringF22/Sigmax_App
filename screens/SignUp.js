import React, { useState } from "react";
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const SignUp = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function signUp() {
    console.log("signUp called");
  }

  const handleSwitch = () => {
    navigation.navigate("SignIn");
  };

  const handleSubmit = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(val) => setUserName(val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(val) => setPassword(val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(val) => setEmail(val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        autoCapitalize="none"
        placeholderTextColor="white"
        onChangeText={(val) => setPhoneNumber(val)}
      />
      <Button style={styles.signup} title="Sign Up" onPress={handleSubmit} />

      <TouchableOpacity
        onPress={handleSwitch}
        style={styles.switchScreenButton}
      >
        <Text>Already have an accout? Sign in here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: "#42A5F5",
    margin: 10,
    padding: 8,
    color: "white",
    borderRadius: 14,
    fontSize: 18,
    fontWeight: "500",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signup: {
    position: "absolute",
    width: 279,
    height: 106,
    left: 30,
    top: 277,
    fontWeight: 600,
    fontSize: 70,
    lineHeight: 85,
    color: "black",
    opacity: 0.75,
  },
  switchScreenButton: {
    borderWidth: 3,
  },
});
