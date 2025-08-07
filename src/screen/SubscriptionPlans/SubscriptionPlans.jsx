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

import Fontisto from 'react-native-vector-icons/Fontisto';

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

const SubscriptionPlans = ({ navigation }) => {
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
          source={require('../../../assests/images/subscription_img.png')}
          style={styles.bannerImageAreaImage}
          resizeMode="cover"
        />
        {/* Top Bar Icons */}
        <View style={styles.bannerContentArea}>
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
            <Text style={styles.FavouriteAudiobookSectionTitle}>
              Manage Downloads
            </Text>
          </View>
        </View>
      </View>

      {/* Title and Tags */}
      <View style={styles.containeWrapper}>
        <View style={styles.premiumBox}>
          <Image
            source={require('../../../assests/images/small_logo.png')}
            resizeMode="contain"
            style={styles.premiumBoxImage}
          />
          <Text style={styles.premiumBoxText}>Premium</Text>
        </View>
        <Text style={styles.containeWrapperTitle}>
          Get More Out of Your Stories with Audiobook Premium
        </Text>

        <View style={styles.premiumOfferBox}>
          <Fontisto name="bell" size={16} color="#B074F9" />
          <Text style={styles.premiumOfferText}>Offer ends in 7 days</Text>
        </View>

        {/* Action Buttons */}
        <View style={styles.BtnWrap}>
          <TouchableOpacity style={styles.AddMyListBtn}>
            <Text style={styles.AddMyListBtnText}>Try 3 months for $10</Text>
          </TouchableOpacity>
        </View>

        {/* Description */}
        <View style={styles.DescriptionSectionWrap}>
          <Text style={styles.DescriptionSection}>
            $10 for 3 months, then $15 per month after. Offer only available if
            you haven’t tried Premium before and you subscribe via Audiobook.
            Offers via Apple or Google Play may differ. Terms apply.
          </Text>
          <Text style={styles.DescriptionSection}>
            Offer ends July 2, 2025.
          </Text>
        </View>
      </View>
      <View style={styles.whyPremiumSection}>
        <Text style={styles.whyPremiumSectionTitle}>Why join Premium?</Text>
        <View style={styles.whyPremiumSectionList}>
          <View style={styles.whyPremiumSectionListBox}>
            <Image source={require('../../../assests/images/story_icon.png')} />
            <Text style={styles.whyPremiumSectionListText}>
              Ad-free story listening
            </Text>
          </View>
          <View style={styles.whyPremiumSectionListBox}>
            <Image source={require('../../../assests/images/story_icon.png')} />
            <Text style={styles.whyPremiumSectionListText}>
              Download to listen offline
            </Text>
          </View>
          <View style={styles.whyPremiumSectionListBox}>
            <Image source={require('../../../assests/images/story_icon.png')} />
            <Text style={styles.whyPremiumSectionListText}>
              High audio quality
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SubscriptionPlans;

const styles = StyleSheet.create({
  whyPremiumSection: {
    paddingHorizontal: 16,
  },
  whyPremiumSectionTitle: {
    fontSize: 14,
    lineHeight: 14,
    color: '#ffffff',
    fontWeight: '600',
    borderBottomColor: '#1C1C1C',
    borderBottomWidth: 1,
    paddingBottom: 12,
    marginBottom: 15,
  },
  whyPremiumSectionListBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  whyPremiumSectionListText: {
    fontSize: 13,
    lineHeight: 16,
    color: '#ffffff',
    marginLeft: 8,
  },
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
    marginTop: -145,
    position: 'relative',
    zIndex: 2,
  },
  containeWrapperTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#fff',
    marginTop: -10,
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
    color: '#B1B1B1',
    marginTop: 5,
    lineHeight: 15,
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
  FavouriteAudiobookSectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 30,
    color: '#fff',
    paddingLeft: 10,
  },
  myListBack: {
    flexDirection: 'row',
    gap: 5,
  },
  DescriptionSectionWrap: {
    marginTop: 10,
  },
  premiumBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  premiumBoxText: {
    fontSize: 16,
    lineHeight: 18,
    color: '#FFFFFF',
    fontWeight: '600',
    marginLeft: 5,
  },
  premiumBoxImage: {
    width: 22,
  },
  premiumOfferBox: {
    backgroundColor: '#201d1e',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: '50%',
  },
  premiumOfferText: {
    fontSize: 14,
    lineHeight: 16,
    color: '#ffffff',
    fontWeight: '500',
    marginLeft: 5,
  },
});
