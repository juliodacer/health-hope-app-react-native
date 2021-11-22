import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {colors} from '../../theme/colors';

interface ButtonGradientProps {
  title: string;
  onPress?: () => void;
}

export const ButtonGradient = ({title, onPress}: ButtonGradientProps) => {
  return (
    <TouchableOpacity
        onPress={onPress}
     //   onPress={() => {loginHandle( data.username, data.password )}}
      style={styles.containerButton}
     
    >
      <LinearGradient
        colors={[colors.primaryLight, colors.primary]}
        style={styles.containerButton}>
        <Text style={styles.text}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
