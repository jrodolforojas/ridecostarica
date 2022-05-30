import React from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { RideCard } from '../../components/RideCard'
import { Ride } from '../../interfaces/Ride'

const rides:Ride[] = [
  { origin: 'Quesada', destination: 'San Pedro', time: '4:00 PM', spaces: 2, driver: { name: 'Tom Holland', picture: 'https://phantom-elmundo.unidadeditorial.es/c0ac3c837756d84685a3adef8e23db2b/resize/473/f/webp/assets/multimedia/imagenes/2022/02/08/16443476365708.jpg' } },
  { origin: 'San Pedro', destination: 'Quesada', time: '7:00 PM', spaces: 4, driver: { name: 'Chris Evans', picture: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Chris_Evans_2020_%28cropped%29.jpg' } },
  { origin: 'Quesada', destination: 'Aguas Zarcas', time: '9:00 AM', spaces: 1, driver: { name: 'Elizabeth Olsen', picture: 'https://smoda.elpais.com/wp-content/uploads/2021/01/cover-elizabeth-1200x702.jpg' } },
  { origin: 'San Pedro', destination: 'Vázquez De Coronado', time: '3:00 AM', spaces: 3, driver: { name: 'Paulo Londra', picture: 'https://cdns-images.dzcdn.net/images/artist/03ac3759cf240640d902d9aa5a067632/500x500.jpg' } }
]

export const RideList = () => {
  return (
    <View style={styles.container}>
      {rides.map((ride, index) => (<RideCard key={index} ride={ride}/>))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: (Platform.OS === 'ios') ? 50 : 10
  },
  buttonContainer: {
    width: 150,
    height: 50,
    backgroundColor: 'red',
    fontSize: 20,
    justifyContent: 'center'
  }
})
