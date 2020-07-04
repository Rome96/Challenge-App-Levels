import React from 'react';
import {Text, View, Platform, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HEIGHT = Platform.OS === 'ios' ? 60 : 56;

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="md-arrow-back" color="#000" size={30} />
      </TouchableOpacity>
      <Text style={styles.title}>Title</Text>
      <TouchableOpacity>
        <Icon name="md-close" color="#000" size={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: HEIGHT,
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Muli-ExtraBold'
  },
});

export default Header;
