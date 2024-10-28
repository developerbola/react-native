export function weekdays() {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const weekDay = today.getDay();

  // Get the last day of the current month
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Calculate the dates for each day of the week
  const weekDates = Array.from({ length: 7 }).map((_, i) => {
    let date = today.getDate() - weekDay + i;

    // Wrap around to the next month if date exceeds the current month's last day
    if (date + 1 > lastDayOfMonth) {
      date = date + 1 - lastDayOfMonth;
    }

    return date;
  });

  const [sunday, monday, tuesday, wednesday, thursday, friday, saturday] =
    weekDates;
  return { sunday, monday, tuesday, wednesday, thursday, friday, saturday };
}
