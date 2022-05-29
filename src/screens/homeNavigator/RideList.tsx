import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/core'
import { CommonActions } from '@react-navigation/routers'

const navigation = useNavigation()

export const RideList = () => {
  return (
    <View style={styles.container}>
      <Text>Ride List</Text>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.dispatch(CommonActions.navigate('RideInfo'))}>
        <Text>Ride Info</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    width: 150,
    height: 50,
    backgroundColor: 'red',
    fontSize: 20,
    justifyContent: 'center'
  }
})
