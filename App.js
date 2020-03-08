import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeStackScreen from "./example/home/index"
import DetailStackScreen from "./example/details/index"
import SettingsStackScreen from "./example/settings/index"

const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Detail') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }  else if (route.name === 'Setting') {
              iconName = focused ? 'ios-settings' : 'ios-settings';
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
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Detail" component={DetailStackScreen} />
        <Tab.Screen name="Setting" component={SettingsStackScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;