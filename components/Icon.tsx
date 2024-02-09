import React from 'react'
import { TouchableOpacity } from 'react-native'
import { IconProps } from '../types'
import FastImage from 'react-native-fast-image'

export const Icon = ({style, onPress, imageStyle, imageUrl, onPressOut} : IconProps) => {
    return (
        <TouchableOpacity style={style} onPress={onPress} onPressOut={onPressOut}>
            <FastImage 
            style={imageStyle} 
            source={{
                uri: imageUrl,
                priority: FastImage.priority.high
            }} />
        </TouchableOpacity>
    )
}
