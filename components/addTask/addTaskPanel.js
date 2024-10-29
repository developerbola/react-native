import React, { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import pencil from "../../assets/icons/pencil.png";
import close from "../../assets/icons/close.png";


const AddTaskPanel = () => {
  const [isVisible, setIsVisible] = useState(false);

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
    padding: 20,
    height: "90%",
  },
  top: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
