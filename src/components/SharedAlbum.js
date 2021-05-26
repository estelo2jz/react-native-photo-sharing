import React from 'react';
import {View, Text} from 'react-native';

// when you pass something as a paramater, you will need to grab the route prop
const SharedAlbum = ({ route }) => {

  // what we call it in the Card component as a parameter
  const {album} = route.params;
  console.log(album);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Shared Album</Text>
    </View>
  )
}

export default SharedAlbum;
