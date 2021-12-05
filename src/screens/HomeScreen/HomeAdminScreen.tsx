import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import CardWrapper from '../../components/CardWrapper/CardWrapper';
import IconCircleButon from '../../components/IconCircleButton/IconCircleButon';
import {SliderImg} from '../../components/SliderImg/SliderImg';
import {colors} from '../../theme/colors';
import { useNavigation } from '@react-navigation/core';

export const HomeAdminScreen = () => {

  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Slider de imágenes */}
      <SliderImg />

      {/* Categoria de opciones */}
      <View style={styles.categoryContainer}>
        <IconCircleButon nameIcon="users" title="Participantes" onPress={() => navigation.navigate('ParticipantsNavigator')}/>
         <IconCircleButon nameIcon="user-md" title="Staff Médico" onPress={() => navigation.navigate('MedicsNavigator')}/>
        <IconCircleButon nameIcon="list-alt" title="Planes" onPress={() => navigation.navigate('HabitsNavigator')}/>
      </View>

      <View style={styles.categoryContainer}>
        <IconCircleButon nameIcon="heart" title="Hábitos" onPress={() => navigation.navigate('HabitsNavigator')} />
        <IconCircleButon nameIcon="calendar" title="Calendario" onPress={() => navigation.navigate('HabitsNavigator')}/>
        <IconCircleButon nameIcon="bar-chart-o" title="Reportes" onPress={() => navigation.navigate('HabitsNavigator')}/>
      </View>

      {/* Planes */}
      <Text style={styles.title}>Planes de estilo de vida</Text>
      <CardWrapper
        title="Plan de estilo de vida saludable 2021"
        description="Breve description del estilo de vida"
      />
      <CardWrapper
        title="Plan de estilo de vida saludable 2020"
        description="Breve description del estilo de vida"
      />
      <CardWrapper
        title="Plan de estilo de vida saludable 2019"
        description="Breve description del estilo de vida"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },

  title: {
    marginTop: 10,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
