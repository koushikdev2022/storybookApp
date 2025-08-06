// ManageDownloadsScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import { useNavigation } from '@react-navigation/native';

const itemsData = [
  {
    id: '1',
    title: 'Ashcome Space',
    image: require('../../../assests/images/list_image.png'),
  },
  {
    id: '2',
    title: 'Keep Your Family.',
    image: require('../../../assests/images/labook02.png'),
  },
  {
    id: '3',
    title: 'Waiting for You',
    image: require('../../../assests/images/labook03.png'),
  },
  {
    id: '4',
    title: 'Ashcome Space',
    image: require('../../../assests/images/labook04.png'),
  },
  {
    id: '5',
    title: 'Keep Your Family.',
    image: require('../../../assests/images/like01.png'),
  },
  {
    id: '6',
    title: 'Waiting for You',
    image: require('../../../assests/images/like02.png'),
  },
];

const ManageDownloads = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState(itemsData);
  const [deleteId, setDeleteId] = useState(null);

  const handleLongPress = id => {
    setDeleteId(id);
  };

  const handleDelete = id => {
    Alert.alert('Delete', 'Are you sure you want to delete this?', [
      {
        text: 'Cancel',
        style: 'cancel',
        onPress: () => setDeleteId(null),
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          setItems(items.filter(item => item.id !== id));
          setDeleteId(null);
        },
      },
    ]);
  };

  const renderItem = ({ item }) => {
    const isDeleteVisible = item.id === deleteId;

    return (
      <TouchableOpacity
        onLongPress={() => handleLongPress(item.id)}
        onPress={() => {
          if (isDeleteVisible) return;
          // Handle play or view
        }}
        style={styles.itemContainer}
      >
        <Image source={item.image} style={styles.image} />
        {isDeleteVisible ? (
          <TouchableOpacity
            style={styles.deleteIcon}
            onPress={() => handleDelete(item.id)}
          >
            <MaterialIcons name="delete" size={28} color="white" />
          </TouchableOpacity>
        ) : (
          <>
            <Icon
              name="play-circle"
              size={28}
              color="white"
              style={styles.playIcon}
            />
            <View style={styles.topIcons}>
              <View style={styles.wishIconsBox}>
                <Icon name="heart-outline" size={15} color="white" />
              </View>
              <View style={styles.wishIconsBox}>
                <FontAwesome6 name="crown" size={12} color="white" />
              </View>
            </View>
          </>
        )}
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

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
        <View style={styles.container}>
          {/* Header */}
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
                Manage Downloads
              </Text>
            </View>
          </View>

          {/* Account Info */}
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

            <View style={styles.addAccountSection}>
              <TouchableOpacity style={styles.addAccountBox}>
                <Feather name="plus-circle" size={16} color="#ffffff" />
                <Text style={styles.addAccountBoxText}>Add Account</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Grid */}
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={3}
            contentContainerStyle={styles.list}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ManageDownloads;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  FavouriteAudiobookSection: {
    paddingHorizontal: 12,
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  headerTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
  },
  accountBox: {
    backgroundColor: '#1c162f',
    borderRadius: 10,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accountInfo: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 20,
  },
  name: {
    color: 'white',
    fontWeight: '600',
  },
  number: {
    color: '#aaa',
    fontSize: 12,
  },
  addAccount: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 18,
    gap: 6,
  },
  addAccountText: {
    color: 'white',
    fontSize: 13,
  },
  list: {
    paddingBottom: 50,
    paddingHorizontal: 7,
  },
  itemContainer: {
    flex: 1 / 3,
    marginVertical: 14,
    marginHorizontal: 12,
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: 116,
    height: 150,
    borderRadius: 8,
  },
  playIcon: {
    position: 'absolute',
    top: 60,
    left: 35,
  },
  topIcons: {
    position: 'absolute',
    top: 6,
    left: 6,
    right: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deleteIcon: {
    position: 'absolute',
    top: 60,
    left: 35,
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 4,
    borderColor: '#FF3838',
  },
  title: {
    color: 'white',
    marginTop: 4,
    fontSize: 12,
    textAlign: 'center',
  },
  myListBack: {
    flexDirection: 'row',
    gap: 5,
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
  addAccountSection: {
    marginHorizontal: 20,
    marginTop: 15,
    paddingTop: 15,
    borderTopColor: '#1C1C1C',
    borderTopWidth: 1,
  },
  addAccountBoxText: {
    fontSize: 14,
    lineHeight: 14,
    color: '#ffffff',
    paddingLeft: 5,
  },
  addAccountBox: {
    flexDirection: 'row',
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
  wishIconsBox: {
    backgroundColor: '#0C0B0D',
    width: 22,
    height: 22,
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
