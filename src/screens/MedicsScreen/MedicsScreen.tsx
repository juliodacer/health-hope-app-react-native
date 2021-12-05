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
import {MedicsStackParams} from '../../navigator/MedicsNavigator';

interface Props
  extends StackScreenProps<MedicsStackParams, 'MedicsScreen'> {}

export const MedicsScreen = ({navigation}: Props) => {
  const {usersMedics, loadUsersMedicals} = useContext(UsersContext);

  const [isRefreshing, setIsRefreshing] = useState(false);

  //Refresh
  const loadProductsFromBackend = async () => {
    setIsRefreshing(true);
    await loadUsersMedicals();
    setIsRefreshing(false);
  };

  return (
    <View style={{flex: 1, marginHorizontal: 5, backgroundColor: '#F5F5F5'}}>
      <FlatList
        data={usersMedics}
        keyExtractor={u => u.uid}
        contentContainerStyle={{padding: 15}}
        renderItem={({item}) => (
          <CardUser
            user={item}
            onPress={() =>
              navigation.navigate('MedicScreen', {
                id: item.uid,
                name: item.name,
                email: item.email,
                role: item.role,
                gender: item.gender,
                age: item.age,
                occupation: item.occupation
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
