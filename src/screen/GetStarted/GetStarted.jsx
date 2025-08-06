import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const GetStarted = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../../assests/images/get_started.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.GetStartedArea}>
          <View style={styles.GetStartedArealogo}>
            <Image
              source={require('../../../assests/images/small_logo.png')}
              resizeMode="contain"
              style={styles.GetStartedArealogoImage}
            />
          </View>
          <Text style={styles.GetStartedAreaTitle}>Hear Everything.</Text>
          <Text style={styles.GetStartedAreaTitle}>Feel More.</Text>
          {/* Buttons */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignUp')}
              style={styles.signupButton}
            >
              <Text style={styles.signupText}>Sign up free</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
              style={styles.loginButton}
            >
              <Text style={styles.loginText}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    position: 'relative',
  },
  GetStartedArea: {
    flex: 1,
    paddingTop: responsiveHeight(55),
  },
  GetStartedAreaTitle: {
    fontSize: 24,
    lineHeight: 35,
    color: '#ffffff',
    fontWeight: '600',
    flex: 1,
    width: '100%',
    textAlign: 'center',
  },
  GetStartedArealogo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  GetStartedArealogoImage: {
    marginBottom: 10,
    width: 60,
  },
  buttonsContainer: {
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
    zIndex: 2,
  },
  signupButton: {
    backgroundColor: '#8E32FF',
    paddingVertical: 14,
    width: '87%',
    borderRadius: 28,
    marginBottom: 16,
  },
  signupText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
  loginButton: {
    borderColor: '#747474',
    borderWidth: 1,
    paddingVertical: 14,
    width: '87%',
    borderRadius: 28,
  },
  loginText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
});
