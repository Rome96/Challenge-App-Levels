import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Level = props => {
  const {name, benefits, logo} = props;
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image
          source={logo}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
        />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.benefits}>{benefits} beneficios</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 15,
  },
  containerImg: {
    height: 80,
    width: 80,
  },
  name: {
    fontSize: 15,
    color: '#535E71',
    fontFamily: 'Muli-ExtraBold',
  },
  benefits: {
    fontSize: 12,
    color: '#B6BFCE',
    fontFamily: 'Muli-SemiBold',
  },
});

export default Level