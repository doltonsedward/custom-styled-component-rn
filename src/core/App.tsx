import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const App = () => (
  <View style={styles.container}>
    <Text>Hello world</Text>
    <Text>Created with Love by Doltons Edward</Text>
    <StatusBar />
  </View>
);

export default App;
