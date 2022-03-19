import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Routes } from "./src/routes";
import { store } from "./src/store";
import { Provider } from "react-redux";

import { GoogleSignin } from "@react-native-google-signin/google-signin";

export default function App() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "433191753210-mnjlbviboaoq17sj3a700cipg73l6vvr.apps.googleusercontent.com",
    });
  }, []);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Routes />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
