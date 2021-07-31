import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Button, Easing } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Timer from "tiny-timer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
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

  const clickHandler = () => {
    circularProgressRef?.reAnimate(0, 100, DEV_PLACEHOLDER_TIME);
    setFastStarted(true)
    console.log("test")
    timer.start(DEV_PLACEHOLDER_TIME)
  };
  // rounds to nearest thousand and converts ms to s
  const getFormattedTime = (n: number) => Math.round(n / 1000);


  timer.on('tick', (ms) => console.log('tick', getFormattedTime(ms)))
  timer.on('tick', (ms) => setCountdown(getFormattedTime(ms)))
  // timer.on('tick', s => console.log(timer.time))
  // timer.on('tick', s => console.log(timer.time % 10))



  const calculateTime = (fastDurationInMs: number) => {
    return fastDurationInMs / 1000
  }



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
          <View style={styles.button}>
            <Button
              title="Start your 16h fast"
              onPress={() => clickHandler()}
              color={"white"}
            />
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
  button: {
    marginTop: 40,
    width: 190,
    backgroundColor: colors.success,
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
