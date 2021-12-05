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
  const {name, occupation, gender, age, role} = user;

  const avatarFemaleParticipant = '../../assets/avatar-female-participant.png';
  const avatarMaleParticipant = '../../assets/avatar-male-participant.png';
  const avatarMaleMedic = '../../assets/avatar-male-medic.png';
  const avatarFemaleMedic = '../../assets/avatar-female-medic.png';

  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8} onPress={onPress}>
      <Image
        source={
          role === 'USER_ROLE' && gender === 'FEMALE'
            ? require(avatarFemaleParticipant)
            : role === 'USER_ROLE' && gender === 'MALE'
            ? require(avatarMaleParticipant)
            : role === 'MEDICAL_ROLE' && gender === 'FEMALE'
            ? require(avatarFemaleMedic)
            : require(avatarMaleMedic)
        }
        resizeMode="cover"
        style={styles.cardImg}
      />
      <View>
        <Text style={styles.cardName}>{name}</Text>
        {age && <Text style={styles.cardDetails}>Edad: {age}</Text>}
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
    </TouchableOpacity>
  );
};
