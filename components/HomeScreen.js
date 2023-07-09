import React from 'react'
import { View, Text, Button } from 'react-native'

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Flight Log</Text>
      <Button
        title="Log a Flight"
        onPress={() => navigation.navigate('LogFlight')}
      />
      <Button
        title="Previous Flights"
        onPress={() => navigation.navigate('FlightHistory')}
      />
    </View>
  )
}

export default HomeScreen
