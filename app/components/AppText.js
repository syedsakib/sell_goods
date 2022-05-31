import React from "react";
import { Text } from "react-native";

import styles from "../config/styles";

const AppText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default AppText;
