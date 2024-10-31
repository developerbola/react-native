export function weekdays() {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const weekDay = today.getDay();

  const weekDates = Array.from({ length: 7 }).map((_, i) => {
    const date = new Date(currentYear, currentMonth, today.getDate() - weekDay + i);
    return date.getDate();
  });

  const [sunday, monday, tuesday, wednesday, thursday, friday, saturday] = weekDates;
  return { sunday, monday, tuesday, wednesday, thursday, friday, saturday };
}
