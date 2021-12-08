import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {HabitsContext} from '../../context/habitsContext';
import {HabitsStackParams} from '../../navigator/HabitsNavigator';
import { colors } from '../../theme/colors';
import { IconDrawer } from '../../components/IconDrawer/IconDrawer';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<HabitsStackParams, 'HabitsScreen'> {}

export const HabitsScreen = ({navigation}: Props) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const {habits, loadHabits} = useContext(HabitsContext);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <IconDrawer onPress={() => navigation.toggleDrawer()} />
      ),
      headerRight: () => (
        <TouchableOpacity
          activeOpacity={0.8}
          style={{marginRight: 20, backgroundColor: colors.primary, padding:5, borderRadius: 15}}
          onPress={() => navigation.navigate('HabitScreen', {})}>
          <Text style={{color: colors.white}}>Agregar</Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  //Refresh
  const loadProductsFromBackend = async () => {
    setIsRefreshing(true);
    await loadHabits();
    setIsRefreshing(false);
  };

  return (
    <View style={{flex: 1, marginHorizontal: 5}}>
      <FlatList
        data={habits}
        keyExtractor={h => h._id}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('HabitScreen', {
                id: item._id,
                name: item.name,
                description: item.description,
                img: item.img,
              })
            }>
            <Text style={styles.habitName}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.itemSeparetor} />}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={loadProductsFromBackend}
          />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  habitName: {
    fontSize: 20,
  },
  itemSeparetor: {
    borderBottomWidth: 3,
    marginVertical: 5,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
});
