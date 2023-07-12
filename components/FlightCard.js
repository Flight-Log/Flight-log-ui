import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Link } from '@react-navigation/native'

const FlightCard = ({ date, departure, arrival, aircraft, pilot, id }) => {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.text}>{date}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Aircraft:</Text>
          <Text style={styles.text}>{aircraft}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Departure:</Text>
          <Text style={styles.text}>{departure}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Role:</Text>
          <Text style={styles.text}>{pilot}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.label}>Arrival:</Text>
          <Text style={styles.text}>{arrival}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
    elevation: 2,
    height: 175,
    width: 250,
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  column: {
    flex: 1,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  text: {
    marginBottom: 0,
  },
});

export default FlightCard;