import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import IconCircleButon from '../../components/IconCircleButton/IconCircleButon';
import {SliderImg} from '../../components/SliderImg/SliderImg';
import {colors} from '../../theme/colors';
import {IconDrawer} from '../../components/IconDrawer/IconDrawer';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {styles} from './styles'

interface Props extends DrawerScreenProps<any, any> {}

export const HomeUserScreen = ({navigation}: Props) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={{...styles.title, fontSize: 22}}>Bienvenido</Text>
      <View style={{position: 'absolute', right: 10, top: 5}}>
        <IconDrawer onPress={() => navigation.toggleDrawer()} />
      </View>

      {/* Slider de imágenes */}
      <SliderImg />

      {/* Categoria de opciones */}
      <View style={styles.categoryContainer}>
        <IconCircleButon
          nameIcon="users"
          title="Participantes"
          customStyles={{
            backgroundColor: colors.white,
            borderWidth: 3,
            borderColor: colors.primaryLight,
          }}
          customIcon={colors.primaryLight}
          onPress={() => navigation.navigate('ParticipantsNavigator')}
        />
        <IconCircleButon
          nameIcon="user-md"
          title="Staff Médico"
          customStyles={{
            backgroundColor: colors.white,
            borderWidth: 3,
            borderColor: colors.primaryLight,
          }}
          customIcon={colors.primaryLight}
          onPress={() => navigation.navigate('MedicsNavigator')}
        />
        <IconCircleButon
          nameIcon="list-alt"
          title="Planes"
          customStyles={{
            backgroundColor: colors.white,
            borderWidth: 3,
            borderColor: colors.primaryLight,
          }}
          customIcon={colors.primaryLight}
          onPress={() => navigation.navigate('PlansNavigator')}
        />
      </View>

      <View style={styles.categoryContainer}>
        <IconCircleButon
          nameIcon="heart"
          title="Hábitos"
          customStyles={{
            backgroundColor: colors.white,
            borderWidth: 3,
            borderColor: colors.primaryLight,
          }}
          customIcon={colors.primaryLight}
          onPress={() => navigation.navigate('HabitsNavigator')}
        />
        <IconCircleButon
          nameIcon="calendar"
          title="Calendario"
          customStyles={{
            backgroundColor: colors.white,
            borderWidth: 3,
            borderColor: colors.primaryLight,
          }}
          customIcon={colors.primaryLight}
          onPress={() => navigation.navigate('CalendarNavigator')}
        />
        <IconCircleButon
          nameIcon="bar-chart-o"
          title="Reportes"
          customStyles={{
            backgroundColor: colors.white,
            borderWidth: 3,
            borderColor: colors.primaryLight,
          }}
          customIcon={colors.primaryLight}
          onPress={() => navigation.navigate('HabitsNavigator')}
        />
      </View>

      {/* Planes */}
      <Text style={styles.title}>Planes de estilo de vida</Text>
    </ScrollView>
  );
};

