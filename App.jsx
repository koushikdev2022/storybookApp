import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import BottomTabNavigator from './src/components/bottomnavigation/BottomTabNavigator';
import Splash from './src/screen/Splash/Splash';
import OnboardingScreen from './src/screen/OnboardingScreen/OnboardingScreen';
import SignIn from './src/screen/SignIn/SignIn';
import VerifyYourAccount from './src/screen/VerifyYourAccount/VerifyYourAccount';
import Header from './src/components/header/Header';
import VerifiedSignUpAccount from './src/screen/VerifiedSignUpAccount/VerifiedSignUpAccount';
import VerifySignInAccount from './src/screen/VerifySignInAccount/VerifySignInAccount';
import SignUp from './src/screen/SignUp/SignUp';
import SignUpVendorDetails from './src/screen/SignUpVendorDetails/SignUpVendorDetails';
import SignUpVendorShopDetails from './src/screen/SignUpVendorShopDetails/SignUpVendorShopDetails';
import CategoryDetails from './src/screen/Category/CategoryDetails';
import ProfileScreen from './src/screen/Profile/Profile';
import AudiobookDetails from './src/screen/HomeScreen/AudiobookDetails';
const Stack = createNativeStackNavigator();

export default function App() {
  const [isShowSplash, setIsShowSplash] = useState(true);
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isShowSplash) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={isDarkMode ? '#00ffff' : '#ffffff'} />
        <Splash />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? '#00ffff' : '#ffffff'} />
      <Stack.Navigator
        initialRouteName="MainApp"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="MainApp" component={BottomTabNavigator} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="VerifyYourAccount" component={VerifyYourAccount} />
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="AudiobookDetails" component={AudiobookDetails} />
        <Stack.Screen
          name="VerifiedSignUpAccount"
          component={VerifiedSignUpAccount}
        />
        <Stack.Screen
          name="VerifySignInAccount"
          component={VerifySignInAccount}
        />
        <Stack.Screen
          name="SignUpVendorDetails"
          component={SignUpVendorDetails}
        />
        <Stack.Screen
          name="SignUpVendorShopDetails"
          component={SignUpVendorShopDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
