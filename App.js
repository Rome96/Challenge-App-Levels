import React from 'react';
import {View, Text, StatusBar, StyleSheet, SafeAreaView} from 'react-native';
import Header from './src/components/Header'
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Header/>
          <Text>Step One</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
