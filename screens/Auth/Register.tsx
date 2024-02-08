import React from 'react'
import { Header, OnBoard } from '../../components'
import { SafeAreaView, ScrollView } from 'react-native'
import tw from '../../tailwind'

const Register = ({ navigation }: any) => {
  return (
    <SafeAreaView style={tw`bg-white h-full px-3`}>
      <ScrollView>
        <Header navigation={navigation} logo header='Register'/>
        <OnBoard navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Register