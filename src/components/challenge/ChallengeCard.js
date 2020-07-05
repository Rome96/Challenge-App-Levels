import React from 'react'
import ProgressCircle from 'react-native-progress-circle';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ChallengeCard = props => {
  const {title, textButton, percent, cant} = props;
  return (
    <View style={styles.container}>
      <View>
        <Text>{title}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ProgressCircle
        percent={percent}
        radius={25}
        borderWidth={4}
        color="#659EFF"
        shadowColor="#F4F7FD"
        bgColor="#fff">
        <Text>{cant}</Text>
      </ProgressCircle>
    </View>
  );
}

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
});

export default ChallengeCard