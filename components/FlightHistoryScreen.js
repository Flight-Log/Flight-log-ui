import React, {useEffect} from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import FlightTime from './FlightTime'
import FlightCard from './FlightCard'


const FlightHistoryScreen = ({ route }) => {
 
  // console.log(route.params.userFlights)
  const userFlights = route.params.userFlights

  const flightCards = userFlights.map((flight) => {
    
    const flightId = flight.id;
    const flightDetails = flight.attributes;
    
    return (

      <View key={flightId}>
        <FlightCard 
          date={flightDetails.date}
          departure={flightDetails.start_location}
          arrival={flightDetails.end_location}
          aircraft={flightDetails.aircraft}
          pilot={flightDetails.role}
        />
      </View>
    )
  })

  return (
    <View style={[ styles.container, { flexDirection: 'column' }]}>
      <FlightTime userFlights={route.params.userFlights} />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.cardsContainer}>{flightCards}</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  cardsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    
  },
});

export default FlightHistoryScreen
