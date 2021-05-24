import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Pressable } from 'react-native';
import theme from '../../assets/themes';
import Avatars from './Avatars';

const Card = ({item}) => {
  return (
    <ImageBackground
      source={item.background}
      style={styles.imageBackground}
    >
      <Pressable>
        <View style={styles.imageContentContainer}>
          <View>
            <Text style={styles.imageTitle}>{item.title}</Text>
            <Text style={styles.imageSubtitle}>{`Create by ${item.user}`}</Text>
          </View>
        </View>
        <View>
          {/* Avatars go here */}
          console.log(item.avatars)
          <Avatars avatars={item.avatars} />
        </View>
      </Pressable>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    resizeMode: 'cover',
    overflow: 'hidden',
    height: theme.imageHeight.s,
    marginTop: theme.spacing.m,
    marginHorizontal: theme.spacing.m,
    paddingHorizontal: theme.spacing.m,
    borderRadius: theme.borderRadius.m,
    justifyContent: 'center',
  },
  imageContentContainer: {
  },
  imageTitle: {
    ...theme.textVariants.h1,
    color: theme.colors.white,
  },
  imageSubtitle: {
    ...theme.textVariants.body2,
    color: theme.colors.white,
  }
})

export default Card;
