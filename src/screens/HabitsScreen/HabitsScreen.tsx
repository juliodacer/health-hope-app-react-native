import React, {useContext, useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {HabitsContext} from '../../context/habitsContext';
import {HabitsStackParams} from '../../navigator/HabitsNavigator';
import {colors} from '../../theme/colors';
import {IconDrawer} from '../../components/IconDrawer/IconDrawer';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {AuthContext} from '../../context/authContext';

import {styles} from './styles';

interface Props extends DrawerScreenProps<HabitsStackParams, 'HabitsScreen'> {}

export const HabitsScreen = ({navigation}: Props) => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const {user} = useContext(AuthContext);

  const {habits, loadHabits} = useContext(HabitsContext);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <IconDrawer onPress={() => navigation.toggleDrawer()} />
      ),
      headerRight: () =>
        user?.role === 'ADMIN_ROLE' && (
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              marginRight: 20,
              backgroundColor: colors.primary,
              padding: 5,
              borderRadius: 15,
            }}
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
