import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  StyleSheet,
  Platform,
  UIManager,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // or MaterialIcons, AntDesign etc.

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

import { useNavigation } from '@react-navigation/native';

const AccordionSection = ({ title, items, color }) => {
  const navigation = useNavigation();
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.accordionContainer}>
      <TouchableOpacity onPress={toggleExpand} style={styles.header}>
        <Text style={[styles.headerText, { color }]}>{title}</Text>
        <Icon
          name={expanded ? 'chevron-up' : 'chevron-down'}
          size={20}
          color={color}
        />
      </TouchableOpacity>
      {expanded &&
        items.map((item, index) => (
          <View key={index} style={styles.item}>
            <TouchableOpacity
              title="Navigate"
              onPress={() => navigation.navigate('CategoryDetails')}
            >
              <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  accordionContainer: {
    backgroundColor: '#000000',
    marginBottom: 10,
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
  },
  item: {
    paddingVertical: 8,
    paddingLeft: 10,
  },
  itemText: {
    fontSize: 14,
    color: '#ffffff',
  },
});

export default AccordionSection;
