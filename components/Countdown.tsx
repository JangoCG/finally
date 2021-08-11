import React, {FC} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import colors from "../shared/constants/colors";

interface Countdown {
    fasting: boolean,
    fill: number,
    timeLeft: number
}

const Countdown: FC<Countdown> = ({fasting, fill, timeLeft}) => {
    const convertSecondsToTimeStamp =
        (seconds: number) => new Date(seconds * 1000).toISOString().substr(11, 8)

    return (
        <View>
            <Text style={styles.timerHeader}>
                {/* TODO: This should show how much time is left in %  */}
                {fasting && `Elapsed Time ${fill.toFixed()}%`}
            </Text>
            {/*This is the actual countdown timer*/}
            <Text style={styles.timerText}>
                {convertSecondsToTimeStamp(timeLeft)}
            </Text>
        </View>
    )
}

export default Countdown

const styles = StyleSheet.create({
    timerHeader: {
        textAlign: "center",
        fontSize: 16,
        color: colors.darkGrey
    },
    timerText: {
        textAlign: "center",
        fontSize: 45
    }
})
