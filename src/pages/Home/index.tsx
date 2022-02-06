import React from "react";
import { Text, View } from "react-native";
import { Calendar } from "../../components/Calendar";

export const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <Calendar />
    </View>
  );
};
