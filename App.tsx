import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthProvider} from './src/context/authContext';
import {HabitsProvider} from './src/context/habitsContext';
import {PlansProvider} from './src/context/plansContext';
import {UsersProvider} from './src/context/usersContext';
import {DrawerNavigator} from './src/navigator/DrawerNavigator';
import {StackNavigator} from './src/navigator/StackNavigator';

// const AppState = ({children}: {children: JSX.Element | JSX.Element[]}) => {
//   return <AuthProvider>{children}</AuthProvider>;
// };

const AppState = ({children}: any) => {
  return (
    <AuthProvider>
      <UsersProvider>
        <PlansProvider>
          <HabitsProvider>{children}</HabitsProvider>
        </PlansProvider>
      </UsersProvider>
    </AuthProvider>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        <DrawerNavigator />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
