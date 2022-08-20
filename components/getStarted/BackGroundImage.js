import { View, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

const BackGroundImage = () => {
  return (
    <View>
        <ImageBackground source={require('../../assets/layout.png')} 
        style={styles.backImage}>
        </ImageBackground>
        <ImageBackground source={require('../../assets/shadow.png')} 
        style={styles.shadow}></ImageBackground>
    </View>
  )
}


const styles = StyleSheet.create ({
      backImage : {
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: 1,
      },
      shadow: {
        width: '100%',
        height: '100%',
        zIndex: 2,
      },
  })

export default BackGroundImage