import React, { useEffect, useState } from 'react'
import { Button, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import colors from '../constants/colors';
import Goal from './Goal';
import { AntDesign } from '@expo/vector-icons';

const GoalModal = ({visible}) => {
    const [modalVisible, setModalVisible] = useState();

    useEffect(() => {
        console.log("inside useEffect",visible)
        setModalVisible(!modalVisible);
      }, [visible]);

    return (
        <Modal animationType="slide" visible={modalVisible}>
            <View>
                <View style={styles.titleContainer}>
                    <Text style={styles.modalTitle}>
                        Change fast goal
                    </Text>
                    <TouchableHighlight onPress={() => setModalVisible(!modalVisible)} >
                    <AntDesign name="close" size={24} color="black" />
                    </TouchableHighlight>

                </View>
                <View style={styles.modalContent}>
                    <Goal duration={"13"}></Goal>
                    <Goal duration={"16"}></Goal>
                    <Goal duration={"18"}></Goal>
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={() => setModalVisible(!modalVisible)} title="Close Modal"></Button>
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
