import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Login';
import Index from '../(tabs)/index';
import IntroducedFoods from '../(tabs)/IntroducedFoods';
import Foods from '../(tabs)/Foods';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="IntroducedFoods" component={IntroducedFoods} />
        <Stack.Screen name="Foods" component={Foods} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
