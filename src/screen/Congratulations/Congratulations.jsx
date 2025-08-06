import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Congratulations = ({ navigation }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };
  return (
    <ImageBackground
      source={require('../../../assests/images/login_bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Back Button & Logo */}
        <View style={styles.header}>
          <View style={styles.logoTextIcon}>
            <Image
              source={require('../../../assests/images/logo2.png')}
              style={styles.logoIconTop}
            />
          </View>
        </View>

        <View style={styles.congratulationsLogo}>
          <Image source={require('../../../assests/images/congo_icon.png')} />
        </View>
        {/* Title & Subtext */}
        <Text style={styles.subtitle}>
          Your email and phone number have been successfully verified. You're
          all set to continue.
        </Text>

        {/* Verify Button */}
        <View style={styles.continueButtonWrap}>
          <TouchableOpacity
            onPress={() => navigation.navigate('MainApp')}
            style={styles.verifyButton}
          >
            <Text style={styles.verifyButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Congratulations;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    paddingHorizontal: responsiveWidth(6),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(5),
    marginBottom: 50,
  },
  backArrow: {
    color: '#536EFF',
    fontSize: responsiveFontSize(3),
    marginRight: responsiveWidth(3),
  },
  logo: {
    width: responsiveWidth(30),
    height: responsiveHeight(5),
  },
  shieldWrapper: {
    alignItems: 'center',
    marginTop: responsiveHeight(5),
  },
  shieldIcon: {
    width: responsiveWidth(15),
    height: responsiveWidth(15),
    backgroundColor: '#536EFF',
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  shieldEmoji: {
    fontSize: responsiveFontSize(3),
    color: '#fff',
  },
  title: {
    textAlign: 'center',
    marginTop: responsiveHeight(3),
    fontSize: 28,
    lineHeight: 40,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 6,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 18,
    marginTop: responsiveHeight(1),
    color: '#ffffff',
    paddingHorizontal: 20,
    marginBottom: 5,
  },
  phoneNumber: {
    fontWeight: '500',
    color: '#565454',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: responsiveHeight(4),
  },
  otpBox: {
    width: responsiveWidth(13),
    height: responsiveWidth(13),
    borderWidth: 1,
    borderColor: '#5A3887',
    backgroundColor: '#0F0F0F',
    borderRadius: 8,
    fontSize: responsiveFontSize(2.5),
    textAlign: 'center',
    color: '#ffffff',
  },
  timer: {
    textAlign: 'center',
    marginTop: responsiveHeight(2),
    fontSize: responsiveFontSize(2),
    color: '#8E32FF',
  },
  resendText: {
    textAlign: 'center',
    marginTop: responsiveHeight(1),
    color: '#ffffff',
    fontSize: responsiveFontSize(1.8),
  },
  resendLink: {
    color: '#D7B8FF',
    fontWeight: '600',
  },
  verifyButton: {
    backgroundColor: '#8E32FF',
    marginTop: responsiveHeight(3),
    paddingVertical: responsiveHeight(2),
    borderRadius: 35,
    alignItems: 'center',
    width: 220,
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  logoIconTop: {
    marginTop: responsiveHeight(0.2),
  },
  titlesize: {
    fontSize: responsiveHeight(2.3),
    fontWeight: '700',
    color: '#000000',
  },
  logoTextIcon: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  usePasswordToSignIn: {
    color: '#1B147F',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  congratulationsLogo: {
    marginTop: 100,
    marginBottom: 20,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueButtonWrap: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
