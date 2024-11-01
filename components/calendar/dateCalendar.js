import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { weekdays } from "../../helpers/getWeekDays";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const dateCalendar = () => {
  const today = new Date().getDate();
  const { sunday, monday, tuesday, wednesday, thursday, friday, saturday } =
    weekdays();

  return (
    <View style={styles.container}>
      <Text style={styles.dateText}>
        {months[new Date().getMonth()]}{" "}
        {new Date().getDate() < 10
          ? "0" + new Date().getDate()
          : new Date().getDate()}
      </Text>
      <View style={styles.weekdaysWrapper}>
        {/* === Sunday === */}
        <View
          style={[
            styles.weekdaysContainer,
            today === sunday ? styles.activeContainer : null,
          ]}
        >
          <Text style={styles.weekday}>S</Text>
          <Text
            style={
              today === sunday ? [styles.date, styles.active] : styles.date
            }
          >
            {sunday}
          </Text>
        </View>

        {/* === Monday === */}
        <View
          style={[
            styles.weekdaysContainer,
            today === monday ? styles.activeContainer : null,
          ]}
        >
          <Text style={styles.weekday}>M</Text>
          <Text
            style={
              today === monday ? [styles.date, styles.active] : styles.date
            }
          >
            {monday}
          </Text>
        </View>

        {/* === Tuesday === */}
        <View
          style={[
            styles.weekdaysContainer,
            today === tuesday ? styles.activeContainer : null,
          ]}
        >
          <Text style={styles.weekday}>T</Text>
          <Text
            style={
              today === tuesday ? [styles.date, styles.active] : styles.date
            }
          >
            {tuesday}
          </Text>
        </View>

        {/* === Wednesday === */}
        <View
          style={[
            styles.weekdaysContainer,
            today === wednesday ? styles.activeContainer : null,
          ]}
        >
          <Text style={styles.weekday}>W</Text>
          <Text
            style={
              today === wednesday ? [styles.date, styles.active] : styles.date
            }
          >
            {wednesday}
          </Text>
        </View>

        {/* === Thursday === */}
        <View
          style={[
            styles.weekdaysContainer,
            today === thursday ? styles.activeContainer : null,
          ]}
        >
          <Text style={styles.weekday}>TH</Text>
          <Text
            style={
              today === thursday ? [styles.date, styles.active] : styles.date
            }
          >
            {thursday}
          </Text>
        </View>

        {/* === Friday === */}
        <View
          style={[
            styles.weekdaysContainer,
            today === friday ? styles.activeContainer : null,
          ]}
        >
          <Text style={styles.weekday}>F</Text>
          <Text
            style={
              today === friday ? [styles.date, styles.active] : styles.date
            }
          >
            {friday}
          </Text>
        </View>

        {/* === Saturday === */}
        <View
          style={[
            styles.weekdaysContainer,
            today === saturday ? styles.activeContainer : null,
          ]}
        >
          <Text style={styles.weekday}>S</Text>
          <Text
            style={
              today === saturday ? [styles.date, styles.active] : styles.date
            }
          >
            {saturday}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default dateCalendar;

const styles = StyleSheet.create({
  container: {
    height: 210,
    width: "100%",
    backgroundColor: "#ffffff10",
    borderRadius: 20,
    padding: 20,
    marginBottom: 10,
  },
  dateText: {
    color: "#fff",
    fontSize: 54,
    marginBottom: 10,
  },
  weekdaysWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  weekdaysContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  weekday: {
    color: "#fff",
    fontSize: 20,
  },
  date: {
    color: "#fff",
    fontSize: 20,
  },
  activeContainer: {
    marginTop: 6,
    gap: 5,
  },
  active: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    color: "#000",
    paddingTop: 5,
    textAlign: "center",
  },
});
