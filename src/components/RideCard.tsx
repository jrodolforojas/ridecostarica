import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ride } from '../interfaces/Ride'
import { FadeInImage } from './FadeInImage'
import { LocationTitleCard } from './LocationTitleCard'
import { CommonActions } from '@react-navigation/native'

interface Props {
  ride: Ride
}

const navigation = useNavigation()

export const RideCard = ({ ride }: Props) => {
  const { origin, destination, time, spaces, driver: { name: driverName, picture: driverPicture } } = ride

  const handleGoToRideInfo = () => {
    navigation.dispatch(CommonActions.navigate('RideInfo', { ride }))
  }

  return (
    <TouchableOpacity style={styles.container} onPress={handleGoToRideInfo}>
      <View style={{ flexDirection: 'row' }}>
        {/* Profile picture */}
        <TouchableOpacity onPress={() => console.log(`Hello ${driverName}`)}>
          <FadeInImage uri={driverPicture} style={styles.profilePicture}/>
        </TouchableOpacity>
        <View style={{ marginLeft: 10 }}>
          {/* Origin */}
          <LocationTitleCard label='Desde' location={origin}/>
          {/* Destination */}
          <LocationTitleCard label='Hacia' location={destination}/>
          <View style={{ marginTop: 10 }}>
            {/* Time */}
            <Text style={styles.label}>{time}</Text>
            {/* Space */}
            <Text style={styles.label}>{`${spaces} espacios`}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 10,
    padding: 10
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  label: {
    color: '#051923'
  }
})
