import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {styles} from './styles';
import {colors} from '../../theme/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface Props {
  nameIcon: string;
  title: string;
}

const IconCircleButon = ({nameIcon, title}: Props) => {
  return (
    <>
      <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
        <View style={styles.categoryIcon}>
          <FontAwesome name={nameIcon} size={35} color={colors.blue} />
        </View>
        <Text style={styles.categoryBtnTxt}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default IconCircleButon;
