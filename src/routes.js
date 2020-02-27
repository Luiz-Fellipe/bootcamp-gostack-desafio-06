import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';

const Stack = createStackNavigator();

const defaultOptions = {
  headerTitleAlign: 'center',
  headerBackTitleVisible: false,
  headerStyle: {
    backgroundColor: '#7159c1',
  },
  headerTintColor: '#FFF',
};

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={defaultOptions}>
        <Stack.Screen
          name="Main"
          options={{ title: 'Usuários' }}
          component={Main}
        />
        <Stack.Screen
          name="User"
          options={{ title: 'Perfil Usuário' }}
          component={User}
        />
        <Stack.Screen
          name="Repository"
          options={{ title: 'Repositório' }}
          component={Repository}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
