import React, { useContext, useEffect } from 'react'
import { StyleSheet, Text, View,  FlatList, TouchableOpacity } from 'react-native'
import { HabitsContext } from '../../context/habitsContext';
import { StackScreenProps } from '@react-navigation/stack';
import { HabitsStackParams } from '../../navigator/HabitsNavigator';

interface Props extends StackScreenProps<HabitsStackParams, 'HabitsScreen'>{};

export const HabitsScreen = ({navigation}: Props) => {

    const { habits, loadHabits } = useContext( HabitsContext);

    useEffect( () => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity 
                    activeOpacity={0.8}
                    style={{marginRight: 20}}
                    onPress={() => navigation.navigate('HabitScreen', {})}
                >
                    <Text>Agregar</Text>
                </TouchableOpacity>
            )
        })
    }, [])

    return (
        <View style={{flex: 1, marginHorizontal: 5}}>

            <FlatList 
                data={habits}
                keyExtractor = { (h) => h._id }
                renderItem = { ({item}) => (

                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('HabitScreen', {
                        id: item._id,
                        name: item.name
                    })}
                  >
                        <Text style={styles.habitName}>{item.name}</Text>
                  </TouchableOpacity>
                
                )}

                ItemSeparatorComponent={() => (
                    <View 
                        style={styles.itemSeparetor}
                    />

                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    habitName: {
        fontSize: 20
    },
    itemSeparetor: {
        borderBottomWidth: 3,
        marginVertical: 5,
        borderBottomColor: 'rgba(0,0,0,0.1)'
    }
})
