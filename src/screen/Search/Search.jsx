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
  TextInput,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

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

const Search = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.searchResult}>
      <View style={styles.LastestAudiobookWrap}>
        <View style={styles.LastestAudiobookBox}>
          <Image
            source={item.image}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.LastestAudiobookBoxText}>{item.title}</Text>
        </View>
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
                resizeMode="contain"
              />
            </TouchableOpacity>
            <View style={styles.searchArea}>
              <Feather name="search" size={15} color="#949494" />
              <TextInput
                placeholder="Search"
                keyboardType="text"
                style={styles.input}
                placeholderTextColor="#A9A9A9"
              />
            </View>
          </View>
        </View>
        <View style={styles.forYouListSection}>
          <View style={styles.LastestAudiobookWrapSearch}>
            <View style={styles.RecentSearchesArea}>
              <Text style={styles.LastestAudiobookWrapTitle}>
                Recent Searches
              </Text>
              <View>
                <TouchableOpacity style={styles.deleteSearchItem}>
                  <Text style={styles.removeText}>Remove</Text>
                  <MaterialIcons
                    name="delete-outline"
                    size={16}
                    color="#949494"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={
                  styles.FavouriteAudiobookSectionContainer
                }
              >
                <View style={styles.FavouriteAudiobookSectionBox}>
                  <TouchableOpacity>
                    <Text style={styles.FavouriteAudiobookSectionBoxText}>
                      AshCome Space
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.FavouriteAudiobookSectionBox}>
                  <TouchableOpacity>
                    <Text style={styles.FavouriteAudiobookSectionBoxText}>
                      99 Promises
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.FavouriteAudiobookSectionBox}>
                  <TouchableOpacity>
                    <Text style={styles.FavouriteAudiobookSectionBoxText}>
                      A Part of you
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.FavouriteAudiobookSectionBox}>
                  <TouchableOpacity>
                    <Text style={styles.FavouriteAudiobookSectionBoxText}>
                      Keep Your Family Close
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
        <View style={styles.forYouListSection}>
          <View style={styles.LastestAudiobookWrap}>
            <Text style={styles.LastestAudiobookWrapTitle}>For You</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.LastestAudiobookWrapContainer}
            >
              <View style={styles.LastestAudiobookBox}>
                <Image source={require('../../../assests/images/like01.png')} />
                <Text style={styles.LastestAudiobookBoxText}>
                  Sunset Kiss Last
                </Text>
              </View>
              <View style={styles.LastestAudiobookBox}>
                <Image source={require('../../../assests/images/like02.png')} />
                <Text style={styles.LastestAudiobookBoxText}>
                  A Part of You
                </Text>
              </View>
              <View style={styles.LastestAudiobookBox}>
                <Image source={require('../../../assests/images/like03.png')} />
                <Text style={styles.LastestAudiobookBoxText}>
                  You reached Sam
                </Text>
              </View>
              <View style={styles.LastestAudiobookBox}>
                <Image
                  style={styles.LastestAudiobookBoxImage}
                  source={require('../../../assests/images/like04.png')}
                />
                <Text style={styles.LastestAudiobookBoxText}>99 Promises</Text>
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={styles.forYouListSection}>
          <View style={styles.LastestAudiobookWrap}>
            <Text style={styles.LastestAudiobookWrapTitle}>
              Continue Watching
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.LastestAudiobookWrapContainer}
            >
              <View style={styles.LastestAudiobookBox}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('AudiobookDetails')}
                >
                  <Image
                    source={require('../../../assests/images/labook01.png')}
                  />
                  <Text style={styles.LastestAudiobookBoxText}>
                    Ashcome Space
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.LastestAudiobookBox}>
                <Image
                  source={require('../../../assests/images/labook02.png')}
                />
                <Text style={styles.LastestAudiobookBoxText}>
                  Keep Your Family.
                </Text>
              </View>
            </ScrollView>
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

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  LastestAudiobookWrap: {
    marginTop: 25,
    paddingHorizontal: 4,
  },
  LastestAudiobookWrapSearch: {
    marginTop: 10,
    paddingHorizontal: 4,
  },
  LastestAudiobookWrapTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff',
    paddingLeft: 3,
  },
  LastestAudiobookWrapContainer: {
    flexDirection: 'row',
    gap: 0,
  },
  LastestAudiobookBox: {
    width: ITEM_WIDTH - 18,
    marginRight: 0,
    alignItems: 'left',
  },
  LastestAudiobookBoxText: {
    marginTop: 6,
    color: '#fff',
    textAlign: 'left',
    marginLeft: 0,
  },
  FavouriteAudiobookSection: {
    paddingHorizontal: 12,
    marginTop: 25,
    marginBottom: 10,
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
    marginLeft: 0,
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
  myListBack: {
    flexDirection: 'row',
    gap: 5,
  },
  forYouListSection: {
    paddingHorizontal: 10,
  },
  searchResult: {
    marginHorizontal: 4,
  },
  RecentSearchesArea: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 5,
  },
  removeText: {
    color: '#949494',
    fontSize: 14,
    lineHeight: 16,
  },
  deleteSearchItem: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 15,
    lineHeight: 46,
    color: '#ffffff',
    height: responsiveHeight(4.6),
    width: '100%',
    marginLeft: 5,
  },
  searchArea: {
    backgroundColor: '#2E2B4B',
    borderRadius: 25,
    paddingHorizontal: 15,
    width: '88%',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
