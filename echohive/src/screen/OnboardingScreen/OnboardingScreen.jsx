import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { COLORS } from '../../constant/Theme';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import Router from '../../components/router/router';
import Header from '../../components/header/Header';

const slides = [
  {
    id: 1,
    title: 'Boost Your Business with Rewards',
    description:
      'Start building lasting customer relationships by offering digital rewards that keep them coming back no extra effort required.',
    image: require('../../../assests/images/slide01.webp'),
  },
  {
    id: 2,
    title: 'Smart Dashboard, Smarter Growth',
    description:
      'Easily track customer activity, view wallet balances, issue rewards, and manage redemptions—all from a single, easy-to-use app.',
    image: require('../../../assests/images/slide02.webp'),
  },
  {
    id: 3,
    title: 'Turn Sales into Smiles',
    description:
      'Reward your customers instantly during checkout and encourage repeat visits—all while increasing footfall and brand recall effortlessly.',
    image: require('../../../assests/images/slide03.webp'),
  },
  {
    id: 4,
    title: 'Ready to Grow Your Business?',
    description:
      'Be among the first to join our journey as we help local businesses like yours reward loyal customers and grow with every sale.',
    image: require('../../../assests/images/slide04.webp'),
  },
];

export default function OnboardingScreen({ navigation }) {
  const [showHomePage, setShowHomePage] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  StatusBar.setBarStyle('light-content', true);
  StatusBar.setBackgroundColor(COLORS.primary);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <View style={styles.logoTextIcon}>
          <View style={styles.itemSubContainer}>
            <Image
              source={require('../../../assests/icons/logo.png')}
              style={styles.logoIconTop}
            />
            <Text style={styles.titlesize}>Logoipsum</Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={item.image}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          {currentSlide === slides.length - 1 && (
            <View style={styles.authButtonsContainer}>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignIn')}
                style={styles.signInBtn}
              >
                <Text style={styles.signInText}>Sign In</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
                style={styles.registerBtn}
              >
                <Text style={styles.registerText}>Register</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  const renderNextButton = () => (
    <View style={styles.circleButton}>
      <Image source={require('../../../assests/images/BiRightArrowAlt.png')} />
    </View>
  );

  const renderDoneButton = () => (
    <View>
      <Text style={styles.homeText}>Done</Text>
    </View>
  );

  if (!showHomePage) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={renderItem}
        showSkipButton={false}
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        // showNextButton={currentSlide !== slides.length - 1}
        showDoneButton={false}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        onSlideChange={index => setCurrentSlide(index)} // <-- add this
      />
    );
  }

  return (
    <View style={styles.homeContainer}>
      <Router />
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: '#1B1480',
  },
  imageContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: responsiveHeight(25),
    paddingHorizontal: responsiveWidth(5),
  },
  image: {
    width: responsiveWidth(100),
    height: responsiveWidth(100),
  },
  textContainer: {
    flex: 0.4,
    backgroundColor: '#fff',
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    paddingHorizontal: 25,
    paddingVertical: 30,
  },
  title: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 'bold',
    color: '#1B147F',
    marginTop: 9,
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#777777',
    textAlign: 'center',
  },
  circleButton: {
    width: 50,
    height: 50,
    backgroundColor: '#1B147F',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  dot: {
    backgroundColor: '#C5D9E7',
    width: 20,
    height: 4,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#1B147F',
    width: 20,
    height: 4,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  homeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  homeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#536EFF',
  },
  authButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
    marginTop: 70,
  },
  signInBtn: {
    backgroundColor: '#1B147F',
    paddingHorizontal: responsiveWidth(10),
    paddingVertical: responsiveWidth(2.8),
    borderRadius: responsiveWidth(1.7),
    height: 50,
  },
  registerBtn: {
    backgroundColor: '#e4eaff',
    paddingHorizontal: responsiveWidth(10),
    paddingVertical: responsiveWidth(3),
    borderRadius: responsiveWidth(1.7),
    height: 50,
  },
  signInText: {
    color: '#fff',
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '600',
  },
  registerText: {
    color: '#1B147F',
    fontSize: 18,
    lineHeight: 23,
    fontWeight: '600',
  },

  itemSubContainer: {
    flexDirection: 'row',
    gap: responsiveWidth(2),
  },

  titlesize: {
    fontSize: responsiveHeight(2.3),
    fontWeight: '700',
    color: '#ffffff',
  },

  arrowIcon: {
    margin: responsiveWidth(8),
    marginTop: responsiveHeight(7),
  },

  logoTextIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(7),
  },
  logoIconTop: {
    marginTop: responsiveHeight(0.8),
  },
});
