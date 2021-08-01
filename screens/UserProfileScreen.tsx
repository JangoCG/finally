import React, { useState } from 'react'
import { Alert, Button, Modal, Pressable, StyleSheet, Text, View } from 'react-native'

const UserProfileScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <Text>wie geil ist das denn bitte</Text>
            <Button onPress={() => setModalVisible(!modalVisible)} title="Show Modal"></Button>
            <Modal visible={modalVisible}>
                <View style={styles.modalContent}>
                    <Text>I am the modal content!</Text>
                    <Button onPress={() => setModalVisible(false)} title="Close Modal"></Button>
                </View>
            </Modal>
        </View>
    );
}

export default UserProfileScreen

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        justifyContent: "center",
        alignContent: "center",
        flex: 1
    },
    modalContent: {
        marginTop: 20,
        justifyContent: "center",
        alignContent: "center",
        flex: 1,
    }

});