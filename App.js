import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <Routes />
    </View>
  );
}
