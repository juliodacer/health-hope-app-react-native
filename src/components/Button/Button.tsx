import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import { Background } from '../Background/Background';

interface ButtonProps {
  color?: string;
  onPress: () => void;
  title: string;
}

export const Button = ({title, onPress, color}: ButtonProps) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      //onPress={() => navigation.navigate('RegisterScreen')}
      style={[styles.containerButton, {backgroundColor: color}]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
