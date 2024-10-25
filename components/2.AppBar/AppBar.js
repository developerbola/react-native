import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <View style={{ ...styles.linkContainer, ...styles.active }}>
        <Text style={{ ...styles.link, ...styles.active.text }}>Today</Text>
      </View>
      <View style={styles.linkContainer}>
        <Text style={styles.link}>All</Text>
      </View>
      <View style={styles.linkContainer}>
        <Text style={styles.link}>Calendar</Text>
      </View>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: "#ffffff05",
    borderRadius: 10,
    paddingHorizontal: 8,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  linkContainer: {
    height: 48,
    width: "33%",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: "#ffffff60",
    fontSize: 19,
  },
  active: {
    backgroundColor: "#ffffff09",
    borderRadius: 8,
    text: {
      color: "#fff",
    },
  },
});
