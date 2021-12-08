import React, {useContext, useEffect, useState} from 'react';
import {View, FlatList, StyleSheet, RefreshControl, Text} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {CardUser} from '../../components/CardUser/CardUser';
import {UsersContext} from '../../context/usersContext';
import {ParticipantsStackParams} from '../../navigator/ParticipantsNavigator';
import {IconDrawer} from '../../components/IconDrawer/IconDrawer';
import {AuthContext} from '../../context/authContext';
import { colors } from '../../theme/colors';

interface Props
  extends DrawerScreenProps<ParticipantsStackParams, 'ParticipantsScreen'> {}

export const ParticipantsScreen = ({navigation}: Props) => {
  const {usersParticipants, loadUsersParticipants} = useContext(UsersContext);
  const {user} = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconDrawer onPress={() => navigation.toggleDrawer()} />
      ),
    });
  }, []);

  const [isRefreshing, setIsRefreshing] = useState(false);

  //Refresh
  const loadProductsFromBackend = async () => {
    setIsRefreshing(true);
    await loadUsersParticipants();
    setIsRefreshing(false);
  };

  return (
    <View style={{flex: 1, marginHorizontal: 5, backgroundColor: '#F5F5F5'}}>
      <FlatList
        data={usersParticipants}
        keyExtractor={u => u.uid}
        contentContainerStyle={{padding: 15}}
        renderItem={({item}) => (
          <CardUser
            user={item}
            text={user?.role === 'USER_ROLE' ? 'Agregar' : ''}
            add={
              user?.role === 'USER_ROLE'
                ? {
                    height: 30,
                    width: 70,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.primaryLight,
                    borderRadius: 20,
                    marginLeft: 5
                  }
                : {}
            }
            onPress={
              user?.role === 'ADMIN_ROLE'
                ? () =>
                    navigation.navigate('ParticipantScreen', {
                      id: item.uid,
                      name: item.name,
                      email: item.email,
                      role: item.role,
                      gender: item.gender,
                      age: item.age,
                      birthDate: item.birthDate,
                      cell: item.cell,
                      address: item.address,
                    })
                : () => {}
            }
          />
        )}
        // ItemSeparatorComponent={() => <View style={styles.itemSeparetor} />}
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
