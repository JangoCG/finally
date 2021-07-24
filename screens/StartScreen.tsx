import React, { useEffect } from "react";
import { StyleSheet, View, Text, Button, Easing } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import Navigation from "../components/Navigation";
import colors from "../constants/colors";

const StartScreen = (props) => {
  let circularProgressRef: AnimatedCircularProgress | null;
  const clickHandler = () => {
    circularProgressRef?.reAnimate(0, 100, 10000);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.contentContainer}>
        <AnimatedCircularProgress
          style={styles.progressBar}
          size={270}
          width={30}
          fill={100}
          ref={(ref) => (circularProgressRef = ref)}
          tintColor="lightgrey"
          backgroundColor="#3d5875"
        />
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
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default StartScreen;
