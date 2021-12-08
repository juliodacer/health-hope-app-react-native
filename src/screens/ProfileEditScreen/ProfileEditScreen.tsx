import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import {useForm} from '../../hooks/useForm';
import {Button} from '../../components/Button/Button';
import {ProfileStackParams} from '../../navigator/ProfileNavigator';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {UsersContext} from '../../context/usersContext';
import {ButtonGradient} from '../../components/ButtonGradient/ButtonGradient';

interface Props
  extends DrawerScreenProps<ProfileStackParams, 'ProfileEditScreen'> {}

export const ProfileEditScreen = ({navigation, route}: Props) => {
  const {loadUserById, updateUser, addUser} = useContext(UsersContext);

  const {
    uid = '',
    name = '',
    email = '',
    password = '',
    gender = '',
    age = 0,
    weight = 0.0,
    birthDate = '',
    cell = '',
    img = '',
    address = '',
    occupation = '',
    role = '',
  } = route.params;

  const {
    id,
    name2,
    email2,
    password2,
    gender2,
    age2,
    weight2,
    birthDate2,
    cell2,
    address2,
    occupation2,
    role2,
    img2,
    form,
    onChange,
    setFormValue,
  } = useForm({
    id: uid,
    name2: name,
    email2: email,
    password2: password,
    gender2: gender,
    age2: age,
    weight2: weight,
    birthDate2: birthDate,
    cell2: cell,
    address2: address,
    occupation2: occupation,
    role2: role,
    img2: img,
  });

  useEffect(() => {
    navigation.setOptions({
      title: name2 ? name2 : 'Nombre',
    });
  }, [name2]);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    if (id.length === 0) return;
    const user = await loadUserById(id);
    setFormValue({
      id: uid,
      name2: user.name,
      email2: user.email,
      password2: user.password,
      gender2: user.gender || '',
      age2: user.age || 0,
      weight2: user.weight || 0,
      birthDate2: user.birthDate || '',
      cell2: user.cell || '',
      address2: user.address || '',
      occupation2: user.occupation || '',
      role2: user.role,
      img2: user.img || '',
    });
  };

  const saveOrUpdate = () => {
    if (id.length > 0) {
      updateUser(
        id,
        name2,
        email2,
        password2,
        gender2,
        age2,
        weight2,
        birthDate2,
        cell2,
        address2,
        occupation2,
        role2,
        img2,
      );
    } else {
      addUser(
        id,
        name2,
        email2,
        password2,
        gender2,
        age2,
        weight2,
        birthDate2,
        cell2,
        address2,
        occupation2,
        role2,
        img2,
      );
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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

        <Text style={styles.label}>Nombre</Text>
        <TextInput
          placeholder="Nombre del Hábito"
          style={styles.txtInput}
          value={name2}
          onChangeText={value => onChange(value, 'name2')}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Descripción"
          style={styles.txtInput}
          value={email2}
          onChangeText={value => onChange(value, 'email2')}
        />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          placeholder="Contraseña"
          style={styles.txtInput}
          value={password2}
          onChangeText={value => onChange(value, 'password2')}
        />

        {/* Genero */}

        {/* <Text style={styles.label}>Edad</Text>
        <TextInput
          placeholder="Edad"
          style={styles.txtInput}
          value={age2.valueOf(Number)}
          onChangeText={value => onChange(value, 'age2')}
        /> */}

        <Text style={styles.label}>Fecha de nacimiento</Text>
        <TextInput
          placeholder="Nacimiento"
          style={styles.txtInput}
          value={birthDate2}
          onChangeText={value => onChange(value, 'birthDate2')}
        />

        <Text style={styles.label}>Número de celular</Text>
        <TextInput
          placeholder="Celular"
          style={styles.txtInput}
          value={cell2}
          onChangeText={value => onChange(value, 'cell2')}
        />

        <Text style={styles.label}>Dirección</Text>
        <TextInput
          placeholder="Dirección"
          style={styles.txtInput}
          value={address2}
          onChangeText={value => onChange(value, 'address2')}
        />

        {/* Planes */}
        {/* Picker Selector */}
        <Text style={[styles.label]}>Subir imagen:</Text>
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
