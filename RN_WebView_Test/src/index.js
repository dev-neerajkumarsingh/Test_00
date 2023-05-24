import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Header from './Header';
import Card from './Card';
import WebViewSection from './WebViewSection';
import BottomCard from './BottomCard';
import TextInputCom from './BottomCard/components/TextInputCom';

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}>
        <Card />
        <WebViewSection />
        <BottomCard />
      </ScrollView>
      <TextInputCom />
    </View>
  );
};

export default App;
