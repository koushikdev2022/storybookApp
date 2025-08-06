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

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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
                onPress={() => navigation.navigate('EditProfile')}
              >
                <View style={styles.editPoint}>
                  <MaterialIcons name="edit" size={16} color="#ffffff" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.ProfileDetailsListSection}>
          <TouchableOpacity style={styles.ProfileDetailsListDetails}>
            <View style={styles.ProfileNavPoint}>
              <View style={styles.ProfileNavPointLeft}>
                <FontAwesome name="list-alt" size={18} color="#ffffff" />
                <Text style={styles.ProfileDetailsTitle}>
                  Subscription plans
                </Text>
              </View>
              <View>
                <Feather name="chevron-right" size={22} color="#ffffff" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ProfileDetailsListDetails}>
            <View style={styles.ProfileNavPoint}>
              <View style={styles.ProfileNavPointLeft}>
                <Feather name="globe" size={18} color="#ffffff" />
                <Text style={styles.ProfileDetailsTitle}>
                  Language Preferences
                </Text>
              </View>
              <View>
                <Feather name="chevron-right" size={22} color="#ffffff" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.ProfileDetailsListDetails}>
            <View style={styles.ProfileNavPoint}>
              <View style={styles.ProfileNavPointLeft}>
                <MaterialIcons name="support-agent" size={18} color="#ffffff" />
                <Text style={styles.ProfileDetailsTitle}>Support</Text>
              </View>
              <View>
                <Feather name="chevron-right" size={22} color="#ffffff" />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ManageDownloads')}
            style={styles.ProfileDetailsListDetails}
          >
            <View style={styles.ProfileNavPoint}>
              <View style={styles.ProfileNavPointLeft}>
                <AntDesign name="download" size={18} color="#ffffff" />
                <Text style={styles.ProfileDetailsTitle}>Manage Downloads</Text>
              </View>
              <View>
                <Feather name="chevron-right" size={22} color="#ffffff" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.ProfileLogoutWrap}>
          <TouchableOpacity
            style={styles.ProfileLogoutButton}
            onPress={() => navigation.navigate('GetStarted')}
          >
            <Entypo name="log-out" size={20} color="#000000" />
            <Text style={styles.ProfileLogoutButtonText}>Log out</Text>
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
    marginLeft: 8,
  },
  ProfileLogoutWrap: {
    marginVertical: 50,
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ProfileLogoutButton: {
    backgroundColor: '#ffffff',
    borderRadius: 25,

    paddingHorizontal: 30,
    width: 136,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  ProfileLogoutButtonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 3,
  },
  ProfileNavPoint: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ProfileNavPointLeft: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
  },
  editPoint: {
    backgroundColor: '#202020',
    width: 25,
    height: 25,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
