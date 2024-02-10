import React from 'react'
import { View } from 'react-native'
import { LIST, PLAY } from '../../constants'
import tw from '../../tailwind'
import { Button } from '..'
import FastImage from 'react-native-fast-image'
import { HeroProps } from '../../types'

/* The line `const Hero: React.FC<HeroProps> = ({ image }) => {` is defining a functional component
named `Hero` that accepts a prop named `image`. The prop `image` is of type `HeroProps`, which is a
type defined elsewhere in the code. The component returns JSX code that renders an image and two
buttons. */
const Hero: React.FC<HeroProps> = ({ image }) => {
    return (
        /* The code you provided is creating a Hero component in a TypeScript React application. */
        <View>
            <FastImage
                source={{
                    uri: image,
                    priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.cover}
                style={tw`h-[500px] opacity-80 rounded-b-xl`}
            />

          /* The code you provided is creating a container view with two buttons inside it. */
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