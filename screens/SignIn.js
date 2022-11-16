import { View, Text, TextInput, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-web";


const SignIn = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  // const emailRef = useRef()
  // const passRef = useRef()
  // const {login} = useAuth()
  // const [error, setError] = useState('')
  // const [success, setSucess] = useState('')
  // const [loading, setLoading] = useState(false)
  // const navigate = useNavigate()

  // async function handleSubmit(e){
  //     e.preventDefault()

  //     try{
  //         setError('')
  //         setLoading(true)
  //         await login(emailRef.current.value, passRef.current.value)
  //         setSucess('Sign In Success!')
  //         navigate("/")
  //     }catch{
  //         setError('Failed to sign in')
  //     }
  // }

  function Toggle() {
    var temp = document.getElementById("typepass");
    if (temp.type === "password") {
        temp.type = "text";
    }
    else {
        temp.type = "password";
    }
  }
  return (

      <View style={styles.centered}>
        {/* <Image source = {{uri: assets/SigmaX_Logo.png}} /> */}
        <Text style={styles.login}>LOGIN</Text>
        <SafeAreaView>
          {/* <Text style={styles.login}>LOGIN</Text> */}
          <Text style={styles.title}>Email Address</Text>
          <TextInput style={styles.textbox} onChangeText={setEmail} value={email} />
          <Text style={styles.title}>Password</Text>
          <TextInput secureTextEntry={true} style={styles.textbox} onChangeText={setPass} value={pass} />
        </SafeAreaView>
        <Button
        title="Login"
        color="#f194ff"
        onPress={() => Alert.alert('Button with adjusted color pressed')}
        />
      </View>

  );
};

const styles = StyleSheet.create({

  loginBtn: {
    alignSelf: "center",
    width: Dimensions.get('window').width / 2,
    justifyContent: "center",
  },

  login:{
    position: 'absolute',
    width: 308,
    height: 105,
    left: 47,
    top: 200,
    fontFamily: 'Fredoka',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: 70,
    lineHeight: 85,
    color: '#000000',
  },

  email:{
    position: 'absolute',
    width: 297,
    height: 59,
    left: 47,
    top: 481,
    background:'#FFFFFF',
    opacity: 0.7,
    borderRadius: 25,
  },

  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A95DF0",
  },

  logo: {
    fontFamily: "Cochin",
    fontSize: 35,
    fontWeight: "bold",
    height: 25,
    margin: 20,
    padding: 20

  },

  title: {
    fontFamily: "Cochin",
    fontSize: 20,
    fontWeight: "bold",
    height: 25,
    margin: 4,
    // borderWidth: 1,
    padding: 10,
  },

  textbox: {
    width: 300,
    height: 40,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15, 
    fontSize: 16,
    margin: 12,
    borderWidth: 1,
    justifyContent: "center",
  },
});

export default SignIn;
