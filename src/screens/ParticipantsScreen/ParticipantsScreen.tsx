import React, {useContext, useState} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {
  View,
  FlatList,
  StyleSheet,
  RefreshControl,
} from 'react-native';
import {CardUser} from '../../components/CardUser/CardUser';
import {UsersContext} from '../../context/usersContext';
import {AdminStackParams} from '../../navigator/AdminNavigator';

interface Props
  extends StackScreenProps<AdminStackParams, 'ParticipantsScreen'> {}

export const ParticipantsScreen = ({navigation}: Props) => {
  const {users, loadUsers} = useContext(UsersContext);

  const [isRefreshing, setIsRefreshing] = useState(false);

  //Refresh
  const loadProductsFromBackend = async () => {
    setIsRefreshing(true);
    await loadUsers();
    setIsRefreshing(false);
  };

  return (
    <View style={{flex: 1, marginHorizontal: 5}}>
      <FlatList
        data={users}
        keyExtractor={u => u.uid}
        contentContainerStyle={{padding: 15}}
        renderItem={({item}) => (
          <CardUser
            user={item}
            onPress={() =>
              navigation.navigate('ParticipantScreen', {
                id: item.uid,
                name: item.name,
                email: item.email,
                role: item.role,
              })
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
