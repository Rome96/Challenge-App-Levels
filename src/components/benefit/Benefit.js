import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import BenefitCard from './BenefitCard'
const Benefit = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerActualLevel}>
        <Text style={[styles.textTitle, {fontFamily: 'Muli-Regular'}]}>
          Nivel actual:
        </Text>
        <Image
          style={styles.icon}
          source={require('@Assets/images/Rookie.png')}
        />
        <Text style={[styles.textTitle, {fontFamily: 'Muli-Black'}]}>
          Rookie
        </Text>
      </View>
      <Text style={styles.description}>
        Para subir de nivel completa los siguientes desafíos.
      </Text>
      <BenefitCard
        title="Activa tu Wallet"
        textButton="Ir a Adictic Wallet"
      />
      <BenefitCard
        title="Solicita tu tienda Adictic"
        textButton="Ir a Tienda"
      />
      <BenefitCard
        title="Publica ofertas de empleo ó formación"
        textButton="Ir a empleo"
        textButtonGoInfo="ir formación"
      />
      <BenefitCard
        title="Crea colaboraciones"
        textButton="Ir a publicar"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFF',
  },
  description: {
    fontSize: 16,
    color: '#B6BFCE',
    marginVertical: 20,
    fontFamily: 'Muli-SemiBold',
  },
  containerActualLevel: {
    flexDirection: 'row',
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
export default Benefit;
