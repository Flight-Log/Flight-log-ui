import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import FlightTime from './FlightTime'

const FlightHistoryScreen = ({ route }) => {

  return (
    <View>
      <FlightTime userFlights={route.params.userFlights} />
      <Text>This is the flight history component</Text>
    </View>
  );
};

export default FlightHistoryScreen
