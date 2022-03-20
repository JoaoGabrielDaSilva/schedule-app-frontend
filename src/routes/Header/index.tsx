import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { StackHeaderProps } from "@react-navigation/stack";
import React from "react";
import { Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
import { ligh_theme } from "../../theme";

import { styles } from "./styles";

export const Header = ({ options, route: { name } }: StackHeaderProps) => {
  const theme = ligh_theme;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Ionicons
          name="menu"
          style={[
            {
              paddingHorizontal: theme.spacing.xlg,
              fontSize: RFValue(theme.fontSize.lg),
            },
          ]}
        />
        <Ionicons
          name="md-notifications-outline"
          style={[
            {
              paddingHorizontal: theme.spacing.xlg,
              fontSize: RFValue(theme.fontSize.lg),
            },
          ]}
        />
      </View>
    </SafeAreaView>
  );
};
