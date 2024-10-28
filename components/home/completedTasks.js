import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const completedTasks = () => {
  const tasks = [
    {
      task: "Reading book",
      time: "7:00 - 8:00",
      color: "red",
      isChecked: true,
    },
    {
      task: "Make design",
      time: "8:00 - 9:30",
      color: "yellow",
      isChecked: true,
    },
    {
      task: "Have design",
      time: "9:30 - 11:00",
      color: "dodgerblue",
      isChecked: true,
    },
    {
      task: "Make design",
      time: "8:00 - 9:30",
      color: "yellow",
      isChecked: true,
    },
    {
      task: "Have design",
      time: "9:30 - 11:00",
      color: "dodgerblue",
      isChecked: true,
    },
    {
      task: "Make design",
      time: "8:00 - 9:30",
      color: "yellow",
      isChecked: true,
    },
    {
      task: "Have design",
      time: "9:30 - 11:00",
      color: "dodgerblue",
      isChecked: true,
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Completed Tasks</Text>
      <View style={styles.tasksWrapper} blurRadius={1}>
        {tasks.map((task, index) => {
          return (
            <View style={styles.task} key={index}>
              <View
                style={{ ...styles.colorMark, backgroundColor: task.color }}
              />
              <View style={styles.textWrapper}>
                <Text style={styles.taskText}>{task.task}</Text>
                <Text style={styles.additionalTexts}>{task.time}</Text>
              </View>
              <View style={styles.checkBox}>
                <View style={styles.checked}>
                  <Image
                    source={require("../../assets/icons/checkmark.png")}
                    style={{ height: 12, width: 12 }}
                  />
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default completedTasks;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    color: "#fff",
    paddingLeft: 10,
    fontSize: 22,
  },
  tasksWrapper: {
    paddingVertical: 20,
    minHeight: 100,
    width: "100%",
    marginTop: 15,
    backgroundColor: "#ffffff09",
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 15,
  },
  task: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    width: "90%",
  },
  colorMark: {
    height: 35,
    width: 6,
    backgroundColor: "#f00",
    borderRadius: 1,
  },
  textWrapper: {
    width: "75%",
  },
  additionalTexts: {
    fontSize: 13,
    color: "#ffffff50",
  },
  taskText: {
    color: "#fff",
    fontSize: 20,
  },
  checkBox: {
    height: 25,
    width: 25,
    borderRadius: 50,
    marginRight: 10,
    background: "red",
    overflow: "hidden",
  },
  checked: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#009402",
  },
});
