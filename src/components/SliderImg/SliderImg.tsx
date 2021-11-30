import React from 'react';
import {View, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {styles} from './styles';

export const SliderImg = () => {
  return (
    <View style={styles.sliderContainer}>
      <Swiper autoplay height={200}>
        <View style={styles.slide}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/3124674/pexels-photo-3124674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            }}
            style={styles.sliderImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/3756042/pexels-photo-3756042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            }}
            style={styles.sliderImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/1065030/pexels-photo-1065030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            }}
            style={styles.sliderImage}
            resizeMode="cover"
          />
        </View>
      </Swiper>
    </View>
  );
};
