import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {HabitsStackParams} from '../../navigator/HabitsNavigator';
import {ButtonGradient} from '../../components/ButtonGradient/ButtonGradient';
import {useForm} from '../../hooks/useForm';
import {HabitsContext} from '../../context/habitsContext';
import { Button } from '../../components/Button/Button';

interface Props extends StackScreenProps<HabitsStackParams, 'HabitScreen'> {}

export const HabitScreen = ({navigation, route}: Props) => {

  const {
    id = '',
    name = '',
    description = '',
    img = ''
  } = route.params;

  // const [selectedItem, setSelectedItem] = useState();

  // const {plans} = usePlans();

  const {loadHabitById, addHabit, updateHabit} = useContext(HabitsContext);

  const {_id, name2, description2, img2, form, onChange, setFormValue} =
    useForm({
      _id: id,
      name2: name,
      description2: description,
      img2: img,
    });

  useEffect(() => {
    navigation.setOptions({
      title: name2 ? name2 : 'Nombre del Hábito',
    });
  }, [name2]);

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
      updateHabit(name2, _id)
    } else{
      addHabit(name2, description2)
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {img.length > 0 && (
          <Image
            source={{uri: img}}
            style={{
              marginTop: 20,
              width: '100%',
              height: 300,
            }}
          />
        )}

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

        {/* Planes */}
        {/* Picker Selector */}
        <Text style={[styles.label]}>Subir imagen:</Text>
        <View style={{flexDirection:"row", alignItems:"center", justifyContent: "space-around", marginBottom: 10}}>
            <Button title="Galeria" onPress={() => {} } newStyle={{width: '45%', marginRight: 10}}/>
            <Button title="Cámara" onPress={() => {}} newStyle={{width: '45%', marginLeft: 10}}/>
          </View>

        {/* <Picker
          selectedValue={selectedItem}
          onValueChange={(itemValue, itemIndex) => setSelectedItem(itemValue)}>
          {plans.map(p => (
            <Picker.Item
              label={p.name} 
              value={p._id} 
              key={p._id} />
          ))}
        </Picker> */}

        <ButtonGradient title="Guardar" onPress={saveOrUpdate} />

        {/* <Text>{JSON.stringify(form, null, 5)}</Text> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginHorizontal: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  txtInput: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.2)',
    height: 45,
    marginTop: 5,
    marginBottom: 15,
  },
});
