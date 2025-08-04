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
import MyList from '../../screen/MyList/MyList';
import Category from '../../screen/Category/Category';
import Profile from '../../screen/Profile/Profile';

import Icon from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
          backgroundColor: '#06010B',
          height: 80,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarActiveTintColor: '#8E32FF',
        tabBarInactiveTintColor: '#ffffff',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            // <Image
            //   source={require('../../../assests/icons/Home.png')}
            //   style={styles.socialIcon}
            //   tintColor={'#536EFF'}
            // />
            <Octicons name="home" size={28} color="#ffffff" />
          ),
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '400',
          },
        }}
      />
      <Tab.Screen
        name="My List"
        component={MyList}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            // <Image
            //   source={require('../../../assests/icons/Explore.png')}
            //   style={styles.socialIcon}
            // />
            <FontAwesome name="bookmark-o" size={28} color="#ffffff" />
          ),
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '400',
          },
        }}
      />

      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            // <Image
            //   source={require('../../../assests/icons/Wallet.png')}
            //   style={styles.socialIcon}
            // />
            <MaterialIcons name="category" size={28} color="#ffffff" />
          ),
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '400',
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            // <Image
            //   source={require('../../../assests/icons/Profile.png')}
            //   style={styles.socialIcon}
            // />
            <AntDesign name="user" size={28} color="#ffffff" />
          ),
          tabBarLabelStyle: {
            fontSize: 10,
            fontWeight: '400',
          },
        }}
        listeners={({ navigation }) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('Profile');
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
