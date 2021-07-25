import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import UserProfileScreen from "../screens/UserProfileScreen";
import StartScreen from "../screens/StartScreen";
import { FontAwesome } from "@expo/vector-icons";
import colors from "../constants/colors";
import { color } from "react-native-reanimated";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Start"
        component={StartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              <Ionicons
                name="timer"
                size={26}
                style={{
                  color: focused ? colors.success : "grey",
                }}
              />
              <Text>Timer</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Dummy"
        component={UserProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.container}>
              <FontAwesome
                name="user-circle"
                size={24}
                style={{
                  color: focused ? colors.success : "grey",
                }}
              />

              <Text>Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    top: 10,
  }
});

export default Navigation;
