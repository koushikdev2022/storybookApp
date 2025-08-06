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
const VerifyLoginAccount = ({ navigation }) => {
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
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Image source={require('../../../assests/images/back_arrow.png')} />
          </TouchableOpacity>

          <View style={styles.logoTextIcon}>
            <Image
              source={require('../../../assests/images/logo2.png')}
              style={styles.logoIconTop}
            />
          </View>
        </View>

        {/* Title & Subtext */}
        <Text style={styles.title}>OTP Verification</Text>
        <Text style={styles.subtitle}>
          We've sent a verification code to your mobile number ending in **1234
          and your email address ending in @example.com.
        </Text>

        {/* OTP Inputs */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.otpBox}
              keyboardType="numeric"
              maxLength={1}
              value={digit}
              onChangeText={text => handleChange(text, index)}
              ref={ref => (inputRefs.current[index] = ref)}
            />
          ))}
        </View>

        {/* Timer and Resend */}
        <Text style={styles.timer}>00:24</Text>
        <View style={styles.resendWrap}>
          <Text style={styles.resendText}>Didn’t receive the code?</Text>
          <TouchableOpacity>
            <Text style={styles.resendLink}>Click to resend</Text>
          </TouchableOpacity>
        </View>

        {/* Verify Button */}
        <View style={styles.continueButtonWrap}>
          <TouchableOpacity
            onPress={() => navigation.navigate('MainApp')}
            style={styles.verifyButton}
          >
            <Text style={styles.verifyButtonText}>Verify Code</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default VerifyLoginAccount;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    paddingHorizontal: responsiveWidth(6),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontSize: 12,
    lineHeight: 18,
    marginTop: responsiveHeight(1),
    color: '#ffffff',
    paddingHorizontal: 20,
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
    marginTop: responsiveHeight(0),
    color: '#ffffff',
    fontSize: responsiveFontSize(1.8),
    marginRight: 2,
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
  continueButtonWrap: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
    marginLeft: responsiveWidth(15),
    flexDirection: 'row',
    gap: responsiveWidth(1),
  },
  usePasswordToSignIn: {
    color: '#1B147F',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  resendWrap: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
