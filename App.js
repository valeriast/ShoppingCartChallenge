
import React from 'react';
import {
  SafeAreaView,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CartRoutes from './src/pages/routes';
import CartProvider from './src/Context/CartContext';

export default function App(){
  
  return (
    <NavigationContainer>
      <CartProvider>
        <CartRoutes/>
      </CartProvider>
    </NavigationContainer>
  );
}
