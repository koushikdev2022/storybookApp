import React from 'react';
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
} from 'react-native-responsive-dimensions';

const Login = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../../assests/images/login_bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Back Button & Logo */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('GetStarted')}>
            <Image source={require('../../../assests/images/back_arrow.png')} />
          </TouchableOpacity>

          <View style={styles.logoTextIcon}>
            <Image
              source={require('../../../assests/images/logo2.png')}
              style={styles.logoIconTop}
            />
          </View>
        </View>
        <View style={styles.signInTextAlignment}>
          <Text style={styles.signInText}>Log In</Text>
        </View>

        <View style={styles.supportArea}>
          <Text style={styles.welcomeText}>If You Need Any Support</Text>
          <TouchableOpacity>
            <Text style={styles.welcomeTextClick}>Click Here</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.itemContainer}>
          {/* Phone Number Input */}
          <View style={styles.phoneInputContainer}>
            <TextInput
              placeholder="Enter Mobile Number or Email"
              keyboardType="text"
              style={styles.input}
              placeholderTextColor="#999999"
            />
          </View>
          <View style={styles.phoneInputContainer}>
            <TextInput
              placeholder="Password"
              keyboardType="default"
              style={styles.input}
              placeholderTextColor="#999999"
              secureTextEntry={true}
            />
          </View>
          {/* Sign In Button */}
          <View style={styles.loginContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('VerifyLoginAccount')}
              style={styles.signInButton}
            >
              <Text style={styles.signInButtonText}>Log In</Text>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.orText}>Or With</Text>
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

            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('../../../assests/icons/apple_icon.png')}
                style={styles.socialIcon}
              />
              <Text style={styles.socialText}>Apple</Text>
            </TouchableOpacity>
          </View>

          {/* Footer Text */}
          <View style={styles.footerWrapper}>
            <Text style={styles.footerText}>
              Not A Member?
              <TouchableOpacity>
                <Text style={styles.registerText}>Register Now</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(5),
    marginBottom: 50,
  },
  logoTextIcon: {
    marginLeft: responsiveWidth(15),
    flexDirection: 'row',
    gap: responsiveWidth(1),
  },
  container: {
    flex: 1,
    width: responsiveWidth(100),
    height: responsiveHeight(100),
    paddingHorizontal: responsiveWidth(6),
  },
  signInTextAlignment: {
    paddingTop: responsiveHeight(5),
    paddingHorizontal: responsiveWidth(7),
    textAlign: 'center',
  },
  signInText: {
    fontSize: 28,
    lineHeight: 40,
    fontWeight: '700',
    letterSpacing: 2,
    color: '#ffffff',
    textAlign: 'center',
  },
  welcomeText: {
    top: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(0.5),
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    color: '#ffffff',
  },
  welcomeTextClick: {
    color: '#D7B8FF',
    top: responsiveHeight(1.5),
    paddingHorizontal: responsiveWidth(0.5),
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
  itemContainer: {
    position: 'absolute',
    top: responsiveHeight(30),
    height: responsiveHeight(90),
    width: responsiveWidth(100),
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
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
    borderColor: '#5A3887',
    borderRadius: 50,
    paddingHorizontal: 25,
    paddingVertical: 4,
    marginBottom: 15,
    backgroundColor: '#000000',
  },

  verticalLine: {
    width: 1,
    height: '80%',
    marginHorizontal: 10,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#ffffff',
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
    backgroundColor: '#8E32FF',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    width: 150,
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
    color: '#9A9797',
    fontSize: 16,
    lineHeight: 18,
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
    borderColor: '#252525',
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 0,
    flex: 1,
    marginHorizontal: 5,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialText: {
    fontSize: 16,
    color: '#ffffff',
  },
  footerText: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '500',
    color: '#ffffff',
  },
  registerText: {
    color: '#D7B8FF',
    fontWeight: '600',
    marginTop: 5,
    paddingLeft: 2,
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
  },
  supportArea: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  rememberArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ForgetAreaText: {
    fontSize: 11,
    lineHeight: 12,
    color: '#D7B8FF',
    fontWeight: '400',
  },
  rememberAreaBox: {
    flexDirection: 'flex',
  },
});
