import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { IconProps } from '../types'

export const Icon = ({style, onPress, imageStyle, imageUrl} : IconProps) => {
    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <Image style={imageStyle} source={imageUrl} />
        </TouchableOpacity>
    )
}
