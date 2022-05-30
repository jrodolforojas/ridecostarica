import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

interface Props {
  label: string
  location: string
}

export const LocationTitleCard = ({ label, location }: Props) => {
  return (
    <View style={{ flexDirection: 'row', marginRight: 10 }}>
      {/* Origin */}
      <Text style={{ marginTop: 5, marginRight: 5 }}>{label}:</Text>
      <Text style={styles.locationTitle}>{location}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  locationTitle: {
    fontSize: (Platform.OS === 'ios') ? 18 : 20,
    color: '#051923',
    fontWeight: 'bold'
  }
})
