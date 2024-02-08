import React from 'react'
import { Image, SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native'
import { Header, ProfileForm } from '..'
import tw from '../../tailwind'
import { EDIT, PLACEHOLDER_IMG } from '../../constants'

export const SetUpProfile = ({navigation} : any) => {
    return (
        <SafeAreaView style={tw`flex bg-white px-3 h-full`}>
        <ScrollView>
            <Header logo={false} navigation={navigation} header='Set Up Profile' />
                <View>
                    <Image 
                    source={{ uri: PLACEHOLDER_IMG }}
                    style={tw`w-[200px] h-[200px] self-center border-[3px] border-[#d3d3d3] rounded-full`}                
                        />
                    <View style={tw`absolute bg-[#007aff] right-20 top-5 border-[3px] border-white w-[40px] h-[40px] justify-center items-center rounded-full`}>
                        <TouchableOpacity>
                        <Image source={{ uri: EDIT }} style={tw`w-[30px] h-[30px]`} />
                        </TouchableOpacity>
                    </View>
                </View>
                <ProfileForm />
            </ScrollView>
        </SafeAreaView>
    )
}
