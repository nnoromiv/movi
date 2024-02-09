import React from 'react'
import { Text } from '.'
import { View,TouchableOpacity } from 'react-native'
import tw from '../tailwind'
import { Image } from 'react-native'
import { HeaderProps } from '../types'
import { LOGO } from '../constants'

const Header = ({ goBack=true, header, navigation, logo }: HeaderProps) => {
    return (
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