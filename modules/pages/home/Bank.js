import React from 'react';
import { Text, View } from 'react-native';

export default function Page1Screen({navigation}) {
  const {setOptions} = navigation
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>收支明细</Text>
    </View>
  );
}