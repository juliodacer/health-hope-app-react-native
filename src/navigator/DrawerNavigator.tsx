import React, {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ProfileScreen} from '../screens/ProfileScreen/ProfileScreen';
import {AuthContext} from '../context/authContext';
import {HomeAdminScreen} from '../screens/HomeScreen/HomeAdminScreen';
import {HomeUserScreen} from '../screens/HomeScreen/HomeUserScreen';
import {HomeMedicalScreen} from '../screens/HomeScreen/HomeMedicalScreen';
import {SplashScreen} from '../screens/SplashScreen/SplashScreen';
import {LoginScreen} from '../screens/LoginScreen/LoginScreen';
import {RegisterScreen} from '../screens/RegisterScreen/RegisterScreen';
import {ParticipantsNavigator} from './ParticipantsNavigator';
import {MedicsNavigator} from './MedicsNavigator';
import {HabitsNavigator} from './HabitsNavigator';
import {CustomDrawer} from '../components/CustomDrawer/CustomDrawer';
import {PlansNavigator} from './PlansNavigator';
import { ProfileNavigator } from './ProfileNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const {status, user} = useContext(AuthContext);

  return (
    <Drawer.Navigator
      // drawerType="slide"
      drawerContent={props => <CustomDrawer {...props} />}>
      {status !== 'authenticated' ? (
        <>
          <Drawer.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{gestureEnabled: false}}
          />
          <Drawer.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{gestureEnabled: false}}
          />
          <Drawer.Screen
            name="RegisterScreen"
            component={RegisterScreen}
            options={{gestureEnabled: false}}
          />
        </>
      ) : user?.role === 'ADMIN_ROLE' ? (
        <>
          <Drawer.Screen
            name="HomeAdminScreen"
            options={{title: 'Inicio'}}
            component={HomeAdminScreen}
          />
          <Drawer.Screen
            name="ProfileNavigator"
            options={{title: 'Perfil'}}
            component={ProfileNavigator}
          />
          <Drawer.Screen
            name="ParticipantsNavigator"
            options={{title: 'Participantes'}}
            component={ParticipantsNavigator}
          />
          <Drawer.Screen
            name="MedicsNavigator"
            options={{title: 'Staff Médico'}}
            component={MedicsNavigator}
          />
          <Drawer.Screen
            name="PlansNavigator"
            options={{title: 'Planes Saludables'}}
            component={PlansNavigator}
          />

          <Drawer.Screen
            name="HabitsNavigator"
            options={{title: 'Hábitos'}}
            component={HabitsNavigator}
          />
        </>
      ) : user?.role === 'USER_ROLE' ? (
        <>
          <Drawer.Screen name="HabitsNavigator" component={HabitsNavigator} />
          <Drawer.Screen name="HomeUserScreen" component={HomeUserScreen} />
          <Drawer.Screen
            name="ProfileNavigator"
            options={{title: 'Perfil'}}
            component={ProfileNavigator}
          />
          <Drawer.Screen
            name="ParticipantsNavigator"
            options={{title: 'Participantes'}}
            component={ParticipantsNavigator}
          />
          <Drawer.Screen
            name="MedicsNavigator"
            options={{title: 'Staff Médico'}}
            component={MedicsNavigator}
          />
          <Drawer.Screen
            name="PlansNavigator"
            options={{title: 'Planes Saludables'}}
            component={PlansNavigator}
          />
        </>
      ) : (
        <>
          {/* <Stack.Screen name="HabitsNavigator" component={HabitsNavigator} /> */}
          <Drawer.Screen
            name="HomeMedicalScreen"
            component={HomeMedicalScreen}
          />
           <Drawer.Screen
            name="ProfileNavigator"
            options={{title: 'Perfil'}}
            component={ProfileNavigator}
          />
          <Drawer.Screen
            name="ParticipantsNavigator"
            options={{title: 'Participantes'}}
            component={ParticipantsNavigator}
          />
          <Drawer.Screen
            name="MedicsNavigator"
            options={{title: 'Staff Médico'}}
            component={MedicsNavigator}
          />
          <Drawer.Screen
            name="PlansNavigator"
            options={{title: 'Planes Saludables'}}
            component={PlansNavigator}
          />
          <Drawer.Screen
            name="HabitsNavigator"
            options={{title: 'Hábitos'}}
            component={HabitsNavigator}
          />
        </>
      )}
    </Drawer.Navigator>
  );
};
