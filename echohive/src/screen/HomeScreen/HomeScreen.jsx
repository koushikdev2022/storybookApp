import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.centerView}>
        <Text style={styles.textsize}>Vendor Home Screen</Text>
        <View style={styles.backButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate('OnboardingScreen')}
          >
            <Text>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    backgroundColor: '#1B147F',
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textsize: {
    fontSize: responsiveHeight(4),
    fontWeight: '700',
    color: '#ffffff',
  },
  backButton: {
    marginTop: 10,
  },
});
