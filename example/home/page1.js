import React from 'react';
import { Text, Button, View } from 'react-native';

export default function Page1Screen({navigation}) {
  const {setOptions} = navigation
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to Page1 !!!</Text>
      <Button title="动态修改Title" onPress={()=> navigation.navigate("page2")}></Button>
      <Button title="FlatList" onPress={()=> navigation.navigate("page3")}></Button>
      <Button title="SectionList" onPress={()=> navigation.navigate("page4")}></Button>
    </View>
  );
}