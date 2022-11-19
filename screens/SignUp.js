
import PythonService from '../PythonService';
import React, { useState } from "react";
import {
  ImageBackground,
  View,
  Button,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Image
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { auth } from "../Firebase";

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
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        navigation.navigate("HomeScreen");
      })
      .catch((error) => alert(error.message));
  };

    function backendTest() {
        console.log("signUp called")
        PythonService.sendSignal()
    }
  return (
    
      <SafeAreaView style={styles.container}>
      <Image style={styles.bg} source={require("./images/signup_page.png")}></Image>
      <Text style={styles.signup}>SIGN UP</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
        placeholderTextColor="grey"
        onChangeText={(val) => setUserName(val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        placeholderTextColor="grey"
        onChangeText={(val) => setPassword(val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        placeholderTextColor="grey"
        onChangeText={(val) => setEmail(val)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        autoCapitalize="none"
        placeholderTextColor="grey"
        onChangeText={(val) => setPhoneNumber(val)}
      />
      <Button style={styles.signup} title="Sign Up" onPress={handleSubmit} />

      <TouchableOpacity
        onPress={handleSwitch}
        style={styles.switchScreenButton}
      >
        <Text style = {{color: "white"}}>Already have an account? Sign in here</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={backendTest}
        style={styles.switchScreenButton}
      >
        <Text>Test backend</Text>
      </TouchableOpacity>
      </SafeAreaView>
    
  );
};

export default SignUp;

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: "white",
    margin: 10,
    padding: 8,
    color: "white",
    borderRadius: 14,
    fontSize: 16,
    opacity: 0.8,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d6b3f8"
  },
  signup: {
    position: "absolute",
    width: 279,
    height: 106,
    left: 30,
    top: 277,
    fontWeight: 60,
    fontSize: 70,
    lineHeight: 85,
    color: "#c99bf6",
    opacity: 0.75,
  },
  switchScreenButton: {
    borderWidth: 3,
  }, bg: {
    flex: 1,
    position: "absolute",
    width: '110%',
    height: '110%',
  }, signup: {
    position: "absolute",
    width: 308,
    height: 105,
    left: 40,
    top: 120,
    fontStyle: "normal",
    //fontWeight: 60,
    fontSize: 70,
    lineHeight: 85,
    color: "#000000",
  },
});
