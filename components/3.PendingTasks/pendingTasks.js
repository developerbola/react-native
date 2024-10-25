import { StyleSheet, Text, View } from "react-native";
import React from "react";

const pendingTasks = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pending Tasks</Text>
      <View style={styles.tasksWrapper}>
        <View style={styles.task}>
          <View style={styles.textWrapper}>
            <Text style={styles.taskText}>Run 2 km</Text>
            <Text style={styles.additionalTexts}>6:00 - 7:00</Text>
          </View>
          <View style={styles.checkBox}></View>
        </View>
        <View style={{ ...styles.task, borderLeftColor: "yellow" }}>
          <View style={styles.textWrapper}>
            <Text style={styles.taskText}>Reading book</Text>
            <Text style={styles.additionalTexts}>7:00 - 8:00</Text>
          </View>
          <View style={styles.checkBox}></View>
        </View>
        <View style={{ ...styles.task, borderLeftColor: "yellow" }}>
          <View style={styles.textWrapper}>
            <Text style={styles.taskText}>Reading book</Text>
            <Text style={styles.additionalTexts}>7:00 - 8:00</Text>
          </View>
          <View style={styles.checkBox}></View>
        </View>
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
    backgroundColor: "#ffffff10",
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
    borderLeftColor: "#f00",
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
    borderColor: "#ffffff50",
    borderWidth: 1.5,
    borderRadius: 50,
    marginRight: 10,
  },
});
