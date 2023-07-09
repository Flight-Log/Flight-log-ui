import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './Header/Header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.name}>
      {/* Name component */}
      <Text style={styles.nameText}>Hi, John!</Text>
      </View>
      <View style={styles.label}>
      {/* label component */}
      <Text style={styles.labelText}>Log a Flight</Text>
      </View>
      <View style={styles.form}>
        {/* Form component */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  name: {
  height: 60,
  backgroundColor:'#ffffff',
  },
  label: {
  justifyContent: 'center',
  alignItems: 'center',
   height:80,
    backgroundColor: '#2B3A8F'
  },
 form: {
    flex: 4,
    backgroundColor: '#ffffff',
  },
  nameText: {
    color: 'black',
    fontSize: 20,
    margin: 20
  },
  labelText: {
    color: 'white',
    fontSize: 20 ,
    fontWeight: 'regular',
    margin: 20,
    fontWeight: 'bold'
  }

});

