import React, { useRef }from 'react';
import {Animated, Image, Pressable, View, Text, StyleSheet} from 'react-native';

const RemoteScreen = () => {

    const fadeAnim = useRef(new Animated.Value(0)).current;

    const onPressInUp = () => {
        /* Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 5000
          }).start();*/
        console.log("onPressInUp called; move up");
    }

    const onLongPressUp = () => {
        console.log("onLongPressUp called; move up and stay");
    }

    const onPressInDown = () => {
        console.log("onPressInDown called; move down");
    }

    const onLongPressDown = () => {
        console.log("onLongPressDown called; move down and stay");
    }

    const onPressInLeft = () => {
        console.log("onPressInLeft called; move left");
    }

    const onLongPressLeft = () => {
        console.log("onLongPressLeft called; move left and stay");
    }

    const onPressInRight = () => {
        console.log("onPressInRight called; move right");
    }

    const onLongPressRight = () => {
        console.log("onLongPressRight called; move right and stay");
    }

    const onPressOutFunction = () => {
        console.log("onPressOutFunction called; recenter sigmax");
    }

    //<Pressable hitSlop={{top: 20, bottom: 20, left: 500, right: 500}} onPressIn={onPressInFunction}>
    //<Text style={styles.test}>I'm pressable!</Text>
    //</Pressable>

    //top view: bordered box containing sigmax
    //bottom view: remote control; buttons handle single clicks + held-down clicks

   // <View style={[styles.outerCircle, styles.gradCircle]} />

    return(
        <View>
        <View>
            <View style={[styles.outerBox]} />
            <View style={[styles.innerBox]} />
            <Image
                source={require("./images/Sigma_Logo.png")}
                style={{ width: 200, height: 200, left: 110, top: 110 }}
            />
        </View>
        <View>
            <View style={styles.outerCircle} />
            <View style={styles.midCircle} />
            <View style={styles.innerCircle} />
            
            <Pressable onLongPress={onLongPressUp}
                        onPressOut={onPressOutFunction}
                        onPressIn={onPressInUp}>
                <View style={[styles.upTri, styles.up]} />
            </Pressable>

            <Pressable onLongPress={onLongPressDown}
                        onPressOut={onPressOutFunction}
                        onPressIn={onPressInDown}>
                <View style={[styles.downTri, styles.down]} />
            </Pressable>

            <Pressable onLongPress={onLongPressRight}
                        onPressOut={onPressOutFunction}
                        onPressIn={onPressInRight}>
                <View style={[styles.rightTri, styles.right]} />
            </Pressable>

            <Pressable onLongPress={onLongPressLeft}
                        onPressOut={onPressOutFunction}
                        onPressIn={onPressInLeft}>
                <View style={[styles.leftTri, styles.left]} />
            </Pressable>
        </View>
        </View>

    )
}

const styles = StyleSheet.create({
    test:{
        fontSize: 50,
        borderWidth: 2,
    },

    gradCircle:{
        top: 270,
        alignSelf: 'center',
        backgroundColor: 'white',
        borderColor: 'grey'
    },

    innerBox:{
        top: 70,
        alignSelf: 'center',
        width: 275,
        height: 275,
        backgroundColor: "#D9D9D9",
        // borderWidth: 2,                      //add gradient
        position: 'absolute',
    },

    outerBox:{
        top: 35,
        alignSelf: 'center',
        width: 350,
        height: 350,
        backgroundColor: "#563772",
        opacity: 0.70,
        borderRadius: 8,
        // borderWidth: 2,
        position: 'absolute',
    },

    outerCircle:{
        width: 275,
        height: 275,
        marginLeft: 70,
        top: 220,
        position: 'absolute',
        borderRadius: 275 / 2,
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',    
        borderColor: '#000000',                 //dunno why black works & not original #563772
        borderWidth: 10,
        opacity: 0.6,
    },

    innerCircle:{
        width: 150,
        height: 150,
        marginLeft: 120,
        top: 285,
        position: 'absolute',
        borderRadius: 150 / 2,
        backgroundColor: '#FFFFFF',
        alignSelf: 'center',
        borderColor: '#563772',
        borderWidth: 10,
        opacity: 0.8,
      },
  
    midCircle:{
        width: 275,
        height: 275,
        marginLeft: 70,
        top: 220,
        position: 'absolute',
        borderRadius: 275 / 2,
        backgroundColor: '#a95df0',
        opacity: 0.3,
        alignSelf: 'center',
      },

    upTri: {
        width: 0,
        height: 0,
        borderTopWidth: 0,
        borderRightWidth: 45/2 - 5,
        borderBottomWidth: 90/2 - 10,
        borderLeftWidth: 45/2 - 5,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#563772',
        borderLeftColor: 'transparent',
        position: 'absolute',
    },

    downTri: {
        width: 0,
        height: 0,
        borderTopWidth: 90/2 - 10,
        borderRightWidth: 45/2 - 5,
        borderBottomWidth: 0,
        borderLeftWidth: 45/2 - 5,
        borderTopColor: '#563772',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
        position: 'absolute',
    },

    leftTri: {
        width: 0,
        height: 0,
        //backgroundColor: '#c9a4eb',
        borderStyle: 'solid',
        borderTopWidth: 45/2 - 5,
        borderRightWidth: 90/2 - 10,
        borderBottomWidth: 45/2 - 5,
        borderLeftWidth: 0,
        borderTopColor: 'transparent',
        borderRightColor: '#563772',
        borderBottomColor: 'transparent',
        borderLeftColor: 'transparent',
        position: 'absolute',
    },

    rightTri: {
        width: 0,
        height: 0,
        //backgroundColor: '#c9a4eb',
        borderStyle: 'solid',
        borderTopWidth: 45/2 - 5,
        borderRightWidth: 0,
        borderBottomWidth:45/2 - 5,
        borderLeftWidth: 90/2 - 10,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderLeftColor: '#563772',
        position: 'absolute',
    },

    up:{
        top: 240,
        alignSelf: 'center',
        opacity: 0.8,
    },
    down:{
        top: 445,
        alignSelf: 'center',
        opacity: 0.8,
    },
    left:{
        top: 345,
        left: 95,
        opacity: 0.8,
    },
    right:{
        top: 345,
        left: 300,
        opacity: 0.8,
    },

})

export default RemoteScreen;