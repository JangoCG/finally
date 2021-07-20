import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const StartScreen = (props) => {
  return (
    <View>
      <Text>Start Screen works</Text>
      <AnimatedCircularProgress
        size={120}
        width={15}
        fill={100}
        tintColor="#00e0ff"
        onAnimationComplete={() => console.log("onAnimationComplete")}
        backgroundColor="#3d5875"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default StartScreen;
