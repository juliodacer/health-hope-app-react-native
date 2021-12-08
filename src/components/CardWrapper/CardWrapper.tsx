import React from 'react';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Plan} from '../../interfaces/appInterfaces';
import {styles} from './styles';

interface Props {
  plan: Plan;
  onPress: () => void;
}

const CardWrapper = ({plan, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.cardImgWrapper}>
        <Image
          // source={{
          //   uri: 'https://images.pexels.com/photos/347134/pexels-photo-347134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          // }}
          source={{uri: plan?.img}}
          resizeMode="cover"
          style={styles.cardImg}
        />
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{plan?.name}</Text>
        <Text style={styles.cardDetails}>{plan?.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CardWrapper;
