import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Page1 from "./page1"
import Page2 from "./page2"

const Drawer = createDrawerNavigator();

export default function SettingsScreen({navigation}) {
  return (
    <Drawer.Navigator initialRouteName="page1">
      <Drawer.Screen name="page1" component={Page1} options={{ drawerLabel: 'page1' }}/>
      <Drawer.Screen name="page2" component={Page2} options={{ drawerLabel: 'page2' }}/>
    </Drawer.Navigator>
  );
}