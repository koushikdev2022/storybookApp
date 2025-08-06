import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.arrowIcon}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../../assests/images/back_arrow.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.logoTextIcon}>
          <View style={styles.itemSubContainer}>
            <Image
              source={require('../../../assests/images/logo2.png')}
              style={styles.logoIconTop}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(100),
  },

  itemContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 50,
  },

  itemSubContainer: {
    flexDirection: 'row',
    gap: responsiveWidth(2),
  },

  titlesize: {
    fontSize: responsiveHeight(2.3),
    fontWeight: '700',
    color: '#000000',
  },

  arrowIcon: {
    margin: responsiveWidth(0),
    marginTop: responsiveHeight(5),
  },
  logoTextIcon: {
    marginTop: responsiveHeight(5),
    marginBottom: responsiveHeight(0),
    marginLeft: responsiveWidth(16),
  },
  logoIconTop: {},
});
