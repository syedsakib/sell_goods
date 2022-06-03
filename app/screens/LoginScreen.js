import { StyleSheet, Image, View } from "react-native";
import React from "react";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <View style={styles.formContainer}>
        <AppForm
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => console.log(`values`, values)}
        >
          <AppFormField
            icon="email"
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            name="email"
          />
          <AppFormField
            icon="lock"
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry
            textContentType="password"
            name="password"
          />

          <SubmitButton title="Login" />
        </AppForm>
      </View>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    marginTop: 70,
    marginBottom: 10,
  },
  formContainer: {
    paddingTop: 100,
    paddingHorizontal: 10,
  },
});
