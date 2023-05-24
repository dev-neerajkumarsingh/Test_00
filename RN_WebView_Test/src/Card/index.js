import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import UserInfo from './components/UserInfo';
import CommonText from './components/CommonText';
import Tags from './components/Tags';

const {width} = Dimensions.get('window');

const tagsContent = [
  {id: 1, content: '#2023'},
  {id: 2, content: '#TODAYISMONDAY'},
  {id: 3, content: '#TOP'},
  {id: 4, content: '#POPS!'},
  {id: 5, content: '#WOW'},
  {id: 5, content: '#ROW'},
];

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    width: width / 1.05,
    alignSelf: 'center',
  },
  bottom: {
    marginTop: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

const Card = () => {
  return (
    <View style={styles.container}>
      <UserInfo />
      <Text style={styles.contenttext1}></Text>
      <CommonText
        type={1}
        content={'지난 월요일에 했던 이벤트 중 가장 괜찮은 상품 뭐야?'}
      />
      <CommonText
        content={
          '지난 월요일에 2023년 S/S 트렌드 알아보기 이벤트 참석했던 팝들아~ 혹시 어떤 상품이 제일 괜찮았어?'
        }
      />
      <CommonText
        content={
          '후기 올라오는거 보면 로우라이즈? 그게 제일 반응 좋고 그 테이블이 제일 재밌었다던데 맞아???'
        }
      />
      <CommonText
        content={
          '올해 로우라이즈가 트렌드라길래 나도 도전해보고 싶은데 말라깽이가 아닌 사람들도 잘 어울릴지 너무너무 궁금해ㅜㅜ로우라이즈 테이블에 있었던 팝들 있으면 어땠는지 후기 좀 공유해주라~~!'
        }
      />
      <View style={styles.bottom}>
        {tagsContent.map((item, index) => {
          return <Tags key={index.toString()} content={item.content} />;
        })}
      </View>
    </View>
  );
};

export default Card;
