import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image, Dimensions } from 'react-native';
import { Audio } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import PuzzleJohn from './PuzzleJohn';

const Stack = createNativeStackNavigator();
const {width, height} = Dimensions.get('window');

const Elevator = ({navigation}) => {
    return (
            <ImageBackground
                source = {require('./assets/elevator.jpg')}
                style = {styles.background}
                >
                    <TouchableOpacity style={styles.button_3r}
                    onPress={() => {
                    console.log("Navigating to Floor 3R"); // Debugging log
                    navigation.navigate('ThreeOne');
        }}></TouchableOpacity>
        <TouchableOpacity style={styles.button_4}
                    ></TouchableOpacity>
        <TouchableOpacity style={styles.button_5}
                    ></TouchableOpacity>
            </ImageBackground>
    )
}

const ThreeOne = ({navigation}) => {
    return (
        <ImageBackground
            source = {require('./assets/three_one.jpg')}
            style = {styles.background}
            >
                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to Elevator"); // Debugging log
                        navigation.navigate('Elevator');
            }}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '270deg' }],
                    top: height * 0.35,
                    left: width * -.04,
                }]}>
                </Image>
                
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to ThreeTwo"); // Debugging log
                        navigation.navigate('ThreeTwo');
            }}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '180deg' }],
                    top: height * -.04,
                    left: width * .35,
                }]}>
                </Image>
                
                </TouchableOpacity>
        </ImageBackground>
    )
}

const ThreeTwo = ({navigation}) => {
    return (
        <ImageBackground
            source = {require('./assets/three_two.jpg')}
            style = {styles.background}
            >
                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to ThreeOne"); // Debugging log
                        navigation.navigate('ThreeOne');
            }}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '270deg' }, {rotateY: '60deg'}],
                    top: height * 0.35,
                    left: width * -.15,
                    width: width * 0.2,
                    height: height * 0.1,
                }]}>
                </Image>
                
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to ThreeThreeFront"); // Debugging log
                        navigation.navigate('ThreeThreeFront');
            }}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '90deg' }, { rotateY: '60deg'}],
                    top: height * -.04,
                    left: width * -.11,
                }]}>
                </Image>
                
                </TouchableOpacity>
        </ImageBackground>
    )
}

const ThreeThreeFront = ({navigation}) => {
    return (
        <ImageBackground
            source = {require('./assets/Three_Three_Front.jpg')}
            style = {styles.background}
            >
                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to ThreeThreeBack"); // Debugging log
                        navigation.navigate('ThreeThreeBack');
            }}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '270deg' }, { rotateY: '60deg'}],
                    top: height * 0.35,
                    left: width * -.1,
                    width: width * 0.2,
                    height: height * 0.1,
                }]}>
                </Image>
                
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to ThreeONine"); // Debugging log
                        navigation.navigate('ThreeONine');
            }}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '0deg' }, {rotateX: '60deg'}],
                    top: height * .15,
                    left: width * -.4,
                }]}>
                </Image>
                
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to ThreeTwo"); // Debugging log
                        navigation.navigate('ThreeTwo');
            }}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '0deg' }, { rotateX: '40deg'}],
                    top: height * 0.35,
                    left: width * -.4,
                    width: width * 0.2,
                    height: height * 0.1,
                }]}>
                </Image>
                
                </TouchableOpacity>
                
        </ImageBackground>
    )
}

const ThreeThreeBack = ({navigation}) => {
    return (
        <ImageBackground
            source = {require('./assets/Three_Three_Back.jpg')}
            style = {styles.background}
            >
                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to ThreeThreeFront"); // Debugging log
                        navigation.navigate('ThreeThreeFront');
            }}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '270deg' }],
                    top: height * 0.35,
                    left: width * -.04,
                }]}>
                </Image>
                
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to ThreeBathroom"); // Debugging log
                        navigation.navigate('ThreeBathroom');
            }}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '180deg' }, {rotateX: '60deg'}],
                    top: height * .05,
                    left: width * .15,
                }]}>
                </Image>
                
                </TouchableOpacity>
        </ImageBackground>
    )
}

