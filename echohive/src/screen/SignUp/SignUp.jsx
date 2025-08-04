import React from 'react';
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
} from 'react-native-responsive-dimensions';
import Header from '../../components/header/Header'; // your custom header component

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} OnboardingScreen="OnboardingScreen" />
      <View style={styles.signInTextAlignment}>
        <Text style={styles.signInText}>Sign Up</Text>
      </View>

      <View>
        <Text style={styles.welcomeText}>
          Sign in to manage your rewards and customers.
        </Text>
      </View>

      <View style={styles.itemContainer}>
        {/* Phone Number Input */}
        <Text style={styles.inputLabel}>Your Number</Text>
        <View style={styles.phoneInputContainer}>
          <Image
            source={require('../../../assests/icons/flag.webp')}
            style={styles.flagIcon}
          />
          <Text style={styles.countryCode}>+91</Text>

          {/* Vertical Line */}
          <View style={styles.verticalLine} />

          <TextInput
            placeholder="1234566789"
            keyboardType="numeric"
            style={styles.input}
            placeholderTextColor="#A9A9A9"
          />
        </View>
        {/* Sign In Button */}
        <TouchableOpacity
          onPress={() => navigation.navigate('VerifiedSignUpAccount')}
          style={styles.signInButton}
        >
          <Text style={styles.signInButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.orText}>Or continue with</Text>
          <View style={styles.divider} />
        </View>

        {/* Social Buttons */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../../../assests/icons/google.png')}
              style={styles.socialIcon}
            />
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity style={styles.socialButton}>
            <Image
              source={require('../../../assests/icons/IoFingerPrint.png')}
              style={styles.socialIcon}
            />
            <Text style={styles.socialText}>Fingerprint Id</Text>
          </TouchableOpacity> */}
        </View>

        {/* Footer Text */}
        <View style={styles.footerWrapper}>
          <Text style={styles.footerText}>
            Don’t have an account?{' '}
            <TouchableOpacity>
              <Text style={styles.registerText}>Sign In</Text>
            </TouchableOpacity>
          </Text>
          <Text style={styles.termsText}>
            By clicking of the Sign Up buttons,{'\n'} I agree to the{' '}
            <Text style={styles.termsLink}>terms of service</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    backgroundColor: '#ffffff',
  },
  signInTextAlignment: {
    paddingTop: responsiveHeight(3),
    paddingHorizontal: responsiveWidth(7),
  },
  signInText: {
    fontSize: 28,
    fontWeight: '600',
    lineHeight: 32,
    letterSpacing: 2,
    color: '#1B147F',
  },
  welcomeText: {
    top: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(7),
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: '#777777',
  },
  itemContainer: {
    position: 'absolute',
    top: responsiveHeight(30),
    height: responsiveHeight(90),
    width: responsiveWidth(100),
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 30,
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 5,
    color: '#000',
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#d3d3d3',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 20,
  },

  verticalLine: {
    width: 1,
    height: '80%',
    backgroundColor: '#d3d3d3',
    marginHorizontal: 10,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    height: responsiveHeight(5.5),
  },

  flagIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  countryCode: {
    fontSize: 16,
    marginRight: 8,
  },
  signInButton: {
    backgroundColor: '#1B147F',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    color: '#3F51B5',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flex: 1,
    marginHorizontal: 5,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialText: {
    fontSize: 14,
  },
  footerText: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '500',
    color: '#565454',
  },
  registerText: {
    color: '#536EFF',
    fontWeight: '600',
    marginTop: 5,
  },
  termsText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#aaa',
    marginTop: 5,
  },
  termsLink: {
    textDecorationLine: 'underline',
    color: '#536EFF',
  },

  // Fixed Bottom
  footerWrapper: {
    position: 'absolute',
    bottom: responsiveHeight(25),
    left: 0,
    right: 0,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
