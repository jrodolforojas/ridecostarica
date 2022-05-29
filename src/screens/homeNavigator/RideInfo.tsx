import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const RideInfo = () => {
  return (
    <View style={styles.container}>
      <Text>Ride Info</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
