import React from 'react'
import { SafeAreaView, View } from 'react-native'
import tw from '../../tailwind'
import { Background, Button, Text } from '../../components'

const Welcome = ({navigation} : any) => {
    return (
        /* The code block you provided is rendering a welcome screen for a movie streaming app. */
        <SafeAreaView style={tw`bg-black`}>
            <Background />
            <View style={tw`absolute z-5 bottom-[50px] px-3 gap-4 flex justify-center items-center`}>
                <Text style={tw`font-bold text-white text-5xl mb-5`}>Welcome to Movi</Text>
                <Text style={tw`text-white text-xl font-medium text-center mb-5`}>The best movie streaming app of the century to make your days great!</Text>
                <Button title='Get Started' onPress={() => navigation.navigate('Options')} style={'py-5 px-28 z-100'} />
            </View>
        </SafeAreaView>
    )
}

export default Welcome