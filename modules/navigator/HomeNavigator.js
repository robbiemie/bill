import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeStackScreen from "../pages/home/index"
import ChartStackScreen from "../pages/chart/index"
import MemorialStackScreen from "../pages/memorial/index"
import SettingsStackScreen from "../pages/settings/index"

const Tab = createBottomTabNavigator();
function HomeNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'md-wallet';
          } else if (route.name === 'Chart') {
            iconName = 'md-stats';
          }  else if (route.name === 'Memorial') {
            iconName = 'md-pricetags';
          }   else if (route.name === 'Settings') {
            iconName = 'ios-settings';
          } 
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home"     component={HomeStackScreen} options={{title: "收支明细"}}/>
      <Tab.Screen name="Chart"  component={ChartStackScreen} options={{title: "趋势图"}} />
      <Tab.Screen name="Memorial" component={MemorialStackScreen} options={{title: "备忘录"}} />
      <Tab.Screen name="Settings" component={SettingsStackScreen} options={{title: "设置"}} />
    </Tab.Navigator>
  );
}

export default HomeNavigator;