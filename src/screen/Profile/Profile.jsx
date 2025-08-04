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
  Button,
} from 'react-native';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const NUM_COLUMNS = 3;
const ITEM_WIDTH = Dimensions.get('window').width / NUM_COLUMNS;

import { useNavigation } from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();
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
            <Text style={styles.FavouriteAudiobookSectionTitle}>Profile</Text>
          </View>
        </View>
        <View style={styles.profileWrapper}>
          <View style={styles.UserTopDetailsSection}>
            <View style={styles.UserTopDetailsSectionLeft}>
              <View style={styles.UserFaceBox}>
                <Image
                  source={require('../../../assests/images/user_face.png')}
                />
              </View>
              <View>
                <Text style={styles.UserWelcomeName}>William Krishna</Text>
                <Text style={styles.UserWelcomeText}>+91234675890</Text>
              </View>
            </View>
            <View style={styles.UserTopDetailsSectionRight}>
              <TouchableOpacity
              //title="Go Back"
              //onPress={() => navigation.goBack()}
              >
                <Image
                  source={require('../../../assests/images/edit_profile_icon.png')}
                  //style={[styles.backArrow, { tintColor: '#536EFF' }]}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.ProfileDetailsListSection}>
          <TouchableOpacity style={styles.ProfileDetailsListDetails}>
            <Text style={styles.ProfileDetailsTitle}>Subscription plans</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ProfileDetailsListDetails}>
            <Text style={styles.ProfileDetailsTitle}>Language Preferences</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ProfileDetailsListDetails}>
            <Text style={styles.ProfileDetailsTitle}>Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ProfileDetailsListDetails}>
            <Text style={styles.ProfileDetailsTitle}>Manage Downloads</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ProfileLogoutWrap}>
          <TouchableOpacity>
            <Text style={styles.ProfileLogoutButton}>Log out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
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

  image: {
    width: '100%',
  },

  UserTopDetailsSection: {
    flexDirection: 'row',
    marginTop: 0,
    paddingHorizontal: 18,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  UserTopDetailsSectionLeft: {
    width: '50%',
    flexDirection: 'row',
  },
  UserWelcomeText: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '400',
    color: '#949494',
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
    alignItems: 'flex-end',
  },
  UserFaceBox: {
    marginRight: 10,
  },
  profileWrapper: {
    backgroundColor: '#000000',
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 13,
    marginBottom: 10,
  },
  ProfileDetailsListSection: {
    marginHorizontal: 13,
    marginVertical: 15,
  },
  ProfileDetailsListDetails: {
    marginBottom: 15,
  },
  ProfileDetailsTitle: {
    fontSize: 15,
    lineHeight: 26,
    color: '#ffffff',
    fontWeight: '400',
  },
  ProfileLogoutWrap: {
    marginVertical: 50,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProfileLogoutButton: {
    color: '#000000',
    fontSize: 17,
    lineHeight: 44,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    fontWeight: '600',
    paddingHorizontal: 30,
    width: 136,
    textAlign: 'center',
  },
});
