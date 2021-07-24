import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Navigation = () => {
  return (
    <View style={styles.navigationContainer}>
      <View style={styles.iconContainer}>
        <Ionicons name="timer" size={26} color="black" />
        {/* <MaterialCommunityIcons name="timer-sand-full" size={24} color="black" /> */}
        <Text style={styles.iconLabel}>Timer</Text>
      </View>
      <View>
      <FontAwesome name="user-circle" size={24} color="black" />
        <Text style={styles.iconLabel}>Profile</Text>
      </View>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  navigationContainer: {
    borderTopColor: "grey",
    borderTopWidth: 1,
    height: 70,
    backgroundColor: "white",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10
  },
  iconContainer: {
    //   marginTop: 20
  },
  iconLabel: {
      textAlign: "center"
  }
});
