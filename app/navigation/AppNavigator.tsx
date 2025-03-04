import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from '../(tabs)/index';
import IntroducedFoods from '../(tabs)/IntroducedFoods';
import Foods from '../(tabs)/Foods';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="IntroducedFoods" component={IntroducedFoods} />
      <Stack.Screen name="Foods" component={Foods} />
    </Stack.Navigator>
  );
}
