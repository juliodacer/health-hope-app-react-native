import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  FlatList,
  RefreshControl,
  Text
} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {PlansStackParams} from '../../navigator/PlansNavigator';
import {PlansContext} from '../../context/plansContext';
import CardWrapper from '../../components/CardWrapper/CardWrapper';
import {IconDrawer} from '../../components/IconDrawer/IconDrawer';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../../context/authContext';
import { colors } from '../../theme/colors';

interface Props extends DrawerScreenProps<PlansStackParams, 'PlansScreen'> {}

export const PlansScreen = ({navigation}: Props) => {
  const {user} = useContext(AuthContext);
  const {plans, loadPlans} = useContext(PlansContext);

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
            onPress={() => navigation.navigate('PlanScreen', {})}>
            <Text style={{color: colors.white}}>Agregar</Text>
          </TouchableOpacity>
        ),
    });
  }, []);



  const [isRefreshing, setIsRefreshing] = useState(false);

  //Refresh
  const loadPlansFromBackend = async () => {
    setIsRefreshing(true);
    await loadPlans();
    setIsRefreshing(false);
  };

  return (
    <View style={{flex: 1, marginHorizontal: 5, backgroundColor: '#F5F5F5'}}>
      <FlatList
        data={plans}
        keyExtractor={p => p._id}
        contentContainerStyle={{padding: 15}}
        renderItem={({item}) => {
          return (
            <CardWrapper
              plan={item}
              onPress={() =>
                navigation.navigate('PlanScreen', {
                  id: item._id,
                  name: item.name,
                  description: item.description,
                  img: item.img,
                  startDate: item.startDate,
                  finishDate: item.finishDate,
                  status: item.status,
                  user: item.user,
                })
              }
            />
          );
        }}
        // ItemSeparatorComponent={() => <View style={styles.itemSeparetor} />}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={loadPlansFromBackend}
          />
        }
      />
    </View>
  );
};
