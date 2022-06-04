import { StyleSheet, View, Image, TouchableHighlight } from "react-native";
import React from "react";
import { Swipeable } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../../config/colors";
import AppText from "../AppText";

const ListItem = ({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  IconComponent,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {image && <Image style={styles.image} source={image} />}
          {IconComponent}
          <View style={styles.textContaienr}>
            <AppText style={styles.title} numberOfLines={1}>
              {title}
            </AppText>
            {subTitle && (
              <AppText style={styles.subTitle} numberOfLines={2}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={25}
            color={colors.medium}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  textContaienr: {
    display: "flex",
    justifyContent: "center",
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontWeight: "600",
  },
  subTitle: {
    color: colors.medium,
  },
});
