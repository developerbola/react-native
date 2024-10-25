import React from "react";
import { StyleSheet, Text, View } from "react-native";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Top = () => {
  return (
    <View style={styles.head}>
      <View style={styles.dateBox}>
        <Text style={styles.date}>
          {months[new Date().getMonth()].slice(0, 3)} {new Date().getDate()}
        </Text>
        <Text style={styles.text}>{weekdays[new Date().getDay()]}</Text>
        <Text style={styles.tasksCount}>6 tasks</Text>
      </View>
      <View style={styles.upcomingBox}>
        <Text style={styles.upcomingTitle}>upcoming</Text>
        <View style={styles.tasksWrapper}>
          <View style={styles.task} className="task">
            <Text style={styles.taskTitle}>Portfolio Design</Text>
            <Text style={styles.taskTime}>12:00 - 13:00</Text>
          </View>
          <View
            style={{ ...styles.task, borderLeftColor: "#6FFF00" }}
            className="task"
          >
            <Text style={styles.taskTitle}>Focus Time 🎧</Text>
            <Text style={styles.taskTime}>13:30 - 14:00</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    width: "100%",
    height: 170,
    borderRadius: 25,
    backgroundColor: "#ffffff05",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10,
    flexDirection: "row",
    overflow: "hidden",
  },
  dateBox: {
    height: 150,
    width: 160,
    backgroundColor: "#ffffff05",
    borderRadius: 20,
    padding: 20,
  },
  date: {
    color: "#fff",
    fontSize: 35,
  },
  text: {
    color: "#fff",
    marginLeft: 2,
  },
  tasksCount: {
    color: "#fff",
    marginTop: 20,
    fontSize: 15,
    marginLeft: 2,
  },
  upcomingBox: {
    width: "55%",
    height: "100%",
    padding: 20,
  },
  upcomingTitle: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 15,
  },
  tasksWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 13,
    height: "100%",
    paddingVertical: 10,
  },
  task: {
    position: "relative",
    width: "100%",
    paddingLeft: 13,
    borderLeftWidth: 3,
    borderLeftColor: "#FFD900",
    borderStyle: "solid",
  },
  taskTitle: {
    color: "#fff",
    fontSize: 15,
  },
  taskTime: {
    color: "#fff",
    fontSize: 12,
  },
});

export default Top;
