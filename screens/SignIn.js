import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Button,
  TouchableOpacity,
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

  const handleSwitchScreen = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.centered}>
      {/* <Image source={require('../assets/index/')} /> */}
      <Text style={styles.login}>LOGIN</Text>
      <SafeAreaView>
        <View>
          <View style={styles.textInputView}>
            <Text style={styles.title}>Email Address</Text>
            <TextInput
              style={styles.textbox}
              onChangeText={setEmail}
              value={email}
            />
          </View>

          <Text style={styles.title}>Password</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.textbox}
            onChangeText={setPass}
            value={pass}
          />
        </View>
      </SafeAreaView>
      <Button
        title="Login"
        color="#f194ff"
        onPress={() => Alert.alert("Button with adjusted color pressed")}
      />

      <Button
        title="Submit"
        style={styles.submitButton}
        onPress={handleOnPress}
      />
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
    left: 47,
    top: 180,
    fontFamily: "Fredoka",
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
    backgroundColor: "#A95EF9",
    //opacity: 0.3,
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

  textbox: {
    width: 300,
    height: 40,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 16,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    justifyContent: "center",
  },
  switchScreen: {
    alignSelf: "center",
    borderWidth: 3,
  },
});

export default SignIn;
