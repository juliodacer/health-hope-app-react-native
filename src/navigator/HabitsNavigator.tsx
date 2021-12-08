import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { HabitsScreen } from '../screens/HabitsScreen/HabitsScreen';
import { HabitScreen } from '../screens/HabitScreen/HabitScreen';

export type HabitsStackParams = {
    HabitsScreen: undefined
    HabitScreen: { id?: string, name?: string, description?: string, img?: string}
}

const Stack = createStackNavigator();

export const HabitsNavigator = () => {
    return (
        <Stack.Navigator
            // screenOptions={{
            //    cardStyle:{
            //        backgroundColor: 'white'
            //    },
            //    headerStyle: {
            //        elevation: 0,
            //        shadowColor: 'transparent'
            //    }
            // }}
        >
            <Stack.Screen
                name="HabitsScreen"
                component={HabitsScreen}
                options={{title: 'Hábitos'}}
            />
             <Stack.Screen
                name="HabitScreen"
                component={HabitScreen}
            />
        </Stack.Navigator>
    )
}