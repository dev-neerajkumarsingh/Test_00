import React, {useState, useRef, useCallback} from 'react';
import {StyleSheet, View, Animated, FlatList, Dimensions} from 'react-native';
import WebViewContent from './components/WebViewContent';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {marginTop: 16},
  sliderIndicatorContainer: {
    marginTop: -60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderIndicatorStyle: {
    marginHorizontal: 5,
    height: 6,
    width: 6,
    borderRadius: 3,
    backgroundColor: '#fff',
  },
});

const index = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const scrollX = new Animated.Value(0);
  const position = Animated.divide(scrollX, width);
  const slidesRef = useRef(null);
  const currentIndex = useRef(0);

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;

  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const current_Index = Math.round(contentOffsetX / width);
    currentIndex.current = current_Index;
    setCurrentSlideIndex(current_Index);
  };

  const renderItem = useCallback(({item}) => <WebViewContent />, []);
  const keyExtractor = useCallback((_, index) => index.toString(), []);

  return (
    <View style={styles.container}>
      <FlatList
        ref={slidesRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        data={[1, 2, 3, 4, 5]}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        viewabilityConfig={viewConfig}
      />
      <View style={styles.sliderIndicatorContainer}>
        {[1, 2, 3, 4, 5].map((_, ind) => {
          let opacity = position.interpolate({
            inputRange: [ind - 1, ind, ind + 1],
            outputRange: [0.4, 1, 0.4],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={ind}
              style={[styles.sliderIndicatorStyle, {opacity}]}
            />
          );
        })}
      </View>
    </View>
  );
};

export default index;
