import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AllTasks = () => {
  const today = new Date().getDate();
  const realMonth = new Date().getMonth() + 1;
  const month = realMonth < 10 ? "0" + realMonth : realMonth;
  const year = new Date().getFullYear();
  const date = `${today}-${month}-${year}`;

  console.log(date);

  return (
    <View>
      <Text style={styles.text}>{date}</Text>
    </View>
  );
};

export default AllTasks;

const styles = StyleSheet.create({
  text: {
    color: "#fff",
  },
});
