import React from 'react';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image,
} from 'react-native';
import HomeScreen from '../../screen/HomeScreen/HomeScreen';
import ExploreScreen from '../../screen/ExploreScreen/ExploreScreen';
import QRCodeScreen from '../../screen/QRCodeScreen/QRCodeScreen';
import WalletScreen from '../../screen/WalletScreen/WalletScreen';
import ProfileScreen from '../../screen/ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={styles.fabContainer}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <View style={styles.fabButton}>{children}</View>
  </TouchableOpacity>
);

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#fff',
          height: 80,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarActiveTintColor: '#536EFF',
        tabBarInactiveTintColor: '#999',
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../../assests/icons/Home.png')}
              style={styles.socialIcon}
              tintColor={'#536EFF'}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '400',
          },
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../../assests/icons/Explore.png')}
              style={styles.socialIcon}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '400',
          },
        }}
      />
      <Tab.Screen
        name="QR"
        component={QRCodeScreen}
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../../../assests/icons/BsQrCodeScan.png')}
              style={{
                width: 28,
                height: 28,
                tintColor: '#fff',
              }}
              resizeMode="contain"
            />
          ),
          tabBarButton: props => <CustomTabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Wallet"
        component={WalletScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../../assests/icons/Wallet.png')}
              style={styles.socialIcon}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '400',
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('../../../assests/icons/Profile.png')}
              style={styles.socialIcon}
            />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: '400',
          },
        }}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('OnboardingScreen');
          },
        })}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabContainer: {
    top: -20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#536EFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#536EFF',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
});
