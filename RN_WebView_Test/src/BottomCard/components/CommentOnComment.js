import React, {useState} from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import UserInfo from '../../Card/components/UserInfo';
import CommonText from '../../Card/components/CommonText';
import {HeartIcon} from '@icons';

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    width: '85%',
    alignSelf: 'flex-end',
  },
  leftBottomContainer: {
    marginLeft: 53.4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  leftbuttonContainer: marginLeft => [
    {
      marginLeft,
      width: 40,
      height: 40,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  ],
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    marginLeft: 5,
    fontFamily: 'NotoSans-Regular',
    fontSize: 12,
    lineHeight: 17,
    color: '#919EB6',
  },
});

const CommentOnComment = () => {
  const [states, setStates] = useState({
    like: false,
  });

  return (
    <View style={styles.container}>
      <UserInfo type="comment" />
      <CommonText
        type={2}
        content={'오 대박! 라이브 리뷰 오늘 올라온대요? 챙겨봐야겠다'}
        moreStyle={{marginLeft: 43.4}}
      />
      <View style={styles.leftBottomContainer}>
        <View style={styles.rowCenter}>
          <Pressable
            style={styles.leftbuttonContainer(0)}
            onPress={() => setStates(prev => ({...prev, like: !prev.like}))}>
            <HeartIcon
              width={20}
              height={18}
              color={Boolean(states.like) ? 'red' : '#AFB9CA'}
            />
            <Text style={styles.count}>5</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CommentOnComment;
