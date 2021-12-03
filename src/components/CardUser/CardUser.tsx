import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {User} from '../../interfaces/appInterfaces';
import {colors} from '../../theme/colors';
import {styles} from './styles';

interface Props {
  user: User;
  onPress: () => void;
}

export const CardUser = ({user, onPress}: Props) => {
  const {name, email} = user;

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      <Image
        source={{
          uri: 'https://images.pexels.com/photos/347134/pexels-photo-347134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        }}
        resizeMode="cover"
        style={styles.cardImg}
      />
      <View>
        <Text style={styles.cardTitle}>{name}</Text>
        <Text style={styles.cardDetails}>{email}</Text>
        <View style={{height: 25, width: 70, backgroundColor: colors.primary, justifyContent: 'center', alignItems: 'center', borderRadius: 100}}>
          <Text
            style={{
              padding: 2,
              color: colors.white,
            }}>
            Edad: 35
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
