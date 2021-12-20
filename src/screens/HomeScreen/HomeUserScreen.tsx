import React, { useContext } from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import IconCircleButon from '../../components/IconCircleButton/IconCircleButon';
import {SliderImg} from '../../components/SliderImg/SliderImg';
import {colors} from '../../theme/colors';
import {IconDrawer} from '../../components/IconDrawer/IconDrawer';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {styles} from './styles'
import { PlansContext } from '../../context/plansContext';
import CardWrapper from '../../components/CardWrapper/CardWrapper';

interface Props extends DrawerScreenProps<any, any> {}

export const HomeUserScreen = ({navigation}: Props) => {

  const {plans, loadPlans} = useContext(PlansContext);

  return (
    <View style={styles.container}>
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

      <View style={{flex: 1, marginTop: 15, marginHorizontal: 5, backgroundColor: '#F5F5F5'}}>
      <FlatList
        data={plans}
        keyExtractor={p => p._id}
        contentContainerStyle={{padding: 15}}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <CardWrapper
              plan={item}
              onPress={() =>
                navigation.navigate('PlanScreen', {
                  id: item._id,
                  name: item.name,
                  description: item.description,
                  img: item.img,
                  startDate: item.startDate,
                  finishDate: item.finishDate,
                  status: item.status,
                  user: item.user,
                })
              }
            />
          );
        }}
      />
    </View>

    </View>
  );
};

