import { ImageBackground, ScrollView, StyleSheet } from "react-native";
import React from "react";
import {
  Top,
  AppBar,
  CompletedTasks,
  PendingTasks,
} from "../components/components";
import { StatusBar } from "expo-status-bar";

const index = () => {
  return (
    <ImageBackground source={require("../assets/bg.png")} style={styles.body}>
      <StatusBar hidden />
      <ScrollView style={styles.container}>
        <Top />
        <AppBar />
        <PendingTasks />
        <CompletedTasks />
      </ScrollView>
    </ImageBackground>
  );
};

export default index;

const styles = StyleSheet.create({
  body: {
    position: "relative",
    flex: 1,
  },
  container: {
    width: "100%",
    paddingHorizontal: 20,
  },
});
