import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Page1 from "./page1"
import Page2 from "./page2"
import Page3 from "./page3"
import Page4 from "./page4"

const Stack = createStackNavigator();

export default function HomeScreen({navigation}) {
  return (
    <Stack.Navigator initialRouteName="page1">
      <Stack.Screen name="page1" component={Page1} options={{title: "HomePage1"}}></Stack.Screen>
      <Stack.Screen name="page2" component={Page2} 
        options={({ route }) => ({ title: route.params?.title })}
      ></Stack.Screen>
      <Stack.Screen name="page3" component={Page3} options={{title: "FlatList"}}></Stack.Screen>
      <Stack.Screen name="page4" component={Page4} options={{title: "SectionList"}}></Stack.Screen>
    </Stack.Navigator>
  );
}