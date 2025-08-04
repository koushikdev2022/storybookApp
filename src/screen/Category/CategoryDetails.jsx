import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
  Dimensions,
  FlatList,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

import { useNavigation } from '@react-navigation/native';

const DATA = [
  {
    id: '1',
    title: 'Ashcome Space',
    image: require('../../../assests/images/list_image.png'),
  },
  {
    id: '2',
    title: 'Keep Your Family',
    image: require('../../../assests/images/list_image.png'),
  },
  {
    id: '3',
    title: 'Waiting for You',
    image: require('../../../assests/images/list_image.png'),
  },
  {
    id: '4',
    title: 'Ashcome Space',
    image: require('../../../assests/images/list_image.png'),
  },
  {
    id: '5',
    title: 'Keep Your Family',
    image: require('../../../assests/images/list_image.png'),
  },
  {
    id: '6',
    title: 'Waiting for You',
    image: require('../../../assests/images/list_image.png'),
  },
];

const NUM_COLUMNS = 3;
const ITEM_WIDTH = Dimensions.get('window').width / NUM_COLUMNS;

const CategoryDetails = () => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <View style={styles.LastestAudiobookWrap}>
      <View style={styles.LastestAudiobookBox}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
        <Text style={styles.LastestAudiobookBoxText}>{item.title}</Text>
      </View>
    </View>
  );
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
            <TouchableOpacity
              title="Go Back"
              onPress={() => navigation.goBack()}
            >
              <Image
                source={require('../../../assests/images/back_arrow.png')}
                //style={[styles.backArrow, { tintColor: '#536EFF' }]}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.FavouriteAudiobookSectionTitle}>
              Category Details
            </Text>
          </View>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={NUM_COLUMNS}
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default CategoryDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  LastestAudiobookWrap: {
    marginTop: 25,
    paddingHorizontal: 5,
  },
  LastestAudiobookWrapTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    paddingLeft: 12,
  },
  LastestAudiobookWrapContainer: {
    flexDirection: 'row',
    gap: 0,
  },
  LastestAudiobookBox: {
    width: ITEM_WIDTH - 10,
    marginRight: 0,
    alignItems: 'left',
  },
  LastestAudiobookBoxText: {
    marginTop: 6,
    color: '#fff',
    textAlign: 'center',
    marginLeft: 0,
  },
  FavouriteAudiobookSection: {
    paddingHorizontal: 6,
    marginTop: 20,
    marginBottom: 5,
  },
  FavouriteAudiobookSectionTitle: {
    fontSize: 22,
    lineHeight: 40,
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
  UserTopDetailsSection: {
    flexDirection: 'row',
    marginTop: 25,
    paddingHorizontal: 18,
  },
  UserTopDetailsSectionLeft: {
    width: '50%',
    flexDirection: 'row',
  },
  UserWelcomeText: {
    fontSize: 10,
    lineHeight: 20,
    fontWeight: '400',
    color: '#fff',
  },
  UserWelcomeName: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '600',
    color: '#fff',
  },
  UserTopDetailsSectionRight: {
    width: '50%',
  },
  UserFaceBox: {
    marginRight: 10,
  },
  myListBack: {
    flexDirection: 'row',
    gap: 5,
  },

  // item: {
  //   backgroundColor: '#4db6ac',
  //   margin: 0,
  //   width: ITEM_WIDTH - 10,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   borderRadius: 8,
  // },
  // text: {
  //   color: '#fff',
  //   fontWeight: 'bold',
  // },
  image: {
    width: '100%',
  },
});
