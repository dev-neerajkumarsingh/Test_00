import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Pressable,
  Text,
  Modal,
} from 'react-native';
import {HeartIcon, CommentIcon, BookmarkIcon, MoreIcon} from '@icons';
import WebViewModal from './WebViewModal';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    height: height / 2,
    backgroundColor: '#EDEEF3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nativeButton: {
    width: 120,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#01B99F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nativeText: {
    fontFamily: 'NotoSans-Medium',
    fontSize: 12,
    lineHeight: 17,
    color: '#FFF',
  },
  bottomContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#F7F8FA',
  },
  leftBottomContainer: {
    marginLeft: 10,
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
  wvButton: {
    marginRight: 10,
    width: 95,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#01B99F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wvText: {
    fontFamily: 'NotoSans-Medium',
    fontSize: 12,
    lineHeight: 17,
    color: '#FFF',
  },
});

const WebViewContent = () => {
  const [states, setStates] = useState({
    like: false,
    bookmark: false,
    webViewModal: false,
    webviewData: '',
  });

  function onMessage(event) {
    setStates(prev => ({
      ...prev,
      webviewData: event.nativeEvent.data,
      webViewModal: false,
    }));
    alert(event.nativeEvent.data);
  }

  // function sendDataToWebView() {
  //   webviewRef.current.postMessage('Data from React Native App');
  // }

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Pressable
          style={styles.nativeButton}
          onPress={() => alert('under development')}>
          <Text style={styles.nativeText}>Native Alert</Text>
        </Pressable>
      </View>
      <View style={styles.bottomContainer}>
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
          <Pressable
            style={styles.leftbuttonContainer(2)}
            onPress={() =>
              setStates(prev => ({...prev, bookmark: !prev.bookmark}))
            }>
            <BookmarkIcon
              width={20}
              height={18}
              color={Boolean(states.bookmark) ? '#000' : '#AFB9CA'}
            />
          </Pressable>
          <Pressable
            style={styles.leftbuttonContainer(5)}
            onPress={() => alert('under development')}>
            <MoreIcon width={20} height={18} color={'#AFB9CA'} />
          </Pressable>
        </View>
        <Pressable
          style={styles.wvButton}
          onPress={() => setStates(prev => ({...prev, webViewModal: true}))}>
          <Text style={styles.wvText}>WV Alert</Text>
        </Pressable>
      </View>
      <Modal transparent statusBarTranslucent visible={states.webViewModal}>
        <WebViewModal onMessage={onMessage} />
      </Modal>
    </View>
  );
};

export default WebViewContent;
