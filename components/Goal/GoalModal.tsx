import React, {FC} from 'react'
import {Button, Modal, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View} from 'react-native'
import colors from '../../shared/constants/colors';
import Goal from './Goal';
import {AntDesign} from '@expo/vector-icons';

interface GoalModalProps {
    visible: boolean,
    toggleModal: () => void;
    setCountdownHeader: (n: number) => void
}

// Replace those with correct values before release
const THIRTEEN_HOUR_FAST_DEV = 130
const SIXTEEN_HOUR_FAST_DEV = 160
const EIGHTEEN_HOUR_FAST_DEV = 180

const GoalModal: FC<GoalModalProps> = ({ visible, toggleModal, setCountdownHeader }) => {

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
                    <TouchableOpacity onPress={() => setCountdownHeader(THIRTEEN_HOUR_FAST_DEV)} >
                        <Goal duration={"13"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCountdownHeader(SIXTEEN_HOUR_FAST_DEV)} >
                        <Goal duration={"16"} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCountdownHeader(EIGHTEEN_HOUR_FAST_DEV)} >
                        <Goal duration={"18"} />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={() => toggleModal()} title="Close Modal"/>
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
