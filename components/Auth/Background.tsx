import React from 'react'
import { ImageBackground, View } from 'react-native'
import tw from '../../tailwind'
import { BG_IMAGE, BG_SHADOW } from '../../constants'


const Background = () => {
  return (
    <View>
        <ImageBackground style={tw`w-full h-full absolute z-1`} source={BG_IMAGE} resizeMode='cover'/>
        <ImageBackground style={tw`w-full h-full z-2`} source={BG_SHADOW} resizeMode='cover'/>
    </View>
  )
}

export default Background