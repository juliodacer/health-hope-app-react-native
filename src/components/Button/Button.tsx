import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface ButtonProps {
  newStyle?: Object;
  onPress: () => void;
  title: string;
}

export const Button = ({title, onPress, newStyle}: ButtonProps) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      //onPress={() => navigation.navigate('RegisterScreen')}
      style={[styles.containerButton, newStyle]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
