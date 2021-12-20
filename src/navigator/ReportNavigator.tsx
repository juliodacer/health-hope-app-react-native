import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { ReportScreen } from '../screens/ReportScreen/ReportScreen';

export type ReportStackParams = {
    ReportScreen: undefined
    // ProfileEditScreen: {  
    //     uid?: string;
    //     name?: string;
    //     email?: string;
    //     password?: string;
    //     gender?: string,
    //     age?: number;
    //     weight?: number;
    //     height?: number;
    //     birthDate?: string;
    //     cell?: string;
    //     address?: string;
    //     occupation?: string;
    //     role?: string;
    //     status?: boolean;
    //     google?: boolean;
    //     img?: string;
    // }
}

const Stack = createStackNavigator();

export const ReportNavigator = () => {
    return (
        <Stack.Navigator
        >
            <Stack.Screen
                name="ReportScreen"
                component={ReportScreen}
                options={{title: 'Reporte'}}
            />
             <Stack.Screen
                name="ReportDetailScreen"
                component={ReportScreen}
            />
        </Stack.Navigator>
    )
}