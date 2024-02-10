import React, { useState } from 'react'
import { Icon, Text } from '..'
import { TouchableOpacity, View } from 'react-native'
import tw from '../../tailwind'
import { TABS } from '../../constants'

/* The code is exporting a functional component named `Tab`. The component takes two props,
`navigation` and `screen`, of type `any`. */
export const Tab = ({ navigation, screen }: any) => {

    const [active, setActive] = useState(screen)

    return (
        /* The code you provided is rendering a tab bar component in a React Native application. */
        <View style={tw`flex-row justify-around items-center h-[60px] border-t-[1px] border-t-[#d3d3d3] rounded-t-lg mt-1 py-2`}>
            {
                TABS.map(item => (
                    <TouchableOpacity key={item._id}>
                        <View  >
                            <Icon
                                onPress={() => setActive(item.screen)}
                                onPressOut={() => navigation.navigate(item.screen)}
                                imageUrl={
                                    active === item.screen ?
                                        item.activeIcon
                                        : item.inActiveIcon
                                }
                                imageStyle={tw`w-[30px] h-[30px] self-center`} />
                            <Text
                                style={
                                    tw`text-center ${active === item.screen ?
                                        'text-[#007aff]' :
                                        'text-[#d3d3d3]'
                                        }`
                                }>
                                {item.title}
                            </Text>
                        </View>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}
