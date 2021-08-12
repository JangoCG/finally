import React, {FC, useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import colors from "../shared/constants/colors";
import properties from "../shared/constants/properties";
import GoalModal from "./Goal/GoalModal";
import RoundButton from "./RoundButton";

interface Header {
    fasting: boolean,
    setCountdownStartScreen: (n: number) => void;
}

const Header: FC<Header> = ({setCountdownStartScreen, fasting}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }

    const setCountdownHeader = (duration: number) => {
        console.log("passed duration in header", duration)
        setCountdownStartScreen(duration)
    }

    return (
        <View style={styles.header}>
            <GoalModal visible={modalVisible} toggleModal={toggleModal} setCountdownHeader={setCountdownHeader}/>
            <Text style={styles.headerTitle}>{fasting ? "You're fasting" : "Finally"}</Text>
            <RoundButton
                backgroundColor={"#eeeeee"}
                fontColor={"#353839"}
                title={"Change Fast"}
                height={40}
                width={150}
                fontSize={15}
                onPress={() => setModalVisible(true)}
            />
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
