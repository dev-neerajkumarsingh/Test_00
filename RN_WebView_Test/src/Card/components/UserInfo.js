import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {UserIcon, TickIcon, MoreIcon} from '@icons';

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  user: {
    width: 40,
    height: 40,
    backgroundColor: 'rgb(249,221,175)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topleft1: {
    marginLeft: 5.3,
  },
  topleft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  tick: {
    marginLeft: 4,
    width: 14,
    height: 14,
    backgroundColor: '#01B99F',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toplefttext1: {
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 14,
    lineHeight: 19,
    color: '#1D232B',
  },
  toplefttext2: {
    marginLeft: 4,
    fontFamily: 'NotoSans-Medium',
    fontSize: 10,
    lineHeight: 15,
    color: '#919EB6',
  },
  toplefttext3: {
    fontFamily: 'NotoSans-Regular',
    fontSize: 12,
    lineHeight: 17,
    color: '#919EB6',
  },
  dot: {
    marginHorizontal: 4,
    width: 2,
    height: 2,
    backgroundColor: '#919EB6',
  },
  topright: (backgroundColor, alignItems) => [
    {
      paddingHorizontal: 12,
      height: 26,
      backgroundColor,
      borderRadius: 15,
      alignItems,
      justifyContent: 'center',
    },
  ],
  toprighttext: {
    fontFamily: 'NotoSans-Medium',
    fontSize: 12,
    lineHeight: 17,
    color: '#FFF',
  },
});

const UserInfo = ({type = 'top'}) => {
  return (
    <View style={styles.top}>
      <View style={styles.topleft}>
        <View style={styles.user}>
          <UserIcon width={30} height={30} />
        </View>
        <View style={styles.topleft1}>
          <View style={styles.topleft}>
            <Text style={styles.toplefttext1}>안녕 나 응애</Text>
            {(type === 'top' || type === 'bottom') && (
              <View style={styles.tick}>
                <TickIcon width={7.6} height={6} color={'#fff'} />
              </View>
            )}
            <Text style={styles.toplefttext2}>1일전</Text>
          </View>
          {type === 'top' && (
            <View style={[styles.topleft, {marginTop: 4}]}>
              <Text style={styles.toplefttext3}>165cm</Text>
              <View style={styles.dot} />
              <Text style={styles.toplefttext3}>53kg</Text>
            </View>
          )}
        </View>
      </View>
      {type === 'top' && (
        <View style={styles.topright('#01B99F', 'center')}>
          <Text style={styles.toprighttext}>팔로우</Text>
        </View>
      )}
      {(type === 'bottom' || type === 'comment') && (
        <Pressable
          style={styles.topright('0,0,0,0', 'flex-start')}
          onPress={() => alert('under development')}>
          <MoreIcon width={12} height={4} color={'#AFB9CA'} />
        </Pressable>
      )}
    </View>
  );
};

export default UserInfo;
