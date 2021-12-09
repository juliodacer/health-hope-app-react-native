import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {User} from '../../interfaces/appInterfaces';
import {colors} from '../../theme/colors';
import {styles} from './styles';
import avatars from '../../theme/avatars';

interface Props {
  user: User;
  add?: Object;
  text?: string;
  onPress: () => void;
}

export const CardUser = ({text, add, user, onPress}: Props) => {
  const {name, occupation, gender, age, role} = user;

  return (
    <>
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={onPress}>
        <Image
          source={
            role === 'USER_ROLE' && gender === 'FEMALE'
              ? avatars.avatarFemaleParticipant
              : role === 'USER_ROLE' && gender === 'MALE'
              ? avatars.avatarMaleParticipant
              : role === 'MEDICAL_ROLE' && gender === 'FEMALE'
              ? avatars.avatarFemaleMedic
              : avatars.avatarMaleMedic
          }
          resizeMode="cover"
          style={styles.cardImg}
        />
        <View>
          <Text style={styles.cardName}>{name}</Text>
          {age && <Text style={styles.cardDetails}>Edad: {age} años</Text>}
          {occupation && (
            <Text
              style={{
                ...styles.cardDetails,
                fontWeight: '400',
                color: colors.primary,
              }}>
              {occupation}
            </Text>
          )}
        </View>
        <View style= {add}>
          <Text style={{color: colors.black}}>{text}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};
