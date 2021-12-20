import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import React, {useContext} from 'react';
import {View, Text, Image, TouchableOpacity, StatusBarIOS} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import {colors} from '../../theme/colors';
import {styles} from './styles';
import {AuthContext} from '../../context/authContext';
import avatars from '../../theme/avatars';

export const CustomDrawer = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  const {user, logOut} = useContext(AuthContext);

  const cerrar = () => {
    navigation.closeDrawer();
  };

  return (
    <>
      {user?.role === 'USER_ROLE' ? (
        <>
          <DrawerContentScrollView>
            <View style={{alignItems: 'center', marginTop: 20}}>
              <Image
                source={
                  user?.gender === 'FEMALE'
                    ? avatars.avatarFemaleParticipant
                    : avatars.avatarMaleParticipant
                }
                style={styles.avatar}
              />
              <Text style={styles.name}>{user?.name}</Text>
              <Text style={styles.description}>Participante</Text>
            </View>

            <View style={styles.menuContainer}>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('HomeUserScreen')}>
                <AntDesign
                  name="home"
                  size={30}
                  color={colors.primaryLight}
                  style={styles.icon}
                />
                <Text style={styles.menuText}>Inicio</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('ProfileNavigator')}>
                <AntDesign
                  name="user"
                  size={30}
                  color={colors.primaryLight}
                  style={styles.icon}
                />
                <Text style={styles.menuText}>Perfil</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('ParticipantsNavigator')}>
                <AntDesign
                  name="team"
                  size={30}
                  color={colors.primaryLight}
                  style={styles.icon}
                />
                <Text style={styles.menuText}>Participantes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('MedicsNavigator')}>
                <AntDesign
                  name="medicinebox"
                  size={30}
                  color={colors.primaryLight}
                  style={styles.icon}
                />
                <Text style={styles.menuText}>Staff Médico</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('PlansNavigator')}>
                <AntDesign
                  name="folder1"
                  size={30}
                  color={colors.primaryLight}
                  style={styles.icon}
                />
                <Text style={styles.menuText}>Planes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('CalendarNavigator')}>
                <AntDesign
                  name="calendar"
                  size={30}
                  color={colors.primaryLight}
                  style={styles.icon}
                />
                <Text style={styles.menuText}>Calendario</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('ReportNavigator')}>
                <AntDesign
                  name="barschart"
                  size={30}
                  color={colors.primaryLight}
                  style={styles.icon}
                />
                <Text style={styles.menuText}>Reportes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('ReportNavigator')}>
                <AntDesign
                  name="wechat"
                  size={30}
                  color={colors.primaryLight}
                  style={styles.icon}
                />
                <Text style={styles.menuText}>Chat</Text>
              </TouchableOpacity>
            </View>
          </DrawerContentScrollView>
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: '#ccc',
              paddingHorizontal: 30,
              paddingTop: 5,
              paddingBottom: 10,
            }}>
            <TouchableOpacity style={styles.menuButton} onPress={() => {logOut(); cerrar() }}>
              <Octicons
                name="sign-out"
                size={30}
                color={colors.primaryLight}
                style={styles.icon}
              />
              <Text style={styles.menuText}>Cerrar Sesión</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : user?.role === 'MEDICAL_ROLE' ? (
        <>
          <DrawerContentScrollView>
            <View style={{alignItems: 'center', marginTop: 20}}>
              <Image
                source={
                  user?.gender === 'FEMALE'
                    ? avatars.avatarFemaleMedic
                    : avatars.avatarMaleMedic
                }
                style={styles.avatar}
              />
              <Text style={styles.name}>{user?.name}</Text>
              {user?.occupation ? (
                <Text style={styles.description}>{user?.occupation}</Text>
              ) : (
                <Text style={styles.description}>Staff Médico</Text>
              )}
            </View>

            <View style={styles.menuContainer}>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('HomeMedicalScreen')}>
                <AntDesign
                  name="home"
                  size={30}
                  color={colors.primaryLight}
                  style={styles.icon}
                />
                <Text style={styles.menuText}>Inicio</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('ProfileNavigator')}>
                <AntDesign
                  name="user"
                  size={30}
                  color={colors.primaryLight}
                  style={styles.icon}
                />
                <Text style={styles.menuText}>Perfil</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('ParticipantsNavigator')}>
                <AntDesign
                  name="team"
                  size={30}
                  color={colors.primaryLight}
                  style={styles.icon}
                />
                <Text style={styles.menuText}>Participantes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('MedicsNavigator')}>
                <AntDesign
                  name="medicinebox"
                  size={30}
                  color={colors.primaryLight}
                  style={styles.icon}
                />
                <Text style={styles.menuText}>Staff Médico</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('PlansNavigator')}>
                <AntDesign
                  name="folder1"
                  size={30}
                  color={colors.primaryLight}
                  style={styles.icon}
                />
                <Text style={styles.menuText}>Planes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('HabitsNavigator')}>
                <AntDesign
                  name="heart"
                  size={30}
                  color={colors.primaryLight}
                  style={styles.icon}
                />
                <Text style={styles.menuText}>Hábitos</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('CalendarNavigator')}>
                <AntDesign
                  name="calendar"
                  size={30}
                  color={colors.primaryLight}
                  style={styles.icon}
                />
                <Text style={styles.menuText}>Calendario</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('CalendarNavigator')}>
                <AntDesign
                  name="barschart"
                  size={30}
                  color={colors.primaryLight}
                  style={styles.icon}
                />
                <Text style={styles.menuText}>Reportes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('HabitsNavigator')}>
                <AntDesign
                  name="wechat"
                  size={30}
                  color={colors.primaryLight}
                  style={styles.icon}
                />
                <Text style={styles.menuText}>Chat</Text>
              </TouchableOpacity>
            </View>
          </DrawerContentScrollView>
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: '#ccc',
              paddingHorizontal: 30,
              paddingTop: 5,
              paddingBottom: 10,
            }}>
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => {
                logOut();
                cerrar();
              }}>
              <Octicons
                name="sign-out"
                size={30}
                color={colors.primaryLight}
                style={styles.icon}
              />
              <Text style={styles.menuText}>Cerrar Sesión</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <DrawerContentScrollView>
            <View style={{alignItems: 'center', marginTop: 20}}>
              <Image source={avatars.avatarMaleMedic} style={styles.avatar} />
              <Text style={styles.name}>{user?.name}</Text>
              <Text style={styles.description}>Administrador</Text>
            </View>

            <View style={styles.menuContainer}>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('HomeAdminScreen')}>
                <AntDesign
                  name="home"
                  size={30}
                  color={colors.primaryLight}
                  style={styles.icon}
                />
                <Text style={styles.menuText}>Inicio</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('ProfileNavigator')}>
                <AntDesign
                  name="user"
                  size={30}
                  color={colors.primaryLight}
                  style={styles.icon}
                />
                <Text style={styles.menuText}>Perfil</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('ParticipantsNavigator')}>
                <AntDesign
                  name="team"
                  size={30}
                  color={colors.primaryLight}
                  style={styles.icon}
                />
                <Text style={styles.menuText}>Participantes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('MedicsNavigator')}>
                <AntDesign
                  name="medicinebox"
                  size={30}
                  color={colors.primaryLight}
                  style={styles.icon}
                />
                <Text style={styles.menuText}>Staff Médico</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('PlansNavigator')}>
                <AntDesign
                  name="folder1"
                  size={30}
                  color={colors.primaryLight}
                  style={styles.icon}
                />
                <Text style={styles.menuText}>Planes</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('HabitsNavigator')}>
                <AntDesign
                  name="heart"
                  size={30}
                  color={colors.primaryLight}
                  style={styles.icon}
                />
                <Text style={styles.menuText}>Hábitos</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('CalendarNavigation')}>
                <AntDesign
                  name="calendar"
                  size={30}
                  color={colors.primaryLight}
                  style={styles.icon}
                />
                <Text style={styles.menuText}>Calendario</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.menuButton}
                onPress={() => navigation.navigate('CalendarNavigation')}>
                <AntDesign
                  name="barschart"
                  size={30}
                  color={colors.primaryLight}
                  style={styles.icon}
                />
                <Text style={styles.menuText}>Reportes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.menuButton} onPress={() => {}}>
                <AntDesign
                  name="wechat"
                  size={30}
                  color={colors.primaryLight}
                  style={styles.icon}
                />
                <Text style={styles.menuText}>Chat</Text>
              </TouchableOpacity>
            </View>
          </DrawerContentScrollView>
          <View
            style={{
              borderTopWidth: 1,
              borderTopColor: '#ccc',
              paddingHorizontal: 30,
              paddingTop: 5,
              paddingBottom: 10,
            }}>
            <TouchableOpacity
              style={styles.menuButton}
              onPress={() => {
                logOut();
                cerrar();
              }}>
              <Octicons
                name="sign-out"
                size={30}
                color={colors.primaryLight}
                style={styles.icon}
              />
              <Text style={styles.menuText}>Cerrar Sesión</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </>
  );
};
