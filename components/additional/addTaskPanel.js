import React, { useState, useRef, useEffect } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Animated,
} from "react-native";
import Modal from "react-native-modal";
import pencil from "../../assets/icons/pencil.png";
import close from "../../assets/icons/close.png";
import Loader from "../UI/loader";

const AddTaskPanel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAll, setIsAll] = useState(false);
  const [isPosting, setIsPosting] = useState(false);

  // Create an animated value for translateX
  const translateX = useRef(new Animated.Value(0)).current;

  // Trigger the animation when isAll changes
  useEffect(() => {
    Animated.timing(translateX, {
      toValue: isAll ? 30 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isAll]);

  return (
    <>
      <Pressable style={styles.toggler} onPress={() => setIsVisible(true)}>
        <Image source={pencil} style={styles.pencilImg} />
      </Pressable>

      <Modal
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
        style={styles.modal}
        swipeDirection="down"
        onSwipeComplete={() => setIsVisible(false)}
      >
        <View style={styles.container}>
          <View style={styles.top}>
            <Text style={{ color: "#fff", fontSize: 30 }}>New Task</Text>
            <Pressable onPress={() => setIsVisible(false)}>
              <Image source={close} style={styles.pencilImg} />
            </Pressable>
          </View>
          <View style={styles.taskContainer}>
            <TextInput
              style={styles.input}
              placeholder="Task Title"
              placeholderTextColor="#ffffff90"
              caretHidden
            />
            <View style={styles.colorsContainer}>
              <View style={{ ...styles.circle, backgroundColor: "red" }}></View>
              <View
                style={{ ...styles.circle, backgroundColor: "yellow" }}
              ></View>
              <View
                style={{ ...styles.circle, backgroundColor: "purple" }}
              ></View>
              <View
                style={{ ...styles.circle, backgroundColor: "brown" }}
              ></View>
              <View
                style={{ ...styles.circle, backgroundColor: "blue" }}
              ></View>
              <View
                style={{ ...styles.circle, backgroundColor: "orange" }}
              ></View>
            </View>
            <View style={styles.timeContainer}>
              <View style={styles.switcher}>
                <Text style={{ color: "#fff", fontSize: 20 }}>All day</Text>
                <Pressable
                  style={{
                    ...styles.switcherContainer,
                    ...(isAll ? styles.active : {}),
                  }}
                  onPress={() => setIsAll(!isAll)}
                >
                  <Animated.View
                    style={[
                      styles.switcherBall,
                      {
                        transform: [{ translateX }],
                      },
                      isAll && styles.activeBall,
                    ]}
                  />
                </Pressable>
              </View>
              <View style={styles.timeWrapper}>
                <Text style={{ color: "white" }}>from:</Text>
                <TextInput
                  style={styles.timeInput}
                  placeholder="00:00"
                  placeholderTextColor="#ffffff90"
                  caretHidden
                />
                <Text style={{ color: "white" }}>until:</Text>
                <TextInput
                  style={styles.timeInput}
                  placeholder="00:00"
                  placeholderTextColor="#ffffff90"
                  caretHidden
                />
              </View>
            </View>
            <Pressable
              style={styles.addBtn}
              onPress={() => setIsPosting(!isPosting)}
            >
              {isPosting ? (
                <Loader />
              ) : (
                <Text
                  style={styles.addText}
                >
                  Add Task
                </Text>
              )}
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default AddTaskPanel;

const styles = StyleSheet.create({
  toggler: {
    position: "absolute",
    top: 680,
    left: "70%",
    height: 80,
    width: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    borderWidth: 0.8,
    borderColor: "#ffffff20",
    borderRadius: 50,
  },
  pencilImg: {
    height: 30,
    width: 30,
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  container: {
    backgroundColor: "#000",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 0.2,
    borderColor: "#ffffff60",
    padding: 40,
    height: "90%",
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  taskContainer: {
    paddingVertical: 20,
  },
  input: {
    color: "#fff",
    borderWidth: 1,
    borderColor: "#ffffff30",
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 15,
  },
  colorsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 20,
    paddingHorizontal: 5,
  },
  circle: {
    height: 35,
    width: 35,
    borderRadius: 50,
  },
  timeContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 20,
    backgroundColor: "#ffffff10",
    borderRadius: 13,
  },
  switcher: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderBottomWidth: 0.5,
    paddingBottom: 18,
    borderBottomColor: "#ffffff30",
  },
  switcherContainer: {
    height: 30,
    width: 60,
    backgroundColor: "#ffffff20",
    borderRadius: 50,
    display: "flex",
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  active: {
    backgroundColor: "#51f54290",
  },
  switcherBall: {
    height: 20,
    width: 20,
    backgroundColor: "#ffffff50",
    borderRadius: 20,
  },
  activeBall: {
    backgroundColor: "#fff",
  },
  timeWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingTop: 10,
  },
  timeInput: {
    color: "#fff",
    borderWidth: 1,
    borderColor: "#ffffff30",
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 15,
    fontSize: 20,
    width: 80,
    textAlign: "center",
  },
  addBtn: {
    borderWidth: 0.5,
    borderColor: "#ffffff40",
    borderRadius: 15,
    marginTop: 20,
    height: 55,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  addText: {
    color: "#FFF",
    fontSize: 20,
  },
});
