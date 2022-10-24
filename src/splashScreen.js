import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import image from '../assets/pizza.jpg'
import Button from '../components/button';

const SplashScreen = props =>{
    return(
        <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.loginContainer}>
            <View style={styles.space}></View>
            <View style={styles.login}>
              <Text style={{ fontSize: 30, fontWeight: "500", color: 'white' }}>Cooking a</Text>
              <Text style={{ fontSize: 30, fontWeight: "500", color: 'white' }}>Delicious Food</Text>
              <Text style={{ fontSize: 30, fontWeight: "500", color: 'white' }}>Easily</Text>
              <View style={styles.sizeBox}></View>
              <View style={{ width: "70%", height: "15%" }}>
                <Text style={{ color: "rgba(105,105,105,0.6)", fontWeight: "500" }}>Discover more than 1200 food recipes in your hands and cooking it easily</Text>
              </View>
              <View style={{ height: 25 }}></View>
              <Button type={"login"} />
              <View style={{ height: 25 }}></View>
              <Button />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    loginContainer: {
      flex: 1,
      backgroundColor: "rgba(0,0,0,0.9)"
    },
    login: {
      flex: 1.6,
      padding: 25,
    },
    space: {
      flex: 1,
    },
    sizeBox: {
      height: 10
    }
  });

export default SplashScreen