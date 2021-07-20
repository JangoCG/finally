import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import colors from "../constants/colors";

const StartScreen = (props) => {
  return (
    <View style={styles.screen}>
      <AnimatedCircularProgress
        size={270}
        width={30}
        fill={100}
        duration={2000}
        tintColor="lightgrey"
        onAnimationComplete={() => console.log("onAnimationComplete")}
        backgroundColor="#3d5875"
      />
       <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Start your 16h fast"
                onPress={() => {}}
                color={"white"}
              />
            </View>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      padding: 10,
      alignItems: "center",
      justifyContent:"center"
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
    buttonContainer: {
    //   flexDirection: "row",
      width: "100%",
      justifyContent: "center",
      alignItems:"center",
      paddingHorizontal: 15,
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
  })

export default StartScreen;
