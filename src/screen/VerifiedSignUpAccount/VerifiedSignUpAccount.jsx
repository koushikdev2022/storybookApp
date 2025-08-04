import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const VerifiedSignUpAccount = ({ navigation }) => {
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
    <View style={styles.container}>
      {/* Back Button & Logo */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Image
            source={require('../../../assests/icons/FaArrowLeftLong.png')}
            style={[styles.backArrow, { tintColor: '#536EFF' }]}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <View style={styles.logoTextIcon}>
          <Image
            source={require('../../../assests/icons/logodeep_blue.png')}
            style={styles.logoIconTop}
            resizeMode="contain"
          />
          <Text style={styles.titlesize}>Logoipsum</Text>
        </View>
      </View>

      {/* Shield Icon */}
      <View style={styles.shieldWrapper}>
        <View>
          {/* <Text style={styles.shieldEmoji}>🛡️</Text> */}
          <Image
            source={require('../../../assests/icons/Verify_Your_Account.png')}
            style={styles.shieldEmoji}
            resizeMode="contain"
          />
        </View>
      </View>

      {/* Title & Subtext */}
      <Text style={styles.title}>Verify Your Account</Text>
      <Text style={styles.subtitle}>
        We sent a 4 digit code to the number{'\n'}
        <Text style={styles.phoneNumber}>+91 123456789</Text>
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
      <Text style={styles.resendText}>
        Didn’t receive the code?{' '}
        <TouchableOpacity>
          <Text style={styles.resendLink}>Resend</Text>
        </TouchableOpacity>
      </Text>

      {/* Verify Button */}
      <TouchableOpacity
        onPress={() => navigation.navigate('SignUpVendorDetails')}
        style={styles.verifyButton}
      >
        <Text style={styles.verifyButtonText}>Verify</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity>
        <Text style={styles.usePasswordToSignIn}>Use Password to Sign In</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default VerifiedSignUpAccount;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    backgroundColor: '#fff',
    paddingHorizontal: responsiveWidth(6),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(7.5),
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
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '700',
    color: '#1B147F',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 18,
    marginTop: responsiveHeight(1),
    color: '#878787',
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
    width: responsiveWidth(12),
    height: responsiveWidth(13.5),
    borderWidth: 1,
    borderColor: '#CCCACA',
    borderRadius: 8,
    fontSize: responsiveFontSize(2.5),
    textAlign: 'center',
    color: '#000',
  },
  timer: {
    textAlign: 'center',
    marginTop: responsiveHeight(2),
    fontSize: responsiveFontSize(2),
    color: '#2E2771',
  },
  resendText: {
    textAlign: 'center',
    marginTop: responsiveHeight(1),
    color: '#9C9C9C',
    fontSize: responsiveFontSize(1.8),
  },
  resendLink: {
    color: '#1B147F',
    fontWeight: '600',
  },
  verifyButton: {
    backgroundColor: '#1B147F',
    marginTop: responsiveHeight(3),
    paddingVertical: responsiveHeight(1.2),
    borderRadius: 8,
    alignItems: 'center',
  },
  verifyButtonText: {
    color: '#fff',
    fontSize: responsiveFontSize(2.2),
    fontWeight: '600',
  },
  logoIconTop: {
    marginTop: responsiveHeight(0.6),
  },
  titlesize: {
    fontSize: responsiveHeight(2.3),
    fontWeight: '700',
    color: '#000000',
  },
  logoTextIcon: {
    marginLeft: responsiveWidth(22),
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
});
