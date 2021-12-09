import React, { useContext, useEffect } from 'react'
import { View, Text, ScrollView, TextInput, StyleSheet } from 'react-native';
import { ParticipantsStackParams } from '../../navigator/ParticipantsNavigator'
import { UsersContext } from '../../context/usersContext';
import { useForm } from '../../hooks/useForm';
import { ButtonGradient } from '../../components/ButtonGradient/ButtonGradient';
import { Button } from '../../components/Button/Button';
import {styles } from './styles';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<ParticipantsStackParams, 'ParticipantScreen'> {}

export const ParticipantScreen = ({navigation, route}: Props) => {

  const {
    id = '',
    name = '',
    email = ''
  } = route.params;

  const {loadUserById, addUser, updateUser} = useContext(UsersContext);

  const {_id, name2, email2, form, onChange, setFormValue} =
    useForm({
      _id: id,
      name2: name,
      email2: email,
    //   img2: img,
    });

  useEffect(() => {
    navigation.setOptions({
      title: name2 ? name2 : 'Nombre del Participante',
    });
  }, [name2]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    if (id.length === 0) return;
    const user = await loadUserById(id);
    setFormValue({
      _id: id,
      name2: name,
    //   img2: habit.img || '',
      email2: user.email,
    });
  };

//   const saveOrUpdate = () => {
//     if (id.length > 0) {
//       updateUsers(name2, _id)
//     } else{
//       addHabit(name2, description2)
//     }
//   }

return (
    <View style={styles.container}>
      <ScrollView>
        {/* {img.length > 0 && (
          <Image
            source={{uri: img}}
            style={{
              marginTop: 20,
              width: '100%',
              height: 300,
            }}
          />
        )} */}

        <Text style={styles.label}>Participante</Text>
        <TextInput
          placeholder="Ingrese su nombre"
          style={styles.txtInput}
          value={name2}
          onChangeText={value => onChange(value, 'name2')}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Ingrese su Email"
          style={styles.txtInput}
          value={email2}
          onChangeText={value => onChange(value, 'email2')}
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

        <ButtonGradient title="Guardar" onPress={() =>  {}} />

        {/* <Text>{JSON.stringify(form, null, 5)}</Text> */}
      </ScrollView>
    </View>
  );
};

