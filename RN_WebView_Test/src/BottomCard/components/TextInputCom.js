import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Keyboard,
  Platform,
  Animated,
  Easing,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {PlaceholderIcon} from '@icons';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    height: 50,
    borderTopWidth: 1,
    borderTopColor: '#F7F8FA',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textinputContainer: {
    marginLeft: 10,
    flex: 1,
    fontSize: 14,
    lineHeight: 19,
    color: '#000',
    fontFamily: 'NotoSans-Regular',
  },
  sendButton: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  sendText: {
    fontSize: 12,
    lineHeight: 17,
    color: '#919EB6',
    fontFamily: 'NotoSans-Regular',
  },
});

const TextInputCom = () => {
  const [states, setStates] = useState({inputVal: ''});

  return (
    <View style={styles.container}>
      <PlaceholderIcon
        width={20}
        height={20}
        color={'#919EB6'}
        style={{marginLeft: 10}}
      />
      <TextInput
        value={states.inputVal}
        autoCapitalize={false}
        autoComplete="off"
        autoCorrect={false}
        style={styles.textinputContainer}
        onChangeText={val => setStates(prev => ({...prev, inputVal: val}))}
        onSubmitEditing={() => Keyboard.dismiss()}
        placeholder="댓글을 남겨주세요."
        placeholderTextColor={'#AFB9CA'}
        maxLength={100}
        contextMenuHidden={true}
        autoFocus={false}
      />
      <Pressable
        style={styles.sendButton}
        onPress={() => {
          setStates(prev => ({...prev, inputVal: ''}));
          Keyboard.dismiss();
        }}>
        <Text style={styles.sendText}>등록</Text>
      </Pressable>
    </View>
  );
};

export default TextInputCom;