const ThreeBathroom = ({navigation}) => {
    const [sound, setSound] = useState(null);

  const playSound = async () => {
    if (sound) {
      await sound.unloadAsync();
      setSound(null);
    }

    const { sound: newSound } = await Audio.Sound.createAsync(
      require('./assets/bathroom_goblin.mp3') // Replace with your sound file path
    );
    setSound(newSound);
    await newSound.playAsync();
  };

  // Clean up sound when the component unmounts
  useEffect(() => {
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);
    
    return (
        <ImageBackground
            source = {require('./assets/Three_Bathroom.jpg')}
            style = {styles.background}
            >
                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to ThreeThreeBack"); // Debugging log
                        navigation.navigate('ThreeThreeBack');
            }}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '270deg' }],
                    top: height * 0.35,
                    left: width * -.04,
                }]}>
                </Image>
                
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={playSound}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[{
                    transform: [{ rotate: '0deg' }],
                    top: height * .4,
                    left: width * -.35,
                    width: width * .5,
                    height: height * .2,
                    borderRadius: 30,
                    opacity: 0
                }]}>
                </Image>
                
                </TouchableOpacity>
                
        </ImageBackground>
    )
}

const ThreeONine = ({navigation}) => {
    return (
        <ImageBackground
            source = {require('./assets/Three_O_Nine.jpg')}
            style = {styles.background}
            >
                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to ThreeThreeFront"); // Debugging log
                        navigation.navigate('ThreeThreeFront');
            }}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '270deg' }],
                    top: height * 0.35,
                    left: width * -.04,
                }]}>
                </Image>
                
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to ThreeONinePuzzle"); // Debugging log
                        navigation.navigate('ThreeONinePuzzle');
            }}>
                
                <Image
                source = {require('./assets/green_navigation_arrow.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '10deg' }, {rotateX: '60deg'}, {rotateY: '0deg'}],
                    top: height * .02,
                    left: width * .2,
                    width: width * .05,
                    height: height * .02,

                }]}>
                </Image>
                
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        console.log("Navigating to John Puzzle"); // Debugging log
                        navigation.navigate('PuzzleJohn');
            }}>
                
                <Image
                source = {require('./assets/john_ghost.png')}
                style={[styles.arrow, {
                    transform: [{ rotate: '0deg' }, {rotateX: '0deg'}, {rotateY: '0deg'}],
                    top: height * -.10,
                    left: width * .31,
                    width: width * 0.25,
                    height: height * 0.25,
                }]}>
                </Image>
                
                </TouchableOpacity>
        </ImageBackground>
    )
}

const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator
        initialRouteName="Elevator"
        screenOptions={{headerShown: false}}
      >
            <Stack.Screen name="Elevator" component = {Elevator}></Stack.Screen>
            <Stack.Screen name="ThreeOne" component = {ThreeOne}></Stack.Screen>
            <Stack.Screen name="ThreeTwo" component = {ThreeTwo}></Stack.Screen>
            <Stack.Screen name="ThreeThreeFront" component = {ThreeThreeFront}></Stack.Screen>
            <Stack.Screen name="ThreeThreeBack" component = {ThreeThreeBack}></Stack.Screen>
            <Stack.Screen name="ThreeBathroom" component = {ThreeBathroom}></Stack.Screen>
            <Stack.Screen name="ThreeONine" component = {ThreeONine}></Stack.Screen>
            <Stack.Screen name="PuzzleJohn" component = {PuzzleJohn}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#000000'},
    
    background: {
        flex: 1,
        resizeMode: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: '#000000'
      },
    button_3r: {
        width: width * 0.09,
        height: height * 0.04,
        borderRadius: 10,
        backgroundColor: '#17FA0A',
        position: 'absolute',
        top: height * 0.397,
        left: width * 0.205,
        opacity: .5,

        // Shadow properties
        shadowColor: '#17FA0A',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button_4: {
        width: width * 0.09,
        height: height * 0.04,
        borderRadius: 10,
        backgroundColor: '#e9171c',
        position: 'absolute',
        top: height * 0.397,
        left: width * 0.425,
        opacity: .5,

        // Shadow properties
        shadowColor: '#e9171c',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button_5: {
        width: width * 0.09,
        height: height * 0.04,
        borderRadius: 10,
        backgroundColor: '#e9171c',
        position: 'absolute',
        top: height * 0.397,
        left: width * 0.65,
        opacity: .5,

        // Shadow properties
        shadowColor: '#e9171c',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        elevation: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrow: {
        width: width * 0.09,
        height: height * 0.04,
        position: 'absolute'
    }
    })
    

    export default App;