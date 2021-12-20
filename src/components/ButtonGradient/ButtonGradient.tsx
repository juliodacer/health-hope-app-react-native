import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {colors} from '../../theme/colors';

interface ButtonGradientProps {
  title: string;
  onPress?: () => void;
  newStyle?: Object;
}

export const ButtonGradient = ({
  title,
  onPress,
  newStyle,
}: ButtonGradientProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      //   onPress={() => {loginHandle( data.username, data.password )}}
      style={[styles.containerButton, newStyle]}>
      <LinearGradient
        colors={[colors.primaryLight, colors.primary]}
        style={styles.containerButton}>
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
