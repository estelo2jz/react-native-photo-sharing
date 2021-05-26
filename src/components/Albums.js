import React, {useLayoutEffect} from 'react';
import { View, Text, Pressable, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
// import Navigation from '../navigation';
import theme from '../../assets/themes/index';
import albumPage from '../../assets/data/albumPage';
import Card from './Card';
import Separator from './Separator';
import Feather from '@expo/vector-icons/Feather';

const Album = ({navigation, navigation: { setOptions }}) => {

  useLayoutEffect(() => {
    setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => console.log('Hello')}>
          <View style={styles.openSheetButton}>
            <Feather name='plus' size={16} color={theme.colors.white}  />
          </View>
        </TouchableOpacity>
      )
    })
  })

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
              <Card item={item} navigation={navigation} />

              {/* add separator if the index is 1 */}
              {index === 1 && <Separator />}
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
  },
  openSheetButton: {
    width: 32,
    height: 32,
    backgroundColor: theme.colors.primary,
    marginRight: theme.spacing.m,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default Album;