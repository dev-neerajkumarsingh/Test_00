import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginRight: 8,
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#CED3DE',
    backgroundColor: '#F7F8FA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'NotoSans-Medium',
    fontSize: 12,
    lineHeight: 17,
    color: '#5A6B87',
  },
});

const Tags = ({content = ''}) => {
  return (
    <Pressable style={styles.container} onPress={() => alert(content)}>
      <Text style={styles.text}>{content}</Text>
    </Pressable>
  );
};

export default Tags;
