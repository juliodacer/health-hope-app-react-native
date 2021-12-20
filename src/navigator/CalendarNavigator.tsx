import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { CalendarScreen } from '../screens/CalendarScreen/CalendarScreen';

// export type PlansStackParams = {
//     PlansScreen: undefined
//     PlanScreen: {  id?: string;
//         name?: string;
//         description?: string;
//         img?: string;
//         startDate?: Date;
//         finishDate?: Date;
//         habitsArray?: Habit[];
//         status?: boolean;
//         user?: string}
// }

const Stack = createStackNavigator();

export const CalendarNavigator = () => {
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
                name="CalendarScreen"
                component={CalendarScreen}
                options={{title: 'Calendario del Plan Saludable'}}
            />
             {/* <Stack.Screen
                name="PlanScreen"
                component={PlanScreen}
                options={{title: 'Detalle del Plan'}}
            /> */}
        </Stack.Navigator>
    )
}