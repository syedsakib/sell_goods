import { StyleSheet, Image, View } from "react-native";
import React from "react";

import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        style={styles.image}
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
      />
    </View>
  );
};

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    height: 50,
    width: 50,
    backgroundColor: colors.primary,
    position: "absolute",
    top: 30,
    left: 20,
  },
  deleteIcon: {
    height: 50,
    width: 50,
    backgroundColor: colors.secondary,
    position: "absolute",
    top: 30,
    right: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
