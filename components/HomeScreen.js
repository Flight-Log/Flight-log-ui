import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <ImageBackground source={require('../assets/hero-img.png')} style={styles.imageBackground} testID="image-background">
      <View style={styles.container}>
        <Text style={styles.title} testID="logo-text">Flight Log</Text>
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.text} testID="question-text">What would you like to do today?</Text>
          </View>
          <TouchableOpacity
            style={styles.button}
            testID="log-flight-button"
            onPress={() => navigation.navigate('LogFlight')}
          >
            <Text style={styles.buttonText}>Log a Flight</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            testID="view-flights-button"
            onPress={() => navigation.navigate('Flight History')}
          >
            <Text style={styles.buttonText}>View Flight History</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  title: {
    color: '#ffffff',
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginBottom: 60,
  },
  textContainer: {
    marginBottom: 20,
  },
  text: {
    color: '#1f4f99',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1f4f99',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginVertical: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
