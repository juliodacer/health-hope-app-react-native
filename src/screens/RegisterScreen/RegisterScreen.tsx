import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
  Keyboard,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/core';
import {styles} from './styles';
import {ButtonGradient} from '../../components/ButtonGradient/ButtonGradient';
import {Button} from '../../components/Button/Button';
import {useForm} from '../../hooks/useForm';
import {StackScreenProps} from '@react-navigation/stack';
import {colors} from '../../theme/colors';

interface Props extends StackScreenProps<any, any> {}

export const RegisterScreen = ({navigation}: Props) => {
  const {email, password, name, onChange} = useForm({
    name: '',
    email: '',
    password: '',
  });

  const onRegister = () => {
    console.log({email, password, name});
    Keyboard.dismiss();
  };

  // const [data, setData] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   check_textInputChange: false,
  //   secureTextEntry: true,
  //   isValidUser: true,
  //   isValidPassword: true,
  // });

  // const textInputChange = (val) => {
  //     if( val.length !== 0 ) {
  //         setData({
  //             ...data,
  //             username: val,
  //             check_textInputChange: true
  //         });
  //     } else {
  //         setData({
  //             ...data,
  //             username: val,
  //             check_textInputChange: false
  //         });
  //     }
  // }

  // const handlePasswordChange = (val) => {
  //     setData({
  //         ...data,
  //         password: val
  //     });
  // }

  // const handleConfirmPasswordChange = (val) => {
  //     setData({
  //         ...data,
  //         confirm_password: val
  //     });
  // }

  // const updateSecureTextEntry = () => {
  //     setData({
  //         ...data,
  //         secureTextEntry: !data.secureTextEntry
  //     });
  // }

  // const updateConfirmSecureTextEntry = () => {
  //     setData({
  //         ...data,
  //         confirm_secureTextEntry: !data.confirm_secureTextEntry
  //     });
  // }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text_header}>Registrar</Text>
        </View>
        <Animatable.View animation="fadeInUpBig" style={styles.footer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Name */}
            <Text style={styles.text_footer}>Nombre</Text>
            <View style={styles.action}>
              <AntDesign name="user" color="#05375a" size={20} />
              <TextInput
                placeholder="Ingrese su nombre"
                style={styles.textInput}
                autoCapitalize="words"
                autoCorrect={false}
                onChangeText={value => onChange(value, 'name')}
                value={name}
                onSubmitEditing={onRegister}
              />
              {/* {data.check_textInputChange ? (
                <Animatable.View animation="bounceIn">
                  <AntDesign name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null} */}
            </View>

            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 20,
                },
              ]}>
              Correo
            </Text>
            <View style={styles.action}>
              <AntDesign name="mail" color={colors.blue} size={20} />
              <TextInput
                placeholder="Ingrese su correo"
                style={styles.textInput}
                autoCapitalize="none"
                autoCorrect={false}
                onSubmitEditing={onRegister}
                // onChangeText={(val) => textInputChange(val)}
              />
              {/* {data.check_textInputChange ? (
                <Animatable.View animation="bounceIn">
                  <AntDesign name="check-circle" color="green" size={20} />
                </Animatable.View>
              ) : null} */}
            </View>

            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 20,
                },
              ]}>
              Contraseña
            </Text>
            <View style={styles.action}>
              <AntDesign name="lock" color={colors.blue} size={20} />
              <TextInput
                placeholder="Escriba su contraseña"
                // secureTextEntry={data.secureTextEntry ? true : false}
                secureTextEntry={true}
                style={styles.textInput}
                autoCapitalize="none"
                autoCorrect={false}
                onSubmitEditing={onRegister}
                // onChangeText={(val) => handlePasswordChange(val)}
              />
              {/*
              <TouchableOpacity
              // onPress={updateSecureTextEntry}
              >
                
                 {data.secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="grey" size={20} />
                )} 
              </TouchableOpacity>
              */}
            </View>

            <Text
              style={[
                styles.text_footer,
                {
                  marginTop: 20,
                },
              ]}>
              Confirmar Contraseña
            </Text>
            <View style={styles.action}>
              <AntDesign name="lock" color="#05375a" size={20} />
              <TextInput
                placeholder="Confirme su contraseña"
                secureTextEntry={true}
                style={styles.textInput}
                autoCapitalize="none"
                autoCorrect={false}
                onSubmitEditing={onRegister}
                // onChangeText={(val) => handleConfirmPasswordChange(val)}
              />
              {/* <TouchableOpacity
              // onPress={updateConfirmSecureTextEntry}
              >
                {data.secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="grey" size={20} />
                )}
              </TouchableOpacity> */}
            </View>

            {/* Buttons */}
            <View style={styles.button}>
              <ButtonGradient title="Registrar" />
              <Button
                title="Iniciar Sesión"
                onPress={() => navigation.replace('LoginScreen')}
              />
            </View>
          </ScrollView>
        </Animatable.View>
      </View>
    </>
  );
};
