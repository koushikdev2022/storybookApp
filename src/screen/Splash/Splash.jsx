import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const Splash = () => {
  return (
    <View style={styles.container}>
      <View style={styles.centerView}>
        <Image source={require('../../../assests/images/logo.png')} />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    backgroundColor: '#8E32FF',
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
});
