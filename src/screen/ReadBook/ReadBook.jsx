import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

const ReadBook = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity title="Go Back" onPress={() => navigation.goBack()}>
          <Image
            source={require('../../../assests/images/back_arrow.png')}
            //style={[styles.backArrow, { tintColor: '#536EFF' }]}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.likeBtnBox}>
          <Image
            source={require('../../../assests/images/Rated.png')}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.chapterTitle}>
          Chapter 1: The Silence Over Ashcome
        </Text>

        <Text style={styles.paragraph}>
          No one really knew why Ashcome Station had gone dark. Located far
          beyond the usual trade routes, nestled on the edge of the Euryale
          Belt, Ashcome was once a thriving research hub.
        </Text>

        <Text style={styles.paragraph}>
          It studied gravitational eddies and the behavior of deep-space matter.
          But two months ago, its transmissions stopped mid-sentence.
        </Text>

        <Text style={styles.paragraph}>
          And now, Lieutenant Kael Arden was here to find out why. His boots
          echoed on the grated metal floor of the Orchid, his transport vessel,
          as it hovered into docking alignment.
        </Text>

        <Text style={styles.paragraph}>
          Through the viewport, Ashcome looked intact—its massive cylindrical
          body slowly rotated, artificial gravity keeping its interior stable.
          Its solar arrays still glinted in the faint starlight. From a
          distance, it looked like nothing was wrong.
        </Text>

        <Text style={styles.paragraph}>
          But no lights flickered in the windows.
        </Text>

        <Text style={styles.paragraph}>
          "Docking clamp engaged," came the Orchid's AI, Eve. "Life support
          systems on Ashcome are minimal but functional. No external damage
          detected.”
        </Text>

        <Text style={styles.paragraph}>
          Kael adjusted the collar of his EVA suit. “No distress signal, no
          sabotage, no debris field. Just… silence.”
        </Text>
      </ScrollView>

      {/* Bottom Audio Player */}
      <View style={styles.audioPlayer}>
        <Text style={styles.audioPlayerTitle}>Ashcome Space</Text>
        <View style={styles.audioPlayerTop}>
          <View style={styles.audioLeft}>
            <Image
              source={require('../../../assests/images/small_img.png')}
              resizeMode="contain"
            />
            <View style={{ marginLeft: 10 }}>
              <Text style={styles.audioTitle}>Echoes from Orbit</Text>
              <View style={styles.audioBookBox}>
                <Image
                  source={require('../../../assests/images/BiBook.png')}
                  resizeMode="contain"
                />
                <Text style={styles.audioSubtitle}>A Part of You</Text>
              </View>
            </View>
          </View>
          <View style={styles.audioRight}>
            <Image
              source={require('../../../assests/images/audio_mode.png')}
              resizeMode="contain"
            />
            <Text style={styles.audioText}>Audio Mode</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#100c1c',
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 140,
  },
  chapterTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
    marginBottom: 14,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 24,
    color: '#d1d1d1',
    marginBottom: 14,
  },
  audioPlayer: {
    position: 'absolute',
    bottom: 0,
    width,
    height: 130,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 15,
    backgroundColor: '#1D102C',
  },
  audioLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  audioTitle: {
    fontSize: 13,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 4,
  },
  audioSubtitle: {
    fontSize: 11,
    color: '#AAAAAA',
    marginLeft: 2,
  },
  audioRight: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  audioText: {
    fontSize: 12,
    color: '#aaa',
    marginTop: 4,
    marginLeft: 4,
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
  audioPlayerTitle: {
    fontSize: 20,
    lineHeight: 26,
    fontWeight: 600,
    color: '#ffffff',
    marginBottom: 10,
  },
  audioPlayerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  audioBookBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default ReadBook;
