import React from 'react'
import { TouchableOpacity } from 'react-native'
import { IconProps } from '../types'
import FastImage from 'react-native-fast-image'

export const Icon = ({style, onPress, imageStyle, imageUrl} : IconProps) => {
    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <FastImage 
            style={imageStyle} 
            source={{
                uri: imageUrl,
                priority: FastImage.priority.high
            }} />
        </TouchableOpacity>
    )
}
