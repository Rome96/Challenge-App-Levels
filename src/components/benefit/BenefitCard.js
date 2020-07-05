import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const BenefitCard = props => {
  const {title, textButton, textButtonGoInfo} = props;
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text>{title}</Text>
        <View style={styles.containerButtons}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>{textButton}</Text>
          </TouchableOpacity>
          {textButtonGoInfo && (
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>{textButtonGoInfo}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
        <Text style={styles.textDisponible}>Disponible</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Muli-ExtraBold',
  },
  containerButtons: {
    flexDirection: 'row',
  },
  button: {
    padding: 10,
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#f4f4f4',
    backgroundColor: '#FFF',
  },
  textButton: {
    fontSize: 12,
    color: '#8A97AD',
    fontFamily: 'Muli-SemiBold',
  },
  textDisponible: {
    fontSize: 14,
    color: '#6CF4BA',
    fontFamily: 'Muli-SemiBold'
  },
});

export default BenefitCard;
