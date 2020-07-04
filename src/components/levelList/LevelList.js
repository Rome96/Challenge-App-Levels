import React from 'react'
import { FlatList, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Level from './Level'

const Levels = [
  {
    id: 1,
    name: 'Rookie',
    benefits: 4,
    logo: require('@Assets/images/Rookie.png'),
  },
  {
    id: 2,
    name: 'Profesional',
    benefits: 6,
    logo: require('@Assets/images/Profesional.png'),
  },
  {
    id: 3,
    name: 'Adicter',
    benefits: 8,
    logo: require('@Assets/images/Adicter.png'),
  },
  {
    id: 4,
    name: 'Preminum',
    benefits: 10,
    logo: require('@Assets/images/Premium.png'),
  }
];

const LevelList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTitles}>
        <View style={styles.containerTitleLevel}>
          <Image
            style={{height: 20, width: 20}}
            source={require('@Assets/images/icon.png')}
          />
          <Text style={styles.titleLevel}>Niveles</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.seeEverything}>Ver todo</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={Levels}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Level {...item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    elevation: 1,
    marginTop: 15,
    shadowOffset: {
      width: -0.8,
      height: 0.6,
    },
    borderRadius: 10,
    shadowRadius: 1.0,
    shadowColor: '#000',
    paddingVertical: 20,
    shadowOpacity: 0.13,
    backgroundColor: '#FFF',
  },
  containerTitles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  containerTitleLevel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleLevel: {
    color: '#000',
    fontSize: 18,
    marginLeft: 6,
    fontFamily: 'Muli-ExtraBold',
  },
  seeEverything: {
    fontSize: 16,
    color: '#8A97AD',
    fontFamily: 'Muli-Bold',
  },
});

export default LevelList