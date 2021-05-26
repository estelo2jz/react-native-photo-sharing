import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import theme from '../../assets/themes';

const BottomSheetContent = ({handleClose}) => {
  return (
    <View style={styles.contentWrapper}>
      <TouchableOpacity
         onPress={() => alert("Create a new album!")}
         style={styles.buttonLarge}
      >
        <Text style={styles.bottomTitle}>Create a new album</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleClose}
        style={styles.buttonSmall}
      >
        <Text style={styles.bottomTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: theme.colors.lightGray,
    padding: theme.spacing.m,
    height: 200,
    marginTop: 55,
  },
  buttonLarge: {
    marginTop: theme.spacing.sm,
    marginHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.l,
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.m,
    alignItems: 'center',
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonSmall: {
    marginTop: theme.spacing.sm,
    marginHorizontal: theme.spacing.m,
    paddingVertical: theme.spacing.m,
    backgroundColor: theme.colors.white,
    borderRadius: theme.borderRadius.m,
    alignItems: 'center',
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  buttonTitle: {
    ...theme.textVariants.h2,
  }
})

export default BottomSheetContent
