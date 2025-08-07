// App.js or index.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VerifyYourAccount from '../../screen/VerifyYourAccount/VerifyYourAccount';
import OnboardingScreen from '../../screen/OnboardingScreen/OnboardingScreen';
import SignUp from '../../screen/SignUp/SignUp';
import SignUpVendorDetails from '../../screen/SignUpVendorDetails/SignUpVendorDetails';
import SignUpVendorShopDetails from '../../screen/SignUpVendorShopDetails/SignUpVendorShopDetails';
import HomeScreen from '../../screen/HomeScreen/HomeScreen';
import MyList from '../../screen/MyList/MyList';
import Category from '../../screen/Category/Category';
import CategoryDetails from '../../screen/Category/CategoryDetails';
import Profile from '../../screen/Profile/Profile';
import AudiobookDetails from '../../screen/HomeScreen/AudiobookDetails';
import Search from '../../screen/Search/Search';
import ReadBook from '../../screen/ReadBook/ReadBook';
import GetStarted from '../../screen/GetStarted/GetStarted';
import Login from '../../screen/Login/Login';
import VerifyLoginAccount from '../../screen/VerifyLoginAccount/VerifyLoginAccount';
import Congratulations from '../../screen/Congratulations/Congratulations';
import EditProfile from '../../screen/Profile/EditProfile';
import ManageDownloads from '../../screen/ManageDownloads/ManageDownloads';
import SubscriptionPlans from '../../screen/SubscriptionPlans/SubscriptionPlans';

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
        <Stack.Screen name="MyList" component={MyList} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="ManageDownloads" component={ManageDownloads} />
        <Stack.Screen name="SubscriptionPlans" component={SubscriptionPlans} />
        <Stack.Screen name="AudiobookDetails" component={AudiobookDetails} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="ReadBook" component={ReadBook} />
        <Stack.Screen name="GetStarted" component={GetStarted} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Congratulations" component={Congratulations} />
        <Stack.Screen name="VerifyYourAccount" component={VerifyYourAccount} />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
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
