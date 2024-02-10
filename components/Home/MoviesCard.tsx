import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import tw from '../../tailwind'
import { Text } from '..'
import FastImage from 'react-native-fast-image'
import { MoviesCardProps } from '../../types'


/* The code is defining a functional component called `MoviesCard` using the arrow function syntax. It
is also specifying the type of the component using the `React.FC<MoviesCardProps>` type annotation. */
const MoviesCard : React.FC<MoviesCardProps> = ({ image, title }) => {
    return (
        /* The code is defining a React functional component called `MoviesCard`. It takes in two
        props, `image` and `title`. */
        <TouchableOpacity>
            <View style={tw`mx-2`}>
                <FastImage 
                source={{
                    uri: image,
                    priority: FastImage.priority.high
                }}
                resizeMode={FastImage.resizeMode.cover}
                    style={tw`w-[150px] h-[200px] rounded-lg mb-1 border-[1px] border-[#f1f1f1] opacity-70`} />
                <Text style={tw`font-bold text-black text-base px-2`}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MoviesCard