import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/main';
import Product from './pages/product';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#DA552F',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen name="Main" component={Main} options={{title: 'JSHunt'}} />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
}
