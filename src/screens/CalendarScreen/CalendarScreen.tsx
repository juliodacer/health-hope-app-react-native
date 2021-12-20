import React from 'react'
import { View, Text } from 'react-native'
import { Calendar } from '../../components/Calendar/Calendar'

export const CalendarScreen = () => {
    return (
        <View style={{flex:1 }}>
           <Calendar />
        </View>
    )
}

