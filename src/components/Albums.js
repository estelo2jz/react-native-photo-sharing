import React from 'react';
import { View, Text, Pressable } from 'react-native';
// import Navigation from '../navigation';

const Album = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Album</Text>
      <Pressable
        onPress={() => navigation.navigate("Shared Album")}
      >
        <Text>Click me</Text>
      </Pressable>
    </View>
  )
}

export default Album;