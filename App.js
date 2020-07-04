import React from 'react';
import {View, Text, StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import Header from './src/components/Header'
import Level from './src/components/Level'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: '#F4F4F4'}}>
          <Header />
          <Level />
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
