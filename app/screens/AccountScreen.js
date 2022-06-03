import { StyleSheet, FlatList, View } from "react-native";
import React from "react";

import colors from "../config/colors";

import Screen from "../components/Screen";
import { ListItem } from "../components/lists";
import Icon from "../components/Icon";

const AccountScreen = () => {
  const menuItems = [
    {
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: colors.primary,
      },
    },
    {
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: colors.secondary,
      },
      targetScreen: "Messages",
    },
  ];

  return (
    <Screen style={styles.screen}>
      <ListItem
        title="Syed Shakib"
        subTitle="sakibsyed01@gmail.com"
        image={require("../assets/mosh.jpg")}
      />
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <View>
        <ListItem
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
          title="Log Out"
        />
      </View>
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
});
