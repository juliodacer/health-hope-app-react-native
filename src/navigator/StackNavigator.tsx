import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/LoginScreen/LoginScreen';
import {RegisterScreen} from '../screens/RegisterScreen/RegisterScreen';
import {SplashScreen} from '../screens/SplashScreen/SplashScreen';
import {colors} from '../theme/colors';
import {AuthContext} from '../context/authContext';

import {HomeUserScreen} from '../screens/HomeScreen/HomeUserScreen';
import {HomeAdminScreen} from '../screens/HomeScreen/HomeAdminScreen';
import {HomeMedicalScreen} from '../screens/HomeScreen/HomeMedicalScreen';

import {LoadingScreen} from '../screens/LoadingScreen/LoadingScreen';
import {HabitsNavigator} from './HabitsNavigator';
import {AdminNavigator} from './AdminNavigator';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const {status, user} = useContext(AuthContext);

  // if (status === 'checking') return <LoadingScreen />;

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: colors.primaryLight,
        },
      }}>
      {status !== 'authenticated' ? (
        <>
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        </>
      ) : user?.role === 'ADMIN_ROLE' ? (
        <>
          <Stack.Screen name="HomeAdminScreen" component={HomeAdminScreen} />
          <Stack.Screen name="HabitsNavigator" component={HabitsNavigator} />
          <Stack.Screen name="AdminNavigator" component={AdminNavigator} />
        </>
      ) : user?.role === 'USER_ROLE' ? (
        <>
          <Stack.Screen name="HabitsNavigator" component={HabitsNavigator} />
          <Stack.Screen name="HomeUserScreen" component={HomeUserScreen} />
        </>
      ) : (
        <>
          {/* <Stack.Screen name="HabitsNavigator" component={HabitsNavigator} /> */}
          <Stack.Screen
            name="HomeMedicalScreen"
            component={HomeMedicalScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
