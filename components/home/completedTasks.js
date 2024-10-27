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
            <View
              style={{ ...styles.task, borderLeftColor: task.color }}
              key={index}
            >
              <View style={styles.textWrapper}>
                <Text style={styles.taskText}>{task.task}</Text>
                <Text style={styles.additionalTexts}>{task.time}</Text>
              </View>
              <View style={styles.checkBox}>
                <View style={styles.checked}>
                  <Image
                    source={require("../../assets/checkmark.png")}
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
    paddingVertical: 1,
    paddingHorizontal: 20,
    width: "90%",
    borderLeftWidth: 4,
  },
  textWrapper: {
    width: "60%",
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
    // borderColor: "#ffffff50",
    borderWidth: 1.5,
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
