import React from 'react'
import { Text } from '.'
import { View,TouchableOpacity } from 'react-native'
import tw from '../tailwind'
import { Image } from 'react-native'
import { HeaderProps } from '../types'
import { LOGO } from '../constants'

/* The code is defining a functional component called `Header` that takes in four props: `goBack`,
`header`, `navigation`, and `logo`. The `goBack` prop has a default value of `true`. The component
returns JSX code that renders a header with a back button, a header text, and an optional logo
image. */
const Header = ({ goBack=true, header, navigation, logo }: HeaderProps) => {
    return (
       /* The code is defining a React component called `Header`. */
        <View style={tw`flex flex-row justify-between items-center pt-3`}>

            {
                goBack &&
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={tw`text-4xl font-extrabold `} >&larr;</Text>
                </TouchableOpacity>
            }

            {
                !logo ?
                <Text style={tw`text-gray-600 font-bold text-base ml-auto`}>{header}</Text>
                :
                <Text style={tw`text-gray-600 font-bold text-base text-center ml-5`}>{header}</Text>

            }

            {
                logo &&
                <Image source={LOGO} style={tw`w-20 h-10 mt-3 -mr-7`} />
            }

        </View>
    )
}

export default Header