import React from 'react';
// import {Ionicons} from '@expo/vector-icons';
import {Text, View, Platform, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HEIGHT = Platform.OS === 'ios' ? 60 : 56;

const Header = () => {
  return (
    <View style={styles.container}>
      <Icon name="md-arrow-back" color="#000" size={30} />
      <Text style={styles.title}>Title</Text>
      <Icon name="md-close" color="#000" size={30} />
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
    backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    
  },
});

export default Header;
