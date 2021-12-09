import React, {useEffect, useContext} from 'react';
import {
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import {HabitsStackParams} from '../../navigator/HabitsNavigator';
import {ButtonGradient} from '../../components/ButtonGradient/ButtonGradient';
import {useForm} from '../../hooks/useForm';
import {HabitsContext} from '../../context/habitsContext';
import {Button} from '../../components/Button/Button';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {AuthContext} from '../../context/authContext';

import { styles } from './styles'

interface Props extends DrawerScreenProps<HabitsStackParams, 'HabitScreen'> {}

export const HabitScreen = ({navigation, route}: Props) => {
  const {id = '', name = '', description = '', img = ''} = route.params;

  const {user} = useContext(AuthContext);
  const {loadHabitById, addHabit, updateHabit} = useContext(HabitsContext);

  const {_id, name2, description2, img2, form, onChange, setFormValue} =
    useForm({
      _id: id,
      name2: name,
      description2: description,
      img2: img,
    });

  // useEffect(() => {
  //   navigation.setOptions({
  //     title: name2 ? name2 : 'Nombre del Hábito',
  //   });
  // }, [name2]);

  useEffect(() => {
    loadHabit();
  }, []);

  const loadHabit = async () => {
    if (id.length === 0) return;
    const habit = await loadHabitById(id);
    setFormValue({
      _id: id,
      name2: name,
      img2: habit.img || '',
      description2: habit.description,
    });
  };

  const saveOrUpdate = () => {
    if (id.length > 0) {
      updateHabit(name2, _id);
    } else {
      addHabit(name2, description2);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {img.length > 0 && (
          <Image
            source={{uri: img}}
            style={{
              marginTop: 20,
              marginBottom: 20,
              width: '100%',
              height: 300,
            }}
          />
        )}

        {user?.role === 'ADMIN_ROLE' ? (
          <>
            <Text style={styles.label}>Nombre del hábito</Text>
            <TextInput
              placeholder="Nombre del Hábito"
              style={styles.txtInput}
              value={name2}
              onChangeText={value => onChange(value, 'name2')}
            />

            <Text style={styles.label}>Descripción</Text>
            <TextInput
              placeholder="Descripción"
              style={styles.txtInput}
              value={description2}
              onChangeText={value => onChange(value, 'description2')}
            />

            <Text style={styles.label}>Subir imagen:</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                marginBottom: 10,
              }}>
              <Button
                title="Galeria"
                onPress={() => {}}
                newStyle={{width: '45%', marginRight: 10}}
              />
              <Button
                title="Cámara"
                onPress={() => {}}
                newStyle={{width: '45%', marginLeft: 10}}
              />
            </View>

            <ButtonGradient title="Guardar" onPress={saveOrUpdate} />
          </>
        ) : (
          <>
            <Text style={styles.label}>Descripción</Text>
            <Text style={styles.description}>{description}</Text>
          </>
        )}

        {/* <Text>{JSON.stringify(form, null, 5)}</Text> */}
      </ScrollView>
    </View>
  );
};
