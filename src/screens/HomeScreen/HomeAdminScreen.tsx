import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import Swiper from 'react-native-swiper';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from '../../theme/colors';

export const HomeAdminScreen = () => {
  return (
    <ScrollView style={styles.container}>
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

      {/* Categoria de opciones */}

      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <Entypo name="man" size={35} color={colors.blue} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <FontAwesome name="user-md" size={35} color={colors.blue} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <FontAwesome name="list-alt" size={35} color={colors.blue} />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
          <FontAwesome name="heart" size={35} color={colors.blue} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <FontAwesome name="calendar" size={35} color={colors.blue} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
          <View style={styles.categoryIcon}>
            <FontAwesome name="bar-chart-o" size={35} color={colors.blue} />
          </View>
        </TouchableOpacity>
      </View>




    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  sliderContainer: {
    height: 200,
    width: '95%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
  wrapper: {},
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

  //Botones de categoria

  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },

  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },

  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: colors.primaryLight,
    borderRadius: 50,
  },

  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: colors.primaryLight,
  },
});
