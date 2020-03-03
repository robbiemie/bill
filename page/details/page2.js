import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

export default function DetailsScreen({navigation}) {
  const {setOptions} = navigation
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to Page2 !!!</Text>
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