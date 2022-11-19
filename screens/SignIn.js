import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Button,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { auth } from "../Firebase";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleOnPress = () => {
    auth
      .signInWithEmailAndPassword(email, pass)
      .then((userCredentials) => {
        const user = userCredentials.user;
        navigation.navigate("HomeScreen");
      })
      .catch((error) => Alert.alert(error.message));
  };

  const handleSwitchScreen = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.centered}>
      <View style={styles.image}> 
        <Image source={require("./images/Sigma_Logo.png")} 
        style={styles.img} resizeMode='contain'
        />
      </View>
      <Text style={styles.login}>LOGIN</Text>
      <SafeAreaView>
        <View>
          <View style={styles.textInputView}>
            <TextInput
              style={styles.textbox}
              placeholder="Email"
              autoCapitalize="none"
              placeholderTextColor="grey"
              onChangeText={setEmail}
              value={email}
            />
          </View>

          <TextInput
            secureTextEntry={true}
            style={styles.textbox}
            placeholder="Password"
            autoCapitalize="none"
            placeholderTextColor="grey"
            onChangeText={setPass}
            value={pass}
          />
        </View>
      </SafeAreaView>
      {/* <Button title="Login" style={styles.logbutton} onPress={handleOnPress} /> */}
      <TouchableOpacity style={styles.logbutton} onPress={handleOnPress}>
        <Text style={styles.buttonText}>log in</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.switchScreen}
        onPress={handleSwitchScreen}
      >
        <Text>Don't have an account? Sign up here!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginBtn: {
    alignSelf: "center",
    // width: Dimensions.get('window').width / 2,
    justifyContent: "center",
  },

  login: {
    position: "absolute",
    width: 308,
    height: 105,
    left: 40,
    top: 220,
    fontStyle: "normal",
    //fontWeight: 60,
    fontSize: 70,
    lineHeight: 85,
    color: "#000000",
  },
  textInputView: {
    marginTop: 50,
    //borderWidth: 1,
  },

  email: {
    position: "absolute",
    width: 297,
    height: 59,
    left: 47,
    top: 481,
    background: "#FFFFFF",
    opacity: 0.7,
    borderRadius: 25,
  },

  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#d6b3f8",
  },

  logo: {
    fontFamily: "Cochin",
    fontSize: 35,
    fontWeight: "bold",
    height: 25,
    margin: 20,
    padding: 20,
  },

  title: {
    //marginTop: 20,
    fontFamily: "Cochin",
    fontSize: 20,
    fontWeight: "bold",
    //height: 25,
    // margin: 4,
    //borderWidth: 1,
    padding: 10,
  },

  image:{
    position: "absolute",
  },

  textbox: {
    width: 350,
    height: 70,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 20,
    fontSize: 16,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    justifyContent: "center",
    opacity: 0.7,
  },
  switchScreen: {
    alignSelf: "center",
    borderWidth: 3,
  },
  img: {
    width: 250, 
    height: 250, 
    bottom: 280, 
    right: 150,
    marginBottom: 10,
    marginLeft: 50,
    flex: 1,
    opacity: '0.7'
  },
  logbutton: {
    alignContent: "center",
    backgroundColor: "#A95DF0",
    borderRadius: 12,
    padding: "2%",
    marginTop: 15,
    marginBottom: 15
  },
  buttonText: {
    fontSize: 25,
    color: "#000000",
    textAlign: "center",
    opacity: "0.8",
  },
});

export default SignIn;
