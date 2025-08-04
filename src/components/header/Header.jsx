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
          <TouchableOpacity
            onPress={() => navigation.navigate('OnboardingScreen')}
          >
            <Image
              source={require('../../../assests/icons/FaArrowLeftLongBlue.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.logoTextIcon}>
          <View style={styles.itemSubContainer}>
            <Image
              source={require('../../../assests/icons/logodeep_blue.png')}
              style={styles.logoIconTop}
            />
            <Text style={styles.titlesize}>Logoipsum</Text>
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
    backgroundColor: '#ffffff',
  },

  itemContainer: {
    flexDirection: 'row',
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
    margin: responsiveWidth(8),
    marginTop: responsiveHeight(11),
  },
  logoTextIcon: {
    marginTop: responsiveHeight(10),
    marginBottom: responsiveHeight(5),
    marginLeft: responsiveWidth(10),
  },
  logoIconTop: {
    marginTop: responsiveHeight(0.8),
  },
});
