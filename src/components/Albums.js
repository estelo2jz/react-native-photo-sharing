import React from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';
// import Navigation from '../navigation';
import theme from '../../assets/themes/index';
import albumPage from '../../assets/data/albumPage';
import Card from './Card';

const Album = ({navigation}) => {
  return (
    // <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //   <Text>Album</Text>
    //   <Pressable
    //     onPress={() => navigation.navigate("Shared Album")}
    //   >
    //     <Text>Click me</Text>
    //   </Pressable>
    // </View>
    <>
      <ScrollView>
        <View style={styles.albumContainer}>
          {albumPage.map((item, index) => 
            <View key={index}>
              <Card item={item} />
            </View>
          )}
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  albumContainer: {
    marginBottom: theme.spacing.l,
  }
})

export default Album;