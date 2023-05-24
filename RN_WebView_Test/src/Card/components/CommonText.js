import React from 'react';
import {StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  contenttext1: {
    marginTop: 18,
    fontFamily: 'NotoSans-SemiBold',
    fontSize: 14,
    lineHeight: 19,
  },
  contenttext2: {
    marginTop: 16,
    fontFamily: 'NotoSans-Medium',
    fontSize: 12,
    lineHeight: 17,
  },
  commonStyle: width => [{color: '#1D232B', width}],
});

const CommonText = ({
  type = 2,
  width = '100%',
  content = '',
  moreStyle = {},
}) => {
  return (
    <Text
      style={
        type === 1
          ? [styles.contenttext1, styles.commonStyle(width), moreStyle]
          : [styles.contenttext2, styles.commonStyle(width), moreStyle]
      }
      numberOfLines={5}>
      {content}
    </Text>
  );
};

export default CommonText;
