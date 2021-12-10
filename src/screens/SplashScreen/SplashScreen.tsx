import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/core';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import { colors } from '../../theme/colors';

export const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require('../../assets/logo-health-hope.png')}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: colors.gray2,
          },
        ]}
        animation="fadeInUpBig">
        <Text
          style={[
            styles.title,
            {
              color: colors.black
            },
          ]}>
          Comienza una nueva vida con el plan de estilo de vida saludable
        </Text>
        {/* <Text style={styles.text}>Iniciar sesión</Text> */}
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <LinearGradient
              colors={[colors.primaryLight, colors.primary]}
              style={styles.signIn}>
              <Text style={styles.textSign}>Comenzar</Text>
              {/* <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    /> */}
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};
