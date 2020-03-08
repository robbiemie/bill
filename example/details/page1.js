import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';

export default function Page1Screen({navigation}) {
  const {setOptions} = navigation
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to Page1 !!!</Text>
      <Button title="跳转page2" onPress={()=> navigation.navigate("page2")}></Button>
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