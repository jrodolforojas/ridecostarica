import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
  label: string
  value: string | number
}

export const RideInfoLabel = ({ label, value }:Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.infoLabel}>{label}:</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20
  },
  infoLabel: {
    fontSize: 20,
    marginRight: 5
  },
  infoValue: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})
