import React, {FC} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import colors from "../shared/constants/colors";

interface CountdownProps {
    fasting: boolean,
    fill: number,
    timeLeft: number,
    fastDuration: number
}

function getElapsedTimeInPercent(fastDuration:number, timeLeft:number) {
    console.log("fast duration", fastDuration)
    console.log("time left", timeLeft)
    return 100 - (timeLeft * 100) / fastDuration;
}

const Countdown: FC<CountdownProps> = ({fasting, fill, timeLeft, fastDuration}) => {
    const convertSecondsToTimeStamp =
        (seconds: number) => new Date(seconds * 1000).toISOString().substr(11, 8)

    return (
        <View>
            <Text style={styles.timerHeader}>
                {fasting && `Elapsed Time ${getElapsedTimeInPercent(fastDuration, timeLeft).toFixed()}%`}
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
