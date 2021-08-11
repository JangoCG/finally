import React, {FC} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {Goal} from '../../shared/interfaces'

const Goal: FC<Goal> = ({duration}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.goalDuration}>{`${duration} hours`}</Text>
        </View>
    )
}

export default Goal

const styles = StyleSheet.create({
    container: {
        // border shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        // -----------------
        elevation: 3,
        padding: 16,
        height: 100,
        width: 100,
        textAlign: "center",
        borderRadius: 15,
        backgroundColor: "#0074D9",
        marginHorizontal: 10,
        marginVertical: 10
    },
    goalDuration: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
    }
})
