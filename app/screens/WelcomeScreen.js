import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import React from "react";

import AppButton from "../components/AppButton";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={5}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.text}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          onClick={() => console.log("Login button clicked")}
        />
        <AppButton
          title="Register"
          color="secondary"
          onClick={() => console.log("Register button clicked")}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: { position: "absolute", top: 80, alignItems: "center" },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    top: 15,
    fontSize: 20,
    fontWeight: "600",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
});

export default WelcomeScreen;
