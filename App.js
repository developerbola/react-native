import { StyleSheet, View, ImageBackground, ScrollView } from "react-native";
import { Top, AppBar, PendingTasks } from "./components/components";

export default function App() {
  return (
    <ImageBackground source={require("./assets/bg.png")} style={styles.body}>
      <ScrollView style={styles.container}>
        <Top />
        <AppBar />
        <PendingTasks />
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    color: "#fff",
  },
  container: {
    width: "100%",
    marginTop: 40,
    paddingHorizontal: 20,
  },
});
