import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Link href={"/"} style={{ ...styles.linkContainer, ...styles.active }}>
        <Text style={{ ...styles.link, ...styles.active.text }}>Today</Text>
      </Link>
      <Link href={"/all"} style={styles.linkContainer}>
        <Text style={styles.link}>All</Text>
      </Link>
      <Link href={"/calendar"} style={styles.linkContainer}>
        <Text style={styles.link}>Calendar</Text>
      </Link>
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: "#ffffff09",
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  linkContainer: {
    height: 48,
    width: "35%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: 11,
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
