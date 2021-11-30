import React from 'react';
import {Text, View, Image} from 'react-native';
import {styles} from './styles';

interface Props {
    title: string;
    description: string;
}

const CardWrapper = ({title, description}: Props) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardImgWrapper}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/347134/pexels-photo-347134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          }}
          resizeMode="cover"
          style={styles.cardImg}
        />
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDetails}>
          {description}
        </Text>
      </View>
    </View>
  );
};

export default CardWrapper;
