import React, {FC, useState} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import colors from "../shared/constants/colors";
import properties from "../shared/constants/properties";
import GoalModal from "./Goal/GoalModal";

interface Props {
    fasting: boolean,
    setCountdownStartScreen: (n: number) => void;
}

const Header: FC<Props> = ({ setCountdownStartScreen, fasting}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }

    const setCountdownHeader = (duration: number) => {
        setCountdownStartScreen(duration)
    }

    return (
        <View style={styles.header}>
            <GoalModal visible={modalVisible} toggleModal={toggleModal} setCountdownHeader={setCountdownHeader}/>
            <Text style={styles.headerTitle}>{fasting ? "You're fasting" : "Finally"}</Text>
            <View style={styles.intervalButton}>
                <Button onPress={() => setModalVisible(true)} title="16:8 Fast"/>
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
