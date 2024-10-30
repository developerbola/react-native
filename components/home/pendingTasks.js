import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { api } from "../../api/api";

const pendingTasks = () => {
  const [tasks, setTasks] = useState([]);

  const today = +`${
    new Date().getDate() < 10
      ? "0" + new Date().getDate()
      : new Date().getDate()
  }${
    new Date().getMonth() + 1 < 10
      ? "0" + (new Date().getMonth() + 1)
      : new Date().getMonth() + 1
  }${new Date().getFullYear()}`;

  useEffect(() => {
    const getTasks = async () => {
      const res = await api.getTasks();
      const task = res.find((task) => task.id === today);

      if (task) {
        const inCompletedTasks = task.tasks.filter(
          (task) => task.isCompleted === false
        );
        setTasks(inCompletedTasks);
      }
    };
    getTasks();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.title}>Pending Tasks</Text>
        <Text style={styles.title}>
          {new Date().getHours() < 10
            ? "0" + new Date().getHours()
            : new Date().getHours()}
          :
          {new Date().getMinutes() < 10
            ? "0" + new Date().getMinutes()
            : new Date().getMinutes()}
        </Text>
      </View>
      <View style={styles.tasksWrapper} blurRadius={1}>
        {tasks?.map((task, index) => {
          return (
            <View style={styles.task} key={index}>
              <View
                style={{ ...styles.colorMark, backgroundColor: task.color }}
              />
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
  topContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  title: {
    color: "#fff",
    paddingLeft: 10,
    fontSize: 22,
  },
  tasksWrapper: {
    paddingVertical: 20,
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
    marginTop: 5,
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
    borderColor: "#ffffff50",
    borderWidth: 1.5,
    borderRadius: 50,
    marginRight: 10,
  },
});
