import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RootScreen from "./../pages/root/index"
import HomeScreen from "./HomeNavigator"

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="root">
        <Stack.Screen name="root" component={RootScreen} options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen name="home" component={HomeScreen} options={{title: "点滴记账"}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;