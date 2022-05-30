import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { FadeInImage } from '../../components/FadeInImage'
import { RideInfoLabel } from '../../components/RideInfoLabel'
import { HomeStackParams } from '../../navigator/HomeNavigator'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<HomeStackParams, 'RideInfo'> {}

export const RideInfo = ({ navigation, route }: Props) => {
  const { ride } = route.params
  const { driver } = ride
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'red', height: 50, marginBottom: 10 }}>
        <Text>Back</Text>
      </View>
      <View style={styles.profilePictureContainer}>
        <FadeInImage uri={driver.picture} style={styles.profilePicture}/>
        <Text style={styles.driverNameLabel}>{driver.name}</Text>
        <Text style={{ marginTop: 5 }}>Ofrece ride</Text>
      </View>
      <View style={styles.infoContainer}>
        {/* Origin */}
        <RideInfoLabel label='Desde' value={ride.origin}/>
        {/* Destination */}
        <RideInfoLabel label='Hacia' value={ride.destination}/>
        {/* Time */}
        <RideInfoLabel label='Hora' value={ride.time}/>
        {/* Spaces */}
        <RideInfoLabel label='Espacios' value={ride.spaces}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: (Platform.OS === 'ios') ? 50 : 0
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginBottom: 30
  },
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 100
  },
  driverNameLabel: {
    fontSize: 20,
    marginTop: 10
  },
  infoContainer: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 30,
    padding: 5
  }
})
