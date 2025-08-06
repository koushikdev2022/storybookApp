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

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../../assests/images/home_bg.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.UserTopDetailsSection}>
          <View style={styles.UserTopDetailsSectionLeft}>
            <View style={styles.UserFaceBox}>
              <Image
                source={require('../../../assests/images/user_face.png')}
              />
            </View>
            <View>
              <Text style={styles.UserWelcomeText}>Welcome back,</Text>
              <Text style={styles.UserWelcomeName}>William Krishna</Text>
            </View>
          </View>
          <View style={styles.UserTopDetailsSectionRight}>
            <View style={styles.bannerSearchBox}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Search')}
                style={styles.searchBtnBox}
              >
                <Image
                  source={require('../../../assests/images/search_icon.png')}
                  resizeMode="contain"
                />
                <Text style={styles.searchText}>Search</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.likeBtnBox}>
                <Image
                  source={require('../../../assests/images/BiDownload.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.FavouriteAudiobookSection}>
          <Text style={styles.FavouriteAudiobookSectionTitle}>
            Discover Your Next Favourite Audiobook
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.FavouriteAudiobookSectionContainer}
          >
            <View style={styles.FavouriteAudiobookSectionBoxAll}>
              <Text style={styles.FavouriteAudiobookSectionBoxText}>All</Text>
            </View>
            <View style={styles.FavouriteAudiobookSectionBox}>
              <Text style={styles.FavouriteAudiobookSectionBoxText}>
                Beyond the Headlines
              </Text>
            </View>
            <View style={styles.FavouriteAudiobookSectionBox}>
              <Text style={styles.FavouriteAudiobookSectionBoxText}>
                Discover
              </Text>
            </View>
            <View style={styles.FavouriteAudiobookSectionBox}>
              <Text style={styles.FavouriteAudiobookSectionBoxText}>
                Money Matters
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.LastestAudiobookWrap}>
          <Text style={styles.LastestAudiobookWrapTitle}>Latest Audiobook</Text>

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
              <Image source={require('../../../assests/images/labook02.png')} />
              <Text style={styles.LastestAudiobookBoxText}>
                Keep Your Family.
              </Text>
            </View>
            <View style={styles.LastestAudiobookBox}>
              <Image source={require('../../../assests/images/labook03.png')} />
              <Text style={styles.LastestAudiobookBoxText}>
                Waiting for You
              </Text>
            </View>
            <View style={styles.LastestAudiobookBox}>
              <Image
                style={styles.LastestAudiobookBoxImage}
                source={require('../../../assests/images/labook04.png')}
              />
              <Text style={styles.LastestAudiobookBoxText}>
                Energy and Ethics
              </Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.LastestAudiobookWrap}>
          <Text style={styles.LastestAudiobookWrapTitle}>
            Because You liked Waiting for you
          </Text>

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
              <Text style={styles.LastestAudiobookBoxText}>A Part of You</Text>
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
        <View style={styles.LastestAudiobookWrap}>
          <Text style={styles.LastestAudiobookWrapTitle}>
            Continue Listening
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.LastestAudiobookWrapContainer}
          >
            <View style={styles.LastestAudiobookBox}>
              <Image source={require('../../../assests/images/labook01.png')} />
              <Text style={styles.LastestAudiobookBoxText}>Ashcome Space</Text>
            </View>
            <View style={styles.LastestAudiobookBox}>
              <Image source={require('../../../assests/images/like02.png')} />
              <Text style={styles.LastestAudiobookBoxText}>A Part of You</Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  LastestAudiobookWrap: {
    marginTop: 25,
    paddingHorizontal: 6,
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
    width: 115,
    marginRight: 0,
    alignItems: 'center',
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
  },
  FavouriteAudiobookSectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
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
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  UserFaceBox: {
    marginRight: 10,
  },
  bannerSearchBox: {
    flexDirection: 'row',
    gap: 15,
  },
  likeBtnBox: {
    backgroundColor: '#2E2B4B',
    width: 40,
    height: 40,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBtnBox: {
    backgroundColor: '#2E2B4B',
    width: 95,
    height: 40,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchText: {
    color: '#6F828E',
    fontSize: 14,
    lineHeight: 40,
    paddingLeft: 5,
  },
});
