import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Link } from '@react-navigation/native'

const FlightCard = ({ date, departure, arrival, aircraft, pilot }) => {

  return (
    <View style={styles.card}>
      <Text style={styles.label}>Date:</Text>
      <Text style={styles.text}>{date}</Text>
      <Text style={styles.label}>Aircraft:</Text>
      <Text style={styles.text}>{aircraft}</Text>
      <Text style={styles.label}>Role:</Text>
      <Text style={styles.text}>{pilot}</Text>
      <Text style={styles.label}>Departure:</Text>
      <Text style={styles.text}>{departure}</Text>
      <Text style={styles.label}>Arrival:</Text>
      <Text style={styles.text}>{arrival}</Text>
   </View>
);
};

const styles = StyleSheet.create({
card: {
  backgroundColor: 'lightblue',
  borderRadius: 8,
  padding: 16,
  marginBottom: 5,
  elevation: 2,
  height: 200,
  width: 300,
},
label: {
  fontWeight: 'bold',
  marginBottom: 4,
},
text: {
  marginBottom: 0,
},
});


export default FlightCard