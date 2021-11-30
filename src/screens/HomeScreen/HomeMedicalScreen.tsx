import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {Button} from '../../components/Button/Button';
import {AuthContext} from '../../context/authContext';
import {colors} from '../../theme/colors';

export const HomeMedicalScreen = () => {
  const {user, token, logOut} = useContext(AuthContext);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 25, margin:20}}>Bienvenido</Text>

      <View
        style={{
          height: 60,
          width: 300,
          paddingVertical: 10,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 25,
        }}>
        <Text style={{fontSize: 16}}>Nombre: {user?.name}</Text>
        <Text style={{fontSize: 16}}>Nombre: {user?.email}</Text>
      </View>

      <View
        style={{
          justifyContent: 'center',
        }}>
        <Button
          title="Ver Calendario"
          color={colors.white}
          onPress={() => {}}
        />

        <Button title="Ver Planes" color={colors.white} onPress={() => {}} />
      </View>

      {/* <Text>
                { JSON.stringify(user, null, 5)}
            </Text> */}

      <Button title="Cerrar Sesión" color={colors.white} onPress={logOut} />
    </View>
  );
};
