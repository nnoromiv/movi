import React, { useState } from 'react'
import { Icon, Text } from '..'
import { TouchableOpacity, View } from 'react-native'
import tw from '../../tailwind'
import { TABS } from '../../constants'

interface TabProps {
    navigation: any,
    screen: string
}

export const Tab: React.FC<TabProps> = ({ navigation, screen }) => {

    const [active, setActive] = useState(screen)

    const handlePress = (link: string) => {
        setActive(link)
        navigation.navigate(link)
        setActive(link)
    }

    return (
        <View style={tw`flex-row justify-around items-center h-[60px] border-t-[1px] border-t-[#d3d3d3] rounded-t-lg mt-1 py-2`}>
            {
                TABS.map(item => (
                    <TouchableOpacity key={item._id}>
                        <View  >
                            <Icon
                                onPress={() => handlePress(item.screen)}
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
