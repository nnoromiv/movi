import React from 'react'
import { View } from 'react-native'
import { LIST, PLAY } from '../../constants'
import tw from '../../tailwind'
import { Button } from '..'
import FastImage from 'react-native-fast-image'
import { HeroProps } from '../../types'

const Hero: React.FC<HeroProps> = ({ image }) => {
    return (
        <View>
            <FastImage
                source={{
                    uri: image,
                    priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.cover}
                style={tw`h-[500px] opacity-80 rounded-b-xl`}
            />

            <View style={tw`w-full absolute`}>
                <View style={tw`flex flex-row relative top-full  gap-3 mx-3`}>
                    <Button title='' style={'py-3 opacity-80 px-10 rounded-xl'} image={PLAY} />
                    <Button title='' style={'py-3 opacity-80 px-10 rounded-xl'} image={LIST} />
                </View>
            </View>
        </View>
    )
}

export default Hero