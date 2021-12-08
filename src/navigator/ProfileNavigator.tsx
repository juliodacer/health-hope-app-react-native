import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileScreen } from '../screens/ProfileScreen/ProfileScreen';
import { ProfileEditScreen } from '../screens/ProfileEditScreen/ProfileEditScreen';

export type ProfileStackParams = {
    ProfileScreen: undefined
    ProfileEditScreen: {  
        uid?: string;
        name?: string;
        email?: string;
        password?: string;
        gender?: string,
        age?: number;
        weight?: number;
        birthDate?: string;
        cell?: string;
        address?: string;
        occupation?: string;
        role?: string;
        status?: boolean;
        google?: boolean;
        img?: string;
    }
}

const Stack = createStackNavigator();

export const ProfileNavigator = () => {
    return (
        <Stack.Navigator
        >
            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{title: 'Perfil'}}
            />
             <Stack.Screen
                name="ProfileEditScreen"
                component={ProfileEditScreen}
            />
        </Stack.Navigator>
    )
}