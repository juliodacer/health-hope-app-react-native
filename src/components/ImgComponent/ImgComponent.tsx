import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface Props {
  img: string;
}

export const ImgComponent = ({img}: Props) => {
  return (
    <>
      <View style={styles.slide}>
        <Image
          source={{
            uri: img
          }}
          style={styles.sliderImage}
          resizeMode="cover"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
});
