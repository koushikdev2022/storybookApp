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
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';

const DATA = [
  {
    id: '1',
    title: 'Ashcome Space',
    image: require('../../../assests/images/labook01.png'),
  },
  {
    id: '2',
    title: 'Keep Your Family',
    image: require('../../../assests/images/labook02.png'),
  },
  {
    id: '3',
    title: 'Waiting for You',
    image: require('../../../assests/images/labook02.png'),
  },
  {
    id: '4',
    title: 'Ashcome Space',
    image: require('../../../assests/images/labook01.png'),
  },
  {
    id: '5',
    title: 'Keep Your Family',
    image: require('../../../assests/images/labook02.png'),
  },
  {
    id: '6',
    title: 'Waiting for You',
    image: require('../../../assests/images/labook02.png'),
  },
];

const NUM_COLUMNS = 3;
const ITEM_WIDTH = Dimensions.get('window').width / NUM_COLUMNS;

const AudiobookDetails = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.LastestAudiobookWrap}>
      <View style={styles.LastestAudiobookBox}>
        <Image
          source={item.image}
          style={styles.LastestAudiobookBoxImage}
          resizeMode="contain"
        />
        <Text style={styles.LastestAudiobookBoxText}>{item.title}</Text>
      </View>
    </View>
  );
  return (
    <ScrollView style={styles.container}>
      {/* Header image */}
      <View style={styles.bannerImageArea}>
        <View style={styles.bannerGradianArea}>
          <Image
            source={require('../../../assests/images/banner_gradian.png')}
            style={styles.bannerGradianAreaImage}
          />
        </View>
        <Image
          source={require('../../../assests/images/book_details_img.png')}
          style={styles.bannerImageAreaImage}
          resizeMode="cover"
        />
        {/* Top Bar Icons */}
        <View style={styles.bannerContentArea}>
          <TouchableOpacity title="Go Back" onPress={() => navigation.goBack()}>
            <Image
              source={require('../../../assests/images/back_arrow.png')}
              //style={[styles.backArrow, { tintColor: '#536EFF' }]}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View style={styles.bannerSearchBox}>
            <TouchableOpacity style={styles.searchBtnBox}>
              <Image
                source={require('../../../assests/images/search_icon.png')}
                resizeMode="contain"
              />
              <Text style={styles.searchText}>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.likeBtnBox}>
              <Image
                source={require('../../../assests/images/Rated.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Title and Tags */}
      <View style={styles.containeWrapper}>
        <Text style={styles.containeWrapperTitle}>Ashcome Space</Text>
        <View style={styles.spaceTypeWrapper}>
          {['Space', 'Mystery', 'Sci-Fi'].map((tag, index) => (
            <View key={index} style={styles.spaceTypeWrapperBox}>
              <Text style={styles.spaceTypeTag}>{tag}</Text>
            </View>
          ))}
        </View>

        {/* Action Buttons */}
        <View style={styles.BtnWrap}>
          <TouchableOpacity style={styles.AddMyListBtn}>
            <Text style={styles.AddMyListBtnText}>+ Add to My List</Text>
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <View style={styles.ReadNowBtnArea}>
              <TouchableOpacity>
                <Text style={styles.ReadNowBtn}>Read Now</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.PlayNowBtn}>
                <Image
                  source={require('../../../assests/images/play_icon.png')}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Description */}
        <View style={styles.DescriptionSectionWrap}>
          <Text style={styles.DescriptionSection}>
            High above Earth, the Ashcome Research Station orbits in silenceits
            crew vanished, its systems locked, and its mission shrouded in
            secrecy. When a salvage ves...
            <Text style={styles.DescriptionSection}>See All</Text>
          </Text>
        </View>

        {/* Writers */}
        <View style={styles.WritersSection}>
          <Text style={styles.WritersSectionText}>
            Writers: Samantha Wilson, Benjamin Cole
          </Text>
          <View style={styles.shareArea}>
            <TouchableOpacity style={styles.shareBtn}>
              <Image
                source={require('../../../assests/images/BiShare.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.shareBtn}>
              <Image
                source={require('../../../assests/images/BiDownload.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* More Like This */}
      <View style={styles.MoreLikeWrap}>
        <View style={styles.MoreLikeWrapTitleWrap}>
          <Text style={styles.MoreLikeWrapTitle}>More Like This</Text>
        </View>
        {/* <FlatList
          data={mockBooks}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 12 }}
          renderItem={({ item }) => (
            <View style={{ marginRight: 12 }}>
              <FastImage
                source={item.image}
                style={{ width: 115, height: 155, borderRadius: 10 }}
                resizeMode={FastImage.resizeMode.cover}
              />
              <Text
                style={{ color: '#fff', marginTop: 6, width: 120 }}
                numberOfLines={2}
              >
                {item.title}
              </Text>
            </View>
          )}
        /> */}
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={NUM_COLUMNS}
        />
      </View>

      {/* Audio Player Preview */}
      {/* <View style={styles.AudioPlayerPreviewWrap}>
        <Icon name="play-circle" size={28} color="#fff" />
        <View style={{ marginLeft: 12 }}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>
            Ep 1 - Echoes from Orbit
          </Text>
          <Text style={{ color: '#aaa', fontSize: 12 }}>A Part of You</Text>
        </View>
      </View> */}
    </ScrollView>
  );
};

export default AudiobookDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  bannerContentArea: {
    position: 'absolute',
    top: 50,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bannerImageArea: {
    position: 'relative',
  },
  bannerGradianArea: {
    position: 'absolute',
    left: 0,
    top: 150,
    height: 117,
    zIndex: 1,
    flex: 1,
    width: '100%',
  },
  containeWrapper: {
    padding: 16,
    marginTop: -100,
    position: 'relative',
    zIndex: 2,
  },
  containeWrapperTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  spaceTypeWrapper: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
  },
  spaceTypeWrapperBox: {
    backgroundColor: '#222',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  AddMyListBtn: {
    flex: 1,
    padding: 14,
    borderRadius: 28,
    borderWidth: 1,
    borderColor: '#fff',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  AddMyListBtnText: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 14,
  },
  BtnWrap: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 12,
  },
  spaceTypeTag: {
    color: '#fff',
    fontSize: 12,
  },
  bannerSearchBox: {
    flexDirection: 'row',
    gap: 15,
  },
  AudioPlayerPreviewWrap: {
    margin: 16,
    backgroundColor: '#241A35',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  MoreLikeWrap: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  MoreLikeWrapTitle: {
    color: '#fff',
    fontSize: 15,
    lineHeight: 30,
    fontWeight: '500',
    textAlign: 'center',
    borderBottomColor: '#8E32FF',
    borderBottomWidth: 2,
    width: 110,
    marginBottom: 10,
  },
  LastestAudiobookBox: {
    width: ITEM_WIDTH - 10,
    marginRight: 5,
    alignItems: 'left',
  },
  LastestAudiobookBoxText: {
    marginTop: 6,
    color: '#fff',
    textAlign: 'center',
    marginLeft: 0,
  },
  LastestAudiobookWrap: {
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 0,
  },
  WritersSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
    display: 'flex',
    justifyContent: 'space-between',
  },
  WritersSectionText: {
    color: '#ffffff',
    marginTop: 16,
    lineHeight: 18,
    fontSize: 11,
  },
  DescriptionSection: {
    color: '#ffffff',
    marginTop: 16,
    lineHeight: 18,
    fontSize: 11,
  },
  LastestAudiobookBoxImage: {
    width: 115,
    height: 155,
    borderRadius: 10,
  },
  bannerImageAreaImage: {
    width: '100%',
    height: 266,
  },
  bannerGradianAreaImage: {
    width: '100%',
    height: 117,
  },
  MoreLikeWrapTitleWrap: {
    textAlign: 'center',
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  ReadNowBtnArea: {
    backgroundColor: '#8E32FF',
    borderRadius: 25,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    borderColor: '#D8B4FF',
    borderWidth: 1,
  },
  PlayNowBtn: {
    backgroundColor: '#D8B4FF',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    width: 43,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ReadNowBtn: {
    fontSize: 14,
    color: '#ffffff',
    lineHeight: 44,
    width: 106,
    textAlign: 'center',
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
  shareArea: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  shareBtn: {
    backgroundColor: '#202020',
    width: 34,
    height: 34,
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
});
