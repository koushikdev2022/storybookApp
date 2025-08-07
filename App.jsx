import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import BottomTabNavigator from './src/components/bottomnavigation/BottomTabNavigator';
import Splash from './src/screen/Splash/Splash';
import OnboardingScreen from './src/screen/OnboardingScreen/OnboardingScreen';
import VerifyYourAccount from './src/screen/VerifyYourAccount/VerifyYourAccount';
import Header from './src/components/header/Header';
import VerifiedSignUpAccount from './src/screen/VerifiedSignUpAccount/VerifiedSignUpAccount';
import SignUp from './src/screen/SignUp/SignUp';
import SignUpVendorDetails from './src/screen/SignUpVendorDetails/SignUpVendorDetails';
import SignUpVendorShopDetails from './src/screen/SignUpVendorShopDetails/SignUpVendorShopDetails';
import CategoryDetails from './src/screen/Category/CategoryDetails';
import ProfileScreen from './src/screen/Profile/Profile';
import AudiobookDetails from './src/screen/HomeScreen/AudiobookDetails';
import Search from './src/screen/Search/Search';
import ReadBook from './src/screen/ReadBook/ReadBook';
import GetStarted from './src/screen/GetStarted/GetStarted';
import Login from './src/screen/Login/Login';
import VerifyLoginAccount from './src/screen/VerifyLoginAccount/VerifyLoginAccount';
import Congratulations from './src/screen/Congratulations/Congratulations';
import EditProfile from './src/screen/Profile/EditProfile';
import ManageDownloads from './src/screen/ManageDownloads/ManageDownloads';
import SubscriptionPlans from './src/screen/SubscriptionPlans/SubscriptionPlans';
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
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="VerifyYourAccount" component={VerifyYourAccount} />
        <Stack.Screen name="Congratulations" component={Congratulations} />
        <Stack.Screen name="Header" component={Header} />
        <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="ManageDownloads" component={ManageDownloads} />
        <Stack.Screen name="SubscriptionPlans" component={SubscriptionPlans} />
        <Stack.Screen name="AudiobookDetails" component={AudiobookDetails} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="ReadBook" component={ReadBook} />
        <Stack.Screen
          name="VerifiedSignUpAccount"
          component={VerifiedSignUpAccount}
        />
        <Stack.Screen
          name="VerifyLoginAccount"
          component={VerifyLoginAccount}
        />
        {/* <Stack.Screen
          name="SignUpVendorDetails"
          component={SignUpVendorDetails}
        />
        <Stack.Screen
          name="SignUpVendorShopDetails"
          component={SignUpVendorShopDetails}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
