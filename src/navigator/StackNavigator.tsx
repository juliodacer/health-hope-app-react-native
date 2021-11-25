import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/LoginScreen/LoginScreen';
import {RegisterScreen} from '../screens/RegisterScreen/RegisterScreen';
import {SplashScreen} from '../screens/SplashScreen/SplashScreen';
import {colors} from '../theme/colors';
import {AuthContext} from '../context/authContext';
import {HomeScreen} from '../screens/HomeScreen/Home';
import {LoadingScreen} from '../screens/LoadingScreen/LoadingScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  const {status} = useContext(AuthContext);

  if (status === 'checking') return <LoadingScreen />;

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
      ) : (
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      )}
    </Stack.Navigator>
  );
};
