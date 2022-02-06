import React from "react";
import { useState } from "react";
import { Dimensions, StyleSheet } from "react-native";
import { Calendar as RNCalendar } from "react-native-calendars";

const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  calendar: {
    width,
  },
});

export const Calendar = () => {
  const date = new Date().toJSON().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(date);

  const handleSelectDate = (date: string) => {
    setSelectedDate(date);
  };

  console.log(date);

  return (
    <RNCalendar
      style={styles.calendar}
      customHeader={(e) => console.log(e)}
      markedDates={{
        [selectedDate]: {
          selected: true,
          selectedColor: "pink",
          selectedTextColor: "white",
          customContainerStyle: {
            backgroundColor: "red",
            borderRadius: 12,
          },
        },
      }}
      onDayPress={({ dateString }) => handleSelectDate(dateString)}
    />
  );
};
