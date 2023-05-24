import React from 'react';
import {
  StyleSheet,
  Pressable,
  Text,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import {BackIcon, BellIcon} from '@icons';

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  buttonContainer: alignItems => [
    {
      width: 50,
      height: 40,
      alignItems: alignItems,
      justifyContent: 'center',
    },
  ],
  title: {
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 18,
    lineHeight: 23,
    color: '#1D232B',
  },
});

const Header = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <View style={styles.container}>
        <Pressable style={styles.buttonContainer('flex-start')}>
          <BackIcon width={18} height={20} color={'#313B49'} />
        </Pressable>
        <Text style={styles.title}>자유톡</Text>
        <Pressable style={styles.buttonContainer('flex-end')}>
          <BellIcon width={18} height={20} color={'#AFB9CA'} />
        </Pressable>
      </View>
    </>
  );
};

export default Header;
