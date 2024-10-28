import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { router } from "expo-router";

const NavigationMenu = ({ title }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.push("/")}>
        <View style={styles.linkContainer}>
          <Image
            source={require("../assets/icons/back.png")}
            style={{ height: 16, width: 9, marginTop: 2 }}
          />
          <Text style={styles.backText}>Back</Text>
        </View>
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  linkContainer: {
    width: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  backText: {
    display: "inline",
    color: "#fff",
    fontSize: 20,
  },
  title: {
    color: "#fff",
    fontSize: 22,
  },
});

export default NavigationMenu;
