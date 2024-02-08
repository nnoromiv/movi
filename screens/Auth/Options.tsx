import React from 'react'
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import tw from '../../tailwind'
import { Button, Header, Social } from '../../components'
import Divider from 'react-native-divider'

const Options = ({ navigation, route }: any) => {

  const { email = 'Sign in with Password' } = route?.params || {};

  return (
    <SafeAreaView style={tw` bg-white h-full w-full px-3`}>
      <Header navigation={navigation} logo={false} />
      <Image style={tw`w-[308px] h-[201px] self-center mt-5`} source={require('../../assets/options.png')} />
      <Text style={tw`text-black font-bold text-6xl mb-5 text-center mt-16`}>Let&apos;s you in</Text>
      
      <Social faceBook='Continue with Facebook'  google='Continue with Google' apple='Continue with Apple' style={`flex`} iconStyle={`w-full`}/>

      <Divider orientation="center" color="#000000" borderColor="#d3d3d3"> or </Divider>
      <Button title={ email } 
        onPress={() => navigation.push('Interest')} 
        style={'h-[60px] py-3 mt-3'} />

      <View style={tw`mt-3 flex flex-row justify-center`}>
        <Text>Don&apos;t have an account ? </Text>
        <TouchableOpacity onPress={() => navigation.push('Register')}>
          <Text style={tw`text-[#007aff] font-extrabold`}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Options