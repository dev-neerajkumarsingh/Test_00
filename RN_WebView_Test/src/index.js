import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './Header';
import Card from './Card';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

export default App;
