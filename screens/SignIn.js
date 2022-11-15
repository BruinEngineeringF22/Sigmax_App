import { View, Text, TextInput, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <SafeAreaView>
      <Text style={styles.title}>Email Address</Text>
      <TextInput style={styles.textbox} onChangeText={setEmail} value={email} />
      <Text style={styles.title}>Password</Text>
      <TextInput style={styles.textbox} onChangeText={setPass} value={pass} />
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
