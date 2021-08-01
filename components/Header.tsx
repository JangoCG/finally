import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Modal } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../constants/colors";
import properties from "../constants/properties";
import GoalModal from "./GoalModal";

const Header = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onIntervalBtnClick = () => {
    console.log("clicked")
  }

  return (
    <View style={styles.header}>
      <GoalModal visible={modalVisible} />
      <Text style={styles.headerTitle}>{props.title}</Text>
      <View style={styles.intervalButton}>
        <Button onPress={() => setModalVisible(true)} title="16:8 Fast"></Button>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    alignContent: "center",
    marginTop: 75,
    color: colors.darkGrey
  },
  headerTitle: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  intervalButton: {
    marginTop: 50,
    borderRadius: properties.roundButton
  },
});

export default Header;
