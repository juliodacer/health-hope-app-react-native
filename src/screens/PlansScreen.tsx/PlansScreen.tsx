import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  FlatList,
  RefreshControl,
} from 'react-native';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {PlansStackParams} from '../../navigator/PlansNavigator';
import {PlansContext} from '../../context/plansContext';
import CardWrapper from '../../components/CardWrapper/CardWrapper';
import {IconDrawer} from '../../components/IconDrawer/IconDrawer';

interface Props extends DrawerScreenProps<PlansStackParams, 'PlansScreen'> {}

export const PlansScreen = ({navigation}: Props) => {
  const {plans, loadPlans} = useContext(PlansContext);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconDrawer onPress={() => navigation.toggleDrawer()} />
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
                  objective: item.objective,
                  startDate: item.startDate,
                  finishDate: item.finishDate,
                  createAt: item.createAt,
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
