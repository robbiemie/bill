import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

export default function Page2Screen({navigation}) {
  const {setOptions} = navigation
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('page1')}
        title="Go to page1"
      />
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