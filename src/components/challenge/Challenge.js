import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import ChallengeCard from './ChallengeCard'

const  Challenge = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Para subir de nivel completa los siguientes desafíos.
      </Text>
      <View style={styles.containerSgtLevel}>
        <Text style={[styles.textTitle, {fontFamily: 'Muli-Regular'}]}>
          Siguiente Nivel:
        </Text>
        <Image
          style={styles.icon}
          source={require('@Assets/images/Profesional.png')}
        />
        <Text style={[styles.textTitle, {fontFamily: 'Muli-Black'}]}>
          Profesional
        </Text>
      </View>
      <ChallengeCard
        percent={38}
        cant={'32%'}
        title="Completa tu curriculum"
        textButton="Ir a completar desafío"
      />
      <ChallengeCard
        percent={38}
        cant={'1/3'}
        title="Trae 3 amigos a Aditic"
        textButton="Ir a completar desafío"
      />
      <ChallengeCard
        percent={38}
        cant={'32%'}
        title="Consigue 20 seguidores"
        textButton="Ir a completar desafío"
      />
      <ChallengeCard
        percent={38}
        cant={'1/6'}
        title="Sube 6 publicaciones"
        textButton="Ir a completar desafío"
      />
      <ChallengeCard
        percent={100}
        cant={'100%'}
        title="Sube una foto de perfil"
        textButton="Ir a completar desafío"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFF',
  },
  description: {
    fontSize: 16,
    color: '#B6BFCE',
    fontFamily: 'Muli-SemiBold',
  },
  containerSgtLevel: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  textTitle: {
    fontSize: 14,
    color: '#535E71',
  },
  icon: {
    width: 16,
    height: 15,
    marginHorizontal: 5,
  },
});

export default Challenge