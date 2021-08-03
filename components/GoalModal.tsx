import React, { FC, useEffect, useState } from 'react'
import { Button, Modal, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import colors from '../constants/colors';
import Goal from './Goal';
import { AntDesign } from '@expo/vector-icons';

interface Props {
    visible: boolean,
    toggleModal: () => void;
    fastDurationHandler: (n: number) => void
    // test
}

// Replace those with correct values before release
const THIRTEEN_HOUR_FAST_DEV = 13000
const SIXTEEN_HOUR_FAST_DEV = 16000
const EIGHTEEN_HOUR_FAST_DEV = 18000

const GoalModal: FC<Props> = ({ visible, toggleModal, fastDurationHandler }) => {

    return (
        <Modal animationType="slide" visible={visible}>
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.modalTitle}>
                        Change fast goal
                    </Text>
                    <TouchableHighlight onPress={() => toggleModal()} >
                        <AntDesign name="close" size={24} color="black" />
                    </TouchableHighlight>

                </View>
                <View style={styles.modalContent}>
                    <TouchableOpacity onPress={() => fastDurationHandler(THIRTEEN_HOUR_FAST_DEV)} >
                        <Goal duration={"13"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => fastDurationHandler(SIXTEEN_HOUR_FAST_DEV)} >
                        <Goal duration={"16"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => fastDurationHandler(EIGHTEEN_HOUR_FAST_DEV)} >
                        <Goal duration={"18"} />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={() => toggleModal()} title="Close Modal"></Button>
                </View>
            </View>
        </Modal>
    )
}

export default GoalModal

const styles = StyleSheet.create({
    modalContent: {
        justifyContent: "center",
        flexDirection: 'row',
        marginLeft: 0,
        marginTop: 50,
        // alignContent: "center",
        flex: 1,
    }, buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 200
    },
    modalTitle: {
        marginTop: 60,
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        color: colors.darkGrey
    },
    titleContainer: {
        // flexDirection: "row",
        // justifyContent: "space-evenly"
    }
})
