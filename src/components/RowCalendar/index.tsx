import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import { RFValue } from "react-native-responsive-fontsize";
import {
  getDaysInMonth,
  format,
  getDaysInYear,
  getYear,
  getMonth,
  isEqual,
  isToday,
} from "date-fns";

import { ligh_theme } from "../../theme";
import { styles } from "./styles";
import { getDaysLeftInMonth } from "../../utils/getDaysLeftInMonth";
import { addMonths, setMonth } from "date-fns/esm";
import { useStore } from "react-redux";

type Props = {};

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const { width } = Dimensions.get("screen");

const ITEM_SIZE = width / 7;

const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const year = getYear(new Date());
const today = new Date();

export const RowCalendar = ({}: Props) => {
  const translateX = useSharedValue(0);

  // const yearWidth = 1700;

  const INPUT_RANGE = Array.from({ length: 12 }).flatMap((_, month) => {
    const daysInMonth = getDaysInMonth(new Date(year, month));
    const yearWidth = (month + 1) * (daysInMonth * ITEM_SIZE);
    console.log(yearWidth);

    return [yearWidth * (month + 1) - 60, yearWidth * (month + 1)];
  });

  const OUTPUT_RANGE = Array.from({ length: 12 }).flatMap((_, index) => {
    return [index * -60, -60 * (index + 1)];
  });

  const data = Array.from({ length: 12 }).flatMap((item, month) => {
    let daysLength = getDaysInMonth(new Date(year, month));

    return Array.from({ length: daysLength }).map((_, index) => {
      const day = index + 1;
      return {
        weekDay: format(new Date(year, month, day), "EEE"),
        day: new Date(year, month, day),
        month: new Date(year, month),
        year,
      };
    });
  });

  const theme = ligh_theme;

  const scrollHandler = useAnimatedScrollHandler({
    onBeginDrag: (_, ctx) => {
      ctx.value = translateX.value;
    },
    onScroll: (e, ctx) => {
      translateX.value = e.contentOffset.x;
    },
  });

  const monthStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(translateX.value, INPUT_RANGE, OUTPUT_RANGE, {
            extrapolateRight: Extrapolate.CLAMP,
            extrapolateLeft: Extrapolate.CLAMP,
          }),
        },
      ],
    };
  });

  return (
    <View>
      <View
        style={{
          height: 60,
          position: "absolute",
          left: 0,
          top: 0,
          overflow: "hidden",
        }}
      >
        {months.map((item, index) => {
          return (
            <Animated.View
              key={index}
              style={[styles.monthContainer, monthStyle]}
            >
              <Text
                style={[
                  styles.month,

                  {
                    fontSize: RFValue(theme.fontSize.xxlg),
                    fontWeight: "bold",
                  },
                ]}
              >
                {item}
              </Text>
            </Animated.View>
          );
        })}
      </View>
      <AnimatedFlatList
        data={data}
        contentContainerStyle={{ paddingTop: 70 }}
        onScroll={scrollHandler}
        renderItem={({ item }) => (
          <View
            style={[
              styles.days,
              {
                width: ITEM_SIZE,
                height: ITEM_SIZE,
                borderRadius: ITEM_SIZE,
                backgroundColor: isToday(item.day)
                  ? theme.color.primary
                  : "transparent",
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
                  color: isToday(item.day)
                    ? theme.color.white
                    : theme.color.heading,
                },
              ]}
            >
              {item.weekDay}
            </Text>
            <Text
              style={[
                styles.day,
                {
                  fontSize: RFValue(theme.fontSize.xsm),
                  fontWeight: "bold",
                  color: isToday(item.day)
                    ? theme.color.white
                    : theme.color.heading,
                },
              ]}
            >
              {format(item.day, "d")}
            </Text>
          </View>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => String(index)}
      />
    </View>
  );
};
