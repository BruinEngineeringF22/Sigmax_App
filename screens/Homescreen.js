import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import PythonService from "../PythonService";
import { useFonts, FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one';

import { auth } from "../Firebase";
import { useState } from "react";

const Homescreen = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    FredokaOne_400Regular,
  });

  const [bandageCount, setBandageCount] = useState(100);
  const [pillsCount, setPillsCount] = useState(100);
  const [miscCount, setMiscCount] = useState(100);

  const onPressBandage = () => {
    setBandageCount(bandageCount - 10);
    console.log(bandageCount);
    console.log("called python api");
    PythonService.sendSignal("bandages");
    navigation.navigate("ProductScreen", {
      product: "Bandages",
      count: bandageCount,
    });
  };

  const onPressPills = () => {
    setPillsCount(pillsCount - 10);
    console.log("called python api");
    PythonService.sendSignal("pills");
    navigation.navigate("ProductScreen", {
      product: "Pills",
      count: pillsCount,
    });
  };

  const onPressMisc = () => {
    setMiscCount(miscCount - 10);
    console.log("called python api");
    PythonService.sendSignal("miscellaneous");
    navigation.navigate("ProductScreen", {
      product: "Miscellaneous",
      count: miscCount,
    });
  };
  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigation.navigate("SignIn");
    });
  };

  const handleRemoteControl = () => {
    navigation.navigate("Remote");
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>SIGMAX</Text>
        <Image
          source={require("./images/Sigma_Logo.png")}
          style={styles.img}
        />
        <Text style={styles.welcome}>Welcome! </Text>
        <View style={styles.button1}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => onPressBandage()}
          >
            <Text style={styles.buttonText}>bandages</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button2}>
          <TouchableOpacity
            style={styles.button2}
            onPress={() => onPressPills()}
          >
            <Text style={styles.buttonText}>pills</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button3}>
          <TouchableOpacity
            style={styles.button3}
            onPress={() => onPressMisc("miscellaneous")}
          >
            <Text style={styles.buttonText}>miscellaneous</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <TouchableOpacity
              style={styles.guideButton}
              onPress={handleRemoteControl}
            >
              <Image
                source={require("./images/Favorites.png")}
                style={{ width: 50, height: 50, justifyContent: "center" }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.guideButton}
              //onPress={}
            >
              <Image
                source={require("./images/Home.png")}
                style={{ width: 50, height: 50, justifyContent: "center" }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.guideButton}
              onPress={handleSignOut}
            >
              <Image
                source={require("./images/User_alt.png")}
                style={{ width: 50, height: 50, justifyContent: "center"}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    //alignItems: "center",
  },
  title: {
    color: "#A95DF0",
    fontSize: 70,
    opacity: "0.3",
    borderLeftWidth: 30,
    borderTopWidth: 10,
    alignItems: "left",
    fontWeight: "bold",
    fontFamily: 'FredokaOne_400Regular',
  },
  welcome: {
    borderLeftWidth: 40,
    fontSize: 25,
    marginTop: 20,
    fontFamily: 'FredokaOne_400Regular',
    color: '#40354a'
  },
  buttonText: {
    fontSize: 25,
    color: "#40354a",
    textAlign: "center",
    opacity: "1",
    fontFamily: 'FredokaOne_400Regular',
    fontWeight: '50'
  },
  button1: {
    alignContent: "center",
    backgroundColor: "#c99bf6",
    borderRadius: 12,
    padding: "2%",
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 35,
    marginRight: 35,
    flex: 1,
  },
  button2: {
    alignContent: "center",
    backgroundColor: "#d6b3f8",
    borderRadius: 12,
    padding: "2%",
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 35,
    marginRight: 35,
    flex: 1,
  },
  button3: {
    alignContent: "center",
    backgroundColor: "#e2c9fb",
    borderRadius: 12,
    padding: "2%",
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 35,
    marginRight: 35,
    flex: 1,
  },
  guideButton: {
    padding: 10,
    marginLeft: 40,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 20,
    justifyContent: "flex-end"
  },
  img: {
    width: 200, 
    height: 200, 
    justifyContent: "right", 
    flex: 1, 
    opacity: 0.7
  }
});
