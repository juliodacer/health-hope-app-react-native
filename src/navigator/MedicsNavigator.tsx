import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { MedicsScreen } from '../screens/MedicsScreen/MedicsScreen';
import { MedicScreen } from '../screens/MedicScreen/MedicScreen';

export type MedicsStackParams = {
  MedicsScreen: undefined;
  MedicScreen: {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    role?: string;
    occupation?:string,
    gender?: string;
    age?: number;
    birthDate?: string;
    cell?: string;
    address?: string;
  };
};

const Stack = createStackNavigator();

export const MedicsNavigator = () => {
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

      {/* Medical Screens */}
      <Stack.Screen
        name="MedicsScreen"
        component={MedicsScreen}
        options={{title: 'Staff Médico'}}
      />
      <Stack.Screen name="MedicScreen" component={MedicScreen} />
    </Stack.Navigator>
  );
};
