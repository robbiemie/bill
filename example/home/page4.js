import React from 'react';
import { Text, Button, View } from 'react-native';
import SectionLists from "./seactionlist"

export default function Page3Screen({navigation}) {
  const {setOptions} = navigation
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SectionLists/>
    </View>
  );
}