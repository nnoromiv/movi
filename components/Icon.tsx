import React from 'react'
import { TouchableOpacity } from 'react-native'
import { IconProps } from '../types'
import FastImage from 'react-native-fast-image'

/* The line `export const Icon = ({style, onPress, imageStyle, imageUrl, onPressOut} : IconProps) => {`
is defining a functional component called `Icon`. It is using destructuring to extract the
properties `style`, `onPress`, `imageStyle`, `imageUrl`, and `onPressOut` from the `IconProps`
object. These properties are then used within the component to customize the rendering of the
`TouchableOpacity` and `FastImage` components. */
export const Icon = ({style, onPress, imageStyle, imageUrl, onPressOut} : IconProps) => {
    return (
       /* The code is defining a custom component called `Icon` that renders a `TouchableOpacity`
       component from the `react-native` library. The `TouchableOpacity` component is a wrapper that
       provides touchable behavior to its child components. */
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
