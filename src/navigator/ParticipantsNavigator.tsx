import React, { useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ParticipantsScreen} from '../screens/ParticipantsScreen/ParticipantsScreen';
import {ParticipantScreen} from '../screens/ParticipantScreen/ParticipantScreen';

export type ParticipantsStackParams = {
  ParticipantsScreen: undefined;
  ParticipantScreen: {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    role?: string;
    gender?: string;
    age?: number;
    birthDate?: string;
    cell?: string;
    address?: string;
  };
};

const Stack = createStackNavigator();

export const ParticipantsNavigator = () => {


  return (
    <Stack.Navigator
      // screenOptions={{
      //   cardStyle: {
      //     backgroundColor: 'white',
      //   },
      //   headerStyle: {
      //     elevation: 0,
      //     shadowColor: 'transparent',
      //   },
      // }}
      >
      {/* Participants Screens */}
      <Stack.Screen
        name="ParticipantsScreen"
        component={ParticipantsScreen}
        options={{title: 'Participantes'}}
      />
      <Stack.Screen name="ParticipantScreen" component={ParticipantScreen} />
     
    </Stack.Navigator>
  );
};
