import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escape Room Game</Text>
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => {
          console.log("Navigating to Map"); // Debugging log
          navigation.navigate('Map');
        }}
      >
        <Text style={styles.startButtonText}>Go to Williams Hall Map</Text>
      </TouchableOpacity>
    </View>
  );
};

const WilliamsHallMap = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Williams Hall Map</Text>
      <TouchableOpacity
        style={styles.roomButton}
        onPress={() => {
          console.log("Navigating to CS Lounge 306 Puzzle"); // Debugging log
          navigation.navigate('Puzzle', { roomName: 'CS Lounge 306' });
        }}
      >
        <Text style={styles.roomButtonText}>CS Lounge 306</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.roomButton}
        onPress={() => {
          console.log("Navigating to Lecture Hall 225 Puzzle"); // Debugging log
          navigation.navigate('Puzzle', { roomName: 'Lecture Hall 225' });
        }}
      >
        <Text style={styles.roomButtonText}>Lecture Hall 225</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.roomButton}
        onPress={() => {
          console.log("Navigating to Mobile Development 309 Puzzle"); // Debugging log
          navigation.navigate('Puzzle', { roomName: 'Mobile Development 309' });
        }}
      >
        <Text style={styles.roomButtonText}>Mobile Development 309</Text>
      </TouchableOpacity>
    </View>
  );
};

const PuzzleScreen = ({ route }) => {
  const { roomName } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Puzzle in {roomName}</Text>
      <Text style={styles.puzzlePlaceholder}>🧩 [Placeholder for Puzzle]</Text>
      <Text style={styles.instructions}>Interact with the puzzle here!</Text>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Map" component={WilliamsHallMap} />
        <Stack.Screen name="Puzzle" component={PuzzleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  startButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
  },
  roomButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  roomButtonText: {
    color: 'white',
    fontSize: 18,
  },
  puzzlePlaceholder: {
    fontSize: 40,
    marginVertical: 20,
    textAlign: 'center',
  },
  instructions: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});

export default App;
