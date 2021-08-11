import React, {FC} from 'react'
import {StyleSheet, View} from 'react-native'
import colors from "../shared/constants/colors";
import RoundButton from './RoundButton';

interface FastControl {
    fasting: boolean,
    onStartFastClicked: () => void
    onEndFastClicked: () => void
}

const FastControl: FC<FastControl> = ({fasting, onStartFastClicked, onEndFastClicked}) => {
    return (
        <View style={styles.buttonContainer}>
            <View>
                {!fasting ?
                    <RoundButton backgroundColor={colors.success}
                                 fontColor={"white"}
                                 title={"Start your 16h fast"}
                                 width={225}
                                 onPress={() => onStartFastClicked()}
                    />
                    :
                    <RoundButton backgroundColor={"white"}
                                 fontColor={colors.danger}
                                 title={"End your fast"}
                                 width={165}
                                 onPress={() => onEndFastClicked()}
                    />
                }
            </View>
        </View>
    )
}

export default FastControl

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
        backgroundColor: "white",
        color: colors.danger,
        marginTop: 40,
        width: 190,
        borderRadius: 20,
        // Box Shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})
