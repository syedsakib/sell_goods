import { StyleSheet, View } from "react-native";
import AppButton from "./app/components/AppButton";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return <AccountScreen />;
}

const styles = StyleSheet.create({});

//rnfes

{
  /* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
<AppButton title="Login" onPress={() => console.log("Login")} />
</View> */
}
