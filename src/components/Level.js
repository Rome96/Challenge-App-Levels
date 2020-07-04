import React from "react";
import ProgressCircle from 'react-native-progress-circle';
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import LevelList from './levelList/LevelList'
import BecomePremium from './BecomePremium'
const Level = () => {
  return (
    <ScrollView
    style={styles.container}
    showsVerticalScrollIndicator={false}
    >
      <View style={styles.containerInfo}>
        <Text style={styles.name}>Hola, John!</Text>
        <View style={styles.containerImg}>
          <Image style={{
              width: "100%",
              height: "100%",
              borderRadius: 50,
              resizeMode: "cover",
            }}
            source={{
              uri:
                "https://cnet1.cbsistatic.com/img/OPp9AXaKL8sVyEIXa8zGNCDim0A=/940x0/2020/05/21/4ae395b1-64c3-483c-9b65-daa399dea29d/gettyimages-1206292075.jpg",
            }}
          />
        </View>
      </View>
      <Text style={styles.description}>
        Hecha un vistazo a los beneficios que tendrás si subes un nivel
      </Text>
      <View style={styles.containerLevel}>
        <Text style={styles.titleLevel}>Rookie</Text>
        <View style={{
          marginVertical: 15,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <View style={styles.hexagon}>
            <View style={styles.hexagonInner} />
            <View style={styles.hexagonBefore} />
            <View style={styles.hexagonAfter} />
            <View style={{position: 'absolute', flexDirection: 'row'}}>
              <Text style={[styles.percentage, {color: '#8A97AD'}]}>35</Text>
              <Text style={[styles.percentage, {color: '#CDD4E0'}]}>%</Text>
            </View>
          </View>
          <View style={{marginHorizontal: 20}}>
            <ProgressCircle
              percent={38}
              radius={70}
              borderWidth={8}
              color="#F57497"
              shadowColor="#F4F7FD"
              bgColor="#fff"
            >
              <Image
                style={{width: 105, height: 105}}
                source={require('@Assets/images/Rookie.png')}
              />
            </ProgressCircle>
          </View>
          <View style={styles.containerIcon}>
            <View style={{
              width: 3,
              height: 3,
              borderRadius: 4 / 2,
              backgroundColor: '#CDD4E0',
            }}/>
            <View style={{
              width: 3,
              height: 13,
              marginTop: 3,
              borderRadius: 5,
              backgroundColor: '#8A97AD',
            }}/>
          </View>
        </View>
        <View style={styles.containerSgtLevel}>
          <Text style={[styles.textSgtLevel, { fontFamily: 'Muli-Regular', marginRight: 4 }]}>
            Siguiente Nivel: 
          </Text>
          <Text style={[styles.textSgtLevel, { fontFamily: 'Muli-ExtraBold' }]}>
            Profesional
          </Text>
        </View>
      </View>
      <LevelList/>
      <BecomePremium/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
  },
  containerInfo: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 24,
    fontFamily: 'Muli-ExtraBold',
  },
  containerImg: {
    width: 50,
    height: 50,
  },
  description: {
    fontSize: 18,
    color: '#CDD4E0',
    fontFamily: 'Muli-SemiBold',
    paddingBottom: 10,
  },
  containerLevel: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleLevel: {
    fontSize: 24,
    color: '#535E71',
    fontFamily: 'Muli-ExtraBold',
  },
  percentage: {
    fontSize: 12,
    fontFamily: 'Muli-ExtraBold',
  },
  hexagon: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 25,
  },
  hexagonInner: {
    width: 40,
    height: 25,
    backgroundColor: '#FFF',
  },
  hexagonAfter: {
    position: 'absolute',
    bottom: -10,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 20,
    borderLeftColor: 'transparent',
    borderRightWidth: 20,
    borderRightColor: 'transparent',
    borderTopWidth: 10,
    borderTopColor: '#fff',
  },
  hexagonBefore: {
    position: 'absolute',
    top: -10,
    left: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 20,
    borderLeftColor: 'transparent',
    borderRightWidth: 20,
    borderRightColor: 'transparent',
    borderBottomWidth: 10,
    borderBottomColor: '#fff',
  },
  containerIcon: {
    borderColor: '#CDD4E0',
    borderWidth: 1,
    width: 42,
    height: 42,
    borderRadius: 42 / 2,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSgtLevel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSgtLevel: {
    fontSize: 14,
  },
});

export default Level;
