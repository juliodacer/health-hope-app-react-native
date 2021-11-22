import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput } from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

import {stylesTheme} from '../../theme/styles';

import {styles} from './styles';

import {useNavigation} from '@react-navigation/core';
import {colors} from '../../theme/colors';
import { Button } from '../../components/Button/Button';
import {ButtonGradient} from '../../components/ButtonGradient/ButtonGradient';

export const LoginScreen = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  //const {colors} = useTheme();

  const navigation = useNavigation();

  return (
    <View style={stylesTheme.container}>
      {/* <StatusBar backgroundColor="#009387" barStyle="light-content" /> */}
      <View style={stylesTheme.header}>
        <Text style={stylesTheme.text_header}>¡Bienvenido!</Text>
      </View>
      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: colors.secondary,
          },
        ]}>
        <Text
          style={[
            stylesTheme.text_footer,
            {
              color: colors.black,
            },
          ]}>
          Usuario
        </Text>
        <View style={styles.action}>
          <AntDesign name="user" color={colors.gray} size={20} />
          <TextInput
            placeholder="ingresa su usuario"
            placeholderTextColor={colors.gray}
            style={[
              styles.textInput,
              {
                color: colors.gray,
              },
            ]}
            autoCapitalize="none"
            //   onChangeText={(val) => textInputChange(val)}
            //   onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Username must be 4 characters long.
            </Text>
          </Animatable.View>
        )}

        <Text
          style={[
            stylesTheme.text_footer,
            {
              color: colors.black,
              marginTop: 35,
            },
          ]}>
          Contraseña
        </Text>
        <View style={styles.action}>
          <AntDesign name="key" color={colors.gray} size={20} />
          <TextInput
            placeholder="Ingresa tu contraseña"
            placeholderTextColor={colors.gray}
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[
              styles.textInput,
              {
                color: colors.gray,
              },
            ]}
            autoCapitalize="none"
            //   onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity
          //   onPress={updateSecureTextEntry}
          >
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be 8 characters long.
            </Text>
          </Animatable.View>
        )}

        <TouchableOpacity>
          <Text style={{color: colors.primary, marginTop: 15}}>
            ¿Olvidaste tu contraseña?
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <ButtonGradient title="Iniciar Sesión" />

          <Button title="Registrar" onPress={() => navigation.navigate('RegisterScreen')} />
        </View>
      </Animatable.View>
    </View>
  );
};
