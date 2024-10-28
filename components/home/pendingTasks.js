import { StyleSheet, Text, View } from "react-native";
import React from "react";

const pendingTasks = () => {
  const tasks = [
    {
      task: "Run 1 km",
      time: "2:00 - 3:00",
      color: "dodgerblue",
      isChecked: false,
    },
    {
      task: "Read book",
      time: "3:30 - 4:00",
      color: "yellow",
      isChecked: false,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pending Tasks</Text>
      <View style={styles.tasksWrapper} blurRadius={1}>
        {tasks.map((task, index) => {
          return (
            <View style={styles.task} key={index}>
              <View style={{...styles.colorMark, backgroundColor: task.color}} />
              <View style={styles.textWrapper}>
                <Text style={styles.taskText}>{task.task}</Text>
                <Text style={styles.additionalTexts}>{task.time}</Text>
              </View>
              <View style={styles.checkBox}></View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default pendingTasks;

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
    borderRadius: 1
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
    borderColor: "#ffffff50",
    borderWidth: 1.5,
    borderRadius: 50,
    marginRight: 10,
  },
});
