import React from 'react';
import { Button, View } from 'react-native';

export default function Page1Screen({navigation}) {
  const {setOptions} = navigation
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('page2')}
        title="Go to page2"
      />
    </View>
  );
}