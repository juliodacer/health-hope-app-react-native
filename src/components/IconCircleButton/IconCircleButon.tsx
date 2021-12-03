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
}

const IconCircleButon = ({nameIcon, title, onPress}: PropsButton) => {
  return (
    <>
      <TouchableOpacity style={styles.categoryBtn} onPress={onPress}>
        <View style={styles.categoryIcon}>
          <FontAwesome name={nameIcon} size={35} color={colors.blue} />
        </View>
        <Text style={styles.categoryBtnTxt}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

export default IconCircleButon;
