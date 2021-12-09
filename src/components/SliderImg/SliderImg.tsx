import React, {useContext} from 'react';
import {View, Image, FlatList, Text} from 'react-native';
import Swiper from 'react-native-swiper';
import {AuthContext} from '../../context/authContext';
import {ImgComponent} from '../ImgComponent/ImgComponent';
import {styles} from './styles';

const userImg = {
  img1: 'https://images.pexels.com/photos/3124674/pexels-photo-3124674.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  img2: 'https://images.pexels.com/photos/3756042/pexels-photo-3756042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  img3: 'https://images.pexels.com/photos/1065030/pexels-photo-1065030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
};

const adminImg = {
  img1: 'https://images.pexels.com/photos/7432/pexels-photo.jpg?cs=srgb&dl=pexels-jeshootscom-7432.jpg&fm=jpg',
  img2: 'https://images.pexels.com/photos/179908/pexels-photo-179908.jpeg?cs=srgb&dl=pexels-the-th-179908.jpg&fm=jpg',
  img3: 'https://images.pexels.com/photos/163407/cyclists-trail-bike-clouds-163407.jpeg?cs=srgb&dl=pexels-pixabay-163407.jpg&fm=jpg',
};

const medicalImg = {
  img1: 'https://images.pexels.com/photos/6129105/pexels-photo-6129105.jpeg?cs=srgb&dl=pexels-rodnae-productions-6129105.jpg&fm=jpg',
  img2: 'https://images.pexels.com/photos/8844387/pexels-photo-8844387.jpeg?cs=srgb&dl=pexels-yaroslav-shuraev-8844387.jpg&fm=jpg',
  img3: 'https://images.pexels.com/photos/3912953/pexels-photo-3912953.jpeg?cs=srgb&dl=pexels-thisisengineering-3912953.jpg&fm=jpg',
};

export const SliderImg = () => {
  const {user} = useContext(AuthContext);

  return (
    <View style={styles.sliderContainer}>
      {user?.role === 'USER_ROLE' ? (
        <Swiper autoplay height={200}>
          <ImgComponent img={userImg.img1} />
          <ImgComponent img={userImg.img2} />
          <ImgComponent img={userImg.img3} />
        </Swiper>
      ) : user?.role === 'MEDICAL_ROLE' ? (
        <Swiper autoplay height={200}>
          <ImgComponent img={medicalImg.img1} />
          <ImgComponent img={medicalImg.img2} />
          <ImgComponent img={medicalImg.img3} />
        </Swiper>
      ) : (
        <Swiper autoplay height={200}>
          <ImgComponent img={adminImg.img1} />
          <ImgComponent img={adminImg.img2} />
          <ImgComponent img={adminImg.img3} />
        </Swiper>
      )}
    </View>
  );
};
