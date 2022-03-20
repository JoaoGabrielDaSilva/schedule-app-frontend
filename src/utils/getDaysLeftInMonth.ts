import { differenceInDays, lastDayOfMonth } from "date-fns";

export const getDaysLeftInMonth = (initialDate: Date, date: Date) => {
  const endDate = lastDayOfMonth(date);

  return differenceInDays(initialDate, endDate);
};
