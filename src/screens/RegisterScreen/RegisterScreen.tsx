import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/core';
import { styles } from './styles';
import { ButtonGradient } from '../../components/ButtonGradient/ButtonGradient';
import { Button } from '../../components/Button/Button';

export const RegisterScreen = () => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const navigation = useNavigation();

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
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Registrar</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.text_footer}>Usuario</Text>
          <View style={styles.action}>
            <AntDesign name="user" color="#05375a" size={20} />
            <TextInput
              placeholder="ingrese su usuario"
              style={styles.textInput}
              autoCapitalize="none"
              // onChangeText={(val) => textInputChange(val)}
            />
            {data.check_textInputChange ? (
              <Animatable.View animation="bounceIn">
                <AntDesign name="check-circle" color="green" size={20} />
              </Animatable.View>
            ) : null}
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Contraseña
          </Text>
          <View style={styles.action}>
            <AntDesign name="key" color="#05375a" size={20} />
            <TextInput
              placeholder="escriba su contraseña"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              // onChangeText={(val) => handlePasswordChange(val)}
            />
            <TouchableOpacity
            // onPress={updateSecureTextEntry}
            >
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>

          <Text
            style={[
              styles.text_footer,
              {
                marginTop: 35,
              },
            ]}>
            Confirmar Contraseña
          </Text>
          <View style={styles.action}>
            <AntDesign name="key" color="#05375a" size={20} />
            <TextInput
              placeholder="Confirme su contraseña"
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
              // onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity
            // onPress={updateConfirmSecureTextEntry}
            >
              {data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.textPrivate}>
            <Text style={styles.color_textPrivate}>
              By signing up you agree to our
            </Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Terms of service
            </Text>
            <Text style={styles.color_textPrivate}> and</Text>
            <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>
              {' '}
              Privacy policy
            </Text>
          </View>

          {/* Buttons */}
          <View style={styles.button}>
            <ButtonGradient title="Registrar" />
            <Button title="Iniciar Sesión" onPress={() => navigation.goBack()} />
          </View>
          
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

