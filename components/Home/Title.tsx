import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import tw from '../../tailwind'
import { Text } from '..'
import { TitleProps } from '../../types'

export const Title : React.FC<TitleProps> = ({title, navigation, navigateTo}) => {
    return (
        <View style={tw`flex flex-row justify-between px-3 mt-3 mb-2`}>
            <Text style={tw`text-lg font-bold text-black`}>{title}</Text>
            <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}>
                <Text style={tw`text-base bg-[#007aff] font-semibold px-3 rounded-full text-white`}>
                    See all
                </Text>
            </TouchableOpacity>
        </View>
    )
}
