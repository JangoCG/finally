import React, {useEffect, useState} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {AnimatedCircularProgress} from "react-native-circular-progress";
import colors from "../constants/colors";
import Header from "../components/Header";

const StartScreen = () => {
    const [timeLeft, setTimeLeft] = useState(0);
    const [timer, setTimer] = useState<any>(); // IN YOU NEED TO STOP TIMER
    const [fill] = useState(0);
    const [fasting, setFasting] = useState(false);
    const [childData, setChildData] = useState<number>(0);
    // change this default to 16h before release
    const DEFAULT_FAST_DURATION = 60;

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
    let timerID;

    /* Timer Logic */
    function updateSeconds() {
        timerID = setTimeout(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        setTimer(timerID);
    }

    function convertSecondsToTimeStamp(seconds: number) {
        return new Date(seconds * 1000).toISOString().substr(11, 8)
    }

    let circularProgressRef: AnimatedCircularProgress | null;

    const onStartFastClicked = () => {
        console.log("child data(start clicked)", childData)
        // rename this to something meaningful
        let duration_in_ms: number;
        if (childData === 0) {
            duration_in_ms = DEFAULT_FAST_DURATION * 1000
        } else {
            duration_in_ms = childData * 1000
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

    const startScreenFunction = (time: number) => {
        console.log("Start Screen Component - TIMER:", time);
        console.log("CHILD DATA SHOULD BE", time);
        clearTimeout(timer)
        setChildData(time);
        setTimeLeft(time);
    }

    return (
        <View style={styles.screen}>
            {!fasting ? <Header title="Finally" startScreenFunction={startScreenFunction}/> :
                <Header title="You're fasting!" startScreenFunction={startScreenFunction}/>}
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
                    {
                        (fill: number) => (
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
                </AnimatedCircularProgress>
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
            </View>
            {/* <Navigation /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: "green",
        textAlign: "center",
        alignContent: "center",
        marginTop: 50
        // marginBottom: 200
    },
    headerText: {
        textAlign: "center"
    },
    screen: {
        flex: 1,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    contentContainer: {
        justifyContent: "center",
        flex: 1, // pushes the footer to the end of the screen
    },
    title: {
        fontSize: 20,
        marginVertical: "10",
    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        alignItems: "center",
    },
    progressBar: {
        alignItems: "center",
    },
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
    input: {
        width: 50,
        textAlign: "center",
    },
    navigationContainer: {
        height: 100,
        backgroundColor: "red",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    innerCircleContainer: {
        textAlign: "center"
    },
    timerHeader: {
        textAlign: "center",
        fontSize: 16,
        color: colors.darkGrey
    },
    timerText: {
        textAlign: "center",
        fontSize: 45
    }
});

export default StartScreen;
