import { StyleSheet, View, ImageBackground, ScrollView } from "react-native";
import { Top, AppBar, PendingTasks } from "./components/components";

export default function App() {
  return (
    <ImageBackground source={require("./assets/image.png")} style={styles.body}>
      <View style={styles.bgBrighter} />
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
    position: "relative",
    flex: 1,
    color: "#fff",
  },
  bgBrighter: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background: "#f00"
  },
  container: {
    width: "100%",
    marginTop: 40,
    paddingHorizontal: 20,
  },
});
