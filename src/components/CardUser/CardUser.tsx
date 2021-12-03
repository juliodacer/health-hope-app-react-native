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
  const {name, occupation, gender, age} = user;

  const avatarFemale = '../../assets/avatar-female.png';
  const avatarMale = '../../assets/avatar-male.png';

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      <Image
        source={
          gender === 'FEMALE' ? require(avatarFemale) : require(avatarMale)
        }
        resizeMode="cover"
        style={styles.cardImg}
      />
      <View>
        <Text style={styles.cardTitle}>{name}</Text>
        <Text style={styles.cardDetails}>Medico</Text>
        <View
          style={{
            height: 25,
            width: 70,
            backgroundColor: colors.primary,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
          }}>
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
