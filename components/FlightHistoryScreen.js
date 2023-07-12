import React, {useEffect} from 'react'
import { View, Text, ScrollView, StyleSheet, ImageBackground } from 'react-native'
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
          id={flightId}
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
    <ImageBackground source={require('../assets/hero-img.png')} style={styles.imageBackground}>
      <View style={[ styles.container, { flexDirection: 'column' }]}>
        <FlightTime style={styles.timeContainer} userFlights={route.params.userFlights} />
        <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
          <View style={styles.cardsContainer}>{flightCards}</View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  timeContainer: {
    flex: 2,
  },
  scrollContainer: {
    flex: 3,
  
  },
  contentContainer: {
    flexGrow: 1,
  },
  cardsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
    
  },
});

export default FlightHistoryScreen
