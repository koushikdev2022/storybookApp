// App.js or index.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../../screen/SignIn/SignIn';
import VerifyYourAccount from '../../screen/VerifyYourAccount/VerifyYourAccount';
import OnboardingScreen from '../../screen/OnboardingScreen/OnboardingScreen';
import VerifySignInAccount from '../../screen/VerifySignInAccount/VerifySignInAccount';
import SignUp from '../../screen/SignUp/SignUp';
import SignUpVendorDetails from '../../screen/SignUpVendorDetails/SignUpVendorDetails';
import SignUpVendorShopDetails from '../../screen/SignUpVendorShopDetails/SignUpVendorShopDetails';
import HomeScreen from '../../screen/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {' '}
      {/* ✅ Must wrap your navigators */}
      {/* <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="SignIn" component={SignIn} />
      
      </Stack.Navigator> */}
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="VerifyYourAccount" component={VerifyYourAccount} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
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
