import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function Page6Screen({navigation}) {
  const {setOptions} = navigation
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to Page6 !!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 200,
    height:50,
    backgroundColor: '#ccc'
  }
})