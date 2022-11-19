import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";

//import CircularProgress from "react-native-circular-progress-indicator";

//import { CircularProgressbar} from 'react-circular-progressbar';
//import 'react-circular-progressbar/dist/styles.css';

//import CircularProgress from 'react-native-circular-progress-indicator';
//import { AnimatedCircularProgress } from 'react-native-circular-progress';

// const quantity = total * (difference + 1);

const ProductScreen = ({ navigation, route }) => {
  console.log(route.params.product);

  const difference = route.params.count;

  const Progress_bar = ({ bgcolor, height }) => {
    //can add arguments; function displays prog bar

    return (
      <View style={styles.Parentdiv}>
        <View
          style={[styles.Childdiv, { width: (370 * difference) / 100 }]}
        ></View>
      </View>
    );
  };

  // <View style = {styles.circle_wrap}/>
  // <View style = {styles.outerCircle}/>
  // <View style = {styles.innerCircle}/>h
  // <View style = {styles.backSquare}/>
  // <View style = {styles.frontSquare}/>
  // <Text style={styles.progresstext}> {`${difference*100}%`} </Text>

  return (
    <ScrollView style={{ flex: 1 }}>
      <Text style={styles.productName}>{route.params.product}</Text>
      <Progress_bar bgcolor="#99ccff" height={30} />
      <Text style={styles.quantity}> {difference}% </Text>
      <Text style={styles.title}> Instructions: </Text>
      <Text style={styles.info}> ..afehlkajshfjkashdfkajhsflka</Text>
      <Text style={styles.title}> Allergy Information: </Text>
      <Text style={styles.info}> .....</Text>
    </ScrollView>
  );
};

//create a CSS & HTML style sheet inside JavaScript; refer to different styles through their names
const styles = StyleSheet.create({
  Parentdiv: {
    height: 70,
    width: 370,
    top: 300,
    marginLeft: 30,
    backgroundColor: "whitesmoke",
    borderRadius: 40,
  },

  Childdiv: {
    height: 70,
    //width: `${difference}` * 370,
    backgroundColor: "#a95df0",
    borderRadius: 40,
    textAlign: "right",
  },

  progresstext: {
    padding: 10,
    color: "black",
    fontSize: 50,
    fontWeight: "500",
  },

  quantity: {
    padding: 10,
    top: 50, //relative to the bottom of the previous element
    textAlign: "center",
    color: "black",
    fontSize: 100,
    fontWeight: "900",
  },

  productName: {
    top: 80,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 30,
    fontWeight: "bold",
    borderWidth: 1, //adds border around element
    padding: 20, //space within border edges
    alignSelf: "center",
  },

  title: {
    top: 275,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 15,
    fontWeight: "bold",
    borderWidth: 1,
    padding: 10, //padding = space between relative elements
  },

  info: {
    top: 275,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 15,
    padding: 10, //padding = space between relative elements
    //justifyContent: 'flex-end',             //for alignment; try different strings
  },

  backSquare: {
    width: 200,
    height: 200,
    marginLeft: 120,
    bottom: -175,
    backgroundColor: "white",
    borderWidth: 2,
    //position: "fixed",
  },

  frontSquare: {
    width: 200,
    //height: 200 * difference,
    marginLeft: 120,
    //bottom: -175 + difference * 200,
    backgroundColor: "#a95df0",
    borderWidth: 2,
    //position: "fixed",
  },

  innerCircle: {
    width: 200,
    height: 200,
    marginLeft: 120,
    top: 300,
    position: "absolute",
    borderRadius: 200 / 2,
    backgroundColor: "white",
    borderWidth: 2,
  },

  outerCircle: {
    width: 300,
    height: 300,
    marginLeft: 70,
    top: 250,
    position: "absolute",
    borderRadius: 300 / 2,
    backgroundColor: "#a95df0",
    //borderWidth: 2,
    transform: [{ rotate: "180deg" }],
  },

  circle_wrap: {
    width: 150,
    height: 150,
    background: "#fefcff",
    borderRadius: 50,
    borderWidth: 1,
  },
});

export default ProductScreen;
