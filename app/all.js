import React from "react";
import { ImageBackground, ScrollView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AllTasks, NavigationMenu } from "../components/components";

const all = () => {
  return (
    <>
      <ImageBackground source={require("../assets/bg.png")} style={styles.body}>
        <StatusBar hidden />
        <ScrollView style={styles.container}>
          <NavigationMenu title={"All tasks"} />
          <AllTasks />
        </ScrollView>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    height: "100%",
    width: "100%",
  },
  container: {
    width: "100%",
    paddingHorizontal: 20,
  },
});
export default all;
