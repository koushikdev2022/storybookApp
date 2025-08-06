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
  TextInput,
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

const EditProfile = () => {
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
            <Text style={styles.FavouriteAudiobookSectionTitle}>Profile</Text>
          </View>
        </View>
        <View style={styles.editImageWrapper}>
          <View style={styles.editImageBox}>
            <Image source={require('../../../assests/images/edit_face.png')} />
            <View style={styles.UserTopDetailsSectionRight}>
              <TouchableOpacity>
                <View style={styles.editPoint}>
                  <MaterialIcons name="edit" size={16} color="#ffffff" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.ProfileDetailsListSection}>
          <View style={styles.itemContainer}>
            {/* Phone Number Input */}
            <View style={styles.profileEditInput}>
              <Text style={styles.profileEditLabel}>Name</Text>
              <View style={styles.phoneInputContainer}>
                <TextInput
                  placeholder="William Krishna"
                  keyboardType="text"
                  style={styles.input}
                  placeholderTextColor="#999999"
                />
              </View>
            </View>
            <View style={styles.profileEditInput}>
              <Text style={styles.profileEditLabel}>Email Id</Text>
              <View style={styles.phoneInputContainer}>
                <TextInput
                  placeholder="WilliamKrishna123@gmail.com"
                  keyboardType="email-address"
                  style={styles.input}
                  placeholderTextColor="#999999"
                  secureTextEntry={true}
                />
              </View>
            </View>
            <View style={styles.profileEditInput}>
              <Text style={styles.profileEditLabel}>Phone Number</Text>
              <View style={styles.phoneInputContainer}>
                <TextInput
                  placeholder="1234578980"
                  keyboardType="numeric"
                  style={styles.input}
                  placeholderTextColor="#999999"
                />
              </View>
            </View>
            {/* Sign In Button */}
            <View style={styles.loginContainer}>
              <TouchableOpacity style={styles.discardChangesButton}>
                <Text style={styles.discardChangesButtonText}>
                  Discard Changes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.signInButton}>
                <Text style={styles.signInButtonText}>Update Profile</Text>
              </TouchableOpacity>
            </View>

            {/* Divider */}
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={styles.orText}>Or With</Text>
              <View style={styles.divider} />
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default EditProfile;

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
    position: 'absolute',
    right: 0,
    bottom: 0,
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
  myListBack: {
    flexDirection: 'row',
    gap: 5,
  },
  itemContainer: {},
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#5A3887',
    borderRadius: 50,
    paddingHorizontal: 25,
    paddingVertical: 4,
    marginBottom: 15,
    backgroundColor: '#000000',
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 5,
    color: '#000',
  },
  verticalLine: {
    width: 1,
    height: '80%',
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#ffffff',
    height: responsiveHeight(5.5),
  },
  signInButton: {
    backgroundColor: '#8E32FF',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
    width: 180,
    marginHorizontal: 8,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  discardChangesButton: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
    width: 180,
    marginHorizontal: 8,
  },
  discardChangesButtonText: {
    color: '#8E32FF',
    fontSize: 18,
    fontWeight: '600',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileEditLabel: {
    fontSize: 12,
    lineHeight: 18,
    color: '#CECECE',
    paddingBottom: 7,
  },
  profileEditInput: {
    marginBottom: 5,
  },
  editImageBox: {
    width: 96,
    height: 96,
    borderRadius: 50,
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  editImageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
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
