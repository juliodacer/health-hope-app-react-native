import React, {useContext, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Alert,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {stylesTheme} from '../../theme/styles';

import {styles} from './styles';

import {colors} from '../../theme/colors';
import {Button} from '../../components/Button/Button';
import {ButtonGradient} from '../../components/ButtonGradient/ButtonGradient';
import {useForm} from '../../hooks/useForm';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthContext} from '../../context/authContext';
import { DrawerScreenProps } from '@react-navigation/drawer';

interface Props extends DrawerScreenProps<any, any> {}

export const LoginScreen = ({navigation}: Props) => {
  const {signIn, errorMessage, removeError} = useContext(AuthContext);

  const {email, password, onChange} = useForm({
    email: '',
    password: ''
  });

  useEffect(() => {
    if (errorMessage.length === 0) return;
    Alert.alert('Login incorrecto', errorMessage, [
      {
        text: 'Ok',
        onPress: removeError,
      },
    ]);
  }, [errorMessage]);

  const onLogin = () => {
    console.log({email, password});
    Keyboard.dismiss();
    signIn({email, password});
  };

  // const [data, setData] = useState({
  //   email: '',
  //   password: '',
  //   check_textInputChange: false,
  //   secureTextEntry: true,
  //   isValidUser: true,
  //   isValidPassword: true,
  // });

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="height">
      <View style={stylesTheme.container}>
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
            Correo
          </Text>
          <View style={styles.action}>
            <AntDesign name="user" color={colors.gray} size={20} />
            <TextInput
              placeholder="ingresa su correo"
              placeholderTextColor={colors.gray}
              keyboardType="email-address"
              style={[
                styles.textInput,
                {
                  color: colors.blue,
                },
              ]}
              autoCapitalize="none"
              // onChangeText={(val) => textInputChange(val)}
              //   onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
              onChangeText={value => onChange(value, 'email')}
              value={email}
              onSubmitEditing={onLogin}
              autoCorrect={false}
            />
            {/* {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null} */}
          </View>
          {/* {data.isValidUser ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Username must be 4 characters long.
              </Text>
            </Animatable.View>
          )} */}

          <Text
            style={[
              stylesTheme.text_footer,
              {
                color: colors.black,
                marginTop: 15,
              },
            ]}>
            Contraseña
          </Text>
          <View style={styles.action}>
            <AntDesign name="lock" color={colors.blue} size={20} />
            <TextInput
              placeholder="Ingresa tu contraseña"
              placeholderTextColor={colors.gray}
              secureTextEntry={true}
              style={[
                styles.textInput,
                {
                  color: colors.gray,
                },
              ]}
              autoCapitalize="none"
              //   onChangeText={(val) => handlePasswordChange(val)}
              onChangeText={value => onChange(value, 'password')}
              value={password}
              autoCorrect={false}
              onSubmitEditing={onLogin}
            />
            {/* <TouchableOpacity
            //   onPress={updateSecureTextEntry}
            >
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity> */}
          </View>
          {/* {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Password must be 8 characters long.
              </Text>
            </Animatable.View>
          )} */}

          <TouchableOpacity>
            <Text style={{color: colors.primary, marginTop: 15}}>
              ¿Olvidaste tu contraseña?
            </Text>
          </TouchableOpacity>
          <View style={styles.button}>
            <ButtonGradient title="Iniciar Sesión" onPress={onLogin} />

            <Button
              title="Registrar"
              onPress={() => navigation.navigate('RegisterScreen')}
            />
          </View>
        </Animatable.View>
      </View>
    </KeyboardAvoidingView>
  );
};
