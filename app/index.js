import React from "react";
import { ImageBackground, ScrollView, StyleSheet } from "react-native";
import {
  Top,
  AppBar,
  CompletedTasks,
  PendingTasks,
} from "../components/components";
import { StatusBar } from "expo-status-bar";

const Index = () => {
  return (
    <ImageBackground source={require("../assets/bg.png")}>
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

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
  },
});

export default Index;
