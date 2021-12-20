import React from 'react';
import {View, Text} from 'react-native';
import {Title} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './styles';

interface Props {
  content: string | number;
  description: string;
  iconName: string;
  newStyle?: Object;
}

export const DateUserCard = ({
  content,
  iconName,
  newStyle,
  description,
}: Props) => {
  return (
    <View
      style={styles.container}>
      <View
        style={styles.containerInfo}>
        <MaterialIcons name={iconName} size={50} />
        <Text style={[styles.contentText, newStyle]}>{content}</Text>
      </View>
      <Title style={{fontSize: 14}}>{description}</Title>
    </View>
  );
};
