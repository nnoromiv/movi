import { SafeAreaView, StyleSheet, Text} from 'react-native'
import React from 'react'
import BackGroundImage from '../components/getStarted/BackGroundImage'

const GetStartedScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{ backgroundColor: 'black'}}>
      <BackGroundImage />
      <Text style={styles.textStyle}> Welcome to Movi </Text>
      <Text style={styles.subStyle}> The best movie streaming app of the century to make your days great!</Text>
      <Text style={styles.button} 
      onPress={() => navigation.push('LetYouInScreen')}>
        Get started
      </Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({
  textStyle : {
    fontFamily: 'Urbanist',
    color: 'white', 
    fontSize: 40,
    fontWeight: 'bold',
    zIndex: 5, 
    position: 'absolute',
    alignSelf: 'center',
    bottom: 200
  },
  subStyle : {
    fontFamily: 'Urbanist',
    color: 'white', 
    fontSize: 18,
    fontWeight: 'medium',
    zIndex: 4, 
    position: 'absolute',
    textAlign: 'center',
    bottom: 150,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: 'center'
  },
  button: {
    color: 'white',
    zIndex: 3,
    width: 380,
    height: 58,
    backgroundColor: '#007aff',
    paddingHorizontal: 16,
    paddingVertical: 18,
    borderRadius: 100,
    position: 'absolute',
    textAlign: 'center',
    bottom: 30,
    alignSelf: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.2
}
})


export default GetStartedScreen