import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  IntroScreen,
  NewRequestScreen,
  RequestMoneyScreen,
} from '../screens';
import Routes from './Routes';
import Colors from '../constants/Colors';
const AppStack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: Colors.background,
        },
      }}>
      <AppStack.Navigator>
        <AppStack.Screen
          name={Routes.IntroScreen}
          component={IntroScreen}
          options={{
            headerShown: false,
          }}
        />
        <AppStack.Screen name={Routes.HomeScreen} component={HomeScreen} />
        <AppStack.Screen
          name={Routes.NewRequest}
          component={NewRequestScreen}
        />
        <AppStack.Screen
          name={Routes.RequestMoney}
          component={RequestMoneyScreen}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
