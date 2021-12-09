import React, {useContext, useEffect} from 'react';
import {View} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Share from 'react-native-share';

//import files from '../assets/filesBase64';
import {AuthContext} from '../../context/authContext';
import {styles} from './styles';
import avatars from '../../theme/avatars';
import {colors} from '../../theme/colors';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {ProfileStackParams} from '../../navigator/ProfileNavigator';
import {IconDrawer} from '../../components/IconDrawer/IconDrawer';

interface Props
  extends DrawerScreenProps<ProfileStackParams, 'ProfileScreen'> {}

export const ProfileScreen = ({navigation}: Props) => {
  const {user} = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconDrawer onPress={() => navigation.toggleDrawer()} />
      ),
    });
  }, []);

  // const myCustomShare = async () => {
  //   const shareOptions = {
  //     message:
  //       "Order your next meal from FoodFinder App. I've already ordered more than 10 meals on it.",
  //     //url: files.appLogo,
  //     // urls: [files.image1, files.image2]
  //   };

  //   try {
  //     const ShareResponse = await Share.open(shareOptions);
  //     console.log(JSON.stringify(ShareResponse));
  //   } catch (error) {
  //     console.log('Error => ', error);
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
          <Avatar.Image
            style={{backgroundColor: 'transparent'}}
            source={
              user?.role === 'USER_ROLE'
                ? user?.gender === 'FEMALE'
                  ? avatars.avatarFemaleParticipant
                  : avatars.avatarMaleParticipant
                : user?.role === 'MEDICAL_ROLE'
                ? user?.gender === 'FEMALE'
                  ? avatars.avatarFemaleMedic
                  : avatars.avatarMaleMedic
                : avatars.avatarMaleMedic
            }
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title
              style={[
                styles.title,
                {
                  marginTop: 15,
                  marginBottom: 5,
                },
              ]}>
              {user?.name}
            </Title>
            {user?.role === 'USER_ROLE' ? (
              user?.occupation ? (
                <Caption style={styles.caption}>{user?.occupation}</Caption>
              ) : (
                <Caption style={styles.caption}>Participante</Caption>
              )
            ) : user?.role === 'MEDICAL_ROLE' ? (
              user?.occupation ? (
                <Caption style={styles.caption}>{user?.occupation}</Caption>
              ) : (
                <Caption style={styles.caption}>Staff Médico</Caption>
              )
            ) : (
              <Caption style={styles.caption}>Administrador</Caption>
            )}
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Entypo name="location-pin" color={colors.primary} size={20} />
          {user?.address ? (
            <Text style={{color: colors.gray, marginLeft: 20}}>
              {user?.address}
            </Text>
          ) : (
            <Text style={{color: colors.gray, marginLeft: 20}}>
              Aún no indició su dirección
            </Text>
          )}
        </View>
        <View style={styles.row}>
          <AntDesign name="phone" color={colors.primary} size={20} />
          {user?.cell ? (
            <Text style={{color: colors.gray, marginLeft: 20}}>
              {user?.cell}
            </Text>
          ) : (
            <Text style={{color: colors.gray, marginLeft: 20}}>
              Aún no indició su número de celular
            </Text>
          )}
        </View>
        <View style={styles.row}>
          <AntDesign name="mail" color={colors.primary} size={20} />
          {user?.email ? (
            <Text style={{color: colors.gray, marginLeft: 20}}>
              {user?.email}
            </Text>
          ) : (
            <Text style={{color: colors.gray, marginLeft: 20}}>
              Aún no indició su número de correo electrónico
            </Text>
          )}
        </View>
      </View>

      {user?.role === 'USER_ROLE' && (
        <View style={styles.infoBoxWrapper}>
          <View
            style={[
              styles.infoBox,
              {
                borderRightColor: '#dddddd',
                borderRightWidth: 1,
              },
            ]}>
            {user?.age ? (
              <Title>{user?.age}</Title>
            ) : (
              <Title style={styles.date}>No indicó</Title>
            )}
            <Caption style={styles.caption}>Edad</Caption>
          </View>
          <View style={styles.infoBox}>
            {/* Peso */}
            {user?.weight ? (
              <Title style={styles.date}>{user?.weight}</Title>
            ) : (
              <Title>No indicó</Title>
            )}
            <Caption style={styles.caption}>Peso</Caption>
          </View>
        </View>
      )}

      <View style={styles.menuWrapper}>
        {user?.role === 'USER_ROLE' && (
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <FontAwesome5
                name="user-friends"
                color={colors.primary}
                size={25}
              />
              <Text style={styles.menuItemText}>Compañero de cambio</Text>
            </View>
          </TouchableRipple>
        )}
        {user?.role === 'USER_ROLE' && (
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <AntDesign name="copy1" color={colors.primary} size={25} />
              <Text style={styles.menuItemText}>Exámenes</Text>
            </View>
          </TouchableRipple>
        )}

        {user?.role === 'USER_ROLE' && (
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <AntDesign name="areachart" color={colors.primary} size={25} />
              <Text style={styles.menuItemText}>Reportes</Text>
            </View>
          </TouchableRipple>
        )}
        <TouchableRipple
          onPress={() => navigation.navigate('ProfileEditScreen', {})}>
          <View style={styles.menuItem}>
            <AntDesign name="setting" color={colors.primary} size={25} />
            <Text style={styles.menuItemText}>Actualizar datos</Text>
          </View>
        </TouchableRipple>
      </View>
    </View>
  );
};
