import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export const Button = ({title, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      //onPress={() => navigation.navigate('RegisterScreen')}
      style={styles.containerButton}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};
