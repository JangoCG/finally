import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Modal } from "react-native";
import { color } from "react-native-reanimated";
import colors from "../constants/colors";
import properties from "../constants/properties";
import GoalModal from "./GoalModal";

const Header = (props) => {
  // {sendData} = props;
  const [modalVisible, setModalVisible] = useState(false);

  const THIRTEEN_HOUR_FAST_DEV = 13000
  const SIXTEEN_HOUR_FAST_DEV = 16000
  const EIGHTEEN_HOUR_FAST_DEV = 18000

  let modalRef: Modal | null;

  const toggleModal = () => {
    setModalVisible(!modalVisible)
  }

  const fastDurationHandler = (duration: number) => {
    // console.log("fastDurationHandlerCalled", duration)
    // Replace this with duration before release
    // setFastDuration(SIXTEEN_HOUR_FAST_DEV)
    props.passChildData(duration)
  }

  return (
    <View style={styles.header}>
      <GoalModal visible={modalVisible} toggleModal={toggleModal} fastDurationHandler={fastDurationHandler} />
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
