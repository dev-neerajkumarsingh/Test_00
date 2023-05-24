import React, {useState} from 'react';
import {StyleSheet, Dimensions, Text, View, Pressable} from 'react-native';
import {HeartIcon, CommentIcon} from '@icons';
import UserInfo from '../Card/components/UserInfo';
import CommonText from '../Card/components/CommonText';
import CommentOnComment from './components/CommentOnComment';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginTop: 66,
    width: width / 1.05,
    alignSelf: 'center',
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

const BottomCard = () => {
  const [states, setStates] = useState({
    like: false,
  });

  return (
    <View style={styles.container}>
      <UserInfo type="bottom" />
      <CommonText
        type={2}
        width={width / 1.25}
        content={
          '어머 제가 있던 테이블이 제일 반응이 좋았나보네요🤭 우짤래미님도 아시겠지만 저도 일반인 몸매 그 이상도 이하도 아니잖아요?! 그런 제가 기꺼이 도전해봤는데 생각보다 괜찮았어요! 오늘 중으로 라이브 리뷰 올라온다고 하니 꼭 봐주세용~!'
        }
        moreStyle={{marginLeft: 53.4}}
      />
      <View style={styles.leftBottomContainer}>
        <View style={styles.rowCenter}>
          <Pressable
            style={styles.leftbuttonContainer(2)}
            onPress={() => setStates(prev => ({...prev, like: !prev.like}))}>
            <HeartIcon
              width={20}
              height={18}
              color={Boolean(states.like) ? 'red' : '#AFB9CA'}
            />
            <Text style={styles.count}>5</Text>
          </Pressable>
        </View>
        <Pressable
          style={styles.leftbuttonContainer(2)}
          onPress={() => alert('under development')}>
          <CommentIcon width={20} height={18} color={'#AFB9CA'} />
          <Text style={styles.count}>5</Text>
        </Pressable>
      </View>
      <CommentOnComment />
    </View>
  );
};

export default BottomCard;
