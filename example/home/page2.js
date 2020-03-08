import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Page2Screen({navigation}) {
  const {setOptions} = navigation
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>动态修改 title</Text>
      <TextInput style={styles.input} 
        onChangeText={text=>{
          setOptions({
            title: text
        })
      }}
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