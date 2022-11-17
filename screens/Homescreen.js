import {
  Dimensions,
  StyleSheet,
  SafeAreaView,
  Text,
  Button,
  Platform,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

import { auth } from "../Firebase";

const Homescreen = ({ navigation }) => {
  const onPressBandage = () => {
    console.log("call python api");
  };

  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigation.navigate("SignIn");
    });
  };

  const onPressItem = (item) => {
    console.log("Item: " + item);
    switch(item){
      case process.env.Item_One:
        console.log("dispense" + item);

      case process.env.Item_Two:
        console.log("call python api");
      
      case process.env.Item_Three:
        console.log("call python api");

      default :
        console.log("def")


    }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>SIGMAX</Text>
        <Text style={styles.welcome}>Welcome, *name*! </Text>
        <Image
          source={{ uri: "https://freepngimg.com/thumb/categories/990.png" }}
          style={{ width: 200, height: 200, justifyContent: "center" }}
        />
        <View style={styles.button1}>
          <TouchableOpacity style={styles.button1} onPress={onPressItem('Bandage')}>
            <Text style={styles.buttonText}>bandages</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button2}>
          <TouchableOpacity style={styles.button2} onPress={onPressBandage}>
            <Text style={styles.buttonText}>pills</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button3}>
          <TouchableOpacity style={styles.button3} onPress={onPressBandage}>
            <Text style={styles.buttonText}>miscellaneous</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <TouchableOpacity
              style={styles.guideButton}
              onPress={onPressBandage}
            >
              <Image
                source={require("./images/Favorites.png")}
                style={{ width: 50, height: 50, justifyContent: "left" }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.guideButton}
              onPress={onPressBandage}
            >
              <Image
                source={require("./images/Home.png")}
                style={{ width: 50, height: 50, justifyContent: "left" }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.guideButton}
              onPress={onPressBandage}
            >
              <Image
                source={require("./images/User_alt.png")}
                style={{ width: 50, height: 50, justifyContent: "left" }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.logOutButton}
              onPress={handleSignOut}
            >
              <Text>Log Out!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    //alignItems: "center",
  },
  logOutButton: {
    borderWidth: 2,
    alignSelf: "center",
    right: 200,
    bottom: 5,
  },
  title: {
    color: "#A95DF0",
    fontWeight: "bold",
    fontSize: 70,
    opacity: "0.3",
    borderLeftWidth: 30,
    borderTopWidth: 10,
    alignItems: "left",
  },
  welcome: {
    borderLeftWidth: 20,
    fontSize: 20,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 30,
    color: "#000000",
    textAlign: "center",
    opacity: "1",
  },
  button1: {
    opacity: "0.6",
    alignContent: "center",
    backgroundColor: "#A95DF0",
    borderRadius: 12,
    padding: 10,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 35,
    marginRight: 35,
  },
  button2: {
    opacity: "0.45",
    alignContent: "center",
    backgroundColor: "#A95DF0",
    borderRadius: 12,
    padding: 10,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 35,
    marginRight: 35,
  },
  button3: {
    opacity: "0.3",
    alignContent: "center",
    backgroundColor: "#A95DF0",
    borderRadius: 12,
    padding: 10,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 35,
    marginRight: 35,
  },
  guideButton: {
    padding: 10,
    marginLeft: 40,
    marginRight: 20,
    marginTop: 20,
  },
});

}
export default Homescreen;

