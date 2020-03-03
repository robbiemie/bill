import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Page1 from "./page1"
import Page2 from "./page2"

const Stack = createStackNavigator();

export default function HomeScreen({navigation}) {
  return (
    <Stack.Navigator initialRouteName="page1">
      <Stack.Screen name="page2" component={Page2} options={{title: "全民K歌"}}></Stack.Screen>
    </Stack.Navigator>
  );
}