import React, {FC} from 'react'
import {Button, StyleSheet, View} from 'react-native'
import colors from "../shared/constants/colors";

interface ControlButtons {
    fasting: boolean,
    onStartFastClicked: () => void
    onEndFastClicked: () => void
}

const ControlButtons: FC<ControlButtons> = ({fasting, onStartFastClicked, onEndFastClicked}) => {
    return (
        <View style={styles.buttonContainer}>
            <View>
                {!fasting ?
                    <View style={styles.startButton}>
                        <Button
                            title="Start your 16h fast"
                            onPress={() => onStartFastClicked()}
                            color={"white"}
                        />
                    </View> :
                    <View style={styles.endButton}>
                        <Button
                            title="End your fast"
                            onPress={() => onEndFastClicked()}
                            color={"white"}
                        />
                    </View>
                }
            </View>
        </View>
    )
}

export default ControlButtons

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        // paddingHorizontal: 15,
    },
    startButton: {
        marginTop: 40,
        width: 190,
        backgroundColor: colors.success,
        borderRadius: 20,
    },
    endButton: {
        backgroundColor: colors.danger,
        marginTop: 40,
        width: 190,
        borderRadius: 20,
    },
})
