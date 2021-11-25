import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useReducer} from 'react';
import healthHopeAPI from '../api/healthHopeAPI';
import {LoginData, LoginResponse, User} from '../interfaces/appInterfaces';
import {authReducer, AuthState} from './authReducer';

type AuthContextProps = {
  errorMessage: string;
  token: string | null;
  user: User | null;
  status: 'checking' | 'authenticated' | 'not-authenticated';
  signIn: (loginData: LoginData) => void;
  singUp: () => void;
  logOut: () => void;
  removeError: () => void;
};

const authInitialState: AuthState = {
  status: 'checking',
  token: null,
  user: null,
  errorMessage: '',
};

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  // useEffect(() => {
  //   checkToken();
  // }, []);

  // const checkToken = async () => {
  //   const token = await AsyncStorage.getItem('token');

  //   // No token, no autenticado
  //   if (!token) return dispatch({type: 'notAuthenticated'});

  //   // Hay token
  //   const resp = await healthHopeAPI.get('/auth');

  //   if( resp.status !== 200) {
  //     return dispatch({ type: 'notAuthenticated'});
  //   }

  //   dispatch({
  //     type: 'signUp',
  //     payload: {
  //       token: resp.data.token,
  //       user: resp.data.user,
  //     },
  //   });
  //};

  const signIn = async ({email, password}: LoginData) => {
    try {
      const {data} = await healthHopeAPI.post<LoginResponse>('/auth/login', {
        email,
        password,
      });

      dispatch({
        type: 'signUp',
        payload: {
          token: data.token,
          user: data.user,
        },
      });

      console.log(data)
      // await AsyncStorage.setItem('token', data.token);
    } catch (err: any) {
      console.log(err.response.data.msg);
      dispatch({
        type: 'addError',
        payload: err.response.data.msg || 'Información incorrecta'
      });
    }
  };

  const singUp = () => {};

  const logOut = () => {};

  const removeError = () => {
    dispatch({type: 'removeError'});
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        signIn,
        singUp,
        logOut,
        removeError,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
