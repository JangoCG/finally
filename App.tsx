import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Tabs from './navigation/tabs';
import StartScreen from './screens/StartScreen'; 

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Header title="Get ready to fast"></Header> */}
      {/* <StartScreen></StartScreen> */}
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
