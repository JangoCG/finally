import React, {FC, useState} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import colors from "../constants/colors";
import properties from "../constants/properties";
import GoalModal from "./GoalModal";

interface Props {
    title: string,
    startScreenFunction: (n: number) => void;
}

const Header: FC<Props> = ({title, startScreenFunction}) => {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }

    const headerFunction = (duration: number) => {
        // console.log("fastDurationHandlerCalled", duration)
        // Replace this with duration before release
        // setFastDuration(SIXTEEN_HOUR_FAST_DEV)

        // const startScreenFunction = (time: number) => {
        //   console.log("timer", time);
        //   resetTimer();
        //   setChildData(time);
        // }
        startScreenFunction(duration)
    }

    return (
        <View style={styles.header}>
            <GoalModal visible={modalVisible} toggleModal={toggleModal} headerFunction={headerFunction}/>
            <Text style={styles.headerTitle}>{title}</Text>
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
