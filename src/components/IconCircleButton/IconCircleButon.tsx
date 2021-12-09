import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {colors} from '../../theme/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any,any>{};

interface PropsButton {
  nameIcon: string;
  title: string;
  onPress: () => void ;
  customStyles?: Object;
  customIcon?: string;
}

const IconCircleButon = ({nameIcon, title, onPress, customStyles, customIcon}: PropsButton) => {
  return (
    <>
      <TouchableOpacity style={styles.categoryBtn} onPress={onPress}>
        <View style={[styles.categoryIcon, customStyles]}>
          <FontAwesome name={nameIcon} size={35} color={customIcon ? customIcon : colors.blue} />
        </View>
        <Text style={styles.categoryBtnTxt}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default IconCircleButon;
