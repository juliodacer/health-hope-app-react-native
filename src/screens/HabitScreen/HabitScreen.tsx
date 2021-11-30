import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {HabitsStackParams} from '../../navigator/HabitsNavigator';
import {ButtonGradient} from '../../components/ButtonGradient/ButtonGradient';
import {usePlans} from '../../hooks/usePlans';
import {Picker} from '@react-native-picker/picker';

interface Props extends StackScreenProps<HabitsStackParams, 'HabitScreen'> {}

export const HabitScreen = ({navigation, route}: Props) => {
  const {id, name = ''} = route.params;

  const [selectedItem, setSelectedItem] = useState();

  const {plans} = usePlans();

  //const []

  useEffect(() => {
    navigation.setOptions({
      title: name ? name : 'Nuevo Hábito',
    });
  });

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.label}>Nombre del hábito</Text>
        <TextInput placeholder="Nombre del Hábito" style={styles.txtInput} />

        {/* Planes */}
        {/* Picker Selector */}
        <Text style={[styles.label]}>Plan de estilo de vida saludable:</Text>

        <Picker
          selectedValue={selectedItem}
          onValueChange={(itemValue, itemIndex) => setSelectedItem(itemValue)}>
          {plans.map(p => (
            <Picker.Item
              label={p.name} 
              value={p._id} 
              key={p._id} />
          ))}
        </Picker>

        <ButtonGradient title="Guardar" onPress={() => {}} />
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
