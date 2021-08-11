import React, {useEffect, useState} from "react";
import {StyleSheet, View} from "react-native";
import {AnimatedCircularProgress} from "react-native-circular-progress";
import colors from "../shared/constants/colors";
import Header from "../components/Header";
import ControlButtons from "../components/ControlButtons";
import Countdown from "../components/Countdown";

const StartScreen = () => {
    const [timeLeft, setTimeLeft] = useState(0);
    const [timer, setTimer] = useState<any>(); // IN YOU NEED TO STOP TIMER
    const [fill] = useState(0);
    const [fasting, setFasting] = useState(false);
    const [fastDuration, setFastDuration] = useState<number>(0);
    // change this default to 16h before release
    const DEFAULT_FAST_DURATION = 60;
    let circularProgressRef: AnimatedCircularProgress | null;

    useEffect(() => {
        if (timeLeft > 0 && fasting) {
            console.log("inside if check")
            updateSeconds();
        } else {
            setTimeLeft(DEFAULT_FAST_DURATION);
            setFasting(false);
        }
        // eslint-disable-next-line
    }, [timeLeft, fasting]);

    // Timer Logic
    function updateSeconds() {
        const timerID = setTimeout(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        setTimer(timerID);
    }

    const onStartFastClicked = () => {
        let duration_in_ms: number;
        if (fastDuration === 0) {
            duration_in_ms = DEFAULT_FAST_DURATION * 1000
        } else {
            duration_in_ms = fastDuration * 1000
        }
        circularProgressRef?.reAnimate(0, 100, duration_in_ms);
        setFasting(true)
    };

    const onEndFastClicked = () => {
        setFasting(false)
        clearTimeout(timer)
        setTimeLeft(0);
        circularProgressRef?.reAnimate(0, 0, 0);
    }

    const setCountdownStartScreen = (time: number) => {
        clearTimeout(timer)
        setFastDuration(time);
        setTimeLeft(time);
    }

    return (
        <View style={styles.screen}>
            <Header setCountdownStartScreen={setCountdownStartScreen} fasting={fasting}/>
            <View style={styles.contentContainer}>
                <AnimatedCircularProgress
                    style={styles.progressBar}
                    size={310}
                    width={30}
                    fill={fill}
                    prefill={0}
                    ref={(ref) => (circularProgressRef = ref)}
                    tintColor={colors.success}
                    backgroundColor="lightgrey"
                >
                    {(fill: number) => <Countdown fasting={fasting} fill={fill} timeLeft={timeLeft}/>}
                </AnimatedCircularProgress>
                <ControlButtons
                    fasting={fasting}
                    onStartFastClicked={onStartFastClicked}
                    onEndFastClicked={onEndFastClicked}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white"
    },
    contentContainer: {
        justifyContent: "center",
        flex: 1, // pushes the footer to the end of the screen
    },
    progressBar: {
        alignItems: "center",
    },
});

export default StartScreen;
