import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { PlanScreen } from '../screens/PlanScreen/PlanScreen';
import { PlansScreen } from '../screens/PlansScreen.tsx/PlansScreen';
import { Habit } from '../interfaces/appInterfaces';

export type PlansStackParams = {
    PlansScreen: undefined
    PlanScreen: {  id?: string;
        name?: string;
        description?: string;
        img?: string;
        startDate?: Date;
        finishDate?: Date;
        habitsArray?: Habit[];
        status?: boolean;
        user?: string}
}

const Stack = createStackNavigator();

export const PlansNavigator = () => {
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
                name="PlansScreen"
                component={PlansScreen}
                options={{title: 'Planes Saludables'}}
            />
             <Stack.Screen
                name="PlanScreen"
                component={PlanScreen}
                options={{title: 'Detalle del Plan'}}
            />
        </Stack.Navigator>
    )
}