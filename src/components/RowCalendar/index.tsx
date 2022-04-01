import React, { useState, useEffect } from "react";
import {
  Dimensions,
  FlatList,
  Text,
  View,
  ListRenderItemInfo,
} from "react-native";
import Animated, {
  runOnJS,
  runOnUI,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
  withTiming,
  SlideInLeft,
  SlideOutLeft,
  SlideInRight,
} from "react-native-reanimated";
import { RFValue } from "react-native-responsive-fontsize";
import {
  format,
  getDaysInYear,
  getYear,
  getMonth,
  isToday,
  getWeek,
  getDay,
  weeksToDays,
} from "date-fns";
import { BorderlessButton } from "react-native-gesture-handler";

import { ligh_theme } from "../../theme";
import { styles } from "./styles";
import { CalendarDay } from "./CalendarDay/CalendarDay";
import { getDaysInMonth } from "date-fns/esm";

type Props = {};

export type WeekCalendar = {
  weekDay: string;
  day: Date;
  month: Date;
  week: number;
  dayIndex: WeekIndexes;
  year: number;
};

type WeekIndexes = 0 | 1 | 2 | 3 | 4 | 5 | 6;

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

const MONTH_LENGTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

export const RowCalendar = ({}: Props) => {
  const today = new Date();
  const year = useSharedValue(getYear(today));
  const month = useSharedValue(getMonth(today));
  const currentWeek = getWeek(today);
  const week = useSharedValue(0);
  const translateX = useSharedValue(0);
  const [selectedDayIndex, setSelectedDayIndex] = useState<WeekIndexes>(
    getDay(today)
  );

  const getSelectedDate = () => {
    const date = format(
      new Date(
        year.value,
        week.value < 4 ? 1 : week.value / 4 - 1,
        week.value * 7 + selectedDayIndex - 1
      ),
      "dd/MM/yyyy"
    );
    return date;
  };

  const handleSelectDate = () => {
    const monthLength = MONTH_LENGTH[week.value / 4];
    console.log(monthLength);

    const date = format(
      new Date(
        year.value,
        week.value < 4 ? 0 : week.value / 4 - 1,
        week.value * 7 +
          selectedDayIndex -
          (monthLength < 31 ? 31 - monthLength : 1)
      ),
      "dd/MM/yyyy"
    );
    setSelectedDate(date);
  };

  const [selectedDate, setSelectedDate] = useState(getSelectedDate());

  console.log("INDEX", getDay(today));

  const data = Array.from({ length: getDaysInYear(today) }).map(
    (item, index) => {
      const day = index + 1;
      const formattedDay = new Date(year.value, month.value, day);
      return {
        weekDay: format(new Date(year.value, month.value, day), "EEE"),
        day: formattedDay,
        month: new Date(year.value, month.value),
        week: getWeek(formattedDay),
        dayIndex: getDay(formattedDay),
        year: year.value,
      } as WeekCalendar;
    }
  );

  const theme = ligh_theme;

  const scrollHandler = useAnimatedScrollHandler({
    onBeginDrag: (_, ctx) => {
      ctx.value = translateX.value;
    },
    onScroll: (e, ctx) => {
      translateX.value = e.contentOffset.x;
    },
    onMomentumEnd: (e) => {
      week.value = Math.floor(e.contentOffset.x / (ITEM_SIZE * 7));
    },
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
        <Text>{selectedDate}</Text>
        {months.map((item, index) => {
          return (
            <Animated.View key={index} style={[styles.monthContainer]}>
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
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: 70 }}
        onScroll={scrollHandler}
        renderItem={({ item }: ListRenderItemInfo<WeekCalendar>) => (
          <CalendarDay
            onPress={(dayIndex: WeekIndexes) => {
              setSelectedDayIndex(dayIndex);
              handleSelectDate();
            }}
            data={item}
            selected={item.dayIndex === selectedDayIndex}
            size={ITEM_SIZE}
          />
        )}
        horizontal
        snapToInterval={width + 1}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => String(index)}
        initialNumToRender={7}
        maxToRenderPerBatch={7}
        getItemLayout={(_, index) => {
          return {
            index,
            length: ITEM_SIZE,
            offset: ITEM_SIZE * index,
          };
        }}
        onMomentumScrollEnd={handleSelectDate}
      />
      {/* <DayGrid day={new Date()} /> */}
    </View>
  );
};
