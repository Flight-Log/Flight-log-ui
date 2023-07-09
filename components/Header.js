import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
    {/* <Image source={require('../assets/hero-img.png')} style={styles.backgroundImage} /> */}
    <Text style={styles.headerText}>FLIGHT LOG</Text>
    </View>
  
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 2,
  },backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  headerText: {
    color: '#1D275F',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 75,
    marginLeft: 30
  },
});