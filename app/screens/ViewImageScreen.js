import { StyleSheet, Image, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

import colors from "../config/colors";

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" color={colors.white} size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.white}
          size={35}
        />
      </View>
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
    position: "absolute",
    top: 30,
    left: 20,
  },
  deleteIcon: {
    position: "absolute",
    top: 30,
    right: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
