import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    StatusBar,
    View,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import GetStartedScreen from '../GetStartedScreen/GetStartedScreen';
import HomeScreen from '../HomeScreen/HomeScreen';
import AboutScreen from '../AboutScreen/AboutScreen';



//Home tab screen
const HomeStack = createNativeStackNavigator();
const HomeStackScreens = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name='GetStartedScreen' component={GetStartedScreen} />
            <HomeStack.Screen name='HomeScreen' component={HomeScreen} />
        </HomeStack.Navigator>
    )
}

//About tab screen
const AboutStack = createNativeStackNavigator();
const AboutStackScreens = () => {
    return (
        <AboutStack.Navigator screenOptions={{ headerShown: false }}>
            <AboutStack.Screen name='AboutScreen' component={AboutScreen} />
        </AboutStack.Navigator>
    )
}


const TabStack = createBottomTabNavigator();
const TabScreen = ({ }) => {

    return (

        <>
            <StatusBar
                animated={true}
                backgroundColor="#020d26"
            />
            <TabStack.Navigator screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                    paddingBottom: 5,
                    paddingTop: 0,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                    borderBottomLeftRadius: 0,
                    borderTopWidth: 0,
                    backgroundColor: '#000027',
                },
                tabBarInactiveTintColor: '#ffffff',
                tabBarActiveTintColor: "#ffcc00"
            }}>
                <TabStack.Screen name="Home" component={HomeStackScreens}
                    options={{
                        tabBarShowLabel: true,
                        tabBarIcon: ({ color, size }) => (
                            <Feather name="home" size={28} color={color} />
                        ),
                    }}
                />
                <TabStack.Screen name="About" component={AboutStackScreens}
                    options={{
                        tabBarShowLabel: true,
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name="car" size={25} color={color} />
                        ),
                    }}
                />

            </TabStack.Navigator>
        </>

    )
}
export default TabScreen;