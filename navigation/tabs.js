import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StartScreen from '../screens/StartScreen';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Start" component={StartScreen} />
        </Tab.Navigator>

    )
}

export default Tabs;