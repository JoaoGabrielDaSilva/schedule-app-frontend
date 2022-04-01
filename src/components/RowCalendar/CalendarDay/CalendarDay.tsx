import { format, isToday } from "date-fns";
import React from "react";
import { Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import { RFValue } from "react-native-responsive-fontsize";
import { WeekCalendar } from "..";
import { ligh_theme } from "../../../theme";
import { styles } from "./styles";

type Props = {
  onPress: (dayIndex: number) => void;
  selected: boolean;
  size: number;
  data: WeekCalendar;
};

export const CalendarDay = ({ onPress, selected, size, data }: Props) => {
  const theme = ligh_theme;

  return (
    <BorderlessButton onPress={() => onPress(data.dayIndex)}>
      <Animated.View
        style={[
          styles.days,
          {
            width: size,
            height: size,
            borderRadius: size,
            backgroundColor: selected ? theme.color.primary : "transparent",
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <Text
          style={[
            styles.weekDay,
            {
              fontSize: RFValue(theme.fontSize.sm),
              fontWeight: "bold",
              color: isToday(data.day)
                ? theme.color.white
                : theme.color.heading,
            },
          ]}
        >
          {data.weekDay}
        </Text>
        <Text
          style={[
            styles.day,
            {
              fontSize: RFValue(theme.fontSize.xsm),
              fontWeight: "bold",
              color: isToday(data.day)
                ? theme.color.white
                : theme.color.heading,
            },
          ]}
        >
          {format(data.day, "d")}
        </Text>
      </Animated.View>
    </BorderlessButton>
  );
};
