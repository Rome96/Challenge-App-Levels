import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const BecomePremium = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={['#FFA0E5', '#FC64BC', '#FC64BC']}>
      <View style={styles.containerInfo}>
        <View style={styles.containerImg}>
          <Image
            style={{width: '100%', height: '100%'}}
            source={require('@Assets/images/IconPremium.png')}
          />
        </View>
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.title}>Hazte</Text>
            <Text style={[
                styles.title,
                {fontFamily: 'Muli-Black', marginHorizontal: 5},
            ]}>
              Premium
            </Text>
            <Text style={styles.title}>ahora</Text>
          </View>
          <Text style={styles.description}>
            Sube ya de nivel con este acceso rápido por 19€ mensual
          </Text>
        </View>
      </View>
      <TouchableOpacity
        // onPress={{}}
        activeOpacity={0.6}
        style={styles.containerButton}
      >
        <Text style={styles.textButton}>Obtener acceso rápido</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    padding: 20,
    justifyContent: 'space-between',
    borderRadius: 20,
    marginVertical: 10,
  },
  containerInfo: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    color: '#B1FFD8',
    fontFamily: 'Muli-Bold',
  },
  description: {
    fontSize: 16,
    color: '#FFF',
    fontFamily: 'Muli-Bold',
  },
  containerImg: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  containerButton: {
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(500, 500, 500, 0.4)',
  },
  textButton: {
    color: '#FFF',
    fontSize: 23,
    fontFamily: 'Muli-Black'
  },
});

export default BecomePremium;
