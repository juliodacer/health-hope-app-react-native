import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthProvider} from './src/context/authContext';
import {StackNavigator} from './src/navigator/StackNavigator';

// const AppState = ({children}: {children: JSX.Element | JSX.Element[]}) => {
//   return <AuthProvider>{children}</AuthProvider>;
// };

const AppState = ({children}: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StackNavigator />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
