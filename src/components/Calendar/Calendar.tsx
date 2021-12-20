import {addDays, format} from 'date-fns';
import React, {useContext, useEffect, useState} from 'react';
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Agenda} from 'react-native-calendars';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AuthContext} from '../../context/authContext';
import {HabitsContext} from '../../context/habitsContext';
import {Picker} from '@react-native-picker/picker';
import {colors} from '../../theme/colors';

type Item = {
  name: string;
  cookies: boolean;
};

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export const Calendar = () => {
  const [items, setItems] = useState<{[key: string]: Post[]}>({});

  const [selectedPerform, setSelectedPerform] = useState('INCOMPLETE');
  const [selectedPerform2, setSelectedPerform2] = useState('INCOMPLETE');
  const [selectedPerform3, setSelectedPerform3] = useState('INCOMPLETE');
  const [selectedPerform4, setSelectedPerform4] = useState('INCOMPLETE');
  const [selectedPerform5, setSelectedPerform5] = useState('INCOMPLETE');
  const [selectedPerform6, setSelectedPerform6] = useState('INCOMPLETE');

  const [isRefreshing, setIsRefreshing] = useState(false);

  const {user} = useContext(AuthContext);

  const {habits, loadHabits} = useContext(HabitsContext);

  const loadProductsFromBackend = async () => {
    setIsRefreshing(true);
    await loadHabits();
    setIsRefreshing(false);
  };

  useEffect(() => {
    // run once

    const getData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const data: Post[] = await response.json();

      const mappedData = data.map((post, index) => {
        const date = addDays(new Date(), index);

        return {
          ...post,
          date: format(date, 'yyyy-MM-dd'),
        };
      });

      const reduced = mappedData.reduce(
        (acc: {[key: string]: Post[]}, currentItem) => {
          const {date, ...coolItem} = currentItem;

          acc[date] = [coolItem];

          return acc;
        },
        {},
      );

      setItems(reduced);
    };

    getData();
  }, []);

  const renderItem = () => {
    return (
      <View style={styles.itemContainer}>
        <FlatList
          data={habits}
          keyExtractor={h => h._id}
          renderItem={({item}) => (
            <TouchableOpacity
              activeOpacity={0.8}
              style={{flexDirection: 'row'}}>
              <View style={{width: '90%', padding: 5}}>
                <Text style={styles.habitName}>{item.name}</Text>
              </View>
              <View
                style={{
                width: '10%',
                  height: 30,
                  justifyContent: 'center',
                  //backgroundColor: selectedPerform === 'INCOMPLETE' ? 'red' : selectedPerform === 'PARTIALLY_COMPLETED' ? 'yellow' : 'green',
                    backgroundColor: colors.primaryLight
                }}>
                <Picker
                  selectedValue={selectedPerform}
                  onValueChange={(value, index) => {
                    setSelectedPerform(value);
                  }}>
                  <Picker.Item label="Completado" value="COMPLETED" />
                  <Picker.Item
                    label="Parcialmente completado"
                    value="PARTIALLY_COMPLETED"
                  />
                  <Picker.Item label="Incompleto" value="INCOMPLETE" />
                </Picker>
              </View>
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

  return (
    <SafeAreaView style={styles.safe}>
      <Agenda items={items} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  habitName: {
    fontSize: 18,
  },
  itemSeparetor: {
    borderBottomWidth: 3,
    marginVertical: 5,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
});
