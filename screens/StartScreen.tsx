import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Timer from "tiny-timer";
import colors from "../constants/colors";


const StartScreen = (props) => {
  const timer = new Timer();
  const [fill, setFill] = useState(0);
  const [fastStarted, setFastStarted] = useState(false);
  const [countdown, setCountdown] = useState<number>(0);

  let circularProgressRef: AnimatedCircularProgress | null;
  const SIXTEEN_HOURS = 57600000
  const TEN_SECONDS = 10000
  const DEV_PLACEHOLDER_TIME = 120000

  const onStartFastClicked = () => {
    circularProgressRef?.reAnimate(0, 100, DEV_PLACEHOLDER_TIME);
    setFastStarted(true)
    console.log("test")
    timer.start(DEV_PLACEHOLDER_TIME)
    // timer.on('tick', (ms) => console.log('tick', getFormattedTime(ms)))
    timer.on('tick', (ms) => setCountdown(getFormattedTime(ms)))
  };

  const onEndFastClicked = () => {
    setFastStarted(false)
    setCountdown(0)
    circularProgressRef?.reAnimate(0, 0,0);
    timer.stop();
    timer.off("tick", () => setCountdown(0));
    // timer.pause;
    console.log(timer.status)
  }

  /**
   * Rounds the time in milliseconds to the nearest thousandth and converts it from ms to s
   * @param t Time in milliseconds
   * @returns Time in seconds
   */
  // rounds to nearest thousand and convert from ms to s
  const getFormattedTime = (t: number) => Math.round(t / 1000);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.headerText}>FINALLY</Text>
        <Text style={styles.headerText}>Hello</Text>
      </View>
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
                  {fastStarted && `Elapsed Time ${fill.toFixed()}%`}
                </Text>
                <Text style={styles.timerText}>
                  {new Date(countdown * 1000).toISOString().substr(11, 8)}
                </Text>
              </View>

            )
          }
        </AnimatedCircularProgress>
        <View style={styles.buttonContainer}>
          <View >
            {!fastStarted ?
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
