import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import AccordionSection from './AccordionSection';

const Category = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../../assests/images/home_bg.png')} // local image
      style={styles.background}
      resizeMode="cover" // or "contain", "stretch", etc.
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.FavouriteAudiobookSection}>
          <View style={styles.myListBack}>
            <Text style={styles.FavouriteAudiobookSectionTitle}>
              Categories
            </Text>
          </View>
          <ScrollView>
            <AccordionSection
              title="Stay Sharp"
              color="#B8F4FF"
              items={['Beyond the Headlines', 'Money Matters', 'Discover']}
            />
            <AccordionSection
              title="Personal Growth"
              color="#94CAFE"
              items={['Growth Track', 'Thrive', 'Ignite']}
            />
            <AccordionSection
              title="Smart Entertainment"
              color="#C5FF92"
              items={['Inspire Me', 'Humor Dose', 'Quick Bytes']}
            />
            <AccordionSection
              title="Ambience and Focus"
              color="#F7CFF9"
              items={['Focus Now', 'Ambient Vibes']}
            />
            <AccordionSection
              title="Stay Sharp"
              color="#B8F4FF"
              items={['Beyond the Headlines', 'Money Matters', 'Discover']}
            />
            <AccordionSection
              title="Personal Growth"
              color="#94CAFE"
              items={['Growth Track', 'Thrive', 'Ignite']}
            />
            <AccordionSection
              title="Smart Entertainment"
              color="#C5FF92"
              items={['Inspire Me', 'Humor Dose', 'Quick Bytes']}
            />
            <AccordionSection
              title="Ambience and Focus"
              color="#F7CFF9"
              items={['Focus Now', 'Ambient Vibes']}
            />
            <AccordionSection
              title="Stay Sharp"
              color="#B8F4FF"
              items={['Beyond the Headlines', 'Money Matters', 'Discover']}
            />
            <AccordionSection
              title="Personal Growth"
              color="#94CAFE"
              items={['Growth Track', 'Thrive', 'Ignite']}
            />
            <AccordionSection
              title="Smart Entertainment"
              color="#C5FF92"
              items={['Inspire Me', 'Humor Dose', 'Quick Bytes']}
            />
            <AccordionSection
              title="Ambience and Focus"
              color="#F7CFF9"
              items={['Focus Now', 'Ambient Vibes']}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },

  FavouriteAudiobookSection: {
    paddingHorizontal: 6,
    marginTop: 20,
    marginBottom: 5,
  },
  FavouriteAudiobookSectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 30,
    color: '#fff',
    paddingLeft: 10,
  },

  FavouriteAudiobookSectionBox: {
    backgroundColor: '#2E2B4B',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 100,
    marginRight: 10,
  },
  FavouriteAudiobookSectionBoxAll: {
    backgroundColor: '#8E32FF',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 100,
    marginRight: 10,
    borderColor: '#D8B4FF',
    borderWidth: 1,
  },
  FavouriteAudiobookSectionContainer: {
    marginLeft: 8,
    marginBottom: 10,
  },
  FavouriteAudiobookSectionBoxText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: '#fff',
  },

  // container: {
  //   width: responsiveWidth(100),
  //   height: responsiveHeight(100),
  //   backgroundColor: '#1B147F',
  // },
  // centerView: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // textsize: {
  //   fontSize: responsiveHeight(4),
  //   fontWeight: '700',
  //   color: '#ffffff',
  // },
  // backButton: {
  //   marginTop: 10,
  // },
});
