import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CreateRide } from '../screens/homeNavigator/CreateRide'
import { RideInfo } from '../screens/homeNavigator/RideInfo'
import { RideList } from '../screens/homeNavigator/RideList'
import { Ride } from '../interfaces/Ride'

export type HomeStackParams = {
  RideList: undefined,
  RideInfo: {ride: Ride},
  CreateRide: undefined
}

const Stack = createNativeStackNavigator<HomeStackParams>()

export const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RideList" component={RideList} />
      <Stack.Screen name="RideInfo" component={RideInfo} />
      <Stack.Screen name="CreateRide" component={CreateRide} />
    </Stack.Navigator>
  )
}
