import React from 'react';
import { Text, Button, View } from 'react-native';

export default function Page1Screen({navigation}) {
  const {setOptions} = navigation
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to Page1 !!!</Text>
      <Button title="跳转page2" onPress={()=> navigation.navigate("page2")}></Button>
      <Button title="跳转page3" onPress={()=> navigation.navigate("page3")}></Button>
    </View>
  );
}